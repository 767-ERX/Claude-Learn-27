# Format d'un module de contenu

Chaque module est un fichier `content/<id>.js` qui appelle `registerModule({...})`.
Les fichiers sont chargés par `<script>` (pas de fetch) : l'app marche hors ligne, en local, partout.
Pour ajouter un module : créer le fichier, puis l’ajouter à `content/index.js` (liste `MODULE_FILES`). Penser à incrémenter `VERSION` dans `sw.js` pour que les téléphones récupèrent la mise à jour.

```js
registerModule({
  id: "psycho",                    // identifiant court, unique, sans accents
  title: "Psychologie humaine",
  emoji: "🧠",
  color: "#8b5cf6",                // couleur d'accent du module
  tagline: "Comprendre comment les gens pensent, décident et se laissent convaincre.",
  updated: "2026-10",              // date de dernière mise à jour du contenu

  // Toutes les sources du module. Les cartes/questions y renvoient par clé.
  sources: {
    tversky1974: {
      title: "Judgment under Uncertainty: Heuristics and Biases",
      author: "A. Tversky & D. Kahneman",
      year: 1974,
      url: "https://doi.org/10.1126/science.185.4157.1124",
      kind: "primaire",            // "primaire" (étude originale, texte de loi, discours, données officielles) | "secondaire" (synthèse, presse, vulgarisation)
      publisher: "Science"         // optionnel
    }
  },

  lessons: [
    {
      id: "biais",
      title: "Les biais cognitifs",
      minutes: 3,                  // durée estimée
      takeaway: "Une phrase à retenir.",
      punchline: "Une phrase prête à placer dans un débat (optionnel).",
      cards: [
        { title: "Système 1 / Système 2", text: "Texte court (≤ 400 caractères). **gras** autorisé. Listes avec '- ' en début de ligne.", sources: ["tversky1974"] }
      ],
      quiz: [
        { q: "Question ?", choices: ["A", "B", "C", "D"], answer: 1, explain: "Pourquoi B est juste.", sources: ["tversky1974"] },
        { q: "Vrai ou faux : ...", choices: ["Vrai", "Faux"], answer: 1, explain: "...", sources: ["tversky1974"] }
      ],
      mission: { title: "Défi de la semaine", text: "Un exercice pratique à faire dans la vraie vie." }
    }
  ],

  glossary: [ { term: "Heuristique", def: "Raccourci mental…", sources: ["tversky1974"] } ],

  annexes: [ { title: "Chiffres clés", text: "- Chiffre 1 (source, date)\n- Chiffre 2", sources: ["..."] } ]
});
```

Règles éditoriales :
- Chaque carte, question et entrée de glossaire cite au moins une source ; privilégier la source **primaire** (loi sur Légifrance/EUR-Lex, étude via DOI, données INSEE/Eurostat, discours officiel).
- Les chiffres sont datés (« en 2024 », « au 1er trimestre 2026 »).
- Neutralité politique : quand un sujet est débattu, présenter les positions en présence et les preuves, sans prendre parti.
- Signaler les mythes et les études non répliquées (ex. « règle des 7-38-55 », « power posing »).
