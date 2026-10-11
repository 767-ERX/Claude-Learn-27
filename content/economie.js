registerModule({
  id: "economie",
  title: "Économie & finances publiques",
  emoji: "💶",
  color: "#10b981",
  tagline: "PIB, dette, BCE, taux, notations : les chiffres qui font (et défont) une campagne.",
  updated: "2026-10",

  sources: {
    insee_pib_t2_2026: {
      title: "Comptes nationaux trimestriels – résultats détaillés du 2e trimestre 2026",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/statistiques/9033097",
      kind: "primaire",
      publisher: "Insee, Informations Rapides (28 août 2026)"
    },
    insee_cn_2025: {
      title: "Les comptes de la Nation en 2025 (Insee Première n° 2105)",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/statistiques/8996855",
      kind: "primaire",
      publisher: "Insee"
    },
    insee_ipc_sep2026: {
      title: "Indice des prix à la consommation – estimation provisoire de septembre 2026",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/statistiques/9056956",
      kind: "primaire",
      publisher: "Insee, Informations Rapides (30 septembre 2026)"
    },
    insee_chomage_t2_2026: {
      title: "Taux de chômage au sens du BIT – 2e trimestre 2026",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/statistiques/9032359",
      kind: "primaire",
      publisher: "Insee, Informations Rapides (7 août 2026)"
    },
    insee_def_chomeur: {
      title: "Définition : Chômeur (au sens du BIT)",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/metadonnees/definition/c1129",
      kind: "primaire",
      publisher: "Insee"
    },
    insee_def_taux_chomage: {
      title: "Définition : Taux de chômage (BIT)",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/metadonnees/definition/c1475",
      kind: "primaire",
      publisher: "Insee"
    },
    insee_apu_2025: {
      title: "Le compte des administrations publiques en 2025 (Insee Première n° 2106)",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/statistiques/8997691",
      kind: "primaire",
      publisher: "Insee (mai 2026)"
    },
    insee_apu_mars2026: {
      title: "Comptes nationaux des administrations publiques – premiers résultats 2025",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/statistiques/8956575",
      kind: "primaire",
      publisher: "Insee, Informations Rapides (27 mars 2026)"
    },
    insee_dette_t2_2026: {
      title: "Dette trimestrielle de Maastricht des administrations publiques – 2e trimestre 2026",
      author: "Insee",
      year: 2026,
      url: "https://www.insee.fr/fr/statistiques/9053525",
      kind: "primaire",
      publisher: "Insee, Informations Rapides (29 septembre 2026)"
    },
    insee_pauvrete_2023: {
      title: "Niveau de vie et pauvreté en 2023 (Insee Première n° 2063)",
      author: "Insee",
      year: 2025,
      url: "https://www.insee.fr/fr/statistiques/8600989",
      kind: "primaire",
      publisher: "Insee"
    },
    legifrance_constitution: {
      title: "Constitution du 4 octobre 1958 (texte consolidé)",
      author: "République française",
      year: 1958,
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356",
      kind: "primaire",
      publisher: "Légifrance"
    },
    legifrance_lolf: {
      title: "Loi organique n° 2001-692 du 1er août 2001 relative aux lois de finances (LOLF)",
      author: "République française",
      year: 2001,
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000394028",
      kind: "primaire",
      publisher: "Légifrance"
    },
    budget_plf2027: {
      title: "Projet de loi de finances pour 2027 – dossier de présentation",
      author: "Ministère de l'Économie et des Finances",
      year: 2026,
      url: "https://www.budget.gouv.fr/documentation/file-download/33478",
      kind: "primaire",
      publisher: "budget.gouv.fr"
    },
    eco_plf2027: {
      title: "Présentation du projet de budget pour 2027",
      author: "Ministère de l'Économie et des Finances",
      year: 2026,
      url: "https://www.economie.gouv.fr/actualites/video-presentation-du-projet-de-budget-pour-2027",
      kind: "primaire",
      publisher: "economie.gouv.fr (1er octobre 2026)"
    },
    publicsenat_hcfp2027: {
      title: "Budget 2027 : le Haut Conseil des finances publiques pointe des prévisions « optimistes » du gouvernement",
      author: "Public Sénat",
      year: 2026,
      url: "https://www.publicsenat.fr/actualites/economie/budget-2027-le-haut-conseil-des-finances-publiques-pointe-des-previsions-optimistes-du-gouvernement",
      kind: "secondaire",
      publisher: "Public Sénat"
    },
    hcfp: {
      title: "Haut Conseil des finances publiques – site officiel (avis)",
      author: "HCFP",
      year: 2026,
      url: "https://www.hcfp.fr/",
      kind: "primaire",
      publisher: "HCFP"
    },
    ccomptes: {
      title: "Cour des comptes – site officiel (rapports sur les finances publiques)",
      author: "Cour des comptes",
      year: 2026,
      url: "https://www.ccomptes.fr/",
      kind: "primaire",
      publisher: "Cour des comptes"
    },
    bdt_ccomptes2026: {
      title: "Finances publiques : « tous les signaux sont au rouge » en 2026, alerte la Cour des comptes",
      author: "Banque des Territoires",
      year: 2026,
      url: "https://www.banquedesterritoires.fr/finances-publiques-tous-les-signaux-sont-au-rouge-en-2026-alerte-la-cour-des-comptes",
      kind: "secondaire",
      publisher: "Banque des Territoires (juin 2026)"
    },
    ecb_mp_sep2026: {
      title: "Monetary policy decisions – 10 September 2026",
      author: "Banque centrale européenne",
      year: 2026,
      url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260910~314e508016.en.html",
      kind: "primaire",
      publisher: "BCE"
    },
    ecb: {
      title: "Banque centrale européenne – site officiel",
      author: "BCE",
      year: 2026,
      url: "https://www.ecb.europa.eu/",
      kind: "primaire",
      publisher: "BCE"
    },
    ymanci_bce: {
      title: "La BCE relève à nouveau ses taux directeurs en septembre 2026",
      author: "Ymanci",
      year: 2026,
      url: "https://ymanci.fr/credit-immobilier/actualites/nouveaux-taux-bce-septembre-2026/",
      kind: "secondaire",
      publisher: "Ymanci"
    },
    eurlex_tfue126: {
      title: "Traité sur le fonctionnement de l'UE – article 126 (déficits excessifs)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_126/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    eurlex_tfue127: {
      title: "Traité sur le fonctionnement de l'UE – article 127 (mandat du SEBC)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_127/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    eurlex_reg2024_1263: {
      title: "Règlement (UE) 2024/1263 du 29 avril 2024 relatif à la coordination efficace des politiques économiques et à la surveillance budgétaire multilatérale",
      author: "Parlement européen et Conseil",
      year: 2024,
      url: "https://eur-lex.europa.eu/eli/reg/2024/1263/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    eurlex_dec2024_2122: {
      title: "Décision (UE) 2024/2122 du Conseil du 26 juillet 2024 sur l'existence d'un déficit excessif en France",
      author: "Conseil de l'UE",
      year: 2024,
      url: "https://eur-lex.europa.eu/eli/dec/2024/2122/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    council_rec_2025: {
      title: "Recommandation du Conseil visant à ce qu'il soit mis fin à la situation de déficit excessif en France (21 janvier 2025)",
      author: "Conseil de l'UE",
      year: 2025,
      url: "https://data.consilium.europa.eu/doc/document/ST-5033-2025-REV-1/en/pdf",
      kind: "primaire",
      publisher: "Conseil de l'UE"
    },
    council_2026: {
      title: "Document du Conseil de l'UE (2026) – suivi de la procédure de déficit excessif de la France",
      author: "Conseil de l'UE",
      year: 2026,
      url: "https://data.consilium.europa.eu/doc/document/ST-11122-2026-INIT/en/pdf",
      kind: "primaire",
      publisher: "Conseil de l'UE"
    },
    cdj_pde2025: {
      title: "Procédure de déficit excessif : la Commission ne prend pas de mesures supplémentaires à l'égard de la France",
      author: "Le Club des juristes",
      year: 2025,
      url: "https://www.leclubdesjuristes.com/en-bref/procedure-de-deficit-excessif-la-commission-europeenne-ne-prend-pas-de-mesures-supplementaires-a-legard-de-la-france-10937/",
      kind: "secondaire",
      publisher: "Le Club des juristes"
    },
    aft: {
      title: "Agence France Trésor – émissions de dette et notations de la France",
      author: "Agence France Trésor",
      year: 2026,
      url: "https://www.aft.gouv.fr/",
      kind: "primaire",
      publisher: "AFT"
    },
    banque_france: {
      title: "Banque de France – site officiel",
      author: "Banque de France",
      year: 2026,
      url: "https://www.banque-france.fr/",
      kind: "primaire",
      publisher: "Banque de France"
    },
    idealinv_oat_aug2026: {
      title: "Dette française : l'OAT à 4,03 % et le spread face à l'Allemagne au plus haut depuis un mois",
      author: "Idéal Investisseur",
      year: 2026,
      url: "https://www.ideal-investisseur.fr/eco-politique/dette-francaise-loat-a-403-et-le-spread-face-a-lallemagne-au-plus-haut-depuis-un-mois-33893.html",
      kind: "secondaire",
      publisher: "Idéal Investisseur (28 août 2026)"
    },
    idealinv_spread: {
      title: "Spread OAT-Bund : suivi",
      author: "Idéal Investisseur",
      year: 2026,
      url: "https://www.ideal-investisseur.fr/marches/spread-oat-bund.html",
      kind: "secondaire",
      publisher: "Idéal Investisseur"
    },
    economiematin_fitch: {
      title: "Dette française : Fitch maintient la note A+ malgré des signaux alarmants",
      author: "Économie Matin",
      year: 2026,
      url: "https://www.economiematin.fr/dette-francaise-fitch-maintient-note-malgre-signaux-alarmants",
      kind: "secondaire",
      publisher: "Économie Matin (août 2026)"
    },
    moneyvox_moodys: {
      title: "Moody's maintient la note souveraine de la France, soulignant des progrès",
      author: "MoneyVox",
      year: 2026,
      url: "https://www.moneyvox.fr/votre-argent/actualites/108378/moodys-maintient-la-note-souveraine-de-la-france-soulignant-des-progres",
      kind: "secondaire",
      publisher: "MoneyVox (avril 2026)"
    },
    allnews_sp: {
      title: "S&P dégrade d'un cran la note de la France, à A+",
      author: "AWP / Allnews",
      year: 2025,
      url: "https://allnews.ch/node/145429",
      kind: "secondaire",
      publisher: "Allnews (octobre 2025)"
    },
    selectra_notations: {
      title: "Note de la France par Fitch : heure de publication et scénarios (tableau des notations et calendrier)",
      author: "Selectra",
      year: 2026,
      url: "https://selectra.info/finance/actualites/marche/fitch-note-france-heure-publication-vendredi-scenarios",
      kind: "secondaire",
      publisher: "Selectra (août 2026)"
    },
    infogouv_livreta: {
      title: "Le taux du livret A augmente à compter du 1er août 2026",
      author: "Gouvernement",
      year: 2026,
      url: "https://www.info.gouv.fr/actualite/augmentation-du-taux-du-livret-a-a-compter-du-1er-aout-2026",
      kind: "primaire",
      publisher: "info.gouv.fr"
    },
    lafinancepourtous: {
      title: "La finance pour tous – fiches pédagogiques (actions, obligations, taux)",
      author: "Institut pour l'éducation financière du public (IEFP)",
      year: 2026,
      url: "https://www.lafinancepourtous.com/",
      kind: "secondaire",
      publisher: "IEFP"
    },
    phillips1958: {
      title: "The Relation between Unemployment and the Rate of Change of Money Wage Rates in the United Kingdom, 1861–1957",
      author: "A. W. Phillips",
      year: 1958,
      url: "https://doi.org/10.1111/j.1468-0335.1958.tb00003.x",
      kind: "primaire",
      publisher: "Economica"
    },
    friedman1968: {
      title: "The Role of Monetary Policy",
      author: "M. Friedman",
      year: 1968,
      url: "https://www.jstor.org/stable/1831652",
      kind: "primaire",
      publisher: "American Economic Review"
    },
    blanchard_leigh2013: {
      title: "Growth Forecast Errors and Fiscal Multipliers",
      author: "O. Blanchard & D. Leigh",
      year: 2013,
      url: "https://doi.org/10.1257/aer.103.3.117",
      kind: "primaire",
      publisher: "American Economic Review: Papers & Proceedings"
    },
    ramey2019: {
      title: "Ten Years after the Financial Crisis: What Have We Learned from the Renaissance in Fiscal Research?",
      author: "V. Ramey",
      year: 2019,
      url: "https://doi.org/10.1257/jep.33.2.89",
      kind: "secondaire",
      publisher: "Journal of Economic Perspectives"
    },
    trabandt_uhlig2011: {
      title: "The Laffer Curve Revisited",
      author: "M. Trabandt & H. Uhlig",
      year: 2011,
      url: "https://doi.org/10.1016/j.jmoneco.2011.07.003",
      kind: "primaire",
      publisher: "Journal of Monetary Economics"
    },
    saez2012: {
      title: "The Elasticity of Taxable Income with Respect to Marginal Tax Rates: A Critical Review",
      author: "E. Saez, J. Slemrod & S. Giertz",
      year: 2012,
      url: "https://doi.org/10.1257/jel.50.1.3",
      kind: "secondaire",
      publisher: "Journal of Economic Literature"
    },
    piketty_saez2003: {
      title: "Income Inequality in the United States, 1913–1998",
      author: "T. Piketty & E. Saez",
      year: 2003,
      url: "https://doi.org/10.1162/00335530360535135",
      kind: "primaire",
      publisher: "Quarterly Journal of Economics"
    }
  },

  lessons: [
    // ─────────────────────────────────────────────── (a)
    {
      id: "indicateurs",
      title: "Les indicateurs de base",
      minutes: 4,
      takeaway: "PIB, inflation, chômage BIT, pouvoir d'achat : 4 thermomètres, chacun avec sa définition officielle et sa date. Un chiffre sans date ni source, c'est une rumeur.",
      punchline: "« Au 2e trimestre 2026, la croissance était nulle et le chômage à 8,3 % : ce n'est pas mon avis, c'est l'Insee. »",
      cards: [
        {
          title: "Le PIB, la taille du gâteau",
          text: "Le **PIB** mesure la valeur de tout ce qui est produit en un an dans le pays. La **croissance**, c'est sa variation « en volume » (hors hausse des prix).\n- 2025 : **+0,8 %** (après +1,5 % en 2024)\n- Source : comptes de la Nation, Insee, mai 2026",
          sources: ["insee_cn_2025"]
        },
        {
          title: "2026 : la croissance au point mort",
          text: "Au **2e trimestre 2026**, le PIB est **stable (0,0 %)** après **-0,2 %** au 1er trimestre (résultats détaillés du 28 août 2026). La 1re estimation disait +0,2 % : **les chiffres trimestriels sont révisés**, toujours vérifier la dernière version ! Acquis de croissance 2026 : **+0,3 %**.",
          sources: ["insee_pib_t2_2026"]
        },
        {
          title: "L'inflation remonte",
          text: "L'**IPC** (indice des prix à la consommation) mesure l'évolution des prix d'un panier de biens et services. En **septembre 2026**, l'inflation atteint **+3,0 % sur un an** (estimation provisoire, après +2,4 % en août), tirée par l'**énergie (+21,2 %)**. L'**IPCH**, version harmonisée européenne : **+3,4 %**.",
          sources: ["insee_ipc_sep2026"]
        },
        {
          title: "Chômage « au sens du BIT »",
          text: "Un **chômeur BIT** = 15 ans ou plus, **sans emploi** la semaine de référence, **disponible** sous 2 semaines et en **recherche active** (4 dernières semaines). Être inscrit à France Travail ne suffit pas !\n- T2 2026 : **8,3 %** (2,7 millions de personnes), plus haut niveau depuis fin 2020\n- 15-24 ans : **21,6 %**",
          sources: ["insee_def_chomeur", "insee_chomage_t2_2026"]
        },
        {
          title: "Pouvoir d'achat : revenus vs prix",
          text: "Le **pouvoir d'achat** du revenu disponible = ce que tes revenus (après impôts et prestations) permettent d'acheter, une fois l'inflation retirée. Mesuré « **par unité de consommation** » pour tenir compte de la taille des ménages.\n- T2 2026 : **-0,6 %** par UC\n- Taux d'épargne des ménages : **17,2 %** du revenu",
          sources: ["insee_pib_t2_2026"]
        }
      ],
      quiz: [
        {
          q: "Quelle a été la croissance du PIB français en 2025 (Insee, mai 2026) ?",
          choices: ["+1,5 %", "-0,2 %", "+2,1 %", "+0,8 %"],
          answer: 3,
          explain: "+0,8 % en 2025, après +1,5 % en 2024 (comptes de la Nation 2025).",
          sources: ["insee_cn_2025"]
        },
        {
          q: "Vrai ou faux : être inscrit à France Travail suffit pour être compté comme chômeur au sens du BIT.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux. Il faut être sans emploi, disponible et en recherche active. L'inscription seule n'est pas une démarche active selon l'Insee.",
          sources: ["insee_def_chomeur"]
        },
        {
          q: "Taux de chômage BIT en France au 2e trimestre 2026 ?",
          choices: ["10,5 %", "7,1 %", "8,3 %"],
          answer: 2,
          explain: "8,3 % (+0,2 point sur le trimestre, +0,7 point sur un an), soit 2,7 millions de chômeurs.",
          sources: ["insee_chomage_t2_2026"]
        },
        {
          q: "Quel poste explique surtout la hausse de l'inflation en septembre 2026 ?",
          choices: ["Les loyers", "Le tabac", "Les télécoms", "L'énergie"],
          answer: 3,
          explain: "L'énergie : +21,2 % sur un an selon l'estimation provisoire de l'Insee.",
          sources: ["insee_ipc_sep2026"]
        },
        {
          q: "Vrai ou faux : la croissance du 2e trimestre 2026 a été révisée à la baisse entre la première estimation et les résultats détaillés.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : de +0,2 % (1re estimation, juillet) à 0,0 % (résultats détaillés, 28 août 2026).",
          sources: ["insee_pib_t2_2026"]
        }
      ],
      mission: {
        title: "Défi : ton tableau de bord perso",
        text: "Va sur insee.fr, page d'accueil : note dans ton téléphone les 4 derniers chiffres (PIB, inflation, chômage, pouvoir d'achat) AVEC leur date. Le 15 octobre 2026, vérifie si l'inflation définitive de septembre confirme les 3,0 % provisoires."
      }
    },

    // ─────────────────────────────────────────────── (b)
    {
      id: "budget",
      title: "Budget de l'État & finances publiques",
      minutes: 5,
      takeaway: "Le budget se vote chaque automne (loi de finances + PLFSS) sous des délais constitutionnels stricts. Déficit 2025 : 5,1 % du PIB ; dette : 119 % du PIB mi-2026.",
      punchline: "« Déficit, c'est le trou de l'année ; dette, c'est la somme de tous les trous. Ne confonds pas le seau et la fuite. »",
      cards: [
        {
          title: "La LOLF, mode d'emploi du budget",
          text: "La **loi organique relative aux lois de finances** (LOLF, 1er août 2001) fixe les règles du budget de l'État : crédits rangés en **missions** et **programmes**, objectifs de performance, calendrier. Elle s'applique depuis le budget 2006 et a été modernisée en 2021.",
          sources: ["legifrance_lolf"]
        },
        {
          title: "PLF et PLFSS : deux budgets",
          text: "- **Loi de finances** (PLF) : recettes et dépenses de l'**État**.\n- **Loi de financement de la sécurité sociale** (PLFSS) : retraites, santé, famille.\nLe **PLF 2027** a été présenté en Conseil des ministres le **1er octobre 2026** : objectif de déficit **5,0 % du PIB en 2027** (après 5,4 % attendus en 2026), croissance prévue **1 %**.",
          sources: ["eco_plf2027", "budget_plf2027"]
        },
        {
          title: "Art. 47 et 49.3 : le chrono",
          text: "**Art. 47** : le Parlement a **70 jours** pour voter le PLF, sinon le gouvernement peut l'appliquer **par ordonnance** (50 jours pour le PLFSS, art. 47-1).\n**Art. 49 al. 3** : le gouvernement engage sa responsabilité ; le texte passe sauf **motion de censure** votée. Depuis 2008, illimité pour PLF/PLFSS, **un seul autre texte** par session.",
          sources: ["legifrance_constitution"]
        },
        {
          title: "Déficit et dette : les vrais chiffres",
          text: "- **Déficit public 2025** : **152,5 Md€**, soit **5,1 % du PIB** (5,8 % en 2024)\n- **Dette fin 2025** : **115,7 % du PIB**\n- **Dette fin T2 2026** : **3 595,5 Md€**, soit **119,0 % du PIB**\nC'est la dette « de Maastricht » (brute, toutes administrations publiques).",
          sources: ["insee_apu_2025", "insee_dette_t2_2026"]
        },
        {
          title: "Qui surveille ?",
          text: "- **Prélèvements obligatoires** 2025 : **43,6 % du PIB** ; **dépense publique** : **57,3 %**.\n- **Cour des comptes** (art. 47-2) : contrôle et certifie les comptes ; en juin 2026 : « tous les signaux sont au rouge ».\n- **Haut Conseil des finances publiques** : juge le réalisme des prévisions ; il a qualifié celles du PLF 2027 d'« optimistes ».",
          sources: ["insee_apu_2025", "ccomptes", "bdt_ccomptes2026", "hcfp", "publicsenat_hcfp2027"]
        }
      ],
      quiz: [
        {
          q: "Combien de jours le Parlement a-t-il pour se prononcer sur le projet de loi de finances avant un possible recours aux ordonnances ?",
          choices: ["40 jours", "50 jours", "70 jours", "90 jours"],
          answer: 2,
          explain: "70 jours (art. 47 de la Constitution). 50 jours pour le PLFSS (art. 47-1).",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Déficit public de la France en 2025 (Insee) ?",
          choices: ["5,1 % du PIB", "3,0 % du PIB", "6,2 % du PIB"],
          answer: 0,
          explain: "5,1 % du PIB (152,5 Md€), après 5,8 % en 2024.",
          sources: ["insee_apu_2025", "insee_apu_mars2026"]
        },
        {
          q: "Vrai ou faux : depuis 2008, le 49.3 peut être utilisé sans limite sur tous les textes.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : sans limite pour les lois de finances et de financement de la sécu, mais pour un seul autre texte par session.",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Dette publique (Maastricht) à la fin du 2e trimestre 2026 ?",
          choices: ["98 % du PIB", "112,6 % du PIB", "119,0 % du PIB", "135 % du PIB"],
          answer: 2,
          explain: "119,0 % du PIB, soit 3 595,5 Md€ (Insee, 29 septembre 2026).",
          sources: ["insee_dette_t2_2026"]
        },
        {
          q: "Quel texte fixe la structure du budget de l'État en missions et programmes ?",
          choices: ["La LOLF de 2001", "Le traité de Maastricht", "Le Code général des impôts"],
          answer: 0,
          explain: "La loi organique n° 2001-692 du 1er août 2001 (LOLF).",
          sources: ["legifrance_lolf"]
        }
      ],
      mission: {
        title: "Défi : suis le budget 2027 en live",
        text: "Cette semaine, ouvre le dossier de presse du PLF 2027 sur budget.gouv.fr et trouve UNE mesure qui te concerne. Puis note la date limite : 70 jours après le dépôt, le chrono de l'article 47 tombe. Bonus : lis l'article 47 entier sur Légifrance."
      }
    },

    // ─────────────────────────────────────────────── (c)
    {
      id: "europe-monnaie",
      title: "Europe & monnaie",
      minutes: 4,
      takeaway: "La BCE vise 2 % d'inflation et a remonté ses taux en 2026. Côté budget, la France est sous procédure de déficit excessif depuis juillet 2024, avec retour sous 3 % prévu en 2029.",
      punchline: "« Les 3 % de déficit, ce n'est pas une idée de Bruxelles tombée du ciel : c'est un protocole des traités, signé par la France. »",
      cards: [
        {
          title: "La BCE et son mandat",
          text: "La **Banque centrale européenne** pilote la monnaie de la zone euro. Son **objectif principal** : la **stabilité des prix** (art. 127 TFUE). Elle le traduit par une cible d'inflation de **2 % à moyen terme**. Elle est **indépendante** : ni Paris ni Bruxelles ne lui donnent d'ordres.",
          sources: ["eurlex_tfue127", "ecb"]
        },
        {
          title: "Les taux directeurs (sept. 2026)",
          text: "Le **10 septembre 2026**, la BCE relève ses 3 taux de **0,25 point** (effet le 16 septembre) :\n- **Facilité de dépôt : 2,50 %**\n- Refinancement principal : 2,65 %\n- Prêt marginal : 2,90 %\nMotif : le conflit au Moyen-Orient alimente l'inflation. C'est la 2e hausse depuis juin 2026.",
          sources: ["ecb_mp_sep2026", "ymanci_bce"]
        },
        {
          title: "Les règles budgétaires : 3 % et 60 %",
          text: "L'**article 126 TFUE** interdit les « déficits excessifs ». Les valeurs de référence (protocole n° 12) : **déficit ≤ 3 % du PIB**, **dette ≤ 60 % du PIB**. Si un pays dérape, le Conseil peut ouvrir une **procédure de déficit excessif** (PDE), avec recommandations, voire sanctions.",
          sources: ["eurlex_tfue126"]
        },
        {
          title: "La réforme de 2024",
          text: "En avril 2024, l'UE réforme sa gouvernance économique (règlement 2024/1263). Nouveauté : chaque État présente un **plan budgétaire-structurel à moyen terme** (4 ans, extensible à 7) et s'engage sur une **trajectoire de dépenses nettes**. Les 3 % et 60 % restent la référence.",
          sources: ["eurlex_reg2024_1263"]
        },
        {
          title: "La France sous PDE",
          text: "- **26 juillet 2024** : le Conseil constate un **déficit excessif** en France (5,5 % du PIB en 2023).\n- **21 janvier 2025** : recommandation : y mettre fin **d'ici 2029**, dépenses nettes plafonnées (+1,2 % en 2026 et 2027).\n- **2025 et juin 2026** : la Commission juge l'action suivie d'effets, la procédure est **en suspens**, pas close.",
          sources: ["eurlex_dec2024_2122", "council_rec_2025", "council_2026", "cdj_pde2025"]
        }
      ],
      quiz: [
        {
          q: "Quel est l'objectif principal de la BCE selon les traités ?",
          choices: ["La stabilité des prix", "Le plein emploi", "Un euro fort face au dollar", "Financer les États"],
          answer: 0,
          explain: "Art. 127 TFUE : l'objectif principal est la stabilité des prix. La BCE vise 2 % d'inflation à moyen terme.",
          sources: ["eurlex_tfue127", "ecb_mp_sep2026"]
        },
        {
          q: "Taux de la facilité de dépôt de la BCE depuis le 16 septembre 2026 ?",
          choices: ["2,00 %", "4,00 %", "2,50 %"],
          answer: 2,
          explain: "2,50 %, après une hausse de 0,25 point décidée le 10 septembre 2026.",
          sources: ["ecb_mp_sep2026"]
        },
        {
          q: "Vrai ou faux : la réforme de 2024 a supprimé les seuils de 3 % de déficit et 60 % de dette.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : les valeurs de référence du traité restent ; la réforme ajoute des plans à moyen terme et une trajectoire de dépenses nettes.",
          sources: ["eurlex_reg2024_1263", "eurlex_tfue126"]
        },
        {
          q: "Quand le Conseil de l'UE a-t-il constaté un déficit excessif en France ?",
          choices: ["Juillet 2024", "Mai 2017", "Mars 2026"],
          answer: 0,
          explain: "Décision (UE) 2024/2122 du 26 juillet 2024.",
          sources: ["eurlex_dec2024_2122"]
        },
        {
          q: "Selon la recommandation du Conseil de janvier 2025, la France doit corriger son déficit excessif d'ici…",
          choices: ["2026", "2027", "2029", "2035"],
          answer: 2,
          explain: "D'ici 2029, avec un plafond de croissance des dépenses nettes.",
          sources: ["council_rec_2025"]
        }
      ],
      mission: {
        title: "Défi : le jour J de la BCE",
        text: "La prochaine réunion de politique monétaire de la BCE est annoncée pour le 29 octobre 2026. Ce jour-là, va sur ecb.europa.eu (rubrique Press) et note : taux de dépôt, hausse ou pas, et la phrase qui justifie la décision. Explique-la à un ami en 30 secondes."
      }
    },

    // ─────────────────────────────────────────────── (d)
    {
      id: "marches",
      title: "Marchés & finance",
      minutes: 4,
      takeaway: "L'État emprunte via des OAT ; plus le taux monte, plus la dette coûte cher. Le spread avec l'Allemagne et les notes des agences mesurent la confiance des prêteurs.",
      punchline: "« Quand le taux de l'OAT grimpe, ce n'est pas Wall Street qui paie : c'est le budget, donc nous. »",
      cards: [
        {
          title: "L'OAT, l'emprunt de l'État",
          text: "L'État finance son déficit en émettant des **obligations assimilables du Trésor (OAT)**, gérées par l'**Agence France Trésor**. Le **taux à 10 ans** est le thermomètre : fin **août 2026**, autour de **4,0 %**. Hausse des taux = intérêts plus chers : selon le PLF, la charge d'intérêts passerait de **79,2 à 91,2 Md€** entre 2026 et 2027.",
          sources: ["aft", "idealinv_oat_aug2026", "eco_plf2027"]
        },
        {
          title: "Le spread OAT-Bund",
          text: "Le **spread**, c'est l'écart entre le taux français à 10 ans et le taux allemand (Bund), réputé le plus sûr de la zone euro. Mi-juillet 2026 : environ **77 points de base** (OAT 3,90 % contre Bund 3,13 %). Plus il s'élargit, plus les marchés jugent la France risquée.",
          sources: ["idealinv_spread", "idealinv_oat_aug2026"]
        },
        {
          title: "Les agences de notation",
          text: "Dernières décisions connues (à revérifier, ça bouge !) :\n- **Fitch** : **A+**, perspective stable (confirmée le 28 août 2026)\n- **Moody's** : **Aa3**, perspective **négative** (10 avril 2026)\n- **S&P** : **A+**, stable (dégradation du 17 octobre 2025)\nProchains rendez-vous annoncés : Moody's le 23 octobre, S&P le 27 novembre 2026.",
          sources: ["economiematin_fitch", "moneyvox_moodys", "allnews_sp", "selectra_notations", "aft"]
        },
        {
          title: "Actions vs obligations",
          text: "- **Action** : un bout d'entreprise. Rendement incertain (dividendes, plus-values), risque plus élevé.\n- **Obligation** : un prêt, avec intérêts fixés à l'avance. Si les taux du marché montent, le **prix des anciennes obligations baisse** (elles rapportent moins que les nouvelles).",
          sources: ["lafinancepourtous"]
        },
        {
          title: "Inflation et épargne",
          text: "Ce qui compte, c'est le **taux réel** = taux nominal - inflation.\n- **Livret A** : **1,7 %** depuis le 1er août 2026 (proposé par le gouverneur de la Banque de France)\n- **Inflation** : **3,0 %** en septembre 2026 (provisoire)\nRendement réel ≈ **-1,3 point** : ton épargne « sûre » perd du pouvoir d'achat.",
          sources: ["infogouv_livreta", "banque_france", "insee_ipc_sep2026"]
        }
      ],
      quiz: [
        {
          q: "Que mesure le spread OAT-Bund ?",
          choices: ["L'écart entre la dette française et allemande en euros", "La différence de notation entre les deux pays", "L'écart de taux d'emprunt à 10 ans entre la France et l'Allemagne"],
          answer: 2,
          explain: "C'est l'écart de rendement entre l'OAT 10 ans et le Bund 10 ans, exprimé en points de base.",
          sources: ["idealinv_spread"]
        },
        {
          q: "Vrai ou faux : quand les taux du marché montent, le prix des obligations déjà émises baisse.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : une ancienne obligation qui rapporte moins que les nouvelles devient moins attractive, son prix baisse.",
          sources: ["lafinancepourtous"]
        },
        {
          q: "Quelle note Moody's attribue-t-elle à la France (décision du 10 avril 2026) ?",
          choices: ["A+ stable", "AAA stable", "BBB positive", "Aa3 négative"],
          answer: 3,
          explain: "Aa3 avec perspective négative, liée à la fragmentation politique selon l'agence.",
          sources: ["moneyvox_moodys"]
        },
        {
          q: "Taux du Livret A à partir du 1er août 2026 ?",
          choices: ["1,7 %", "1,5 %", "3,0 %"],
          answer: 0,
          explain: "1,7 %, contre 1,5 % auparavant.",
          sources: ["infogouv_livreta"]
        },
        {
          q: "Vrai ou faux : l'Agence France Trésor est l'organisme qui émet et gère la dette négociable de l'État.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : l'AFT émet les OAT et gère la dette de l'État.",
          sources: ["aft"]
        }
      ],
      mission: {
        title: "Défi : le 23 octobre",
        text: "Moody's doit se prononcer sur la France le 23 octobre 2026. Ce soir-là, cherche le communiqué et note : note maintenue ou dégradée ? perspective ? Puis regarde le lendemain si le spread OAT-Bund a bougé. Tu sauras enfin si les agences font vraiment bouger les marchés."
      }
    },

    // ─────────────────────────────────────────────── (e)
    {
      id: "debats",
      title: "Grands débats économiques",
      minutes: 5,
      takeaway: "Laffer, Phillips, multiplicateur, inégalités : chaque débat a une idée simple, des preuves empiriques et des désaccords réels. Cite les études, pas les slogans.",
      punchline: "« Trop d'impôt tue l'impôt ? Possible. Mais la vraie question, c'est : sommes-nous à droite ou à gauche du sommet ? »",
      cards: [
        {
          title: "La courbe de Laffer",
          text: "Idée : à 0 % d'impôt, recette nulle ; à 100 %, personne ne travaille, recette nulle aussi. Entre les deux, un **sommet**. Le débat : **où est-il ?** Trabandt & Uhlig (2011) estiment que les États-Unis et l'UE-14 sont plutôt **avant le sommet** pour l'impôt sur le travail, l'Europe étant plus proche du maximum pour l'impôt sur le capital.",
          sources: ["trabandt_uhlig2011"]
        },
        {
          title: "Laffer : ce qui fait consensus",
          text: "La clé est l'**élasticité du revenu imposable** : à quel point les gens déclarent moins quand le taux monte. Saez, Slemrod & Giertz (2012) montrent qu'elle varie selon les revenus et dépend beaucoup de l'**optimisation et de l'évasion**, donc des règles fiscales. Partisans de baisses d'impôts et de hausses s'appuient sur ces mêmes paramètres.",
          sources: ["saez2012"]
        },
        {
          title: "La courbe de Phillips",
          text: "**Phillips (1958)** observe au Royaume-Uni : quand le chômage est bas, les salaires montent plus vite. Tentation : « un peu plus d'inflation contre moins de chômage ». **Friedman (1968)** répond : à long terme, les **anticipations** s'ajustent et l'arbitrage disparaît (« taux de chômage naturel »). Le débat continue sur la pente de la courbe.",
          sources: ["phillips1958", "friedman1968"]
        },
        {
          title: "Le multiplicateur budgétaire",
          text: "1 € de dépense publique crée-t-il plus ou moins de 1 € de PIB ? **Blanchard & Leigh (2013)** : pendant la crise de 2010-2011, les prévisionnistes ont **sous-estimé** l'effet récessif de l'austérité. **Ramey (2019)** résume : souvent **entre 0,6 et 1** pour la dépense, plus élevé en récession ou à taux zéro. Tout dépend du contexte.",
          sources: ["blanchard_leigh2013", "ramey2019"]
        },
        {
          title: "Inégalités : les chiffres",
          text: "En France, en **2023**, le **taux de pauvreté** atteint **15,4 %** (9,8 millions de personnes), plus haut niveau depuis 1996 selon l'Insee. Le débat oppose ceux qui privilégient la **redistribution** et ceux qui insistent sur ses **effets sur l'incitation**. Piketty & Saez (2003) ont popularisé l'étude des **très hauts revenus** via les données fiscales.",
          sources: ["insee_pauvrete_2023", "piketty_saez2003"]
        }
      ],
      quiz: [
        {
          q: "Selon Friedman (1968), à long terme, l'arbitrage inflation-chômage…",
          choices: ["Se renforce", "Devient linéaire", "Disparaît, car les anticipations s'ajustent"],
          answer: 2,
          explain: "Avec des anticipations adaptées, le chômage revient vers son taux « naturel » quelle que soit l'inflation.",
          sources: ["friedman1968"]
        },
        {
          q: "Vrai ou faux : la courbe de Laffer prouve que baisser les impôts augmente toujours les recettes.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : ce n'est vrai que si l'on est au-delà du sommet. Les estimations (Trabandt & Uhlig 2011) placent la plupart des pays avant le sommet pour l'impôt sur le travail.",
          sources: ["trabandt_uhlig2011"]
        },
        {
          q: "Qu'ont montré Blanchard & Leigh (2013) ?",
          choices: ["Que les multiplicateurs budgétaires ont été sous-estimés au début des années 2010", "Que l'austérité n'a aucun effet", "Que la dette n'a pas d'importance"],
          answer: 0,
          explain: "Les erreurs de prévision de croissance étaient plus fortes là où la consolidation budgétaire était plus forte : multiplicateurs sous-estimés.",
          sources: ["blanchard_leigh2013"]
        },
        {
          q: "Taux de pauvreté en France en 2023 (Insee) ?",
          choices: ["9,8 %", "12,1 %", "15,4 %", "21,6 %"],
          answer: 2,
          explain: "15,4 %, soit 9,8 millions de personnes (France métropolitaine, logements ordinaires).",
          sources: ["insee_pauvrete_2023"]
        },
        {
          q: "Vrai ou faux : la courbe de Phillips originale (1958) portait sur les salaires nominaux au Royaume-Uni.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : Phillips reliait chômage et taux de variation des salaires nominaux, 1861-1957.",
          sources: ["phillips1958"]
        }
      ],
      mission: {
        title: "Défi : le test du slogan",
        text: "Écoute un débat politique cette semaine et attrape UNE phrase du type « baisser les impôts rapporte » ou « la dépense publique relance ». Demande-toi : quel multiplicateur ou quelle élasticité ce slogan suppose-t-il ? Note la réponse en 2 lignes avec une source de cette leçon."
      }
    }
  ],

  glossary: [
    { term: "PIB", def: "Produit intérieur brut : valeur de la production réalisée sur le territoire en une période. Sa variation en volume = la croissance.", sources: ["insee_cn_2025"] },
    { term: "IPC / IPCH", def: "Indice des prix à la consommation (Insee) et sa version harmonisée européenne, utilisée par la BCE.", sources: ["insee_ipc_sep2026"] },
    { term: "Chômeur au sens du BIT", def: "Personne de 15 ans ou plus, sans emploi, disponible sous 2 semaines et en recherche active d'emploi.", sources: ["insee_def_chomeur"] },
    { term: "Taux de chômage", def: "Part des chômeurs (BIT) dans la population active (actifs occupés + chômeurs).", sources: ["insee_def_taux_chomage"] },
    { term: "Déficit public", def: "Écart annuel entre dépenses et recettes de toutes les administrations publiques (État, sécu, collectivités).", sources: ["insee_apu_2025"] },
    { term: "Dette de Maastricht", def: "Dette brute consolidée des administrations publiques, référence pour les règles européennes.", sources: ["insee_dette_t2_2026"] },
    { term: "Prélèvements obligatoires", def: "Impôts et cotisations sociales effectives versés aux administrations publiques et à l'UE : 43,6 % du PIB en 2025.", sources: ["insee_apu_2025"] },
    { term: "LOLF", def: "Loi organique de 2001 qui organise le budget de l'État en missions et programmes.", sources: ["legifrance_lolf"] },
    { term: "Article 49.3", def: "Procédure par laquelle le gouvernement fait adopter un texte sans vote, sauf motion de censure.", sources: ["legifrance_constitution"] },
    { term: "Taux de la facilité de dépôt", def: "Taux auquel les banques placent leurs liquidités à la BCE : principal taux directeur (2,50 % depuis le 16 septembre 2026).", sources: ["ecb_mp_sep2026"] },
    { term: "Procédure de déficit excessif", def: "Procédure de l'art. 126 TFUE ouverte quand un État dépasse les valeurs de référence ; France concernée depuis juillet 2024.", sources: ["eurlex_tfue126", "eurlex_dec2024_2122"] },
    { term: "OAT", def: "Obligation assimilable du Trésor : titre de dette à moyen-long terme émis par l'État via l'Agence France Trésor.", sources: ["aft"] },
    { term: "Spread", def: "Écart de taux entre deux emprunts, ex. OAT 10 ans vs Bund 10 ans, en points de base (1 pb = 0,01 %).", sources: ["idealinv_spread"] },
    { term: "Multiplicateur budgétaire", def: "Variation du PIB provoquée par 1 € de dépense publique (ou d'impôt) en plus.", sources: ["ramey2019"] }
  ],

  annexes: [
    {
      title: "Chiffres clés (datés)",
      text: "- Croissance 2025 : +0,8 % (Insee, mai 2026)\n- PIB T2 2026 : 0,0 % après -0,2 % au T1\n- Inflation sept. 2026 : +3,0 % sur un an (provisoire) ; IPCH +3,4 %\n- Chômage BIT T2 2026 : 8,3 %\n- Déficit public 2025 : 5,1 % du PIB (152,5 Md€)\n- Dette fin T2 2026 : 119,0 % du PIB (3 595,5 Md€)\n- Prélèvements obligatoires 2025 : 43,6 % du PIB ; dépense publique : 57,3 %\n- PLF 2027 : déficit visé 5,0 % en 2027 (5,4 % attendus en 2026)\n- BCE, taux de dépôt : 2,50 % (16 sept. 2026)\n- Livret A : 1,7 % (1er août 2026)\n- Taux de pauvreté 2023 : 15,4 %",
      sources: ["insee_cn_2025", "insee_pib_t2_2026", "insee_ipc_sep2026", "insee_chomage_t2_2026", "insee_apu_2025", "insee_dette_t2_2026", "budget_plf2027", "ecb_mp_sep2026", "infogouv_livreta", "insee_pauvrete_2023"]
    },
    {
      title: "Fiche réflexe : lire un chiffre économique",
      text: "- **Qui ?** Insee, Banque de France, BCE, Eurostat = primaire. Un parti, un think tank = à recouper.\n- **Quand ?** Trimestre ou année ? Chiffre provisoire ou définitif ?\n- **Quoi ?** % du PIB ou milliards ? Volume ou valeur ? Sur un mois ou sur un an ?\n- **Révisé ?** Les comptes trimestriels bougent (ex. T2 2026 : +0,2 % puis 0,0 %).\n- **Comparé à quoi ?** Toujours demander « par rapport à quand et à qui ».",
      sources: ["insee_pib_t2_2026", "insee_ipc_sep2026"]
    },
    {
      title: "Bibliographie commentée",
      text: "- **Insee Première n° 2105 et 2106** (mai 2026) : les comptes 2025, la base de tout débat chiffré.\n- **PLF 2027** (budget.gouv.fr) : la version du gouvernement, à croiser avec l'avis du HCFP.\n- **Communiqués BCE** : une page, tous les mois et demi, l'essentiel de la politique monétaire.\n- **Ramey (2019)** : la meilleure synthèse accessible sur le multiplicateur.\n- **Saez, Slemrod & Giertz (2012)** : pour parler de Laffer sans dire de bêtises.",
      sources: ["insee_cn_2025", "insee_apu_2025", "budget_plf2027", "hcfp", "ecb", "ramey2019", "saez2012"]
    }
  ]
});
