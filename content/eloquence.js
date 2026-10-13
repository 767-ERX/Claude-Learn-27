registerModule({
  id: "eloquence",
  title: "Art oratoire, éloquence & débat",
  emoji: "🎤",
  color: "#f97316",
  tagline: "Parler pour convaincre, débattre sans se faire piéger, et connaître les discours qui ont fait la France.",
  updated: "2026-10",

  sources: {
    aristote_perseus: {
      title: "Rhetoric (trad. J. H. Freese, Loeb, 1926)",
      author: "Aristote",
      year: 1926,
      url: "http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0060",
      kind: "primaire",
      publisher: "Perseus Digital Library (Tufts)"
    },
    aristote_ruelle: {
      title: "Rhétorique (trad. Charles-Émile Ruelle, 1883)",
      author: "Aristote",
      year: 1883,
      url: "https://fr.wikisource.org/wiki/Rh%C3%A9torique_(trad._Ruelle)",
      kind: "primaire",
      publisher: "Wikisource"
    },
    sep_rhetoric: {
      title: "Aristotle's Rhetoric",
      author: "C. Rapp (Stanford Encyclopedia of Philosophy)",
      year: 2002,
      url: "https://plato.stanford.edu/entries/aristotle-rhetoric/",
      kind: "secondaire",
      publisher: "Stanford Encyclopedia of Philosophy"
    },
    herennium: {
      title: "Rhetorica ad Herennium",
      author: "Wikipedia (synthèse)",
      year: 2025,
      url: "https://en.wikipedia.org/wiki/Rhetorica_ad_Herennium",
      kind: "secondaire",
      publisher: "Wikipedia"
    },
    dispositio: {
      title: "Dispositio",
      author: "Wikipedia (synthèse)",
      year: 2025,
      url: "https://en.wikipedia.org/wiki/Dispositio",
      kind: "secondaire",
      publisher: "Wikipedia"
    },
    cicero_precepts: {
      title: "The precepts of rhetoric according to Cicero and Clark, or How to make a speech clear, convincing, and agreeable",
      author: "Bradley University",
      year: 2010,
      url: "https://personalpages.bradley.edu/~ell/precepts.html",
      kind: "secondaire",
      publisher: "Bradley University"
    },
    plutarque: {
      title: "Vie de Démosthène, 11 (trad. B. Perrin)",
      author: "Plutarque",
      year: 1919,
      url: "https://cts.perseids.org/read/greekLit/tlg0007/tlg054/perseus-eng2/11.1-11.6",
      kind: "primaire",
      publisher: "Perseids / Perseus"
    },
    ina_moipresident: {
      title: "François Hollande : « Moi président de la République » (débat du 2 mai 2012)",
      author: "INA",
      year: 2012,
      url: "https://mediaclip.ina.fr/en/i21280368-francois-hollande-moi-president-de-la-republique.html",
      kind: "primaire",
      publisher: "INA mediaclip"
    },
    irishtimes2012: {
      title: "The debate: Hollande rhetoric goes unchallenged",
      author: "The Irish Times",
      year: 2012,
      url: "https://irishtimes.com/news/the-debate-hollande-rhetoric-goes-unchallenged-1.514137",
      kind: "secondaire",
      publisher: "The Irish Times"
    },
    shu2014: {
      title: "Make three claims when trying to persuade (sur Shu & Carlson, « When three charms but four alarms », Journal of Marketing, 2014)",
      author: "T. Cowen",
      year: 2014,
      url: "https://www.goodreads.com/author_blog_posts/6222546-make-three-claims-when-trying-to-persuade",
      kind: "secondaire",
      publisher: "Marginal Revolution (repris sur Goodreads)"
    },
    green2000: {
      title: "The role of transportation in the persuasiveness of public narratives",
      author: "M. C. Green & T. C. Brock",
      year: 2000,
      url: "https://doi.org/10.1037/0022-3514.79.5.701",
      kind: "primaire",
      publisher: "Journal of Personality and Social Psychology, 79(5), 701-721"
    },
    hugo1849: {
      title: "Victor Hugo (9 juillet 1849) – « Détruire la misère »",
      author: "Assemblée nationale – Grands moments d'éloquence",
      year: 1849,
      url: "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/grands-moments-d-eloquence/victor-hugo-9-juillet-1849",
      kind: "primaire",
      publisher: "assemblee-nationale.fr"
    },
    hugo_ws: {
      title: "Détruire la misère, discours à l'Assemblée nationale législative, 9 juillet 1849 (extrait)",
      author: "V. Hugo",
      year: 1849,
      url: "https://fr.wikisource.org/wiki/D%C3%A9truire_la_mis%C3%A8re,_Discours_%C3%A0_l%27Assembl%C3%A9e_nationale_l%C3%A9gislative_9_juillet_1849_(extrait)",
      kind: "primaire",
      publisher: "Wikisource"
    },
    malraux1964: {
      title: "Discours pour le transfert des cendres de Jean Moulin au Panthéon (19 décembre 1964)",
      author: "A. Malraux",
      year: 1964,
      url: "https://malraux.org/wp-content/uploads/2018/04/AM10-moulin_19_dec1964-1.pdf",
      kind: "primaire",
      publisher: "malraux.org"
    },
    brooks2014: {
      title: "Get excited: Reappraising pre-performance anxiety as excitement",
      author: "A. W. Brooks",
      year: 2014,
      url: "https://doi.org/10.1037/a0035325",
      kind: "primaire",
      publisher: "Journal of Experimental Psychology: General, 143(3), 1144-1158"
    },
    ranehill2015: {
      title: "Assessing the robustness of power posing: No effect on hormones and risk tolerance in a large sample of men and women",
      author: "E. Ranehill, A. Dreber, M. Johannesson, S. Leiberg, S. Sul & R. A. Weber",
      year: 2015,
      url: "https://doi.org/10.1177/0956797614553946",
      kind: "primaire",
      publisher: "Psychological Science, 26(5), 653-656"
    },
    carney2016: {
      title: "Article sur la prise de distance de Dana Carney (co-auteure de l'étude de 2010) avec le power posing",
      author: "Fortune",
      year: 2016,
      url: "https://www.fortune.com/2016/10/02/power-poses-research-false",
      kind: "secondaire",
      publisher: "Fortune"
    },
    mehrabian1967: {
      title: "Decoding of inconsistent communications",
      author: "A. Mehrabian & M. Wiener",
      year: 1967,
      url: "https://doi.org/10.1037/h0024532",
      kind: "primaire",
      publisher: "Journal of Personality and Social Psychology, 6(1), 109-114"
    },
    dwyer2012: {
      title: "Death or public speaking? UNO researchers revisit a 1973 study on the number one fear (sur Dwyer & Davidson, Communication Research Reports, 2012)",
      author: "KIOS / University of Nebraska Omaha",
      year: 2012,
      url: "https://www.kios.org/education/2012-07-17/death-or-public-speaking-uno-researchers-revisit-a-1973-study-on-the-number-one-fear",
      kind: "secondaire",
      publisher: "KIOS-FM"
    },
    ps_giscard: {
      title: "« Vous n'avez pas le monopole du cœur » : la réplique de Valéry Giscard d'Estaing était bien préparée",
      author: "Public Sénat",
      year: 2020,
      url: "https://www.publicsenat.fr/actualites/politique/vous-n-avez-pas-le-monopole-du-coeur-la-replique-de-valery-giscard-d-estaing-etait",
      kind: "secondaire",
      publisher: "Public Sénat"
    },
    ps_debats: {
      title: "Les débats TV : du « monopole du cœur » de Giscard à l'anaphore de Hollande",
      author: "Public Sénat",
      year: 2017,
      url: "https://www.publicsenat.fr/actualites/politique/les-debats-tv-du-monopole-du-coeur-de-giscard-a-l-anaphore-de-hollande-60025",
      kind: "secondaire",
      publisher: "Public Sénat"
    },
    slate1988: {
      title: "Jean-Marie Colombani raconte : le débat mythique entre François Mitterrand et Jacques Chirac (1988)",
      author: "Slate.fr – Mémoire d'un monde",
      year: 2022,
      url: "https://www.slate.fr/podcasts/memoire-dun-monde/jean-marie-colombani-raconte-presidentielle-1988-mitterrand-chirac-debat-televise-mythique-6",
      kind: "secondaire",
      publisher: "Slate.fr"
    },
    lavenir_debats: {
      title: "Les moments marquants des 6 débats de l'entre-deux-tours depuis 1974",
      author: "L'Avenir",
      year: 2017,
      url: "https://www.lavenir.net/buzz/2017/05/03/videos-les-moments-marquants-des-6-debats-de-lentre-deux-tours-depuis-1974-G4S3XE6VKFBKJKP36XGSNDMMX4/",
      kind: "secondaire",
      publisher: "L'Avenir"
    },
    sep_fallacies: {
      title: "Fallacies",
      author: "H. Hansen (Stanford Encyclopedia of Philosophy)",
      year: 2024,
      url: "https://plato.stanford.edu/entries/fallacies/",
      kind: "secondaire",
      publisher: "Stanford Encyclopedia of Philosophy"
    },
    ncse_gish: {
      title: "NCSE and the Gish Gallop in the Los Angeles Times",
      author: "NCSE (National Center for Science Education)",
      year: 2023,
      url: "https://ncse.ngo/ncse-and-gish-gallop-los-angeles-times",
      kind: "secondaire",
      publisher: "NCSE"
    },
    schopenhauer: {
      title: "L'Art d'avoir toujours raison",
      author: "Vikidia (synthèse)",
      year: 2025,
      url: "https://fr.vikidia.org/wiki/L%27Art_d%27avoir_toujours_raison",
      kind: "secondaire",
      publisher: "Vikidia"
    },
    badinter1981: {
      title: "Robert Badinter (17 septembre 1981) – abolition de la peine de mort",
      author: "Assemblée nationale – Grands discours parlementaires",
      year: 1981,
      url: "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/grands-discours-parlementaires/robert-badinter-17-septembre-1981",
      kind: "primaire",
      publisher: "assemblee-nationale.fr"
    },
    an_abolition: {
      title: "Le 18 septembre 1981, l'abolition de la peine de mort est votée",
      author: "Assemblée nationale",
      year: 1981,
      url: "https://www.assemblee-nationale.fr/histoire/peinedemort/m_le_president.asp",
      kind: "primaire",
      publisher: "assemblee-nationale.fr"
    },
    veil1974: {
      title: "Simone Veil (26 novembre 1974) – dépénalisation de l'IVG",
      author: "Assemblée nationale – Grands discours parlementaires",
      year: 1974,
      url: "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/grands-discours-parlementaires/simone-veil-26-novembre-1974",
      kind: "primaire",
      publisher: "assemblee-nationale.fr"
    },
    veil_brochure: {
      title: "La loi Veil dans l'hémicycle (brochure)",
      author: "Assemblée nationale",
      year: 2024,
      url: "https://www2.assemblee-nationale.fr/content/download/69153/704976/version/2/file/Brochure+Simone+Veil.pdf",
      kind: "primaire",
      publisher: "assemblee-nationale.fr"
    },
    slate_veil: {
      title: "IVG : le jour où Simone Veil a partagé sa « conviction de femme »",
      author: "Slate.fr",
      year: 2017,
      url: "https://www.slate.fr/story/122011/mort-simone-veil-avortement",
      kind: "secondaire",
      publisher: "Slate.fr"
    },
    degaulle_texte: {
      title: "L'Appel du 18 juin 1940 (texte)",
      author: "Hérodote.net",
      year: 2020,
      url: "https://www.herodote.net/Textes/tAppel.php",
      kind: "secondaire",
      publisher: "Hérodote.net"
    },
    degaulle_appel: {
      title: "L'Appel… quel Appel ?",
      author: "Hérodote.net",
      year: 2020,
      url: "https://www.herodote.net/L_Appel_quel_Appel_-article-294.php",
      kind: "secondaire",
      publisher: "Hérodote.net"
    }
  },

  lessons: [
    {
      id: "fondamentaux",
      title: "Les fondamentaux : Aristote & Cicéron",
      minutes: 4,
      takeaway: "Pour convaincre, il faut trois leviers : ta crédibilité (ethos), les émotions du public (pathos) et la solidité de ton raisonnement (logos). Et cinq chantiers : trouver, ordonner, formuler, mémoriser, prononcer.",
      punchline: "« Aristote l'a dit il y a 2 300 ans : on ne convainc pas seulement avec des arguments, mais avec qui l'on est et ce que l'on fait ressentir. »",
      cards: [
        {
          title: "La définition d'Aristote",
          text: "Pour Aristote (IVe siècle av. J.-C.), la rhétorique est la faculté de **voir, pour chaque sujet, ce qui peut persuader**. Ce n'est pas l'art de mentir, c'est l'art de trouver les bons moyens. Il la compare à la dialectique : un outil utile à tous, valable pour défendre le vrai.",
          sources: ["aristote_ruelle", "aristote_perseus"]
        },
        {
          title: "Ethos, pathos, logos",
          text: "Trois preuves techniques (Rhétorique, livre I, ch. 2) :\n- **Ethos** : le caractère de l'orateur, qui inspire confiance\n- **Pathos** : les dispositions qu'on crée chez l'auditoire\n- **Logos** : le discours lui-même, qui démontre ou semble démontrer\nUn bon discours politique mobilise les trois.",
          sources: ["aristote_perseus", "sep_rhetoric"]
        },
        {
          title: "L'ethos en 3 ingrédients",
          text: "Au livre II, Aristote précise : on fait confiance à un orateur qui montre **prudence** (bon jugement), **vertu** (honnêteté) et **bienveillance** envers son public. Traduction moderne : compétence, intégrité, et « je suis de votre côté ». Si l'un manque, le reste s'effondre.",
          sources: ["aristote_perseus", "sep_rhetoric"]
        },
        {
          title: "Les trois genres de discours",
          text: "- **Délibératif** : sur l'avenir, utile ou nuisible ? (assemblée, programme)\n- **Judiciaire** : sur le passé, juste ou injuste ? (procès, bilan)\n- **Épidictique** : sur le présent, éloge ou blâme (hommage, commémoration)\nUn candidat passe des trois dans une même campagne.",
          sources: ["aristote_perseus", "sep_rhetoric"]
        },
        {
          title: "Les 5 chantiers des Latins",
          text: "La Rhétorique à Herennius (vers 86-82 av. J.-C.) et Cicéron fixent 5 étapes :\n- **Inventio** : trouver les arguments\n- **Dispositio** : les ordonner\n- **Elocutio** : choisir les mots\n- **Memoria** : mémoriser\n- **Actio** : prononcer (voix, gestes)\nMission de l'orateur selon Cicéron : instruire, plaire, émouvoir.",
          sources: ["herennium", "cicero_precepts"]
        }
      ],
      quiz: [
        { q: "Quel levier aristotélicien repose sur le caractère et la crédibilité de l'orateur ?", choices: ["Logos", "Pathos", "Ethos"], answer: 2, explain: "L'ethos : la confiance inspirée par le caractère de celui qui parle.", sources: ["aristote_perseus"] },
        { q: "Un éloge funèbre relève de quel genre ?", choices: ["Épidictique", "Délibératif", "Judiciaire"], answer: 0, explain: "L'épidictique traite de l'éloge et du blâme, au présent.", sources: ["aristote_perseus", "sep_rhetoric"] },
        { q: "Vrai ou faux : pour Aristote, la rhétorique est par nature l'art de tromper.", choices: ["Vrai", "Faux"], answer: 1, explain: "C'est la faculté de voir ce qui peut persuader sur chaque sujet ; elle peut servir le vrai.", sources: ["aristote_ruelle", "sep_rhetoric"] },
        { q: "Quel canon latin correspond à la mise en ordre des arguments ?", choices: ["Inventio", "Actio", "Memoria", "Dispositio"], answer: 3, explain: "Dispositio = l'organisation du discours ; inventio = trouver les arguments.", sources: ["herennium"] },
        { q: "Selon Aristote, quels sont les trois ingrédients de l'ethos ?", choices: ["Richesse, beauté, célébrité", "Prudence, vertu, bienveillance", "Voix, gestes, regard"], answer: 1, explain: "Livre II : bon jugement, honnêteté et bienveillance envers l'auditoire.", sources: ["aristote_perseus", "sep_rhetoric"] }
      ],
      mission: { title: "Défi de la semaine", text: "Enregistre-toi 1 minute pour défendre une idée qui te tient à cœur. Réécoute et coche : ai-je montré ma compétence (ethos) ? Ai-je fait ressentir quelque chose (pathos) ? Ai-je donné au moins un fait ou un raisonnement (logos) ? Refais la minute en corrigeant le levier manquant." }
    },
    {
      id: "construire",
      title: "Construire un discours",
      minutes: 5,
      takeaway: "Un discours qui marque a un plan clair, des groupes de trois, une répétition qui scande (anaphore), une histoire qui transporte et quelques figures bien choisies.",
      punchline: "« Un bon discours, c'est un plan que le public peut résumer en une phrase en sortant. »",
      cards: [
        {
          title: "Le plan classique",
          text: "Les rhéteurs latins découpent le discours en :\n- **Exorde** : capter l'attention\n- **Narration** : exposer les faits\n- **Division / confirmation** : annoncer et prouver\n- **Réfutation** : désamorcer les objections\n- **Péroraison** : conclure et émouvoir\nVersion express : accroche, problème, solution, objection, appel.",
          sources: ["dispositio", "herennium"]
        },
        {
          title: "La règle de trois",
          text: "Trois arguments, trois adjectifs, trois exemples : le **tricolon** sonne complet. Une étude de marketing (Shu & Carlson, 2014) suggère que face à un public qui sait qu'on veut le convaincre, **trois affirmations positives** persuadent le mieux ; à partir de quatre, le scepticisme monte.",
          sources: ["shu2014"]
        },
        {
          title: "L'anaphore : « Moi président »",
          text: "Débat d'entre-deux-tours du **2 mai 2012**. Interrogé sur le président qu'il compte être, François Hollande enchaîne une quinzaine de phrases qui commencent par « **Moi, président de la République…** », pendant près de trois minutes. Répéter le début des phrases crée un rythme et grave le message.",
          sources: ["ina_moipresident", "irishtimes2012"]
        },
        {
          title: "Raconter une histoire",
          text: "Green & Brock (2000) : plus un lecteur est **transporté** dans un récit, plus il adopte les croyances de l'histoire et plus il apprécie ses personnages, et moins il en voit les failles. Un cas concret vaut mieux qu'une statistique seule. Revers : c'est aussi l'arme favorite des manipulateurs.",
          sources: ["green2000"]
        },
        {
          title: "3 figures de style qui marchent",
          text: "- **Antithèse** : Hugo oppose la souffrance (inévitable) et la misère (qu'on peut détruire), 1849.\n- **Gradation** : « diminuer, amoindrir, limiter, circonscrire » : Hugo refuse tout, il veut « détruire ».\n- **Apostrophe** : Malraux s'adresse au mort, « Entre ici, Jean Moulin », 1964.",
          sources: ["hugo1849", "hugo_ws", "malraux1964"]
        }
      ],
      quiz: [
        { q: "Comment s'appelle la répétition d'un même mot en début de phrases, comme « Moi, président… » ?", choices: ["Anaphore", "Chiasme", "Litote", "Oxymore"], answer: 0, explain: "L'anaphore répète un mot ou un groupe en tête de phrases successives.", sources: ["ina_moipresident"] },
        { q: "Quelle partie du discours sert à conclure et à émouvoir ?", choices: ["L'exorde", "La narration", "La péroraison"], answer: 2, explain: "La péroraison clôt le discours ; l'exorde l'ouvre.", sources: ["dispositio"] },
        { q: "Vrai ou faux : selon Green & Brock, être absorbé par une histoire rend plus critique envers elle.", choices: ["Vrai", "Faux"], answer: 1, explain: "C'est l'inverse : les lecteurs très transportés repèrent moins de failles.", sources: ["green2000"] },
        { q: "« Entre ici, Jean Moulin » : quelle figure Malraux utilise-t-il en s'adressant directement au mort ?", choices: ["L'euphémisme", "L'apostrophe", "La métonymie"], answer: 1, explain: "L'apostrophe interpelle directement une personne, présente ou absente.", sources: ["malraux1964"] },
        { q: "D'après l'étude de Shu & Carlson, combien d'affirmations positives persuadent le mieux un public averti ?", choices: ["Trois", "Une", "Six"], answer: 0, explain: "Le « charme du trois » : au-delà, le public devient sceptique.", sources: ["shu2014"] }
      ],
      mission: { title: "Défi de la semaine", text: "Écris un discours de 90 secondes sur un problème de ton quartier : 1 phrase d'accroche, 1 histoire vraie, 3 arguments, 1 anaphore (au moins 3 phrases commençant pareil), 1 appel final. Enregistre-toi, puis fais écouter à un ami : peut-il résumer ton message en une phrase ?" }
    },
    {
      id: "voix-corps",
      title: "La voix et le corps",
      minutes: 4,
      takeaway: "La voix se travaille comme un muscle (Démosthène en était l'exemple), le trac se recycle en excitation, et méfie-toi des recettes miracles comme le « power posing » ou la règle des 7-38-55.",
      punchline: "« Le trac, ce n'est pas un signal de danger, c'est de l'énergie. Dis-toi : je suis excité. »",
      cards: [
        {
          title: "Démosthène et ses cailloux",
          text: "Selon Plutarque, Démosthène, le plus grand orateur d'Athènes, avait une prononciation confuse. Il s'entraîne en parlant **avec des cailloux dans la bouche**, en récitant **en courant ou en montant des pentes**, d'une seule respiration, et **devant un grand miroir**. Morale : l'éloquence se travaille.",
          sources: ["plutarque"]
        },
        {
          title: "L'actio : voix, débit, gestes",
          text: "La Rhétorique à Herennius consacre une partie à la **prononciation** : la voix (puissance, stabilité, souplesse) et le mouvement du corps. Conseils pratiques :\n- ralentis sur les idées clés\n- fais une **pause** avant et après la phrase importante\n- regarde une personne par idée\n- varie le volume plutôt que de crier",
          sources: ["herennium"]
        },
        {
          title: "Le trac : dis « je suis excité »",
          text: "Brooks (2014) : avant de chanter, de parler en public ou de passer un test de maths, les participants qui se disent « **je suis excité** » se sentent plus enthousiastes et **réussissent mieux** que ceux qui essaient de se calmer. Le corps est déjà activé : change l'étiquette, pas l'énergie.",
          sources: ["brooks2014"]
        },
        {
          title: "Mythe : « plus peur de parler que de mourir »",
          text: "La phrase vient d'un sondage de 1973 souvent cité. En 2012, des chercheurs de l'université du Nebraska le refont auprès de **815 étudiants** en leur demandant de **classer** leurs peurs : la mort arrive en tête. Le sondage d'origine ne faisait pas classer les peurs. Le trac est fréquent, pas pire que la mort.",
          sources: ["dwyer2012"]
        },
        {
          title: "Mythes : power posing et 7-38-55",
          text: "- **Power posing** : la réplication de 2015 (200 personnes) ne trouve **aucun effet sur les hormones** ni sur la prise de risque, seulement un sentiment de puissance. En 2016, la première auteure de l'étude de 2010 dit ne plus y croire.\n- **7-38-55** : tiré d'expériences de 1967 sur des **mots isolés** au ton contradictoire. Ne pas généraliser.",
          sources: ["ranehill2015", "carney2016", "mehrabian1967"]
        }
      ],
      quiz: [
        { q: "Quelle phrase Brooks (2014) recommande-t-elle de se dire avant de prendre la parole ?", choices: ["« Je suis calme »", "« Je m'en fiche »", "« Je suis excité »"], answer: 2, explain: "Réinterpréter l'anxiété en excitation améliore la performance par rapport à « se calmer ».", sources: ["brooks2014"] },
        { q: "Vrai ou faux : la réplication de 2015 a confirmé que le power posing augmente la testostérone.", choices: ["Vrai", "Faux"], answer: 1, explain: "Aucun effet hormonal ni comportemental sur 200 participants ; seul le sentiment de puissance augmentait.", sources: ["ranehill2015"] },
        { q: "Comment Démosthène s'entraînait-il, selon Plutarque ?", choices: ["Avec des cailloux dans la bouche, en courant et devant un miroir", "En lisant à voix basse", "En chantant à l'opéra"], answer: 0, explain: "Plutarque (Vie de Démosthène, 11) rapporte ces exercices d'articulation et de souffle.", sources: ["plutarque"] },
        { q: "La règle « 7 % mots, 38 % voix, 55 % visage » vient d'expériences portant sur…", choices: ["Des mots isolés au ton contradictoire", "Des discours politiques complets", "Des débats télévisés"], answer: 0, explain: "Mehrabian et ses collègues (1967) étudiaient des messages très limités : on ne peut pas en faire une loi générale.", sources: ["mehrabian1967"] },
        { q: "Vrai ou faux : quand on demande de classer leurs peurs, les gens placent la prise de parole devant la mort.", choices: ["Vrai", "Faux"], answer: 1, explain: "Dans la réplication de 2012 (815 étudiants), la mort arrive en tête.", sources: ["dwyer2012"] }
      ],
      mission: { title: "Défi de la semaine", text: "Chaque jour : 2 minutes de virelangues (voir l'annexe), crayon entre les dents puis sans. Ensuite enregistre-toi 1 minute en lisant un article à voix haute, avec une pause de 2 secondes avant chaque phrase clé. Compare le jour 1 et le jour 7." }
    },
    {
      id: "debat",
      title: "Le débat",
      minutes: 5,
      takeaway: "On prépare un débat en maîtrisant aussi les arguments adverses (et en les présentant dans leur meilleure version), on répond à une attaque en recadrant, et les grandes répliques sont souvent… préparées.",
      punchline: "« Je vais d'abord résumer votre position mieux que vous ne l'avez fait, puis vous dire pourquoi je ne suis pas d'accord. »",
      cards: [
        {
          title: "Préparer les deux côtés",
          text: "Aristote conseille déjà de savoir argumenter **dans les deux sens** d'une question : non pour défendre le faux, mais pour comprendre l'affaire et pouvoir réfuter. Prépare chaque débat avec une liste : mes 3 arguments, leurs 3 meilleurs arguments, ma réponse à chacun.",
          sources: ["aristote_perseus", "sep_rhetoric"]
        },
        {
          title: "Steelman contre homme de paille",
          text: "L'**homme de paille** déforme la thèse adverse pour la battre facilement : c'est un sophisme. Le **steelmanning** fait l'inverse : on reformule la position adverse dans sa **version la plus solide**, on vérifie (« c'est bien ça ? »), puis on répond. Effet : tu gagnes en crédibilité (ethos) auprès des indécis.",
          sources: ["sep_fallacies"]
        },
        {
          title: "1974 : « le monopole du cœur »",
          text: "Débat télévisé du **10 mai 1974**, premier débat d'entre-deux-tours. Accusé sur la justice sociale, Valéry Giscard d'Estaing lance à François Mitterrand : « **Vous n'avez pas le monopole du cœur** ». Longtemps présentée comme spontanée, la réplique avait en fait été **préparée**. Giscard gagne l'élection.",
          sources: ["ps_giscard", "ps_debats"]
        },
        {
          title: "1988 : le recadrage",
          text: "Débat du **28 avril 1988**, en pleine cohabitation. Jacques Chirac, Premier ministre, affirme qu'ils sont deux candidats à égalité. François Mitterrand, président sortant, répond : « **Mais vous avez tout à fait raison, monsieur le Premier ministre** ». Une phrase qui accepte l'argument tout en remettant l'adversaire à sa place.",
          sources: ["slate1988"]
        },
        {
          title: "Répondre à une attaque",
          text: "Méthode en 3 temps :\n- **Accuser réception** sans répéter l'attaque mot pour mot (sinon tu l'amplifies)\n- **Recadrer** : corrige le fait ou change l'angle\n- **Revenir à ton message**\nGarde ton calme : dans les débats de 1974 à 2012, les répliques qui restent sont courtes, posées et souvent préparées.",
          sources: ["ps_debats", "slate1988"]
        }
      ],
      quiz: [
        { q: "Qu'est-ce que le « steelmanning » ?", choices: ["Caricaturer l'adversaire", "Reformuler la thèse adverse dans sa version la plus solide avant d'y répondre", "Parler plus fort que l'adversaire"], answer: 1, explain: "C'est l'inverse de l'homme de paille, qui déforme la thèse adverse.", sources: ["sep_fallacies"] },
        { q: "Qui a lancé « Vous n'avez pas le monopole du cœur » en 1974 ?", choices: ["Valéry Giscard d'Estaing", "François Mitterrand", "Jacques Chirac", "Georges Pompidou"], answer: 0, explain: "Giscard à Mitterrand, le 10 mai 1974.", sources: ["ps_giscard"] },
        { q: "Vrai ou faux : la réplique du « monopole du cœur » était totalement improvisée.", choices: ["Vrai", "Faux"], answer: 1, explain: "Des archives montrent qu'elle avait été préparée.", sources: ["ps_giscard"] },
        { q: "En 2002, combien de débats d'entre-deux-tours ont eu lieu ?", choices: ["Un", "Deux", "Aucun"], answer: 2, explain: "Jacques Chirac a refusé de débattre avec Jean-Marie Le Pen. On compte 6 débats de 1974 à 2012 (1974, 1981, 1988, 1995, 2007, 2012).", sources: ["lavenir_debats"] },
        { q: "Pourquoi éviter de répéter mot pour mot l'attaque de l'adversaire ?", choices: ["Parce que c'est interdit par le CSA", "Parce qu'on l'amplifie en la répétant", "Parce que ça fait perdre du temps de parole"], answer: 1, explain: "Répéter l'accusation lui donne une seconde diffusion ; mieux vaut recadrer et revenir à son message.", sources: ["ps_debats"] }
      ],
      mission: { title: "Défi de la semaine", text: "Choisis un sujet clivant. Enregistre-toi 1 minute en présentant la meilleure version de la position que tu ne partages PAS (steelman). Demande à quelqu'un qui la partage : « Est-ce que j'ai bien résumé ? » Puis 1 minute pour ta réponse, en commençant par un point d'accord." }
    },
    {
      id: "sophismes",
      title: "Les sophismes à repérer",
      minutes: 4,
      takeaway: "Repérer un sophisme, c'est le nommer calmement et revenir au fond. Les plus courants : ad hominem, homme de paille, faux dilemme, pente glissante, appel à l'autorité, et le Gish gallop.",
      punchline: "« Vous attaquez la personne, pas l'argument. Revenons à l'argument. »",
      cards: [
        {
          title: "Ad hominem",
          text: "Attaquer **la personne** au lieu de son argument : « Il dit ça, mais il n'a jamais travaillé dans le privé. » L'argument reste à réfuter. Nuance : soulever un **conflit d'intérêts** réel peut être légitime ; disqualifier une idée à cause de qui la porte ne l'est pas.",
          sources: ["sep_fallacies"]
        },
        {
          title: "Homme de paille et faux dilemme",
          text: "- **Homme de paille** : déformer la thèse adverse. « Vous voulez réguler les loyers ? Donc vous voulez interdire la propriété ! »\n- **Faux dilemme** : présenter deux options comme les seules possibles. « Soit vous êtes avec nous, soit vous êtes contre la France. »\nRéponse : « Ce n'est pas ce que j'ai dit » / « Il y a d'autres options ».",
          sources: ["sep_fallacies"]
        },
        {
          title: "Pente glissante et appel à l'autorité",
          text: "- **Pente glissante** : « Si on accepte A, on finira forcément par Z », sans prouver chaque étape.\n- **Appel à l'autorité** : « Un prix Nobel l'a dit, donc c'est vrai », surtout hors de son domaine. Citer un expert est légitime ; en faire une preuve suffisante ne l'est pas.",
          sources: ["sep_fallacies"]
        },
        {
          title: "Le Gish gallop",
          text: "Terme forgé en **1994** par l'anthropologue **Eugenie Scott** (NCSE), d'après le créationniste Duane Gish : enchaîner tant d'affirmations, vraies ou fausses, que l'adversaire ne peut pas toutes réfuter dans le temps imparti. Parade : choisis **la plus fausse**, démonte-la, et signale la méthode.",
          sources: ["ncse_gish"]
        },
        {
          title: "Schopenhauer, le manuel du tricheur",
          text: "**L'Art d'avoir toujours raison** (écrit vers 1830, publié après sa mort) recense **38 stratagèmes** pour gagner une dispute, vrai ou faux : généraliser la thèse adverse, poser des questions en désordre, s'indigner… Dernier recours : l'attaque personnelle. À lire comme un vaccin.",
          sources: ["schopenhauer"]
        }
      ],
      quiz: [
        { q: "« Vous voulez plus de pistes cyclables ? Donc vous voulez interdire les voitures ! » Quel sophisme ?", choices: ["Homme de paille", "Ad hominem", "Appel à l'autorité"], answer: 0, explain: "La thèse adverse est déformée pour être plus facile à attaquer.", sources: ["sep_fallacies"] },
        { q: "Qui a forgé l'expression « Gish gallop » ?", choices: ["Arthur Schopenhauer", "Aristote", "Eugenie Scott", "Duane Gish lui-même"], answer: 2, explain: "Eugenie Scott, du National Center for Science Education, en 1994.", sources: ["ncse_gish"] },
        { q: "Vrai ou faux : citer un expert est toujours un sophisme.", choices: ["Vrai", "Faux"], answer: 1, explain: "C'est fallacieux quand l'autorité remplace la preuve ou parle hors de son domaine.", sources: ["sep_fallacies"] },
        { q: "« Soit on supprime cet impôt, soit les entreprises partent toutes. » Quel sophisme ?", choices: ["Faux dilemme", "Gish gallop", "Ad hominem", "Apostrophe"], answer: 0, explain: "Deux options présentées comme les seules possibles.", sources: ["sep_fallacies"] },
        { q: "Combien de stratagèmes Schopenhauer recense-t-il dans L'Art d'avoir toujours raison ?", choices: ["38", "7", "100"], answer: 0, explain: "38 stratagèmes, issus de ses notes sur la « dialectique éristique ».", sources: ["schopenhauer"] }
      ],
      mission: { title: "Défi de la semaine", text: "Regarde 15 minutes d'un débat politique (TV ou réseaux). Note chaque sophisme repéré avec son nom et l'orateur. Puis enregistre-toi 30 secondes en répondant calmement au pire d'entre eux : nomme-le, sans agressivité, et reviens au fond." }
    },
    {
      id: "grands-discours",
      title: "Les grands discours à connaître",
      minutes: 5,
      takeaway: "Cinq discours, cinq leçons : l'appel (de Gaulle), la cause (Hugo), la conviction face à l'hostilité (Veil), la solennité (Badinter), l'hommage (Malraux).",
      punchline: "« Demain, grâce à vous, la justice française ne sera plus une justice qui tue. » (Badinter, 1981)",
      cards: [
        {
          title: "De Gaulle, 18 juin 1940",
          text: "Depuis Londres, à la BBC, le général de Gaulle appelle à poursuivre le combat. Surprise : **aucun enregistrement** de l'appel du 18 juin n'a été conservé ; celui qu'on entend est souvent celui du **22 juin**. Et « La France a perdu une bataille ! Mais la France n'a pas perdu la guerre ! » vient de l'**affiche** placardée ensuite.",
          sources: ["degaulle_appel", "degaulle_texte"]
        },
        {
          title: "Hugo, 9 juillet 1849",
          text: "À l'Assemblée législative, Victor Hugo soutient une proposition sur l'assistance publique : « Je ne suis pas, messieurs, de ceux qui croient qu'on peut supprimer la souffrance en ce monde […] mais je suis de ceux qui pensent et qui affirment qu'**on peut détruire la misère**. » Il décrit ensuite des faits précis de la misère à Paris.",
          sources: ["hugo1849", "hugo_ws"]
        },
        {
          title: "Veil, 26 novembre 1974",
          text: "Ministre de la Santé, Simone Veil présente la dépénalisation de l'IVG devant **481 députés hommes et 9 femmes**, dans un climat hostile : « **aucune femme ne recourt de gaieté de cœur à l'avortement** ». Après environ 25 heures de débat, le texte est adopté en première lecture le 29 novembre (284 voix contre 189).",
          sources: ["veil1974", "veil_brochure", "slate_veil"]
        },
        {
          title: "Badinter, 17 septembre 1981",
          text: "Ministre de la Justice, Robert Badinter ouvre : « J'ai l'honneur, au nom du Gouvernement de la République, de demander à l'Assemblée nationale l'**abolition de la peine de mort** en France. » Il cite Jaurès et l'histoire du débat depuis 1791. Vote le 18 septembre : **363 voix contre 117**. Loi promulguée le 9 octobre 1981.",
          sources: ["badinter1981", "an_abolition"]
        },
        {
          title: "Malraux, 19 décembre 1964",
          text: "Transfert des cendres de Jean Moulin au **Panthéon**. Malraux, ministre des Affaires culturelles, déclame : « **Entre ici, Jean Moulin, avec ton terrible cortège** ». Apostrophe, rythme lent, images fortes : l'un des modèles du discours d'hommage (genre épidictique) sous la Ve République.",
          sources: ["malraux1964"]
        }
      ],
      quiz: [
        { q: "Vrai ou faux : on dispose de l'enregistrement sonore original de l'appel du 18 juin 1940.", choices: ["Vrai", "Faux"], answer: 1, explain: "Il n'a pas été conservé ; l'enregistrement de l'appel du 22 juin, lui, existe.", sources: ["degaulle_appel"] },
        { q: "Quel a été le résultat du vote sur l'abolition de la peine de mort à l'Assemblée, le 18 septembre 1981 ?", choices: ["290 voix contre 189", "363 voix contre 117", "Unanimité"], answer: 1, explain: "363 pour, 117 contre ; le Sénat suit, et la loi est promulguée le 9 octobre 1981.", sources: ["an_abolition", "badinter1981"] },
        { q: "Combien de femmes siégeaient parmi les députés quand Simone Veil a pris la parole en 1974 ?", choices: ["9", "48", "150", "Aucune"], answer: 0, explain: "481 hommes et 9 femmes.", sources: ["veil_brochure", "slate_veil"] },
        { q: "Selon Hugo (1849), que peut-on détruire ?", choices: ["La souffrance", "La guerre", "La misère"], answer: 2, explain: "Il distingue la souffrance, qu'on ne peut supprimer, de la misère, qu'on peut détruire.", sources: ["hugo1849"] },
        { q: "À quelle occasion Malraux prononce-t-il « Entre ici, Jean Moulin » ?", choices: ["La libération de Paris", "Le transfert des cendres de Jean Moulin au Panthéon", "Son entrée à l'Académie française"], answer: 1, explain: "Le 19 décembre 1964, au Panthéon.", sources: ["malraux1964"] }
      ],
      mission: { title: "Défi de la semaine", text: "Choisis l'un des 5 discours. Apprends les 3 premières phrases par cœur et dis-les à voix haute, debout, en t'enregistrant (vidéo). Imite le rythme, les pauses, le regard. Puis écris et dis 1 minute de discours sur un sujet actuel en réutilisant UNE figure du discours choisi." }
    }
  ],

  glossary: [
    { term: "Ethos", def: "Preuve par le caractère de l'orateur : prudence, vertu, bienveillance.", sources: ["aristote_perseus", "sep_rhetoric"] },
    { term: "Pathos", def: "Preuve par les émotions et dispositions suscitées chez l'auditoire.", sources: ["aristote_perseus"] },
    { term: "Logos", def: "Preuve par le discours lui-même : faits, raisonnements, démonstrations.", sources: ["aristote_perseus"] },
    { term: "Enthymème", def: "Pour Aristote, le « syllogisme rhétorique » : un raisonnement qui part de ce que le public admet déjà, souvent avec une prémisse sous-entendue.", sources: ["sep_rhetoric"] },
    { term: "Épidictique", def: "Genre du discours d'éloge ou de blâme (hommage, commémoration).", sources: ["sep_rhetoric"] },
    { term: "Actio", def: "Cinquième canon latin : la prononciation du discours (voix, gestes, regard).", sources: ["herennium"] },
    { term: "Anaphore", def: "Répétition d'un mot ou d'un groupe en tête de phrases successives (« Moi, président… »).", sources: ["ina_moipresident"] },
    { term: "Antithèse", def: "Opposition de deux idées dans une même phrase (souffrance / misère chez Hugo).", sources: ["hugo1849"] },
    { term: "Gradation", def: "Suite de termes d'intensité croissante ou décroissante.", sources: ["hugo_ws"] },
    { term: "Apostrophe", def: "Interpellation directe d'une personne, présente ou absente (« Entre ici, Jean Moulin »).", sources: ["malraux1964"] },
    { term: "Tricolon (règle de trois)", def: "Énumération en trois éléments, perçue comme complète et persuasive.", sources: ["shu2014"] },
    { term: "Homme de paille", def: "Sophisme qui consiste à déformer la thèse adverse pour la réfuter facilement.", sources: ["sep_fallacies"] },
    { term: "Gish gallop", def: "Technique qui noie l'adversaire sous un flot d'affirmations impossibles à toutes réfuter à temps.", sources: ["ncse_gish"] },
    { term: "Réévaluation (reappraisal)", def: "Réinterpréter l'anxiété comme de l'excitation pour mieux performer.", sources: ["brooks2014"] }
  ],

  annexes: [
    {
      title: "Bibliographie commentée",
      text: "- **Aristote, Rhétorique** : la base. Lis au moins le livre I, chapitres 1 à 3 (Wikisource, gratuit).\n- **Rhétorique à Herennius** : le premier manuel latin complet, avec les 5 canons.\n- **Schopenhauer, L'Art d'avoir toujours raison** : 38 ruses à reconnaître, pas à imiter.\n- **Grands discours parlementaires** (site de l'Assemblée nationale) : Hugo, Veil, Badinter en texte intégral.\n- **Brooks (2014)** : 15 pages pour transformer ton trac.",
      sources: ["aristote_ruelle", "herennium", "schopenhauer", "badinter1981", "brooks2014"]
    },
    {
      title: "20 virelangues pour l'articulation",
      text: "- Les chaussettes de l'archiduchesse sont-elles sèches ? Archi-sèches !\n- Un chasseur sachant chasser doit savoir chasser sans son chien.\n- Si six scies scient six cyprès, six cent six scies scient six cent six cyprès.\n- Ton thé t'a-t-il ôté ta toux ?\n- Je veux et j'exige d'exquises excuses.\n- Cinq chiens chassent six chats.\n- Trois tortues trottaient sur un trottoir très étroit.\n- Pruneau cuit, pruneau cru.\n- Fruits frais, fruits frits, fruits cuits, fruits crus.\n- Suis-je bien chez ce cher Serge ?\n- Douze douches douces.\n- Dido dîna, dit-on, du dos d'un dodu dindon.\n- Le cricri de la crique crie son cri cru et critique.\n- Un généreux déjeuner régénérerait des généraux dégénérés.\n- Gros gras grain d'orge, quand te dégrogragraindorgeras-tu ?\n- Ciel ! Si ceci se sait, ces soins sont sans succès.\n- Natacha n'attacha pas son chat Pacha qui s'échappa.\n- Seize chaises sèchent.\n- Panier, piano, panier, piano.\n- Tas de riz, tas de rats ; tas de riz tentant, tas de rats tentés.\nMéthode Démosthène : lentement, puis vite, puis avec un crayon entre les dents.",
      sources: ["plutarque"]
    },
    {
      title: "Checklist avant de prendre la parole",
      text: "- Mon message tient-il en **une phrase** ?\n- J'ai **3 arguments** max, dont un fait chiffré et daté\n- J'ai **une histoire** concrète\n- J'ai préparé la **meilleure objection** adverse et ma réponse\n- Ethos : pourquoi moi, pourquoi me croire ?\n- Je connais par cœur ma **première et ma dernière phrase**\n- 2 minutes de virelangues, 3 respirations lentes\n- Je me dis : « **Je suis excité** »\n- Pas de power pose miracle : juste une posture stable et le regard vers une personne",
      sources: ["aristote_perseus", "dispositio", "brooks2014", "ranehill2015", "green2000"]
    }
  ]
});
