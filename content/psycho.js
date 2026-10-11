registerModule({
  id: "psycho",
  title: "Psychologie humaine",
  emoji: "🧠",
  color: "#8b5cf6",
  tagline: "Comprendre comment les gens pensent, décident, ressentent et se laissent convaincre.",
  updated: "2026-10",

  sources: {
    tversky1974: {
      title: "Judgment under Uncertainty: Heuristics and Biases",
      author: "A. Tversky & D. Kahneman",
      year: 1974,
      url: "https://doi.org/10.1126/science.185.4157.1124",
      kind: "primaire",
      publisher: "Science"
    },
    kahneman1979: {
      title: "Prospect Theory: An Analysis of Decision under Risk",
      author: "D. Kahneman & A. Tversky",
      year: 1979,
      url: "https://doi.org/10.2307/1914185",
      kind: "primaire",
      publisher: "Econometrica"
    },
    kahneman2003: {
      title: "Maps of Bounded Rationality: Psychology for Behavioral Economics",
      author: "D. Kahneman",
      year: 2003,
      url: "https://doi.org/10.1257/000282803322655392",
      kind: "primaire",
      publisher: "American Economic Review (version écrite de sa conférence Nobel)"
    },
    tversky1981: {
      title: "The Framing of Decisions and the Psychology of Choice",
      author: "A. Tversky & D. Kahneman",
      year: 1981,
      url: "https://doi.org/10.1126/science.7455683",
      kind: "primaire",
      publisher: "Science"
    },
    nickerson1998: {
      title: "Confirmation Bias: A Ubiquitous Phenomenon in Many Guises",
      author: "R. S. Nickerson",
      year: 1998,
      url: "https://doi.org/10.1037/1089-2680.2.2.175",
      kind: "secondaire",
      publisher: "Review of General Psychology (revue de littérature)"
    },
    kunda1990: {
      title: "The Case for Motivated Reasoning",
      author: "Z. Kunda",
      year: 1990,
      url: "https://doi.org/10.1037/0033-2909.108.3.480",
      kind: "primaire",
      publisher: "Psychological Bulletin"
    },
    kruger1999: {
      title: "Unskilled and Unaware of It: How Difficulties in Recognizing One's Own Incompetence Lead to Inflated Self-Assessments",
      author: "J. Kruger & D. Dunning",
      year: 1999,
      url: "https://doi.org/10.1037/0022-3514.77.6.1121",
      kind: "primaire",
      publisher: "Journal of Personality and Social Psychology"
    },
    gignac2023: {
      title: "Still no Dunning-Kruger effect: A reply to Hiller",
      author: "G. E. Gignac & M. Zajenkowski",
      year: 2023,
      url: "https://research-repository.uwa.edu.au/en/publications/still-no-dunning-kruger-effect-a-reply-to-hiller/",
      kind: "primaire",
      publisher: "Intelligence (fiche University of Western Australia)"
    },
    iza17687: {
      title: "Réplication de Gignac & Zajenkowski sur données de cohorte britanniques (Discussion Paper n° 17687)",
      author: "IZA Institute of Labor Economics",
      year: 2025,
      url: "https://iza.org/publications/dp/17687",
      kind: "primaire",
      publisher: "IZA ; publié ensuite dans le Journal of Behavioral and Experimental Economics"
    },
    baumeister2001: {
      title: "Bad Is Stronger Than Good",
      author: "R. F. Baumeister, E. Bratslavsky, C. Finkenauer & K. D. Vohs",
      year: 2001,
      url: "https://doi.org/10.1037/1089-2680.5.4.323",
      kind: "secondaire",
      publisher: "Review of General Psychology (revue de littérature)"
    },
    rozin2001: {
      title: "Negativity Bias, Negativity Dominance, and Contagion",
      author: "P. Rozin & E. B. Royzman",
      year: 2001,
      url: "https://doi.org/10.1207/S15327957PSPR0504_2",
      kind: "secondaire",
      publisher: "Personality and Social Psychology Review"
    },
    galrucker2018: {
      title: "The Loss of Loss Aversion: Will It Loom Larger Than Its Gain?",
      author: "D. Gal & D. D. Rucker",
      year: 2018,
      url: "https://papers.ssrn.com/abstract=3049660",
      kind: "secondaire",
      publisher: "Journal of Consumer Psychology (prépublication SSRN)"
    },
    cialdini2004: {
      title: "Social Influence: Compliance and Conformity",
      author: "R. B. Cialdini & N. J. Goldstein",
      year: 2004,
      url: "https://doi.org/10.1146/annurev.psych.55.090902.142015",
      kind: "secondaire",
      publisher: "Annual Review of Psychology"
    },
    cialdiniUnity: {
      title: "The gentle science of persuasion, part seven: Unity",
      author: "W. P. Carey School of Business, Arizona State University",
      year: 2025,
      url: "https://blogs.wpcarey.asu.edu/20250422-gentle-science-persuasion-part-seven-unity",
      kind: "secondaire",
      publisher: "Arizona State University (université de R. Cialdini)"
    },
    zajonc1968: {
      title: "Attitudinal Effects of Mere Exposure",
      author: "R. B. Zajonc",
      year: 1968,
      url: "https://doi.org/10.1037/h0025848",
      kind: "primaire",
      publisher: "Journal of Personality and Social Psychology"
    },
    asch1956: {
      title: "Studies of independence and conformity: I. A minority of one against a unanimous majority",
      author: "S. E. Asch",
      year: 1956,
      url: "https://doi.org/10.1037/h0093718",
      kind: "primaire",
      publisher: "Psychological Monographs"
    },
    goldstein2008: {
      title: "A Room with a Viewpoint: Using Social Norms to Motivate Environmental Conservation in Hotels",
      author: "N. J. Goldstein, R. B. Cialdini & V. Griskevicius",
      year: 2008,
      url: "https://doi.org/10.1086/586910",
      kind: "primaire",
      publisher: "Journal of Consumer Research"
    },
    milgram1963: {
      title: "Behavioral Study of Obedience",
      author: "S. Milgram",
      year: 1963,
      url: "https://doi.org/10.1037/h0040525",
      kind: "primaire",
      publisher: "Journal of Abnormal and Social Psychology"
    },
    burger2009: {
      title: "Replicating Milgram: Would People Still Obey Today?",
      author: "J. M. Burger",
      year: 2009,
      url: "https://doi.org/10.1037/a0010932",
      kind: "primaire",
      publisher: "American Psychologist"
    },
    salovey1990: {
      title: "Emotional Intelligence",
      author: "P. Salovey & J. D. Mayer",
      year: 1990,
      url: "https://doi.org/10.2190/DUGG-P24E-52WK-6CDG",
      kind: "primaire",
      publisher: "Imagination, Cognition and Personality"
    },
    mayer2008: {
      title: "Emotional Intelligence: New Ability or Eclectic Traits?",
      author: "J. D. Mayer, P. Salovey & D. R. Caruso",
      year: 2008,
      url: "https://doi.org/10.1037/0003-066X.63.6.503",
      kind: "secondaire",
      publisher: "American Psychologist"
    },
    joseph2010: {
      title: "Emotional Intelligence: An Integrative Meta-Analysis and Cascading Model",
      author: "D. L. Joseph & D. A. Newman",
      year: 2010,
      url: "https://doi.org/10.1037/a0017286",
      kind: "primaire",
      publisher: "Journal of Applied Psychology (méta-analyse)"
    },
    gross1998: {
      title: "The Emerging Field of Emotion Regulation: An Integrative Review",
      author: "J. J. Gross",
      year: 1998,
      url: "https://doi.org/10.1037/1089-2680.2.3.271",
      kind: "secondaire",
      publisher: "Review of General Psychology"
    },
    gross2002: {
      title: "Emotion regulation: affective, cognitive, and social consequences",
      author: "J. J. Gross",
      year: 2002,
      url: "https://pubmed.ncbi.nlm.nih.gov/12212647/",
      kind: "secondaire",
      publisher: "Psychophysiology (notice PubMed)"
    },
    davis1983: {
      title: "Measuring Individual Differences in Empathy: Evidence for a Multidimensional Approach",
      author: "M. H. Davis",
      year: 1983,
      url: "https://doi.org/10.1037/0022-3514.44.1.113",
      kind: "primaire",
      publisher: "Journal of Personality and Social Psychology"
    },
    singer2014: {
      title: "Empathy and compassion",
      author: "T. Singer & O. M. Klimecki",
      year: 2014,
      url: "https://doi.org/10.1016/j.cub.2014.06.054",
      kind: "secondaire",
      publisher: "Current Biology"
    },
    bloom2017: {
      title: "Empathy and Its Discontents",
      author: "P. Bloom",
      year: 2017,
      url: "https://doi.org/10.1016/j.tics.2016.11.004",
      kind: "secondaire",
      publisher: "Trends in Cognitive Sciences"
    },
    rogers1957: {
      title: "The Necessary and Sufficient Conditions of Therapeutic Personality Change",
      author: "C. R. Rogers",
      year: 1957,
      url: "https://doi.org/10.1037/h0045357",
      kind: "primaire",
      publisher: "Journal of Consulting Psychology"
    },
    weger2014: {
      title: "The Relative Effectiveness of Active Listening in Initial Interactions",
      author: "H. Weger, G. Castle Bell, E. M. Minei & M. C. Robinson",
      year: 2014,
      url: "https://doi.org/10.1080/10904018.2013.813234",
      kind: "primaire",
      publisher: "International Journal of Listening"
    },
    aronson1966: {
      title: "The Effect of a Pratfall on Increasing Interpersonal Attractiveness",
      author: "E. Aronson, B. Willerman & J. Floyd",
      year: 1966,
      url: "https://doi.org/10.3758/BF03342263",
      kind: "primaire",
      publisher: "Psychonomic Science"
    },
    osc2015: {
      title: "Estimating the reproducibility of psychological science",
      author: "Open Science Collaboration",
      year: 2015,
      url: "https://doi.org/10.1126/science.aac4716",
      kind: "primaire",
      publisher: "Science"
    },
    camerer2018: {
      title: "Evaluating the replicability of social science experiments in Nature and Science between 2010 and 2015",
      author: "C. F. Camerer, A. Dreber et al.",
      year: 2018,
      url: "https://doi.org/10.1038/s41562-018-0399-z",
      kind: "primaire",
      publisher: "Nature Human Behaviour"
    },
    simmons2011: {
      title: "False-Positive Psychology: Undisclosed Flexibility in Data Collection and Analysis Allows Presenting Anything as Significant",
      author: "J. P. Simmons, L. D. Nelson & U. Simonsohn",
      year: 2011,
      url: "https://doi.org/10.1177/0956797611417632",
      kind: "primaire",
      publisher: "Psychological Science"
    },
    hagger2016: {
      title: "A Multilab Preregistered Replication of the Ego-Depletion Effect",
      author: "M. S. Hagger, N. L. D. Chatzisarantis et al.",
      year: 2016,
      url: "https://doi.org/10.1177/1745691616652873",
      kind: "primaire",
      publisher: "Perspectives on Psychological Science"
    },
    mehrabian1967: {
      title: "Decoding of Inconsistent Communications",
      author: "A. Mehrabian & M. Wiener",
      year: 1967,
      url: "https://doi.org/10.1037/h0024532",
      kind: "primaire",
      publisher: "Journal of Personality and Social Psychology"
    },
    mehrabianSite: {
      title: "« Silent Messages » (livre de 1971, 2e éd. 1981) — page de l'auteur, avec sa mise en garde sur la portée de la formule 7-38-55",
      author: "A. Mehrabian",
      year: 1981,
      url: "https://www.kaaj.com/psych/smorder.html",
      kind: "primaire",
      publisher: "Site personnel d'Albert Mehrabian"
    },
    carney2010: {
      title: "Power Posing: Brief Nonverbal Displays Affect Neuroendocrine Levels and Risk Tolerance",
      author: "D. R. Carney, A. J. C. Cuddy & A. J. Yap",
      year: 2010,
      url: "https://doi.org/10.1177/0956797610383437",
      kind: "primaire",
      publisher: "Psychological Science"
    },
    ranehill2015: {
      title: "Assessing the Robustness of Power Posing: No Effect on Hormones and Risk Tolerance in a Large Sample of Men and Women",
      author: "E. Ranehill, A. Dreber, M. Johannesson et al.",
      year: 2015,
      url: "https://doi.org/10.1177/0956797614553946",
      kind: "primaire",
      publisher: "Psychological Science"
    },
    carney2016: {
      title: "My position on « Power Poses »",
      author: "D. R. Carney",
      year: 2016,
      url: "https://faculty.haas.berkeley.edu/dana_carney/pdf_my%20position%20on%20power%20poses.pdf",
      kind: "primaire",
      publisher: "UC Berkeley Haas (déclaration de la première autrice)"
    },
    nyhan2010: {
      title: "When Corrections Fail: The Persistence of Political Misperceptions",
      author: "B. Nyhan & J. Reifler",
      year: 2010,
      url: "https://doi.org/10.1007/s11109-010-9112-2",
      kind: "primaire",
      publisher: "Political Behavior"
    },
    wood2019: {
      title: "The Elusive Backfire Effect: Mass Attitudes' Steadfast Factual Adherence",
      author: "T. Wood & E. Porter",
      year: 2019,
      url: "https://doi.org/10.1007/s11109-018-9443-y",
      kind: "primaire",
      publisher: "Political Behavior"
    },
    nyhan2021: {
      title: "Why the backfire effect does not explain the durability of political misperceptions",
      author: "B. Nyhan",
      year: 2021,
      url: "https://sites.dartmouth.edu/nyhan/files/2021/04/pnas-not-backfire.pdf",
      kind: "secondaire",
      publisher: "PNAS (PDF hébergé par l'auteur, Dartmouth)"
    },
    mccrae1992: {
      title: "An Introduction to the Five-Factor Model and Its Applications",
      author: "R. R. McCrae & O. P. John",
      year: 1992,
      url: "https://doi.org/10.1111/j.1467-6494.1992.tb00970.x",
      kind: "secondaire",
      publisher: "Journal of Personality"
    },
    soto2019: {
      title: "How Replicable Are Links Between Personality Traits and Consequential Life Outcomes? The Life Outcomes of Personality Replication Project",
      author: "C. J. Soto",
      year: 2019,
      url: "https://doi.org/10.1177/0956797619831612",
      kind: "primaire",
      publisher: "Psychological Science"
    },
    letexierConv: {
      title: "The infamous Stanford prison experiment was flawed – so why is it still so influential today?",
      author: "University of Melbourne (The Conversation)",
      year: 2025,
      url: "https://findanexpert.unimelb.edu.au/news/98029-the-infamous-stanford-prison-experiment-was-flawed-%E2%80%93-so-why-is-it-still-so-influential-today",
      kind: "secondaire",
      publisher: "University of Melbourne — sur les travaux de T. Le Texier (2018-2019)"
    }
  },

  lessons: [
    {
      id: "biais",
      title: "Biais cognitifs & Système 1 / Système 2",
      minutes: 4,
      takeaway: "Ton cerveau prend des raccourcis en permanence : ils sont utiles, mais prévisibles — donc exploitables, par toi comme contre toi.",
      punchline: "« Ce n'est pas que vous êtes de mauvaise foi : c'est que votre cerveau cherche d'abord à vous donner raison. »",
      cards: [
        {
          title: "Deux vitesses de pensée",
          text: "**Système 1** : rapide, automatique, sans effort (reconnaître un visage, finir « pain au… »). **Système 2** : lent, coûteux, délibéré (calculer 17 × 24). Kahneman, Nobel d'économie 2002, résume : le Système 2 est paresseux et valide souvent ce que le Système 1 lui propose. Les biais naissent là.",
          sources: ["kahneman2003"]
        },
        {
          title: "Les 3 raccourcis de 1974",
          text: "Tversky & Kahneman décrivent 3 **heuristiques** :\n- **Disponibilité** : ce qui vient vite à l'esprit paraît fréquent.\n- **Représentativité** : on juge sur la ressemblance au stéréotype.\n- **Ancrage** : un chiffre tiré d'une roue truquée (10 ou 65) a suffi à faire varier l'estimation des pays africains à l'ONU (médianes 25 % vs 45 %).",
          sources: ["tversky1974"]
        },
        {
          title: "Confirmation & raisonnement motivé",
          text: "**Biais de confirmation** : on cherche et on interprète les preuves dans le sens de ce qu'on croit déjà. **Raisonnement motivé** (Kunda, 1990) : on arrive aux conclusions qu'on désire… mais seulement si on peut les justifier de façon plausible. Bonne nouvelle : de bons arguments bornent la mauvaise foi.",
          sources: ["nickerson1998", "kunda1990"]
        },
        {
          title: "Dunning-Kruger, avec nuances",
          text: "En 1999, les participants du quart le plus faible (12e centile) se plaçaient vers le 62e ; les meilleurs se sous-estimaient un peu. **Mais** une partie du motif graphique est un artefact statistique (régression vers la moyenne, effet « meilleur que la moyenne »). Le débat continue : l'effet existe sans doute, en plus petit que le mème.",
          sources: ["kruger1999", "gignac2023", "iza17687"]
        },
        {
          title: "Le négatif pèse plus lourd",
          text: "**Biais de négativité** : une mauvaise info marque plus qu'une bonne (Baumeister, 2001). **Aversion à la perte** (théorie des perspectives, 1979) : la courbe de valeur est plus pentue pour les pertes que pour les gains. **Nuance** : Gal & Rucker (2018) contestent sa généralité ; l'effet dépend du contexte.",
          sources: ["baumeister2001", "rozin2001", "kahneman1979", "galrucker2018"]
        }
      ],
      quiz: [
        {
          q: "Dans l'expérience de 1974, qu'est-ce qui a fait varier l'estimation du pourcentage de pays africains à l'ONU ?",
          choices: ["Le niveau d'études des participants", "Le nombre tiré au hasard sur une roue", "L'heure de passage", "Le fait d'être payé"],
          answer: 1,
          explain: "C'est l'effet d'ancrage : un nombre sans rapport (10 ou 65) tiraille l'estimation (médianes 25 % vs 45 %).",
          sources: ["tversky1974"]
        },
        {
          q: "Vrai ou faux : dans l'étude de Kruger & Dunning (1999), les plus compétents avaient tendance à se sous-estimer légèrement.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : le quart supérieur sous-estimait un peu son rang, pendant que le quart inférieur se surestimait fortement.",
          sources: ["kruger1999"]
        },
        {
          q: "Selon Ziva Kunda (1990), le raisonnement motivé…",
          choices: ["Permet de croire n'importe quoi", "N'existe que chez les extrémistes", "Mène aux conclusions désirées, tant qu'on peut les justifier de façon plausible", "Disparaît chez les experts"],
          answer: 2,
          explain: "La motivation oriente le raisonnement, mais elle est contrainte par la possibilité de construire une justification qui tient la route.",
          sources: ["kunda1990"]
        },
        {
          q: "Vrai ou faux : l'aversion à la perte est un fait établi que plus personne ne discute.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : elle est centrale dans la théorie des perspectives (1979), mais Gal & Rucker (2018) contestent qu'elle soit générale. Le consensus actuel parle d'un effet réel mais dépendant du contexte.",
          sources: ["kahneman1979", "galrucker2018"]
        },
        {
          q: "Laquelle de ces activités relève surtout du Système 1 ?",
          choices: ["Remplir sa déclaration d'impôts", "Comparer deux contrats d'assurance", "Calculer 17 × 24", "Lire l'émotion sur un visage en une fraction de seconde"],
          answer: 3,
          explain: "Le Système 1 est rapide et automatique, comme la lecture d'une émotion ; les autres tâches demandent l'effort du Système 2.",
          sources: ["kahneman2003"]
        }
      ],
      mission: {
        title: "Défi de la semaine : l'avocat de l'autre camp",
        text: "La prochaine fois que tu veux partager un article qui te donne raison, stop : cherche pendant 5 minutes le **meilleur** argument du camp d'en face et écris-le en une phrase qu'il pourrait signer. Si tu n'y arrives pas, tu ne connais pas encore assez le sujet."
      }
    },

    {
      id: "influence",
      title: "Influence & persuasion",
      minutes: 4,
      takeaway: "On est influencé par les autres, la répétition, la formulation et l'autorité bien plus qu'on ne le croit : connaître les leviers protège autant qu'il arme.",
      punchline: "« Même chiffres, autres mots, autre décision : ici, on débat du fond, pas de l'emballage. »",
      cards: [
        {
          title: "Les 7 leviers de Cialdini",
          text: "Dans « Influence » (1984), Robert Cialdini liste 6 principes : **réciprocité**, **engagement & cohérence**, **preuve sociale**, **sympathie**, **autorité**, **rareté**. Il en ajoute un 7e en 2016 (« Pre-Suasion ») : l'**unité**, le sentiment de partager une identité (« nous »). Ces leviers marchent souvent hors de notre conscience.",
          sources: ["cialdini2004", "cialdiniUnity"]
        },
        {
          title: "Effet de simple exposition",
          text: "Zajonc (1968) : présenter plus souvent des mots inventés ou des caractères inconnus suffit à les faire juger plus « positifs ». Pas besoin d'argument : la **familiarité** crée de la préférence. D'où l'importance de la notoriété, des slogans répétés… et la méfiance à avoir face à ce qui te semble vrai juste parce que tu l'as souvent entendu.",
          sources: ["zajonc1968"]
        },
        {
          title: "Le cadrage (framing)",
          text: "Tversky & Kahneman (1981), épidémie fictive menaçant 600 personnes. Formulé en vies **sauvées**, 72 % choisissent le plan sûr. Formulé en **morts**, 78 % choisissent le plan risqué. Les chiffres sont identiques : seule la formulation change. Tout discours politique est un cadrage.",
          sources: ["tversky1981"]
        },
        {
          title: "Preuve sociale & conformité",
          text: "Asch (1956) : face à un groupe unanime qui se trompe sur la longueur de lignes, environ un tiers des réponses s'alignent sur l'erreur ; un quart des sujets ne cède jamais, et un seul allié fait chuter la conformité. À l'hôtel (2008), « la majorité des clients réutilisent leur serviette » fait mieux (≈ 44 % vs 35 %) que l'argument écologique.",
          sources: ["asch1956", "goldstein2008"]
        },
        {
          title: "Milgram : l'obéissance",
          text: "1963 : 26 participants sur 40 (65 %) vont jusqu'au choc maximal de « 450 volts » (fictif) sur ordre d'un expérimentateur. Beaucoup tremblent, protestent, rient nerveusement. Burger (2009), réplication partielle arrêtée à 150 V pour raisons éthiques : obéissance à peine plus faible. L'interprétation (« obéissance aveugle ») reste débattue.",
          sources: ["milgram1963", "burger2009"]
        }
      ],
      quiz: [
        {
          q: "Quel principe Cialdini a-t-il ajouté en 2016 à sa liste initiale ?",
          choices: ["La rareté", "L'unité", "L'autorité", "La réciprocité"],
          answer: 1,
          explain: "L'unité (identité partagée) a été ajoutée dans « Pre-Suasion » (2016) ; les cinq autres options faisaient partie des 6 principes de 1984.",
          sources: ["cialdiniUnity"]
        },
        {
          q: "Vrai ou faux : dans l'expérience de Milgram publiée en 1963, environ 65 % des participants sont allés jusqu'au choc maximal.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : 26 sur 40. Les chocs étaient fictifs, mais les participants l'ignoraient.",
          sources: ["milgram1963"]
        },
        {
          q: "Dans l'étude des serviettes d'hôtel (2008), quel message a le mieux fonctionné ?",
          choices: ["« Protégez l'environnement »", "« Économisez l'eau de la planète »", "« La majorité des clients réutilisent leur serviette »", "Aucun message"],
          answer: 2,
          explain: "La norme sociale descriptive bat l'argument écologique — et encore plus quand elle concerne les clients de la même chambre.",
          sources: ["goldstein2008"]
        },
        {
          q: "Chez Asch (1956), qu'est-ce qui réduit fortement la conformité ?",
          choices: ["Un seul allié qui donne la bonne réponse", "Un groupe plus nombreux", "Une récompense en argent", "Des lignes plus courtes"],
          answer: 0,
          explain: "Briser l'unanimité suffit : dès qu'un partenaire répond juste, les erreurs de conformité chutent nettement.",
          sources: ["asch1956"]
        },
        {
          q: "Vrai ou faux : changer uniquement la formulation d'un problème, sans toucher aux chiffres, peut inverser le choix majoritaire.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : c'est l'effet de cadrage (72 % pour l'option sûre en « vies sauvées » contre 78 % pour l'option risquée en « morts »).",
          sources: ["tversky1981"]
        }
      ],
      mission: {
        title: "Défi de la semaine : chasseur de leviers",
        text: "Prends 3 pubs, tracts ou posts politiques de ta semaine. Pour chacun, note quel levier de Cialdini est utilisé (rareté ? autorité ? preuve sociale ? unité ?) et comment le message serait formulé avec un **cadrage inverse**. Bonus : teste un des deux cadrages sur un ami."
      }
    },

    {
      id: "emotions",
      title: "Émotions, empathie & intelligence émotionnelle",
      minutes: 4,
      takeaway: "Percevoir et réguler les émotions, ça s'apprend ; l'empathie a plusieurs visages, et la meilleure arme relationnelle reste d'écouter vraiment.",
      punchline: "« Je ne vais pas vous couper : je veux être sûr d'avoir bien compris ce que vous dites. »",
      cards: [
        {
          title: "L'intelligence émotionnelle (IE)",
          text: "Définie en 1990 par Salovey & Mayer : la capacité à percevoir ses émotions et celles des autres, à les distinguer et à s'en servir pour guider pensée et action. Modèle en 4 branches : **percevoir**, **utiliser**, **comprendre**, **gérer**. Nuance : le lien avec la performance au travail varie selon les métiers (méta-analyse, 2010). « L'IE compte plus que le QI » est un slogan, pas un résultat.",
          sources: ["salovey1990", "mayer2008", "joseph2010"]
        },
        {
          title: "Réguler : recadrer > réprimer",
          text: "Modèle de Gross (1998) : on peut agir **en amont** (choisir la situation, déplacer l'attention, **réévaluer** son sens) ou **en aval** (étouffer l'expression). La réévaluation est souvent plus efficace et moins coûteuse que la suppression. Avant un débat : « c'est un défi », pas « c'est une menace ».",
          sources: ["gross1998", "gross2002"]
        },
        {
          title: "Les empathies",
          text: "Davis (1983) mesure 4 facettes : **prise de perspective** (comprendre), **souci empathique** (se soucier), **détresse personnelle** (être submergé), **imagination**. Singer & Klimecki (2014) : la détresse empathique épuise, la **compassion** donne envie d'aider. Bloom (2017) : l'empathie est un projecteur biaisé vers ceux qui nous ressemblent.",
          sources: ["davis1983", "singer2014", "bloom2017"]
        },
        {
          title: "L'écoute active",
          text: "Carl Rogers (1957) : écoute empathique, considération positive inconditionnelle, authenticité. En pratique : reformuler, poser des questions ouvertes, ne pas juger. Weger et al. (2014, 115 étudiants) : face à l'écoute active, les gens se sentent **mieux compris** qu'avec des conseils ou de simples « d'accord ».",
          sources: ["rogers1957", "weger2014"]
        },
        {
          title: "L'effet gaffe (pratfall)",
          text: "Aronson et al. (1966) : un candidat **très compétent** qui renverse son café devient plus sympathique ; un candidat **moyen** qui fait la même gaffe devient moins sympathique. Leçon : l'imperfection humanise seulement si ta compétence est déjà établie. Étude ancienne (48 étudiants) : à prendre comme piste, pas comme loi.",
          sources: ["aronson1966"]
        }
      ],
      quiz: [
        {
          q: "Qui a proposé la première définition scientifique de l'intelligence émotionnelle, en 1990 ?",
          choices: ["Daniel Goleman", "Carl Rogers", "Daniel Kahneman", "Peter Salovey & John Mayer"],
          answer: 3,
          explain: "Salovey & Mayer (1990). Goleman a popularisé le concept dans un best-seller en 1995.",
          sources: ["salovey1990"]
        },
        {
          q: "Vrai ou faux : faire une gaffe rend toujours plus sympathique.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : dans l'étude de 1966, la gaffe aide le candidat très compétent mais dessert le candidat moyen.",
          sources: ["aronson1966"]
        },
        {
          q: "Dans le modèle de Gross, quelle stratégie agit « en amont », avant que l'émotion ne soit pleinement déclenchée ?",
          choices: ["Serrer les dents et ne rien montrer", "Réévaluer le sens de la situation", "Crier un bon coup après", "Boire un verre"],
          answer: 1,
          explain: "La réévaluation cognitive change l'interprétation de la situation en amont ; la suppression agit sur l'expression, en aval.",
          sources: ["gross1998"]
        },
        {
          q: "Selon Singer & Klimecki (2014), quelle réaction à la souffrance d'autrui favorise l'envie d'aider sans épuiser ?",
          choices: ["La compassion", "La détresse empathique", "L'indifférence"],
          answer: 0,
          explain: "La détresse empathique est centrée sur soi et épuisante ; la compassion est tournée vers l'autre et associée à des émotions positives.",
          sources: ["singer2014"]
        },
        {
          q: "Vrai ou faux : dans l'étude de Weger et al. (2014), les participants écoutés activement se sentaient mieux compris que ceux qui recevaient des conseils.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai. En revanche, la satisfaction globale de la conversation n'était pas plus élevée qu'avec des conseils.",
          sources: ["weger2014"]
        }
      ],
      mission: {
        title: "Défi de la semaine : 10 minutes sans conseil",
        text: "Lors d'une discussion avec quelqu'un qui te parle d'un problème, interdiction de donner un conseil pendant 10 minutes. Seulement : reformuler (« si je comprends bien… »), questions ouvertes, silences. À la fin, demande-lui : « Est-ce que tu t'es senti compris ? »"
      }
    },

    {
      id: "science-psy",
      title: "Lire la science psy sans se faire avoir",
      minutes: 4,
      takeaway: "Une étude isolée, petite et spectaculaire, n'est pas une loi : cherche la réplication, la taille de l'échantillon et la taille de l'effet.",
      punchline: "« Intéressant. Ça a été répliqué ? »",
      cards: [
        {
          title: "La crise de la réplication",
          text: "2015 : un collectif de chercheurs refait 100 études de psychologie. 97 % des originales étaient « significatives », contre **36 %** des réplications, avec des effets moitié plus faibles. En 2018, 13 des 21 études de sciences sociales publiées dans Nature et Science se répliquent (62 %). Cause majeure : petits échantillons et analyses trop flexibles.",
          sources: ["osc2015", "camerer2018", "simmons2011"]
        },
        {
          title: "Mythe : « 93 % de non-verbal »",
          text: "La règle 7-38-55 vient de deux petites expériences de 1967 : des **mots isolés** prononcés sur un ton **contradictoire**, pour juger une **attitude** (aimer / ne pas aimer). Mehrabian lui-même précise que ces chiffres ne s'appliquent pas hors de ce cadre. Non, ton discours ne compte pas pour 7 %.",
          sources: ["mehrabian1967", "mehrabianSite"]
        },
        {
          title: "Mythe : le « power posing »",
          text: "2010 : 42 participants, 2 minutes en posture de « superhéros » → plus de testostérone, moins de cortisol, plus de prise de risque. 2015 : Ranehill et al. refont l'étude avec 200 personnes : **aucun effet** sur les hormones ni le risque, juste un sentiment de puissance. En 2016, la première autrice déclare ne plus y croire.",
          sources: ["carney2010", "ranehill2015", "carney2016"]
        },
        {
          title: "L'« effet boomerang », plus rare que prévu",
          text: "2010 : Nyhan & Reifler observent que corriger une fausse info peut parfois la renforcer chez les plus convaincus. 2019 : Wood & Porter testent 52 sujets sur plus de 10 100 personnes : **aucun** effet boomerang. Bilan (Nyhan, 2021) : les corrections marchent un peu, mais leur effet s'estompe. Corriger reste utile.",
          sources: ["nyhan2010", "wood2019", "nyhan2021"]
        },
        {
          title: "Ce qui tient : le Big Five",
          text: "Le modèle des 5 grands traits (**OCEAN**) : Ouverture, Conscienciosité, Extraversion, Agréabilité, Névrosisme (stabilité émotionnelle). Il est issu de l'analyse du langage et des questionnaires. En 2019, 87 % de 78 liens traits ↔ vie réelle se répliquent, avec des effets souvent un peu plus faibles.",
          sources: ["mccrae1992", "soto2019"]
        }
      ],
      quiz: [
        {
          q: "Dans le grand projet de réplication de 2015, quelle part des 100 études a donné un résultat significatif à nouveau ?",
          choices: ["Environ 10 %", "Environ 36 %", "Environ 75 %", "Environ 97 %"],
          answer: 1,
          explain: "36 % des réplications étaient significatives, contre 97 % des études originales.",
          sources: ["osc2015"]
        },
        {
          q: "Vrai ou faux : Mehrabian a démontré que 93 % de toute communication est non verbale.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : ses chiffres concernent un cadre très étroit (mots isolés, ton contradictoire, jugement d'attitude) et il met lui-même en garde contre leur généralisation.",
          sources: ["mehrabian1967", "mehrabianSite"]
        },
        {
          q: "Qu'a trouvé la réplication de Ranehill et al. (2015) sur le « power posing » ?",
          choices: ["Un effet hormonal deux fois plus fort", "Un effet uniquement chez les hommes", "Aucun effet sur les hormones ni la prise de risque, seulement un sentiment de puissance"],
          answer: 2,
          explain: "Avec 200 participants, aucun effet sur testostérone, cortisol ou risque ; seul le ressenti de puissance augmentait.",
          sources: ["ranehill2015"]
        },
        {
          q: "Vrai ou faux : selon Wood & Porter (2019), l'effet boomerang des corrections est rare ; corriger les fausses infos améliore en général la justesse des croyances.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : 52 sujets testés, aucun effet boomerang détecté. Nyhan (2021) ajoute que l'effet des corrections s'estompe avec le temps.",
          sources: ["wood2019", "nyhan2021"]
        },
        {
          q: "Lequel de ces traits ne fait PAS partie du Big Five ?",
          choices: ["Ouverture", "Conscienciosité", "Charisme", "Névrosisme"],
          answer: 2,
          explain: "Les 5 traits sont Ouverture, Conscienciosité, Extraversion, Agréabilité et Névrosisme.",
          sources: ["mccrae1992"]
        }
      ],
      mission: {
        title: "Défi de la semaine : le fact-check d'une « étude »",
        text: "Trouve un article ou un post qui commence par « Une étude montre que… ». Remonte à l'étude originale et note : nombre de participants, pays, année, effet mesuré, réplication ou non. Résume en 2 lignes : « ce que dit l'étude » vs « ce que dit le titre »."
      }
    }
  ],

  glossary: [
    { term: "Heuristique", def: "Raccourci mental qui permet de juger vite, au prix d'erreurs prévisibles (disponibilité, représentativité, ancrage).", sources: ["tversky1974"] },
    { term: "Ancrage", def: "Tendance à rester accroché à un premier chiffre, même arbitraire, quand on fait une estimation.", sources: ["tversky1974"] },
    { term: "Biais de confirmation", def: "Chercher, interpréter et retenir surtout les informations qui confirment ce qu'on pense déjà.", sources: ["nickerson1998"] },
    { term: "Raisonnement motivé", def: "Raisonner pour atteindre la conclusion désirée, dans la limite de ce qu'on peut justifier de façon plausible.", sources: ["kunda1990"] },
    { term: "Effet Dunning-Kruger", def: "Les moins compétents surestiment leur niveau (Kruger & Dunning, 1999). Une partie du phénomène est un artefact statistique ; son ampleur réelle est débattue.", sources: ["kruger1999", "gignac2023"] },
    { term: "Aversion à la perte", def: "Une perte pèse plus qu'un gain de même taille (théorie des perspectives, 1979) ; sa généralité est discutée.", sources: ["kahneman1979", "galrucker2018"] },
    { term: "Cadrage (framing)", def: "Présenter la même information autrement (gains vs pertes) pour modifier les choix.", sources: ["tversky1981"] },
    { term: "Preuve sociale", def: "Tendance à juger correct ce que font ou pensent les autres, surtout ceux qui nous ressemblent.", sources: ["cialdini2004", "goldstein2008"] },
    { term: "Effet de simple exposition", def: "Plus on est exposé à quelque chose, plus on tend à l'apprécier, même sans argument.", sources: ["zajonc1968"] },
    { term: "Intelligence émotionnelle", def: "Capacité à percevoir, utiliser, comprendre et gérer les émotions (les siennes et celles des autres).", sources: ["salovey1990", "mayer2008"] },
    { term: "p-hacking", def: "Multiplier les analyses jusqu'à trouver un résultat « significatif » ; gonfle fortement les faux positifs.", sources: ["simmons2011"] },
    { term: "Big Five (OCEAN)", def: "Modèle de personnalité en 5 traits : Ouverture, Conscienciosité, Extraversion, Agréabilité, Névrosisme.", sources: ["mccrae1992", "soto2019"] }
  ],

  annexes: [
    {
      title: "Mythes vs réalité",
      text: "- **« 93 % de la communication est non verbale »** → faux en général : chiffres limités à des mots isolés au ton contradictoire (1967).\n- **« 2 minutes de power pose changent tes hormones »** → non répliqué (2015) ; la première autrice n'y croit plus (2016).\n- **« Corriger une fake news la renforce »** → rare ; les corrections aident, mais s'estompent (2019, 2021).\n- **« La volonté est une batterie qui se vide »** (ego depletion) → réplication à 23 labos, effet quasi nul (d = 0,04, 2016).\n- **« L'expérience de la prison de Stanford prouve que la situation fait de nous des bourreaux »** → méthode très critiquée : les gardiens avaient été orientés par l'équipe (Le Texier, 2018-2019).\n- **« Les incompétents se croient tous géniaux »** → Dunning-Kruger existe sans doute, mais plus petit et en partie statistique.",
      sources: ["mehrabianSite", "ranehill2015", "carney2016", "wood2019", "nyhan2021", "hagger2016", "letexierConv", "gignac2023"]
    },
    {
      title: "Fiche réflexe — lire une étude psy en 30 secondes",
      text: "- **Combien de participants ?** Quelques dizaines = prudence (power posing : 42 en 2010).\n- **Répliquée ?** Par une autre équipe, idéalement avec plus de monde.\n- **Préenregistrée ?** Hypothèses et analyses annoncées avant les données = moins de p-hacking.\n- **Taille d'effet ?** « Significatif » ne veut pas dire « important ».\n- **Qui, où, quand ?** Étudiants américains de 1966 ≠ électeurs français de 2027.\n- **Le titre colle-t-il au résumé ?** Souvent, non.",
      sources: ["simmons2011", "osc2015", "carney2010"]
    },
    {
      title: "Bibliographie commentée — 5 livres pour aller plus loin",
      text: "- **Daniel Kahneman, « Thinking, Fast and Slow » (2011 ; en français « Système 1 / Système 2 »)** : la bible des biais. Attention : certains passages sur l'amorçage ont été fragilisés par la crise de la réplication.\n- **Robert Cialdini, « Influence » (1984 ; édition augmentée 2021)** : les leviers de persuasion, très concret.\n- **Paul Bloom, « Against Empathy » (2016)** : provocateur et argumenté, pour distinguer empathie et compassion.\n- **Stuart Ritchie, « Science Fictions » (2020)** : fraude, biais, p-hacking — comment la science se trompe et se corrige.\n- **Hugo Mercier & Dan Sperber, « The Enigma of Reason » (2017)** : deux chercheurs français expliquent pourquoi on raisonne surtout pour convaincre les autres.",
      sources: ["kahneman2003", "cialdini2004", "bloom2017", "osc2015", "kunda1990"]
    }
  ]
});
