/* Prépa 2027 — moteur de l'application (vanilla JS, aucune dépendance). */
(function () {
  "use strict";

  // ---------------------------------------------------------------- Constantes
  const STORE_KEY = "prepa27";
  const VOIX = { right: 10, wrong: 2, lesson: 30, mission: 20, studio: 15 };
  // Les rangs sont des mandats : on gagne des « voix » en apprenant.
  const RANKS = [
    [0, "Militant·e"], [150, "Conseiller·ère municipal·e"], [400, "Maire"],
    [800, "Conseiller·ère régional·e"], [1400, "Député·e"], [2200, "Sénateur·rice"],
    [3200, "Secrétaire d'État"], [4500, "Ministre"], [6200, "Premier·ère ministre"],
    [8500, "Président·e de la République"]
  ];
  // Répétition espacée (boîtes de Leitner) : intervalle en jours par boîte.
  const BOX_DAYS = [0, 1, 3, 7, 16, 35];

  // ---------------------------------------------------------------- Stockage
  const blank = () => ({
    name: "", voix: 0, streak: 0, lastDay: "", today: { day: "", voix: 0 },
    lessons: {}, q: {}, missions: {}, studio: 0, theme: "auto", goal: 50
  });
  let S = blank();
  function load() {
    try { const raw = localStorage.getItem(STORE_KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* stockage indisponible */ }
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

  // ---------------------------------------------------------------- Utilitaires
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const dayKey = (d = new Date()) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return dayKey(d); };
  const safeUrl = u => /^https?:\/\//i.test(u || "") ? u : null;
  function seeded(seed) { let h = 2166136261; for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
  function shuffle(a, rnd = Math.random) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const pick = (a, rnd = Math.random) => a[Math.floor(rnd() * a.length)];

  // Mise en forme minimaliste : **gras** et listes « - ».
  function rich(text) {
    const lines = String(text || "").split(/\n/);
    let html = "", list = false;
    const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    for (const raw of lines) {
      const line = raw.trim();
      if (/^[-•]\s+/.test(line)) { if (!list) { html += "<ul>"; list = true; } html += "<li>" + inline(line.replace(/^[-•]\s+/, "")) + "</li>"; continue; }
      if (list) { html += "</ul>"; list = false; }
      if (line) html += "<p>" + inline(line) + "</p>";
    }
    if (list) html += "</ul>";
    return '<div class="rich">' + html + "</div>";
  }

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, 2200);
  }

  // ---------------------------------------------------------------- Contenu
  const mods = () => window.MODULES || [];
  const mod = id => mods().find(m => m.id === id);
  const lessonOf = (m, lid) => (m.lessons || []).find(l => l.id === lid);
  const lkey = (m, l) => m.id + "/" + l.id;

  function allQuestions() {
    const out = [];
    for (const m of mods()) for (const l of m.lessons || []) (l.quiz || []).forEach((q, i) => out.push({ id: m.id + "/" + l.id + "/" + i, m, l, q }));
    return out;
  }
  function allCards() {
    const out = [];
    for (const m of mods()) for (const l of m.lessons || []) (l.cards || []).forEach(c => out.push({ m, l, c }));
    return out;
  }

  function sourcesHtml(m, keys) {
    if (!keys || !keys.length) return "";
    const items = keys.map(k => {
      const s = (m.sources || {})[k]; if (!s) return "";
      const url = safeUrl(s.url);
      const kind = s.kind === "primaire" ? "primaire" : "secondaire";
      const meta = [s.author, s.publisher, s.year].filter(Boolean).join(" · ");
      const inner = '<span class="src-kind ' + kind + '">' + (kind === "primaire" ? "Source primaire" : "Synthèse") + '</span><span class="src-text"><b>' + esc(s.title) + "</b>" + (meta ? '<span class="muted">' + esc(meta) + "</span>" : "") + "</span>" + (url ? '<span class="src-go" aria-hidden="true">↗</span>' : "");
      return url ? '<a class="src" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + inner + "</a>" : '<div class="src">' + inner + "</div>";
    }).join("");
    return items ? '<div class="sources">' + items + "</div>" : "";
  }

  // ---------------------------------------------------------------- Voix, rangs, série
  function touchDay() {
    const today = dayKey();
    if (S.today.day !== today) S.today = { day: today, voix: 0 };
  }
  function addVoix(n) {
    touchDay();
    const today = dayKey();
    if (S.lastDay !== today) {
      S.streak = S.lastDay === addDays(-1) ? S.streak + 1 : 1;
      S.lastDay = today;
    }
    S.voix += n; S.today.voix += n; save(); renderTopbar();
  }
  function rankOf(v) {
    let i = 0; while (i + 1 < RANKS.length && v >= RANKS[i + 1][0]) i++;
    const next = RANKS[i + 1];
    return { name: RANKS[i][1], i, next: next ? next[1] : null, from: RANKS[i][0], to: next ? next[0] : RANKS[i][0] };
  }
  function streakAlive() { return S.lastDay === dayKey() || S.lastDay === addDays(-1) ? S.streak : 0; }
  function renderTopbar() {
    touchDay();
    $("#topbar-stats").innerHTML = '<span title="Jours de campagne d\'affilée">🔥 ' + streakAlive() + '</span><span title="Voix récoltées">🗳️ ' + S.voix + "</span>";
  }

  // Répétition espacée
  function recordAnswer(qid, ok) {
    const st = S.q[qid] || { box: 0, due: "", seen: 0, wrong: 0 };
    st.seen++;
    if (ok) st.box = Math.min(st.box + 1, BOX_DAYS.length - 1); else { st.box = 0; st.wrong++; }
    st.due = addDays(ok ? BOX_DAYS[st.box] : 1);
    S.q[qid] = st;
    addVoix(ok ? VOIX.right : VOIX.wrong);
  }
  function dueQuestions() {
    const today = dayKey();
    return allQuestions().filter(x => S.q[x.id] && S.q[x.id].due <= today);
  }

  // ---------------------------------------------------------------- Lecteur (cartes + quiz)
  // Une « séance » est une file d'étapes : {type:"card"} ou {type:"q"}.
  let session = null;

  function startSession(opts) {
    session = Object.assign({ i: 0, right: 0, total: 0, gained: S.voix }, opts);
    renderSession();
  }

  function renderSession() {
    const v = $("#view");
    const s = session; if (!s) return;
    const step = s.steps[s.i];
    const color = s.color || "var(--bleu)";
    const bar = '<div class="steps" style="--c:' + color + '">' + s.steps.map((_, k) => '<i class="' + (k <= s.i ? "on" : "") + '"></i>').join("") + "</div>";
    const head = '<a class="back" href="' + s.back + '">← ' + esc(s.backLabel || "Retour") + "</a>" + bar;

    if (!step) return renderSessionEnd();

    if (step.type === "card") {
      const c = step.c;
      v.innerHTML = '<div class="player" style="--c:' + color + '">' + head +
        '<article class="lcard"><p class="eyebrow">' + esc(step.label || "Carte " + (s.i + 1)) + "</p><h2>" + esc(c.title) + "</h2>" + rich(c.text) + sourcesHtml(step.m, c.sources) + "</article>" +
        '<button class="btn btn-primary btn-block sticky-next" id="next">Suivant →</button></div>';
      $("#next").onclick = () => { s.i++; renderSession(); scrollTop(); };
      return;
    }

    // Question
    const { q, m, id } = step;
    const order = shuffle(q.choices.map((t, k) => ({ t, k })));
    const isVF = q.choices.length === 2 && /^vrai$/i.test(q.choices[0]) && /^faux$/i.test(q.choices[1]);
    const shown = isVF ? q.choices.map((t, k) => ({ t, k })) : order;
    v.innerHTML = '<div class="player" style="--c:' + color + '">' + head +
      '<article class="lcard"><p class="eyebrow">' + esc(step.label || "Question") + "</p><h2>" + esc(q.q) + '</h2><div class="choices">' +
      shown.map(o => '<button class="choice" data-k="' + o.k + '">' + esc(o.t) + "</button>").join("") +
      '</div><div id="verdict"></div></article><div id="after"></div></div>';
    v.querySelectorAll(".choice").forEach(b => b.onclick = () => {
      const k = +b.dataset.k, ok = k === q.answer;
      v.querySelectorAll(".choice").forEach(x => { x.disabled = true; if (+x.dataset.k === q.answer) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      s.total++; if (ok) s.right++;
      recordAnswer(id, ok);
      $("#verdict").innerHTML = '<div class="verdict ' + (ok ? "ok" : "ko") + '"><h3>' + (ok ? "Juste ! +" + VOIX.right + " voix" : "Raté, +" + VOIX.wrong + " voix pour l'effort") + "</h3>" + rich(q.explain) + sourcesHtml(m, q.sources) + "</div>";
      $("#after").innerHTML = '<button class="btn btn-primary btn-block sticky-next" id="next">' + (s.i + 1 < s.steps.length ? "Continuer →" : "Terminer") + "</button>";
      $("#next").onclick = () => { s.i++; renderSession(); scrollTop(); };
      $("#next").focus({ preventScroll: true });
    });
  }

  function renderSessionEnd() {
    const s = session, v = $("#view");
    if (s.onEnd) s.onEnd(s);
    const gained = S.voix - s.gained;
    let extra = "";
    if (s.lesson) {
      const l = s.lesson, m = s.m;
      extra += (l.takeaway ? '<section class="card section"><p class="eyebrow">À retenir</p><p class="quote">' + esc(l.takeaway) + "</p></section>" : "") +
        (l.punchline ? '<section class="card section"><p class="eyebrow">À placer en débat</p><p>« ' + esc(l.punchline) + ' »</p><button class="btn" id="copy-punch">Copier la phrase</button></section>' : "") +
        (l.mission ? '<section class="card section"><p class="eyebrow">Mission dans la vraie vie</p><h3>' + esc(l.mission.title || "Défi") + "</h3>" + rich(l.mission.text) +
          (S.missions[lkey(m, l)] ? '<span class="pill">✓ Mission accomplie</span>' : '<button class="btn" id="mission-done">J\'ai fait la mission (+' + VOIX.mission + " voix)</button>") + "</section>" : "");
    }
    v.innerHTML = '<div class="player"><section class="lcard" style="text-align:center;align-items:center"><p class="eyebrow">' + esc(s.title || "Séance terminée") + '</p><p class="gain">+' + gained + ' voix</p><p class="muted">' +
      (s.total ? s.right + " bonne" + (s.right > 1 ? "s" : "") + " réponse" + (s.right > 1 ? "s" : "") + " sur " + s.total : "Séance terminée") + "</p></section>" + extra +
      '<div class="btn-row"><a class="btn btn-primary" href="' + (s.doneHref || s.back) + '">' + esc(s.doneLabel || "Retour") + '</a><a class="btn" href="#/">Accueil</a></div></div>';
    const p = $("#copy-punch"); if (p) p.onclick = () => copyText(s.lesson.punchline);
    const md = $("#mission-done"); if (md) md.onclick = () => { S.missions[lkey(s.m, s.lesson)] = dayKey(); addVoix(VOIX.mission); toast("Mission validée, +" + VOIX.mission + " voix"); md.outerHTML = '<span class="pill">✓ Mission accomplie</span>'; };
    session = null;
  }

  function copyText(t) {
    const done = () => toast("Copié");
    try { navigator.clipboard.writeText(t).then(done, () => fallbackCopy(t)); } catch (e) { fallbackCopy(t); }
  }
  function fallbackCopy(t) {
    const ta = document.createElement("textarea"); ta.value = t; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand("copy"); } catch (e) { /* ignore */ }
    ta.remove(); toast(ok ? "Copié" : "Copie impossible : sélectionne le texte à la main");
  }
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  // ---------------------------------------------------------------- Vues
  function viewHome() {
    touchDay();
    const r = rankOf(S.voix);
    const pct = r.next ? Math.round(100 * (S.voix - r.from) / (r.to - r.from)) : 100;
    const due = dueQuestions().length;
    const rnd = seeded(dayKey());
    const cards = allCards();
    const cardOfDay = cards.length ? cards[Math.floor(rnd() * cards.length)] : null;
    const lessonsLeft = [];
    for (const m of mods()) for (const l of m.lessons || []) if (!S.lessons[lkey(m, l)]) lessonsLeft.push({ m, l });
    const next = lessonsLeft[0];
    const goalPct = Math.min(100, Math.round(100 * S.today.voix / S.goal));

    let html = "";
    if (!S.name) {
      html += '<section class="card section"><p class="eyebrow">Première visite</p><h2>Comment tu t\'appelles ?</h2><form id="name-form" class="btn-row"><div class="field" style="flex:2 1 160px"><label for="name-in" class="small muted">Ton prénom (reste sur ton téléphone)</label><input id="name-in" autocomplete="given-name" placeholder="James-Paolo" required></div><button class="btn btn-primary" style="align-self:flex-end">C\'est parti</button></form></section>';
    }
    html += '<section class="hello"><p class="eyebrow">' + esc(new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })) + "</p><h1>" + (S.name ? "Salut " + esc(S.name) + "." : "Bienvenue en campagne.") + '</h1><p class="muted">Objectif du jour : ' + S.goal + " voix. " + (S.today.voix >= S.goal ? "Atteint, bravo." : "Encore " + (S.goal - S.today.voix) + ".") + "</p>" +
      '<div class="progress" aria-label="Objectif du jour"><i style="width:' + goalPct + '%;--c:var(--or)"></i></div></section>';

    html += '<a class="flemme" href="#/flemme"><p class="eyebrow" style="color:inherit;opacity:.8">Mode flemme</p><h2>2 minutes, 5 questions, zéro effort.</h2><p>' +
      (due ? due + " question" + (due > 1 ? "s" : "") + " à revoir aujourd'hui, mélangées à des nouveautés." : "Un mélange de tous les dossiers. Tu peux le faire depuis ton canapé.") + '</p><span class="go">Lancer →</span></a>';

    html += '<section class="stats"><div class="stat"><b>' + S.voix + '</b><span>voix</span></div><div class="stat"><b>' + streakAlive() + '</b><span>jours d\'affilée</span></div><div class="stat"><b>' + Object.keys(S.lessons).length + "</b><span>leçons finies</span></div></section>";

    html += '<section class="card rank"><div class="rank-line"><span class="eyebrow">Ton mandat</span><span class="mono small">' + (r.next ? S.voix + " / " + r.to : "max") + '</span></div><h2>' + esc(r.name) + '</h2><div class="progress"><i style="width:' + pct + '%"></i></div><p class="small muted">' + (r.next ? "Prochain : " + esc(r.next) + "." : "Tu as atteint le sommet. Reste humble.") + "</p></section>";

    if (next) {
      html += '<section class="section"><div class="section-head"><h2>Continuer</h2><span class="small muted">' + esc(next.m.title) + '</span></div><a class="lesson-item" style="--c:' + esc(next.m.color) + '" href="#/l/' + next.m.id + "/" + next.l.id + '"><span class="lesson-num">' + esc(next.m.emoji || "•") + '</span><span class="lesson-meta"><b>' + esc(next.l.title) + '</b><span class="small muted">' + (next.l.minutes || 3) + " min · " + (next.l.cards || []).length + " cartes · " + (next.l.quiz || []).length + ' questions</span></span><span class="lesson-go">→</span></a></section>';
    }

    if (cardOfDay) {
      html += '<section class="section daily"><div class="section-head"><h2>La carte du jour</h2><a class="small" href="#/m/' + cardOfDay.m.id + '">' + esc(cardOfDay.m.title) + '</a></div><article class="lcard" style="animation:none"><h3>' + esc(cardOfDay.c.title) + "</h3>" + rich(cardOfDay.c.text) + sourcesHtml(cardOfDay.m, cardOfDay.c.sources) + "</article></section>";
    }

    html += '<section class="section"><div class="section-head"><h2>Les dossiers</h2><a class="small" href="#/modules">Tout voir</a></div>' + modGrid() + "</section>";

    $("#view").innerHTML = html;
    const f = $("#name-form");
    if (f) f.onsubmit = e => { e.preventDefault(); S.name = $("#name-in").value.trim().slice(0, 40); save(); route(); };
  }

  function modProgress(m) {
    const ls = m.lessons || [];
    const done = ls.filter(l => S.lessons[lkey(m, l)]).length;
    return { done, total: ls.length, pct: ls.length ? Math.round(100 * done / ls.length) : 0 };
  }
  function modGrid() {
    if (!mods().length) return '<p class="muted">Aucun dossier chargé.</p>';
    return '<div class="mod-grid">' + mods().map(m => {
      const p = modProgress(m);
      return '<a class="mod-tile" style="--c:' + esc(m.color) + '" href="#/m/' + m.id + '"><span class="mod-emoji" aria-hidden="true">' + esc(m.emoji) + "</span><h3>" + esc(m.title) + '</h3><span class="small muted">' + p.done + "/" + p.total + ' leçons</span><div class="progress"><i style="width:' + p.pct + '%"></i></div></a>';
    }).join("") + "</div>";
  }

  function viewModules() {
    $("#view").innerHTML = '<section class="hello"><p class="eyebrow">' + mods().length + ' dossiers</p><h1>Les dossiers du candidat</h1><p class="muted">Chaque leçon : 5 cartes, 5 questions, une mission. Chaque info renvoie à sa source.</p></section>' + modGrid();
  }

  function viewModule(id) {
    const m = mod(id); if (!m) return notFound();
    const p = modProgress(m);
    const nSrc = Object.keys(m.sources || {}).length;
    const nPrim = Object.values(m.sources || {}).filter(s => s.kind === "primaire").length;
    let html = '<a class="back" href="#/modules">← Dossiers</a><section class="mod-hero" style="--c:' + esc(m.color) + '"><span class="mod-emoji" aria-hidden="true" style="font-size:2.2rem">' + esc(m.emoji) + "</span><h1>" + esc(m.title) + '</h1><p class="muted">' + esc(m.tagline || "") + '</p><div class="chip-row"><span class="pill">' + p.done + "/" + p.total + ' leçons</span><span class="pill">' + nSrc + " sources dont " + nPrim + " primaires</span>" + (m.updated ? '<span class="pill">MàJ ' + esc(m.updated) + "</span>" : "") + "</div></section>";
    html += '<section class="section"><h2>Leçons</h2><div class="lesson-list">' + (m.lessons || []).map((l, k) => {
      const done = S.lessons[lkey(m, l)];
      return '<a class="lesson-item ' + (done ? "done" : "") + '" style="--c:' + esc(m.color) + '" href="#/l/' + m.id + "/" + l.id + '"><span class="lesson-num">' + (done ? "✓" : k + 1) + '</span><span class="lesson-meta"><b>' + esc(l.title) + '</b><span class="small muted">' + (l.minutes || 3) + " min" + (done ? " · meilleur score " + done.best + "/" + (l.quiz || []).length : "") + '</span></span><span class="lesson-go">→</span></a>';
    }).join("") + "</div>";
    const qs = allQuestions().filter(x => x.m.id === m.id);
    if (qs.length) html += '<a class="btn btn-block" href="#/quiz/' + m.id + '">Quiz express du dossier (10 questions)</a>';
    html += "</section>";
    if ((m.annexes || []).length) html += '<section class="section"><h2>Annexes</h2>' + m.annexes.map(a => '<details class="card"><summary><b>' + esc(a.title) + "</b></summary>" + rich(a.text) + sourcesHtml(m, a.sources) + "</details>").join("") + "</section>";
    if ((m.glossary || []).length) html += '<section class="section"><div class="section-head"><h2>Lexique</h2><span class="small muted">' + m.glossary.length + ' termes</span></div><div class="gloss">' + glossItems(m.glossary.map(g => ({ g, m }))) + "</div></section>";
    $("#view").innerHTML = html;
  }

  function glossItems(list) {
    return list.map(({ g, m }) => '<details><summary><span>' + esc(g.term) + '</span><span class="tag">' + esc(m.emoji + " " + m.id) + "</span></summary>" + rich(g.def) + sourcesHtml(m, g.sources) + "</details>").join("");
  }

  function viewLesson(mid, lid) {
    const m = mod(mid); if (!m) return notFound();
    const l = lessonOf(m, lid); if (!l) return notFound();
    const steps = (l.cards || []).map((c, k) => ({ type: "card", c, m, label: "Carte " + (k + 1) + "/" + l.cards.length }))
      .concat((l.quiz || []).map((q, k) => ({ type: "q", q, m, id: m.id + "/" + l.id + "/" + k, label: "Question " + (k + 1) + "/" + l.quiz.length })));
    startSession({
      steps, color: m.color, back: "#/m/" + m.id, backLabel: m.title, m, lesson: l, title: l.title, doneLabel: "Retour au dossier",
      onEnd: s => {
        const prev = S.lessons[lkey(m, l)];
        if (!prev) addVoix(VOIX.lesson);
        S.lessons[lkey(m, l)] = { day: dayKey(), best: Math.max(prev ? prev.best : 0, s.right) };
        save();
      }
    });
  }

  function quizSteps(pool, n) {
    return pool.slice(0, n).map((x, k) => ({ type: "q", q: x.q, m: x.m, id: x.id, label: x.m.emoji + " " + x.m.title + " · " + (k + 1) + "/" + Math.min(n, pool.length) }));
  }

  function viewFlemme() {
    const due = shuffle(dueQuestions());
    const fresh = shuffle(allQuestions().filter(x => !S.q[x.id]));
    const rest = shuffle(allQuestions().filter(x => S.q[x.id] && !due.includes(x)));
    const pool = due.slice(0, 3).concat(fresh, rest);
    const uniq = []; const seen = new Set();
    for (const x of pool) if (!seen.has(x.id)) { seen.add(x.id); uniq.push(x); }
    if (!uniq.length) return emptyContent();
    const steps = quizSteps(uniq, 5);
    const cards = allCards();
    if (cards.length) { const c = pick(cards); steps.unshift({ type: "card", c: c.c, m: c.m, label: c.m.emoji + " Le savais-tu ?" }); }
    startSession({ steps, back: "#/", backLabel: "Accueil", title: "Mode flemme terminé", doneLabel: "Encore 2 minutes", doneHref: "#/flemme-again", color: "var(--bleu)" });
  }

  function viewQuizModule(mid) {
    const m = mod(mid); if (!m) return notFound();
    const pool = shuffle(allQuestions().filter(x => x.m.id === m.id));
    if (!pool.length) return emptyContent();
    startSession({ steps: quizSteps(pool, 10), color: m.color, back: "#/m/" + m.id, backLabel: m.title, title: "Quiz " + m.title, doneLabel: "Retour au dossier" });
  }

  function viewRevisions() {
    const due = dueQuestions();
    const wrong = allQuestions().filter(x => S.q[x.id] && S.q[x.id].wrong > 0).sort((a, b) => S.q[b.id].wrong - S.q[a.id].wrong);
    const seen = Object.keys(S.q).length, total = allQuestions().length;
    const mastered = Object.values(S.q).filter(x => x.box >= 3).length;
    let html = '<section class="hello"><p class="eyebrow">Répétition espacée</p><h1>Révisions</h1><p class="muted">Une question ratée revient demain. Une question réussie revient de plus en plus tard (1, 3, 7, 16 puis 35 jours). C\'est la méthode la plus efficace pour retenir sans forcer.</p></section>';
    html += '<section class="stats"><div class="stat"><b>' + due.length + '</b><span>à revoir</span></div><div class="stat"><b>' + seen + "/" + total + '</b><span>vues</span></div><div class="stat"><b>' + mastered + "</b><span>maîtrisées</span></div></section>";
    html += due.length ? '<button class="btn btn-primary btn-block" id="rev-go">Réviser ' + Math.min(10, due.length) + " question" + (due.length > 1 ? "s" : "") + "</button>" : '<section class="card"><p>Rien à revoir aujourd\'hui. Lance le <a href="#/flemme">mode flemme</a> pour découvrir de nouvelles questions.</p></section>';
    if (wrong.length) html += '<section class="section"><h2>Tes pièges</h2><p class="small muted">Les questions que tu as le plus ratées.</p><div class="gloss">' + wrong.slice(0, 15).map(x => '<details><summary><span>' + esc(x.q.q) + '</span><span class="tag">×' + S.q[x.id].wrong + "</span></summary><p><b>Réponse : " + esc(x.q.choices[x.q.answer]) + "</b></p>" + rich(x.q.explain) + sourcesHtml(x.m, x.q.sources) + "</details>").join("") + "</div></section>";
    $("#view").innerHTML = html;
    const b = $("#rev-go");
    if (b) b.onclick = () => startSession({ steps: quizSteps(shuffle(due), 10), back: "#/revisions", backLabel: "Révisions", title: "Révision terminée", doneLabel: "Retour aux révisions" });
  }

  // ---------------------------------------------------------------- Studio d'éloquence
  let timerState = null, recorder = null, chunks = [];
  function stopTimer() { if (timerState) { clearInterval(timerState.id); timerState = null; } }

  function viewStudio() {
    const ST = window.STUDIO || { sujets: [], motions: [], virelangues: [] };
    const canRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    $("#view").innerHTML =
      '<section class="hello"><p class="eyebrow">Studio d\'éloquence</p><h1>Parle. Écoute-toi. Recommence.</h1><p class="muted">L\'éloquence se travaille comme un instrument : un peu, souvent. 1 minute par jour suffit pour progresser.</p></section>' +
      '<section class="card tool"><div class="section-head"><h2>Improvisation</h2><span class="pill">+' + VOIX.studio + ' voix</span></div>' +
      '<div class="seg" role="group" aria-label="Type d\'exercice"><button data-mode="sujet" class="on">Sujet surprise</button><button data-mode="debat">Débat pour/contre</button></div>' +
      '<div class="prompt-box" id="prompt"></div><button class="btn" id="reroll">Autre sujet ↻</button>' +
      '<div class="seg" role="group" aria-label="Durée"><button data-d="30">30 s</button><button data-d="60" class="on">1 min</button><button data-d="120">2 min</button></div>' +
      '<p class="timer mono" id="timer" aria-live="polite">1:00</p><p class="small muted" id="timer-hint" style="text-align:center">15 secondes de préparation, puis tu parles.</p>' +
      '<div class="btn-row"><button class="btn btn-primary" id="go">Lancer</button><button class="btn" id="stop" hidden>Arrêter</button></div>' +
      (canRec ? '<label class="small" style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="rec"> M\'enregistrer pour me réécouter (rien ne quitte ton téléphone)</label><div id="playback"></div>' : '<p class="small muted">Astuce : enregistre-toi avec l\'app dictaphone de ton téléphone et réécoute-toi.</p>') +
      "</section>" +
      '<section class="card tool"><h2>Compteur de « euh »</h2><p class="small muted">Donne ton téléphone à un ami pendant que tu parles : il tape à chaque tic de langage.</p><p class="counter" id="euh">0</p><div class="btn-row"><button class="btn btn-primary" id="euh-plus">+1 « euh »</button><button class="btn" id="euh-reset">Remettre à zéro</button></div></section>' +
      '<section class="card tool"><h2>Échauffement : virelangue</h2><div class="prompt-box" id="vire"></div><p class="small muted">Dis-le 3 fois : lentement, normalement, puis vite, en articulant à l\'excès.</p><button class="btn" id="vire-next">Un autre ↻</button></section>' +
      '<section class="card tool"><h2>Pour aller plus loin</h2><p>Le dossier <a href="#/m/eloquence">Art oratoire, éloquence & débat</a> contient la théorie (Aristote, Cicéron, sophismes, grands discours) et ses sources.</p></section>';

    let mode = "sujet", dur = 60, euh = 0;
    const setPrompt = () => {
      const list = mode === "sujet" ? ST.sujets : ST.motions;
      $("#prompt").textContent = list.length ? (mode === "debat" ? "Motion : " : "") + pick(list) : "Ajoute des sujets dans js/studio-data.js";
      $("#timer-hint").textContent = mode === "debat" ? "15 s de préparation, défends le POUR, puis le CONTRE (même durée)." : "15 secondes de préparation, puis tu parles.";
    };
    const fmt = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    document.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => { document.querySelectorAll("[data-mode]").forEach(x => x.classList.toggle("on", x === b)); mode = b.dataset.mode; setPrompt(); });
    document.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { document.querySelectorAll("[data-d]").forEach(x => x.classList.toggle("on", x === b)); dur = +b.dataset.d; if (!timerState) $("#timer").textContent = fmt(dur); });
    $("#reroll").onclick = setPrompt;
    setPrompt();

    const phases = () => mode === "debat" ? [["Prépare-toi", 15, "prep"], ["POUR", dur, "live"], ["Prépare le contre", 10, "prep"], ["CONTRE", dur, "live"]] : [["Prépare-toi", 15, "prep"], ["À toi !", dur, "live"]];
    $("#go").onclick = async () => {
      stopTimer();
      const recBox = $("#rec");
      if (recBox && recBox.checked) await startRec();
      const ph = phases(); let p = 0, left = ph[0][1];
      const t = $("#timer"), hint = $("#timer-hint");
      const paint = () => { t.textContent = fmt(left); t.className = "timer mono " + ph[p][2]; hint.textContent = ph[p][0]; };
      paint();
      $("#go").hidden = true; $("#stop").hidden = false;
      timerState = { id: setInterval(() => {
        left--;
        if (left < 0) {
          p++;
          if (p >= ph.length) { finish(true); return; }
          left = ph[p][1]; if (navigator.vibrate) navigator.vibrate(120);
        }
        paint();
      }, 1000) };
    };
    const finish = (complete) => {
      stopTimer(); stopRec();
      $("#go").hidden = false; $("#stop").hidden = true;
      $("#timer").className = "timer mono"; $("#timer").textContent = fmt(dur);
      $("#timer-hint").textContent = complete ? "Bravo. Qu'aurais-tu dit autrement ?" : "Arrêté.";
      if (complete) { S.studio++; addVoix(VOIX.studio); toast("+" + VOIX.studio + " voix pour ta prise de parole"); }
    };
    $("#stop").onclick = () => finish(false);

    $("#euh-plus").onclick = () => { euh++; $("#euh").textContent = euh; if (navigator.vibrate) navigator.vibrate(30); };
    $("#euh-reset").onclick = () => { euh = 0; $("#euh").textContent = 0; };
    const setVire = () => { $("#vire").textContent = ST.virelangues.length ? pick(ST.virelangues) : ""; };
    $("#vire-next").onclick = setVire; setVire();
  }

  async function startRec() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunks = []; recorder = new MediaRecorder(stream);
      recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
      recorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
        const pb = $("#playback"); if (pb) pb.innerHTML = '<p class="small muted">Ta prise :</p><audio controls src="' + URL.createObjectURL(blob) + '"></audio>';
      };
      recorder.start();
    } catch (e) { recorder = null; toast("Micro refusé : l'exercice continue sans enregistrement"); }
  }
  function stopRec() { if (recorder && recorder.state !== "inactive") recorder.stop(); recorder = null; }

  // ---------------------------------------------------------------- Annexes
  let annexTab = "lexique", annexQuery = "";
  function viewAnnexes() {
    const tabs = [["lexique", "Lexique"], ["sources", "Bibliographie"], ["fiches", "Fiches"], ["guide", "Mode d'emploi"]];
    let body = "";
    const q = annexQuery.toLowerCase();
    if (annexTab === "lexique") {
      const list = [];
      for (const m of mods()) for (const g of m.glossary || []) list.push({ g, m });
      list.sort((a, b) => a.g.term.localeCompare(b.g.term, "fr"));
      const f = list.filter(x => !q || (x.g.term + " " + x.g.def).toLowerCase().includes(q));
      body = '<input class="search" id="aq" type="search" placeholder="Chercher un terme (ex. 49.3, BCE, ethos…)" value="' + esc(annexQuery) + '"><p class="small muted">' + f.length + ' terme(s)</p><div class="gloss">' + glossItems(f) + "</div>";
    } else if (annexTab === "sources") {
      const list = [];
      for (const m of mods()) for (const [k, s] of Object.entries(m.sources || {})) list.push({ k, s, m });
      const f = list.filter(x => !q || [x.s.title, x.s.author, x.s.publisher, x.s.year].join(" ").toLowerCase().includes(q));
      body = '<input class="search" id="aq" type="search" placeholder="Chercher une source, un auteur, une année…" value="' + esc(annexQuery) + '"><p class="small muted">' + f.length + " source(s), dont " + f.filter(x => x.s.kind === "primaire").length + " primaires. Touche une source pour l'ouvrir.</p>" +
        mods().map(m => { const fm = f.filter(x => x.m === m); return fm.length ? '<section class="section"><h3>' + esc(m.emoji + " " + m.title) + "</h3>" + sourcesHtml(m, fm.map(x => x.k)) + "</section>" : ""; }).join("");
    } else if (annexTab === "fiches") {
      body = mods().map(m => (m.annexes || []).length ? '<section class="section"><h3>' + esc(m.emoji + " " + m.title) + "</h3>" + m.annexes.map(a => '<details class="card"><summary><b>' + esc(a.title) + "</b></summary>" + rich(a.text) + sourcesHtml(m, a.sources) + "</details>").join("") + "</section>" : "").join("") || '<p class="muted">Aucune fiche pour l\'instant.</p>';
    } else {
      body = '<section class="card section"><h3>Installer l\'appli sur ton téléphone</h3>' + rich("- **iPhone (Safari)** : bouton Partager, puis « Sur l'écran d'accueil ».\n- **Android (Chrome)** : menu ⋮, puis « Installer l'application » ou « Ajouter à l'écran d'accueil ».\n- Une fois installée, elle marche hors ligne.") + "</section>" +
        '<section class="card section"><h3>Comment ça marche</h3>' + rich("- Chaque **leçon** : 5 cartes courtes, 5 questions, une phrase à retenir, une phrase à placer en débat, une mission dans la vraie vie.\n- Le **mode flemme** mélange 5 questions de tous les dossiers, en priorité celles à revoir.\n- Les **révisions** suivent la répétition espacée : ce que tu rates revient vite, ce que tu sais revient de plus en plus tard.\n- Tu gagnes des **voix** et tu montes en mandat, de militant·e à président·e.") + "</section>" +
        '<section class="card section"><h3>Sources</h3>' + rich("- **Source primaire** (en vert) : le texte de loi, l'étude scientifique originale, les données officielles, le discours lui-même.\n- **Synthèse** (en gris) : article, livre de vulgarisation, page explicative.\n- Les chiffres sont datés. Vérifie toujours la date avant de citer un chiffre en débat.") + "</section>" +
        '<section class="card section"><h3>Ajouter du contenu</h3>' + rich("Chaque dossier est un fichier dans `content/`. Le format est décrit dans `content/FORMAT.md`. Envoie tes documents à Claude : il les transforme en leçons sourcées.") + "</section>";
    }
    $("#view").innerHTML = '<section class="hello"><p class="eyebrow">Annexes</p><h1>La boîte à outils</h1></section><div class="tabs" role="tablist">' + tabs.map(([k, t]) => '<button role="tab" data-t="' + k + '" class="' + (annexTab === k ? "on" : "") + '" aria-selected="' + (annexTab === k) + '">' + t + "</button>").join("") + "</div>" + body;
    document.querySelectorAll("[data-t]").forEach(b => b.onclick = () => { annexTab = b.dataset.t; annexQuery = ""; viewAnnexes(); });
    const aq = $("#aq");
    if (aq) aq.oninput = () => { annexQuery = aq.value; const pos = aq.selectionStart; viewAnnexes(); const n = $("#aq"); n.focus(); n.setSelectionRange(pos, pos); };
  }

  // ---------------------------------------------------------------- Profil
  function viewProfil() {
    const r = rankOf(S.voix);
    const url = location.href.split("#")[0];
    const shareText = (S.name || "Je") + (S.name ? " a " : " suis à ") + S.voix + " voix sur Prépa 2027 (rang : " + r.name + ", série de " + streakAlive() + " jours). Viens me battre : " + url;
    $("#view").innerHTML =
      '<section class="hello"><p class="eyebrow">Profil</p><h1>' + esc(S.name || "Candidat·e anonyme") + '</h1><p class="muted">' + esc(r.name) + " · " + S.voix + " voix · " + S.studio + " prises de parole au studio</p></section>" +
      '<section class="card section"><h3>Défier mes amis</h3><p class="small muted">Envoie ton score à tes amis. Chacun installe l\'appli et garde sa progression sur son téléphone.</p><p class="small" id="share-text" style="user-select:all">' + esc(shareText) + '</p><div class="btn-row"><button class="btn btn-primary" id="share">Partager mon score</button><button class="btn" id="copy">Copier</button></div></section>' +
      '<section class="card section"><h3>Réglages</h3><form id="settings" class="section"><div class="field"><label for="set-name">Prénom</label><input id="set-name" value="' + esc(S.name) + '"></div>' +
      '<div class="field"><label for="set-goal">Objectif quotidien</label><select id="set-goal" class="search">' + [[20, "20 voix · ultra-flemme"], [50, "50 voix · tranquille"], [100, "100 voix · motivé·e"], [200, "200 voix · en campagne"]].map(([v, t]) => '<option value="' + v + '"' + (S.goal === v ? " selected" : "") + ">" + t + "</option>").join("") + "</select></div>" +
      '<div class="field"><label for="set-theme">Thème</label><select id="set-theme" class="search">' + [["auto", "Comme le téléphone"], ["light", "Clair"], ["dark", "Sombre"]].map(([v, t]) => '<option value="' + v + '"' + (S.theme === v ? " selected" : "") + ">" + t + "</option>").join("") + "</select></div>" +
      '<button class="btn btn-primary">Enregistrer</button></form></section>' +
      '<section class="card section"><h3>Sauvegarder ma progression</h3><p class="small muted">Ta progression reste sur ce téléphone. Pour changer d\'appareil, copie ce code et colle-le sur le nouveau.</p><div class="btn-row"><button class="btn" id="export">Copier mon code</button></div><div class="field"><label for="import-in">Coller un code de sauvegarde</label><textarea id="import-in" placeholder="{&quot;name&quot;:…}"></textarea></div><button class="btn" id="import">Restaurer</button></section>' +
      '<section class="card section"><h3>Tout effacer</h3><div id="reset-zone"><button class="btn btn-danger" id="reset">Remettre ma progression à zéro</button></div></section>';

    $("#share").onclick = async () => {
      if (navigator.share) { try { await navigator.share({ title: "Prépa 2027", text: shareText }); return; } catch (e) { if (e && e.name === "AbortError") return; } }
      copyText(shareText);
    };
    $("#copy").onclick = () => copyText(shareText);
    $("#settings").onsubmit = e => {
      e.preventDefault();
      S.name = $("#set-name").value.trim().slice(0, 40); S.goal = +$("#set-goal").value; S.theme = $("#set-theme").value;
      save(); applyTheme(); renderTopbar(); toast("Enregistré"); viewProfil();
    };
    $("#export").onclick = () => copyText(JSON.stringify(S));
    $("#import").onclick = () => {
      try { const data = JSON.parse($("#import-in").value); if (typeof data !== "object" || data === null || typeof data.voix !== "number") throw 0; S = Object.assign(blank(), data); save(); applyTheme(); renderTopbar(); toast("Progression restaurée"); viewProfil(); }
      catch (e) { toast("Code invalide : colle le code complet copié depuis l'autre téléphone"); }
    };
    $("#reset").onclick = () => {
      $("#reset-zone").innerHTML = '<div class="confirm"><p><b>Sûr ?</b> Tes voix, ta série et tes révisions seront effacées.</p><div class="btn-row"><button class="btn btn-danger" id="reset-yes">Oui, tout effacer</button><button class="btn" id="reset-no">Annuler</button></div></div>';
      $("#reset-yes").onclick = () => { const keep = { name: S.name, theme: S.theme, goal: S.goal }; S = Object.assign(blank(), keep); save(); renderTopbar(); toast("Progression effacée"); viewProfil(); };
      $("#reset-no").onclick = viewProfil;
    };
  }

  function applyTheme() {
    if (S.theme === "light" || S.theme === "dark") document.documentElement.setAttribute("data-theme", S.theme);
    else document.documentElement.removeAttribute("data-theme");
  }

  function notFound() { $("#view").innerHTML = '<section class="card section"><h2>Page introuvable</h2><p>Ce contenu n\'existe pas ou plus.</p><a class="btn btn-primary" href="#/">Accueil</a></section>'; }
  function emptyContent() { $("#view").innerHTML = '<section class="card section"><h2>Pas encore de questions</h2><p>Les dossiers n\'ont pas encore de quiz.</p><a class="btn" href="#/">Accueil</a></section>'; }

  // ---------------------------------------------------------------- Routeur
  function route() {
    stopTimer(); stopRec();
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    const tab = { "": "home", modules: "modules", m: "modules", l: "modules", quiz: "modules", studio: "studio", revisions: "revisions", annexes: "annexes" }[parts[0] || ""];
    document.querySelectorAll(".tabbar a").forEach(a => a.classList.toggle("active", a.dataset.tab === tab));
    switch (parts[0] || "") {
      case "": viewHome(); break;
      case "modules": viewModules(); break;
      case "m": viewModule(parts[1]); break;
      case "l": viewLesson(parts[1], parts[2]); break;
      case "quiz": viewQuizModule(parts[1]); break;
      case "flemme": viewFlemme(); break;
      case "flemme-again": location.replace("#/flemme"); return;
      case "revisions": viewRevisions(); break;
      case "studio": viewStudio(); break;
      case "annexes": viewAnnexes(); break;
      case "profil": viewProfil(); break;
      default: notFound();
    }
    if (!session) scrollTop();
    renderTopbar();
  }

  // ---------------------------------------------------------------- Démarrage
  function loadScript(src) {
    return new Promise(res => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = () => { console.warn("Module introuvable :", src); res(); }; document.head.appendChild(s); });
  }
  async function boot() {
    load(); applyTheme();
    if (!window.BUNDLED) for (const f of self.MODULE_FILES || []) await loadScript(f);
    // Ordre d'affichage = ordre de MODULE_FILES
    const order = (self.MODULE_FILES || []).map(f => f.replace(/^.*\/|\.js$/g, ""));
    window.MODULES.sort((a, b) => (order.indexOf(a.id) + 1 || 99) - (order.indexOf(b.id) + 1 || 99));
    window.addEventListener("hashchange", route);
    route();
    if ("serviceWorker" in navigator && !window.BUNDLED && location.protocol === "https:") {
      navigator.serviceWorker.register("sw.js").catch(() => { /* hors ligne indisponible */ });
    }
  }
  boot();
})();
