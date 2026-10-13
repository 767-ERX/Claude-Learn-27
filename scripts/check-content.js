// Vérifie la cohérence des modules : sources référencées, index des réponses, champs requis.
// Usage : node scripts/check-content.js
const path = require("path");
const root = path.join(__dirname, "..");
global.self = global;
require(path.join(root, "content/index.js"));
const mods = [];
global.registerModule = m => mods.push(m);
let errors = 0;
const err = (m, msg) => { errors++; console.error("✗ [" + m + "] " + msg); };
for (const f of self.MODULE_FILES) {
  try { require(path.join(root, f)); } catch (e) { err(f, "fichier illisible : " + e.message); }
}
let totals = { lessons: 0, cards: 0, quiz: 0, sources: 0, prim: 0 };
for (const m of mods) {
  const src = m.sources || {};
  const ref = (where, keys) => {
    if (!keys || !keys.length) return err(m.id, where + " : aucune source");
    for (const k of keys) if (!src[k]) err(m.id, where + " : source inconnue « " + k + " »");
  };
  for (const [k, s] of Object.entries(src)) {
    if (!/^https?:\/\//.test(s.url || "")) err(m.id, "source " + k + " : URL manquante ou invalide");
    if (!["primaire", "secondaire"].includes(s.kind)) err(m.id, "source " + k + " : kind doit être primaire|secondaire");
    totals.sources++; if (s.kind === "primaire") totals.prim++;
  }
  for (const l of m.lessons || []) {
    totals.lessons++;
    (l.cards || []).forEach((c, i) => { totals.cards++; ref(l.id + " carte " + (i + 1), c.sources); });
    (l.quiz || []).forEach((q, i) => {
      totals.quiz++;
      if (!Array.isArray(q.choices) || q.choices.length < 2) err(m.id, l.id + " Q" + (i + 1) + " : choix manquants");
      else if (!(q.answer >= 0 && q.answer < q.choices.length)) err(m.id, l.id + " Q" + (i + 1) + " : answer hors limites");
      ref(l.id + " Q" + (i + 1), q.sources);
    });
  }
  (m.glossary || []).forEach(g => ref("lexique " + g.term, g.sources));
  console.log("✓ " + m.id.padEnd(13) + (m.lessons || []).length + " leçons, " + Object.keys(src).length + " sources");
}
console.log("\nTotal : " + mods.length + " modules, " + totals.lessons + " leçons, " + totals.cards + " cartes, " + totals.quiz + " questions, " + totals.sources + " sources (" + totals.prim + " primaires)");
if (errors) { console.error("\n" + errors + " erreur(s)"); process.exit(1); }
