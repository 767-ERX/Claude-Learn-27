# Prépa 2027

Application mobile (PWA) pour apprendre, 2 minutes par jour et avec les sources, ce qu'un·e candidat·e doit maîtriser :

| Dossier | Contenu |
|---|---|
| 🧠 Psychologie humaine | biais cognitifs, persuasion, émotions & empathie, lire la science psy |
| 🧭 Management & leadership | motivation, équipes, décision, diriger une équipe gouvernementale, crise |
| 💶 Économie & finances publiques | indicateurs, budget de l'État, BCE & règles UE, marchés, grands débats |
| 🛡️ Défense, renseignement & diplomatie | chef des armées, LPM, dissuasion, renseignement, alliances, cyber & guerre informationnelle |
| 🤖 Intelligence artificielle | fonctionnement, bénéfices, risques, régulation (AI Act) |
| 🎻 Culture & ouverture d'esprit | arts & santé, pratique d'un instrument, fiction & empathie, politique culturelle |
| 🎤 Art oratoire, éloquence & débat | Aristote & Cicéron, construire un discours, voix & trac, débat, sophismes, grands discours |
| 🏛️ Institutions & campagne 2027 | Constitution, Parlement, UE, conditions pour être candidat (500 parrainages, CNCCFP…) |

## Ce que fait l'appli

- **Mode flemme** : 5 questions en 2 minutes, mélangées entre tous les dossiers.
- **Leçons** : 5 cartes courtes + 5 questions + une phrase à retenir + une phrase à placer en débat + une mission dans la vraie vie.
- **Sources cliquables** partout, avec une étiquette « Source primaire » (loi, étude originale, données officielles, discours) ou « Synthèse ».
- **Révisions** par répétition espacée (ce que tu rates revient vite).
- **Studio d'éloquence** : sujets d'improvisation et débats pour/contre chronométrés, enregistrement audio pour se réécouter, compteur de « euh », virelangues.
- **Annexes** : lexique de tous les dossiers, bibliographie complète filtrable, fiches.
- **Voix et mandats** : on gagne des voix et on monte de militant·e à président·e. Série de jours, objectif quotidien, partage du score pour défier ses amis.
- Marche **hors ligne** une fois installée. Aucune donnée ne quitte le téléphone.

## Installer sur le téléphone

1. Ouvrir l'adresse de l'appli (voir « Mettre en ligne ») dans Safari (iPhone) ou Chrome (Android).
2. iPhone : Partager → « Sur l'écran d'accueil ». Android : menu ⋮ → « Installer l'application ».

## Mettre en ligne (gratuit, une seule fois)

Le dépôt contient un workflow GitHub Pages (`.github/workflows/pages.yml`).

1. Fusionner la branche dans `main`.
2. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
3. L'appli est publiée à `https://<compte>.github.io/<dépôt>/` à chaque push sur `main`.

GitHub Pages est gratuit pour un dépôt public. Pour un dépôt privé, il faut un compte GitHub payant ; sinon, glisser le dossier sur [Netlify Drop](https://app.netlify.com/drop) fonctionne aussi.

## Ajouter du contenu

Chaque dossier est un fichier `content/<id>.js`. Le format est décrit dans [`content/FORMAT.md`](content/FORMAT.md).

```sh
node scripts/check-content.js   # vérifie sources, réponses, champs requis
node scripts/build-single.js    # produit dist/prepa2027.html (toute l'appli en un fichier)
```

Après une modification de contenu, incrémenter `VERSION` dans `sw.js` pour que les téléphones déjà installés récupèrent la mise à jour.

## Avertissement

Contenu pédagogique rédigé avec l'aide d'une IA et vérifié contre les sources citées. Les chiffres sont datés : vérifie toujours la source avant de citer un chiffre en public.
