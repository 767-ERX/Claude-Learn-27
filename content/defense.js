registerModule({
  id: "defense",
  title: "Défense, renseignement & diplomatie",
  emoji: "🛡️",
  color: "#ef4444",
  tagline: "Qui décide de la guerre, combien ça coûte, qui surveille qui, et comment la France pèse dans le monde.",
  updated: "2026-10",

  sources: {
    constitution: {
      title: "Constitution du 4 octobre 1958 (texte en vigueur)",
      author: "République française",
      year: 1958,
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356",
      kind: "primaire",
      publisher: "Légifrance"
    },
    codeDefense: {
      title: "Code de la défense (notamment art. L1111-1, L1121-1, R*1122-1)",
      author: "République française",
      year: 2026,
      url: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006071307",
      kind: "primaire",
      publisher: "Légifrance"
    },
    anFiche35: {
      title: "Fiche n° 65 : La déclaration de guerre et les interventions armées à l'étranger (mise à jour juillet 2024)",
      author: "Assemblée nationale",
      year: 2024,
      url: "https://www.assemblee-nationale.fr/dyn/contenu/telechargement/629170/file/Fiche%2065%20-%20La%20d%C3%A9claration%20de%20guerre%20et%20les%20interventions%20arm%C3%A9es%20%C3%A0%20l%C3%A9tranger_actualis%C3%A9e050724.pdf",
      kind: "secondaire",
      publisher: "Assemblée nationale"
    },
    cdjChef: {
      title: "Chef des armées « honorifique » ? Que dit le droit ?",
      author: "Le Club des juristes",
      year: 2024,
      url: "https://www.leclubdesjuristes.com/politique/chef-des-armees-honorifique-que-dit-le-droit-6462/",
      kind: "secondaire",
      publisher: "Le Club des juristes"
    },
    cdjConseil: {
      title: "Le Conseil de défense en temps de pandémie : un lieu stratégique et politique",
      author: "Le Club des juristes",
      year: 2020,
      url: "https://www.leclubdesjuristes.com/archives-cdj/le-conseil-de-defense-en-temps-de-pandemie-un-lieu-strategique-et-politique-3316/",
      kind: "secondaire",
      publisher: "Le Club des juristes"
    },
    emaCema: {
      title: "Biographie du chef d'état-major des armées (général d'armée aérienne Fabien Mandon)",
      author: "Ministère des Armées",
      year: 2025,
      url: "https://www.defense.gouv.fr/ema/chef-detat-major-armees/biographie-du-chef-detat-major-armees-0",
      kind: "primaire",
      publisher: "defense.gouv.fr"
    },
    lpmLivret: {
      title: "Livret de présentation de la LPM 2024-2030",
      author: "Ministère des Armées",
      year: 2023,
      url: "https://www.defense.gouv.fr/sites/default/files/ministere-armees/Livret%20de%20pr%C3%A9sentation%20de%20la%20LPM%202024-2030.pdf",
      kind: "primaire",
      publisher: "defense.gouv.fr"
    },
    lpmInfoGouv: {
      title: "La loi de programmation militaire, qu'est-ce que c'est ?",
      author: "Gouvernement",
      year: 2023,
      url: "https://www.info.gouv.fr/actualite/la-loi-de-programmation-militaire-quest-ce-que-cest",
      kind: "secondaire",
      publisher: "info.gouv.fr"
    },
    lcpLpm: {
      title: "Loi de programmation militaire 2024-2030 : les points clés du texte",
      author: "LCP",
      year: 2023,
      url: "https://lcp.fr/actualites/loi-de-programmation-militaire-2024-2030-les-points-cles-du-texte-193256",
      kind: "secondaire",
      publisher: "LCP-Assemblée nationale"
    },
    lpm2026: {
      title: "Loi n° 2026-791 du 16 août 2026 actualisant la programmation militaire pour les années 2024 à 2030 (JO du 18 août 2026)",
      author: "République française",
      year: 2026,
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFSCTA000054694833",
      kind: "primaire",
      publisher: "Légifrance"
    },
    lpm2026Senat: {
      title: "La loi en clair : projet de loi actualisant la programmation militaire 2024-2030",
      author: "Sénat",
      year: 2026,
      url: "https://www.senat.fr/travaux-parlementaires/textes-legislatifs/la-loi-en-clair/projet-de-loi-actualisant-la-programmation-militaire-pour-les-annees-2024-a-2030-et-portant-diverses-dispositions-interessant-la-defense.html",
      kind: "secondaire",
      publisher: "Sénat"
    },
    lpm2026Dossier: {
      title: "Dossier législatif : actualisation de la LPM 2024-2030",
      author: "Assemblée nationale",
      year: 2026,
      url: "https://www.assemblee-nationale.fr/dyn/17/dossiers/PJL_actualisation_loi_programmation_militaire_annees_2024_2030_diverses_dispositions_defense",
      kind: "primaire",
      publisher: "Assemblée nationale"
    },
    lpm2026Commission: {
      title: "Projet de loi actualisant la LPM : texte adopté par la commission de la défense",
      author: "Assemblée nationale",
      year: 2026,
      url: "https://www.assemblee-nationale.fr/dyn/17/textes/l17b2976_texte-adopte-commission",
      kind: "primaire",
      publisher: "Assemblée nationale"
    },
    cc2026: {
      title: "Décision n° 2026-907 DC du 6 août 2026 (loi actualisant la programmation militaire)",
      author: "Conseil constitutionnel",
      year: 2026,
      url: "https://www.conseil-constitutionnel.fr/decision/2026/2026907DC.htm",
      kind: "primaire",
      publisher: "Conseil constitutionnel"
    },
    brienne2025: {
      title: "Discours d'Emmanuel Macron aux armées : « L'engagement a été tenu » (13 juillet 2025)",
      author: "Ministère des Armées",
      year: 2025,
      url: "https://www.defense.gouv.fr/actualites/discours-demmanuel-macron-aux-armees-lengagement-ete-tenu",
      kind: "primaire",
      publisher: "defense.gouv.fr"
    },
    senatPlf2026: {
      title: "Avis sur le projet de loi de finances pour 2026 : Défense, équipement des forces",
      author: "Sénat, commission des affaires étrangères et de la défense",
      year: 2025,
      url: "https://www.senat.fr/rap/a25-141-8/a25-141-8_mono.html",
      kind: "primaire",
      publisher: "Sénat"
    },
    rns2025: {
      title: "Revue nationale stratégique 2025",
      author: "SGDSN / ministère des Armées (DGRIS)",
      year: 2025,
      url: "https://www.defense.gouv.fr/dgris/politique-defense/textes-reference/revue-nationale-strategique",
      kind: "primaire",
      publisher: "defense.gouv.fr"
    },
    rnsInfoGouv: {
      title: "Revue nationale stratégique : préparer la France à l'éventualité d'un conflit majeur en Europe",
      author: "Gouvernement",
      year: 2025,
      url: "https://www.info.gouv.fr/actualite/revue-nationale-strategique-preparer-la-france-a-leventualite-dune-conflit-majeur-en-europe",
      kind: "primaire",
      publisher: "info.gouv.fr"
    },
    montaigneRns: {
      title: "Revue nationale stratégique 2025 : progrès et limites",
      author: "Institut Montaigne",
      year: 2025,
      url: "https://institutmontaigne.org/expressions/revue-nationale-strategique-2025-progres-limites",
      kind: "secondaire",
      publisher: "Institut Montaigne"
    },
    otanLaHaye: {
      title: "The Hague Summit Declaration (25 juin 2025)",
      author: "OTAN, chefs d'État et de gouvernement",
      year: 2025,
      url: "https://www.ncia.nato.int/newsroom/news/the-hague-summit-declaration",
      kind: "primaire",
      publisher: "NATO / NCIA"
    },
    otanTraite: {
      title: "Traité de l'Atlantique Nord (Washington, 4 avril 1949)",
      author: "OTAN",
      year: 1949,
      url: "https://www.nato.int/cps/fr/natohq/official_texts_17120.htm",
      kind: "primaire",
      publisher: "nato.int"
    },
    dissuasion2020: {
      title: "Discours du Président de la République sur la stratégie de défense et de dissuasion (École de guerre, 7 février 2020)",
      author: "Emmanuel Macron",
      year: 2020,
      url: "https://www.elysee.fr/en/emmanuel-macron/2020/02/07/speech-of-the-president-of-the-republic-on-the-defense-and-deterrence-strategy",
      kind: "primaire",
      publisher: "elysee.fr"
    },
    dissuasion2026: {
      title: "Discours du Président de la République sur la dissuasion nucléaire (Île Longue, 2 mars 2026)",
      author: "Emmanuel Macron",
      year: 2026,
      url: "https://www.elysee.fr/front/pdf/elysee-module-26067-fr.pdf",
      kind: "primaire",
      publisher: "elysee.fr"
    },
    ileLongue2026: {
      title: "Visit to the Île Longue Operational Base (2 mars 2026)",
      author: "Présidence de la République",
      year: 2026,
      url: "https://www.elysee.fr/en/emmanuel-macron/2026/03/02/visit-to-the-ile-longue-operational-base",
      kind: "primaire",
      publisher: "elysee.fr"
    },
    norvege2026: {
      title: "Entretien avec Jonas Gahr Støre, Premier ministre du Royaume de Norvège (27 mai 2026)",
      author: "Présidence de la République",
      year: 2026,
      url: "https://www.elysee.fr/emmanuel-macron/2026/05/27/entretien-avec-jonas-gahr-store-premier-ministre-du-royaume-de-norvege",
      kind: "primaire",
      publisher: "elysee.fr"
    },
    finlande2026: {
      title: "Joint Statement on Finland's Participation in French Forward Deterrence (14 septembre 2026)",
      author: "France & Finlande",
      year: 2026,
      url: "https://www.elysee.fr/en/emmanuel-macron/2026/09/14/joint-statement-on-finlands-participation-in-french-forward-deterrence",
      kind: "primaire",
      publisher: "elysee.fr"
    },
    ifri2026: {
      title: "La dissuasion nucléaire française à l'épreuve d'un nouvel ordre européen : analyse du discours",
      author: "Ifri",
      year: 2026,
      url: "https://www.ifri.org/fr/briefings/la-dissuasion-nucleaire-francaise-lepreuve-dun-nouvel-ordre-europeen-analyse-du-discours",
      kind: "secondaire",
      publisher: "Ifri"
    },
    pang2026: {
      title: "France Libre : le nom du nouveau porte-avions dévoilé (18 mars 2026)",
      author: "Présidence de la République",
      year: 2026,
      url: "https://www.elysee.fr/emmanuel-macron/2026/03/18/france-libre-le-nom-du-nouveau-porte-avions-devoile-sur-le-site-naval-group-de-nantes-indret",
      kind: "primaire",
      publisher: "elysee.fr"
    },
    tnp: {
      title: "Traité sur la non-prolifération des armes nucléaires (TNP)",
      author: "Nations unies, Bureau des affaires de désarmement",
      year: 1968,
      url: "https://www.un.org/disarmament/wmd/nuclear/npt/",
      kind: "primaire",
      publisher: "un.org"
    },
    csi: {
      title: "Code de la sécurité intérieure, livre VIII (renseignement), dont art. L811-2 et R811-1",
      author: "République française",
      year: 2026,
      url: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000025503132",
      kind: "primaire",
      publisher: "Légifrance"
    },
    ord58: {
      title: "Ordonnance n° 58-1100 du 17 novembre 1958 relative au fonctionnement des assemblées parlementaires (art. 6 nonies : délégation parlementaire au renseignement)",
      author: "République française",
      year: 1958,
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000705067",
      kind: "primaire",
      publisher: "Légifrance"
    },
    cnctr: {
      title: "Commission nationale de contrôle des techniques de renseignement (site officiel, rapports annuels)",
      author: "CNCTR",
      year: 2026,
      url: "https://www.cnctr.fr",
      kind: "primaire",
      publisher: "CNCTR"
    },
    dgse: {
      title: "Direction générale de la sécurité extérieure (site officiel)",
      author: "DGSE",
      year: 2026,
      url: "https://www.dgse.gouv.fr",
      kind: "primaire",
      publisher: "dgse.gouv.fr"
    },
    dgsi: {
      title: "Direction générale de la sécurité intérieure (site officiel)",
      author: "DGSI",
      year: 2026,
      url: "https://www.dgsi.interieur.gouv.fr",
      kind: "primaire",
      publisher: "interieur.gouv.fr"
    },
    tracfin: {
      title: "Tracfin, cellule de renseignement financier",
      author: "Ministère de l'Économie",
      year: 2026,
      url: "https://www.economie.gouv.fr/tracfin",
      kind: "primaire",
      publisher: "economie.gouv.fr"
    },
    sgdsn: {
      title: "Secrétariat général de la défense et de la sécurité nationale (ANSSI, Viginum)",
      author: "SGDSN",
      year: 2026,
      url: "https://www.sgdsn.gouv.fr",
      kind: "primaire",
      publisher: "sgdsn.gouv.fr"
    },
    onuCharte: {
      title: "Charte des Nations unies (texte intégral)",
      author: "Nations unies",
      year: 1945,
      url: "https://www.un.org/fr/about-us/un-charter/full-text",
      kind: "primaire",
      publisher: "un.org"
    },
    onuVeto: {
      title: "Security Council: Veto List",
      author: "Bibliothèque Dag Hammarskjöld, ONU",
      year: 2026,
      url: "https://research.un.org/en/docs/sc/quick/veto",
      kind: "primaire",
      publisher: "un.org"
    },
    tue: {
      title: "Traité sur l'Union européenne, version consolidée (art. 42 §7)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:12016M/TXT",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    vienne1961: {
      title: "Convention de Vienne sur les relations diplomatiques (1961)",
      author: "Nations unies",
      year: 1961,
      url: "https://legal.un.org/ilc/texts/instruments/english/conventions/9_1_1961.pdf",
      kind: "primaire",
      publisher: "legal.un.org"
    },
    lowy: {
      title: "Global Diplomacy Index",
      author: "Lowy Institute",
      year: 2024,
      url: "https://globaldiplomacyindex.lowyinstitute.org/",
      kind: "secondaire",
      publisher: "Lowy Institute"
    },
    anssi: {
      title: "ANSSI, Agence nationale de la sécurité des systèmes d'information (site officiel)",
      author: "ANSSI",
      year: 2026,
      url: "https://cyber.gouv.fr",
      kind: "primaire",
      publisher: "cyber.gouv.fr"
    },
    nis2: {
      title: "Directive (UE) 2022/2555 (NIS 2) sur la cybersécurité",
      author: "Union européenne",
      year: 2022,
      url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    dsa: {
      title: "Règlement (UE) 2022/2065 sur les services numériques (DSA)",
      author: "Union européenne",
      year: 2022,
      url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    }
  },

  lessons: [
    {
      id: "chef-des-armees",
      title: "Le Président, chef des armées",
      minutes: 4,
      takeaway: "Le Président décide (art. 15), le Gouvernement exécute (art. 20-21), le Parlement contrôle (art. 35), et le CEMA commande les opérations.",
      punchline: "La Constitution fait du Président le chef des armées, mais depuis 2008, au-delà de quatre mois, c'est le Parlement qui autorise.",
      cards: [
        { title: "Article 15 : le patron, c'est lui", text: "La Constitution est limpide : « Le Président de la République est le **chef des armées**. Il préside les conseils et les comités supérieurs de la défense nationale » (art. 15). L'art. 5 en fait aussi le **garant de l'indépendance nationale, de l'intégrité du territoire et du respect des traités**.", sources: ["constitution"] },
        { title: "Oui mais… le Gouvernement", text: "Subtilité à connaître : l'art. 20 dit que le Gouvernement « dispose de l'administration et de la **force armée** » et l'art. 21 que le Premier ministre est « responsable de la **défense nationale** ». En pratique, depuis 1958, c'est le Président qui tranche. On parle de **domaine réservé** : une expression politique, pas juridique.", sources: ["constitution", "cdjChef"] },
        { title: "Le Conseil de défense", text: "Les grandes décisions se prennent en **Conseil de défense et de sécurité nationale (CDSN)**, présidé par le Président (Code de la défense, art. L1121-1). Il fixe les orientations : programmation militaire, dissuasion, opérations extérieures, renseignement, antiterrorisme… Ses débats sont classifiés. Il a aussi été très utilisé pendant le Covid, en 2020.", sources: ["codeDefense", "cdjConseil"] },
        { title: "Article 35 : et le Parlement ?", text: "La déclaration de guerre est autorisée par le Parlement. Depuis la révision de **2008**, pour une intervention à l'étranger :\n- le Gouvernement informe le Parlement **au plus tard 3 jours** après son début (débat possible, sans vote)\n- au-delà de **4 mois**, la prolongation doit être **autorisée** par le Parlement.", sources: ["constitution", "anFiche35"] },
        { title: "Art. 16 & le CEMA", text: "L'**article 16** donne des pouvoirs exceptionnels en cas de menace grave et immédiate : utilisé une seule fois, en 1961 (putsch d'Alger). Au quotidien, le Président s'appuie sur le **chef d'état-major des armées (CEMA)**, qui commande les opérations. Depuis le 1er septembre 2025 : le général d'armée aérienne **Fabien Mandon**.", sources: ["constitution", "emaCema"] }
      ],
      quiz: [
        { q: "Quel article de la Constitution fait du Président le « chef des armées » ?", choices: ["Article 5", "Article 15", "Article 35", "Article 49"], answer: 1, explain: "Article 15 : « Le Président de la République est le chef des armées. »", sources: ["constitution"] },
        { q: "Vrai ou faux : le Gouvernement doit obtenir l'accord du Parlement AVANT toute intervention militaire à l'étranger.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux. Il informe le Parlement au plus tard 3 jours après le début ; l'autorisation n'est requise que pour prolonger au-delà de 4 mois (art. 35).", sources: ["constitution", "anFiche35"] },
        { q: "Au-delà de quelle durée la prolongation d'une intervention à l'étranger doit-elle être autorisée par le Parlement ?", choices: ["3 jours", "1 mois", "4 mois", "1 an"], answer: 2, explain: "4 mois (art. 35 al. 3). Si le Sénat et l'Assemblée divergent, le Gouvernement peut demander à l'Assemblée de trancher.", sources: ["constitution"] },
        { q: "Qui préside le Conseil de défense et de sécurité nationale ?", choices: ["Le Premier ministre", "Le ministre des Armées", "Le Président de la République", "Le CEMA"], answer: 2, explain: "Le Président (art. 15 de la Constitution et art. L1121-1 du Code de la défense). Il peut se faire suppléer par le Premier ministre.", sources: ["codeDefense", "constitution"] },
        { q: "Vrai ou faux : l'article 16 (pouvoirs exceptionnels) n'a été utilisé qu'une seule fois, en 1961.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai : par le général de Gaulle, d'avril à septembre 1961, après le putsch d'Alger. Depuis 2008, le Conseil constitutionnel peut en contrôler la durée (après 30 et 60 jours).", sources: ["constitution"] }
      ],
      mission: { title: "Les 5 articles en 3 minutes", text: "Ouvre la Constitution sur Légifrance et lis les articles 5, 15, 20, 21 et 35. Puis explique à un·e ami·e, en une seule phrase, qui décide d'envoyer des soldats à l'étranger et qui contrôle." }
    },

    {
      id: "armees-budget",
      title: "Les armées & le budget",
      minutes: 4,
      takeaway: "LPM 2024-2030 (413 Md€) + actualisation d'août 2026 (+36 Md€) : objectif 64 Md€ de budget défense en 2027, deux fois plus qu'en 2017.",
      punchline: "Le budget des armées doit doubler en dix ans : la vraie question n'est plus « combien », mais « pour quoi faire » et « comment on le finance ».",
      cards: [
        { title: "La LPM, c'est quoi ?", text: "Une **loi de programmation militaire** fixe sur plusieurs années les moyens et les objectifs des armées. La LPM 2024-2030 (loi du 1er août 2023) prévoit **413 Md€** : 400 Md€ de crédits budgétaires + 13 Md€ de ressources extrabudgétaires. Environ 40 % de plus que la LPM 2019-2025.", sources: ["lpmLivret", "lpmInfoGouv", "lcpLpm"] },
        { title: "RNS 2025 : l'alerte", text: "Publiée le **14 juillet 2025**, la Revue nationale stratégique actualise celle de 2022. Message central : se préparer, avec nos alliés, à l'éventualité d'un **conflit majeur au cœur de l'Europe** d'ici 2030, en plus des attaques hybrides sur notre sol. Elle fixe **11 objectifs stratégiques**, dont « une économie qui se prépare à la guerre ».", sources: ["rns2025", "rnsInfoGouv", "montaigneRns"] },
        { title: "2026 : la LPM actualisée", text: "**Loi n° 2026-791 du 16 août 2026** (JO du 18 août) : **+36 Md€ de ressources nouvelles** sur 2026-2030, soit environ 436 Md€ de crédits sur 2024-2030 (contre 400 Md€ prévus en 2023). Le format des armées ne change pas, les priorités si. Validée sans réserve par le Conseil constitutionnel le 6 août 2026.", sources: ["lpm2026", "lpm2026Senat", "cc2026"] },
        { title: "Le budget en 3 dates", text: "- **2017** : 32 Md€\n- **2026** : 57,1 Md€ pour la mission Défense (+6,7 Md€ en un an : 3,2 Md€ prévus par la LPM + 3,5 Md€ de « surmarche »)\n- **2027** : objectif **64 Md€**, soit un doublement en dix ans, annoncé par le Président le 13 juillet 2025.", sources: ["brienne2025", "senatPlf2026"] },
        { title: "OTAN : la barre des 5 %", text: "Au sommet de **La Haye (25 juin 2025)**, les Alliés s'engagent à consacrer **5 % du PIB** par an à la sécurité d'ici **2035** : au moins **3,5 %** pour la défense « cœur » + jusqu'à 1,5 % pour la résilience (infrastructures, cyber, protection civile). Point d'étape prévu en 2029. La France était autour de 2 % en 2025.", sources: ["otanLaHaye", "lpm2026Dossier"] }
      ],
      quiz: [
        { q: "Combien de ressources nouvelles la LPM actualisée (loi du 16 août 2026) ajoute-t-elle sur 2026-2030 ?", choices: ["13 Md€", "36 Md€", "100 Md€", "413 Md€"], answer: 1, explain: "36 Md€ de ressources nouvelles, qui s'ajoutent à la trajectoire votée en 2023.", sources: ["lpm2026", "lpm2026Senat"] },
        { q: "Vrai ou faux : la Revue nationale stratégique 2025 envisage l'éventualité d'un conflit majeur en Europe d'ici 2030.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai. C'est son fil rouge : préparer la France, avec ses alliés, à un conflit majeur au cœur de l'Europe.", sources: ["rnsInfoGouv", "rns2025"] },
        { q: "Quel objectif les Alliés de l'OTAN ont-ils fixé à La Haye en juin 2025 ?", choices: ["2 % du PIB d'ici 2030", "3 % du PIB d'ici 2027", "5 % du PIB d'ici 2035, dont au moins 3,5 % pour la défense « cœur »", "10 % du PIB d'ici 2040"], answer: 2, explain: "5 % d'ici 2035 : au moins 3,5 % de défense « cœur » + jusqu'à 1,5 % de dépenses liées à la sécurité et à la résilience.", sources: ["otanLaHaye"] },
        { q: "Le budget des armées était d'environ 32 Md€ en 2017. Quel est l'objectif annoncé pour 2027 ?", choices: ["40 Md€", "50 Md€", "64 Md€", "100 Md€"], answer: 2, explain: "64 Md€ en 2027, annoncé le 13 juillet 2025 : un doublement en dix ans.", sources: ["brienne2025"] },
        { q: "Vrai ou faux : le Conseil constitutionnel a censuré une partie de la LPM actualisée en août 2026.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux. Saisi par plus de 60 députés, il a déclaré la loi conforme sans censure ni réserve (décision 2026-907 DC du 6 août 2026).", sources: ["cc2026"] }
      ],
      mission: { title: "Ton premier argument chiffré", text: "Cherche le montant de la mission « Défense » dans la dernière loi de finances, puis compare-le à un autre poste (éducation, charge de la dette). Note les deux chiffres avec leur année et leur source : c'est ton argument de débat." }
    },

    {
      id: "dissuasion",
      title: "La dissuasion nucléaire",
      minutes: 4,
      takeaway: "Dissuasion = empêcher la guerre ; décision au seul Président ; deux composantes (sous-marins + avions) ; depuis 2026, une « dissuasion avancée » ouverte aux Européens volontaires.",
      punchline: "La dissuasion française peut s'ouvrir à l'Europe, mais la décision ultime, elle, ne se partage pas.",
      cards: [
        { title: "Le principe : empêcher la guerre", text: "La dissuasion vise à convaincre tout adversaire qu'une attaque contre nos **intérêts vitaux** lui infligerait des dommages inacceptables. Doctrine strictement défensive : pas de « bataille nucléaire » ni de riposte graduée, mais la possibilité d'un **avertissement nucléaire unique et non renouvelable** (discours du 7 février 2020).", sources: ["dissuasion2020"] },
        { title: "Un seul doigt sur le bouton", text: "La décision d'emploi revient **au seul Président de la République**. Le 2 mars 2026, à l'Île Longue (base des sous-marins nucléaires), il l'a redit : aucun partage de la décision ultime, ni de sa planification, ni de sa mise en œuvre, même avec des alliés.", sources: ["dissuasion2026", "ileLongue2026"] },
        { title: "Deux composantes", text: "- **Océanique** : les sous-marins nucléaires lanceurs d'engins (**SNLE**), armés du missile M51, dont au moins un en patrouille en permanence\n- **Aéroportée** : des Rafale armés du missile **ASMPA**, depuis des bases ou le porte-avions\nLa composante terrestre (plateau d'Albion) a été démantelée dans les années 1990.", sources: ["dissuasion2020", "lpmLivret"] },
        { title: "2026 : la « dissuasion avancée »", text: "Discours du 2 mars 2026 : **hausse du nombre de têtes** (la France ne publiera plus ses chiffres ; en 2020, l'arsenal était « inférieur à 300 ») et **dissuasion avancée** ouverte aux Européens volontaires (exercices, dialogue stratégique). La Norvège (mai) puis la Finlande (septembre 2026) ont annoncé y participer.", sources: ["dissuasion2026", "dissuasion2020", "norvege2026", "finlande2026"] },
        { title: "Le TNP, cadre et débat", text: "Le **Traité sur la non-prolifération** (1968, en vigueur en 1970) reconnaît 5 États dotés : États-Unis, Russie, Royaume-Uni, France, Chine. La France y a adhéré en **1992**. Son article VI engage à négocier un désarmement : un argument souvent opposé aux hausses d'arsenal, auquel Paris répond par le contexte sécuritaire.", sources: ["tnp", "ifri2026"] }
      ],
      quiz: [
        { q: "Qui décide de l'emploi de l'arme nucléaire française ?", choices: ["Le Premier ministre", "Le Président de la République, seul", "Le Conseil de défense, à la majorité", "Le Parlement"], answer: 1, explain: "Le Président seul, réaffirmé dans le discours du 2 mars 2026 : pas de partage de la décision ultime.", sources: ["dissuasion2026"] },
        { q: "Quelles sont les deux composantes actuelles de la dissuasion française ?", choices: ["Terrestre et océanique", "Océanique et aéroportée", "Aéroportée et spatiale", "Terrestre et aéroportée"], answer: 1, explain: "Océanique (SNLE, missile M51) et aéroportée (Rafale, missile ASMPA). La composante terrestre a disparu dans les années 1990.", sources: ["dissuasion2020"] },
        { q: "Vrai ou faux : la doctrine française prévoit une « riposte graduée » et des batailles nucléaires limitées.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux. La France exclut toute bataille nucléaire ou riposte graduée ; elle se réserve un avertissement nucléaire unique et non renouvelable.", sources: ["dissuasion2020"] },
        { q: "En quelle année la France a-t-elle adhéré au TNP ?", choices: ["1968", "1970", "1992", "2006"], answer: 2, explain: "1992, comme la Chine. Le traité date de 1968 et est entré en vigueur en 1970.", sources: ["tnp"] },
        { q: "Vrai ou faux : dans son discours du 2 mars 2026, le Président a annoncé une augmentation du nombre de têtes nucléaires.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai, en précisant que la France ne publierait plus de chiffres sur son arsenal.", sources: ["dissuasion2026", "ileLongue2026"] }
      ],
      mission: { title: "Lis le discours, pas le résumé", text: "Ouvre le discours de l'Île Longue (2 mars 2026) sur elysee.fr. En 10 minutes, repère trois phrases : une sur la décision, une sur l'Europe, une sur l'arsenal. Bonus : compare avec le discours de 2020 à l'École de guerre." }
    },

    {
      id: "renseignement",
      title: "Le renseignement",
      minutes: 4,
      takeaway: "6 services au premier cercle (DGSE, DRM, DRSD, DGSI, DNRED, Tracfin), coordonnés depuis l'Élysée, autorisés par le Premier ministre, contrôlés par la CNCTR, le Conseil d'État et le Parlement.",
      punchline: "Depuis 2015, le renseignement français a une loi, un juge et un contrôleur : le débat porte sur le curseur, pas sur le principe.",
      cards: [
        { title: "Le premier cercle : 6 services", text: "Le Code de la sécurité intérieure (art. R811-1) liste les **services spécialisés** :\n- **DGSE** (extérieur), **DRM** (militaire), **DRSD** (sécurité de la défense) : ministère des Armées\n- **DGSI** (intérieur) : ministère de l'Intérieur\n- **DNRED** (douanes) et **Tracfin** (flux financiers) : Bercy", sources: ["csi", "dgse", "dgsi", "tracfin"] },
        { title: "Qui pilote ?", text: "Le **CNRLT** (coordonnateur national du renseignement et de la lutte contre le terrorisme), placé auprès du Président, coordonne les services. Le **Conseil national du renseignement**, formation spécialisée du Conseil de défense, fixe les grandes orientations et priorités.", sources: ["codeDefense"] },
        { title: "La loi de 2015 : un cadre", text: "La **loi du 24 juillet 2015** relative au renseignement a donné une base légale claire aux techniques (interceptions, géolocalisation, algorithmes…) et listé les finalités autorisées : indépendance nationale, prévention du terrorisme, ingérences étrangères, criminalité organisée… Le **Premier ministre** autorise chaque mise en œuvre.", sources: ["csi", "cnctr"] },
        { title: "Les contre-pouvoirs", text: "- **CNCTR** : autorité administrative indépendante, **avis préalable** sur chaque demande et contrôle a posteriori\n- **Conseil d'État** : toute personne peut le saisir\n- **DPR**, délégation parlementaire au renseignement : 4 députés + 4 sénateurs habilités, qui suivent l'activité des services.", sources: ["cnctr", "csi", "ord58"] },
        { title: "Le débat sécurité / libertés", text: "Les **algorithmes** (analyse automatisée des données de connexion), expérimentés depuis 2015, ont été pérennisés en 2021 ; la loi du 25 juillet 2024 en a étendu l'usage, à titre expérimental, aux **ingérences étrangères**. Pour : efficacité contre le terrorisme. Contre : risque de surveillance de masse. Le juge de paix : le contrôle.", sources: ["csi", "cnctr"] }
      ],
      quiz: [
        { q: "Combien de services composent le « premier cercle » du renseignement ?", choices: ["3", "6", "9", "12"], answer: 1, explain: "6 : DGSE, DRM, DRSD, DGSI, DNRED et Tracfin (art. R811-1 du Code de la sécurité intérieure).", sources: ["csi"] },
        { q: "Quel service est chargé du renseignement à l'étranger ?", choices: ["DGSI", "DGSE", "Tracfin", "DRSD"], answer: 1, explain: "La DGSE (ministère des Armées). La DGSI s'occupe du territoire national.", sources: ["dgse", "csi"] },
        { q: "Vrai ou faux : Tracfin fait partie des services de renseignement du premier cercle.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai. Tracfin traite le renseignement financier (blanchiment, financement du terrorisme) et relève de Bercy.", sources: ["tracfin", "csi"] },
        { q: "Qui autorise la mise en œuvre d'une technique de renseignement, comme une interception ?", choices: ["Un juge d'instruction", "Le Premier ministre, après avis de la CNCTR", "Le directeur du service, seul", "Le Parlement"], answer: 1, explain: "Le Premier ministre, après avis préalable de la CNCTR (sauf urgence absolue encadrée par la loi).", sources: ["csi", "cnctr"] },
        { q: "Vrai ou faux : la délégation parlementaire au renseignement est composée uniquement de sénateurs.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux : 4 députés et 4 sénateurs (ordonnance de 1958, art. 6 nonies).", sources: ["ord58"] }
      ],
      mission: { title: "Le chiffre de la CNCTR", text: "Va sur le site de la CNCTR et ouvre son dernier rapport annuel. Trouve le nombre de demandes de techniques examinées dans l'année et la technique la plus demandée. Note les chiffres et l'année." }
    },

    {
      id: "diplomatie",
      title: "Diplomatie & alliances",
      minutes: 4,
      takeaway: "ONU (interdiction de la force + veto), OTAN (art. 5), UE (art. 42.7), Vienne 1961 (immunités) : quatre textes qui structurent la diplomatie française.",
      punchline: "Siège permanent à l'ONU, dissuasion, UE, OTAN : peu de pays cumulent ces quatre leviers.",
      cards: [
        { title: "La Charte de l'ONU (1945)", text: "Règle d'or : les États s'abstiennent de recourir à la **menace ou à l'emploi de la force** (art. 2 §4). Deux exceptions : la **légitime défense** (art. 51) et l'action décidée par le **Conseil de sécurité** au titre du chapitre VII (art. 39 à 42).", sources: ["onuCharte"] },
        { title: "Conseil de sécurité & veto", text: "15 membres : 5 permanents (Chine, États-Unis, France, Royaume-Uni, Russie) + 10 élus pour 2 ans. Une décision de fond exige **9 voix**, sans vote contraire d'un membre permanent (art. 27) : c'est le **veto**. La France ne l'a plus utilisé depuis **1989**.", sources: ["onuCharte", "onuVeto"] },
        { title: "OTAN : l'article 5", text: "Traité de Washington (1949) : une attaque armée contre un Allié est considérée comme une attaque contre tous. Chacun assiste l'Allié attaqué par l'action **qu'il juge nécessaire**, y compris la force armée : il n'y a donc pas d'automatisme militaire. Seule invocation à ce jour : après le 11 septembre 2001.", sources: ["otanTraite"] },
        { title: "UE : l'article 42.7", text: "Traité sur l'UE : si un État membre est victime d'une **agression armée** sur son territoire, les autres lui doivent « aide et assistance **par tous les moyens en leur pouvoir** ». La formule est jugée plus forte sur le papier que l'art. 5, mais sans commandement intégré. La France l'a invoqué en novembre 2015, après les attentats.", sources: ["tue"] },
        { title: "Les ambassades", text: "La **Convention de Vienne de 1961** protège les diplomates : locaux inviolables (art. 22), valise diplomatique (art. 27), immunité pénale (art. 31). Un État peut déclarer un diplomate **persona non grata** (art. 9). La France a l'un des plus vastes réseaux diplomatiques du monde ; le Président accrédite les ambassadeurs (art. 14).", sources: ["vienne1961", "lowy", "constitution"] }
      ],
      quiz: [
        { q: "Combien de membres permanents compte le Conseil de sécurité de l'ONU ?", choices: ["3", "5", "10", "15"], answer: 1, explain: "5 permanents (Chine, États-Unis, France, Royaume-Uni, Russie) sur 15 membres.", sources: ["onuCharte"] },
        { q: "Vrai ou faux : l'article 5 du traité de l'OTAN oblige chaque Allié à envoyer des troupes en cas d'attaque.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux. Chaque Allié prend l'action « qu'il juge nécessaire », qui peut inclure la force armée, sans obligation automatique.", sources: ["otanTraite"] },
        { q: "Quel article de la Charte de l'ONU consacre la légitime défense ?", choices: ["Art. 2", "Art. 27", "Art. 51", "Art. 99"], answer: 2, explain: "Article 51 : le « droit naturel de légitime défense », individuelle ou collective.", sources: ["onuCharte"] },
        { q: "Quelle clause la France a-t-elle invoquée auprès de ses partenaires européens en novembre 2015 ?", choices: ["L'article 5 du traité de l'OTAN", "L'article 42.7 du traité sur l'UE", "L'article 50 du traité sur l'UE", "L'article 51 de la Charte de l'ONU uniquement"], answer: 1, explain: "L'article 42.7 TUE (clause d'assistance mutuelle), pour la première fois, après les attentats du 13 novembre.", sources: ["tue"] },
        { q: "Vrai ou faux : selon la Convention de Vienne de 1961, les locaux d'une ambassade sont inviolables.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai (art. 22) : les agents de l'État d'accueil ne peuvent y entrer sans le consentement du chef de mission.", sources: ["vienne1961"] }
      ],
      mission: { title: "Suis un vote à l'ONU", text: "Choisis une crise dans l'actualité et cherche le dernier vote du Conseil de sécurité qui la concerne (site de l'ONU). Qui a voté pour, contre, qui s'est abstenu ? Y a-t-il eu un veto ? Résume en trois lignes." }
    },

    {
      id: "nouveaux-champs",
      title: "Cyber, espace, information : les nouveaux champs",
      minutes: 4,
      takeaway: "La guerre se joue aussi dans le cyber (ANSSI, COMCYBER), l'espace et l'information (Viginum), et dans les usines : c'est l'économie de guerre.",
      punchline: "Une guerre moderne se gagne autant avec des obus et des drones qu'avec des pare-feux et de la lucidité face aux manipulations.",
      cards: [
        { title: "Cyber : défendre et riposter", text: "Deux piliers :\n- l'**ANSSI** (créée en 2009, rattachée au SGDSN) protège l'État et les opérateurs vitaux\n- le **COMCYBER** (créé en 2017, sous l'autorité du CEMA) conduit la cyberdéfense militaire\nAu niveau européen, la directive **NIS 2** (2022) étend les obligations de cybersécurité à des milliers d'entités.", sources: ["anssi", "sgdsn", "nis2"] },
        { title: "L'espace, nouveau terrain", text: "Les satellites servent à communiquer, observer, se positionner : ce sont donc des cibles. La France a créé un **Commandement de l'espace** en 2019, et l'armée de l'Air est devenue **armée de l'Air et de l'Espace**. Le spatial fait partie des priorités renforcées par l'actualisation de la LPM en 2026.", sources: ["lpmLivret", "lpm2026Commission"] },
        { title: "La guerre de l'information", text: "**Viginum**, service du SGDSN créé en 2021, détecte les **ingérences numériques étrangères** : faux comptes, campagnes coordonnées, faux médias. Il ne juge pas les opinions, il traque les manipulations venues de l'étranger. En Europe, le **DSA** (2022) oblige les très grandes plateformes à évaluer les risques pour les élections.", sources: ["sgdsn", "dsa"] },
        { title: "Ukraine : les leçons", text: "La guerre en Ukraine a rappelé la **haute intensité** : consommation massive de munitions, rôle central des **drones**, besoin de **défense sol-air** et de stocks. L'actualisation de la LPM (2026) répartit l'effort supplémentaire en « surmarches » : munitions, drones, défense sol-air, spatial, dissuasion…", sources: ["lpm2026Commission", "rns2025"] },
        { title: "L'économie de guerre", text: "Produire plus, plus vite : la RNS 2025 en fait un objectif. La LPM actualisée réserve au moins **10 %** des crédits d'études amont aux PME et ETI, et crée un **état d'alerte de sécurité nationale** permettant de déroger temporairement à certaines normes (environnement, urbanisme, marchés publics). Contesté par 60+ députés, validé par le Conseil constitutionnel.", sources: ["lpm2026", "cc2026", "montaigneRns"] }
      ],
      quiz: [
        { q: "Quel service détecte les ingérences numériques étrangères en France ?", choices: ["L'ANSSI", "Viginum", "La CNIL", "Tracfin"], answer: 1, explain: "Viginum, rattaché au SGDSN, créé en 2021.", sources: ["sgdsn"] },
        { q: "Vrai ou faux : le COMCYBER relève du ministère de l'Intérieur.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux : c'est un commandement militaire, placé sous l'autorité du chef d'état-major des armées.", sources: ["lpmLivret"] },
        { q: "Quelle part minimale des crédits d'études amont la LPM actualisée réserve-t-elle aux PME et ETI ?", choices: ["1 %", "5 %", "10 %", "50 %"], answer: 2, explain: "Au moins 10 %, une disposition ajoutée par la loi du 16 août 2026.", sources: ["lpm2026"] },
        { q: "Vrai ou faux : l'ANSSI a été créée en 2009.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai. Elle est l'autorité nationale de sécurité des systèmes d'information, rattachée au SGDSN.", sources: ["anssi"] },
        { q: "Lequel de ces domaines figure parmi les priorités renforcées par l'actualisation de la LPM en 2026 ?", choices: ["Les drones et les munitions", "Un service militaire obligatoire de 12 mois", "L'abandon de la composante océanique", "La sortie de l'OTAN"], answer: 0, explain: "Drones et munitions font partie des « surmarches », avec la défense sol-air, le spatial et la dissuasion.", sources: ["lpm2026Commission"] }
      ],
      mission: { title: "Détox info d'une semaine", text: "Pendant 7 jours, dès qu'une info politique virale te paraît trop belle ou trop scandaleuse, cherche sa source originale avant de la partager. Compte combien tenaient vraiment la route." }
    }
  ],

  glossary: [
    { term: "CEMA", def: "Chef d'état-major des armées : commande les opérations militaires sous l'autorité du Président. Depuis le 1er septembre 2025, le général Fabien Mandon.", sources: ["emaCema"] },
    { term: "CDSN", def: "Conseil de défense et de sécurité nationale : présidé par le Président, il arrête les grandes orientations de défense et de sécurité.", sources: ["codeDefense"] },
    { term: "LPM", def: "Loi de programmation militaire : fixe les moyens des armées sur plusieurs années. Actuelle : 2024-2030, actualisée par la loi du 16 août 2026.", sources: ["lpmLivret", "lpm2026"] },
    { term: "RNS", def: "Revue nationale stratégique : analyse des menaces et objectifs de la France. Dernière version : 14 juillet 2025.", sources: ["rns2025"] },
    { term: "SNLE", def: "Sous-marin nucléaire lanceur d'engins : porte les missiles M51 de la composante océanique de la dissuasion.", sources: ["dissuasion2020"] },
    { term: "ASMPA", def: "Air-sol moyenne portée amélioré : missile nucléaire de la composante aéroportée, tiré depuis un Rafale.", sources: ["dissuasion2020"] },
    { term: "TNP", def: "Traité sur la non-prolifération des armes nucléaires (1968). La France y a adhéré en 1992.", sources: ["tnp"] },
    { term: "DGSE / DGSI", def: "Direction générale de la sécurité extérieure (Armées) / Direction générale de la sécurité intérieure (Intérieur) : les deux plus grands services du premier cercle.", sources: ["csi", "dgse", "dgsi"] },
    { term: "CNCTR", def: "Commission nationale de contrôle des techniques de renseignement : autorité indépendante qui donne un avis préalable sur les demandes de surveillance.", sources: ["cnctr", "csi"] },
    { term: "CNRLT", def: "Coordonnateur national du renseignement et de la lutte contre le terrorisme, placé auprès du Président.", sources: ["codeDefense"] },
    { term: "Article 5 (OTAN)", def: "Clause de défense collective du traité de Washington : une attaque contre un Allié est une attaque contre tous.", sources: ["otanTraite"] },
    { term: "Article 42.7 (TUE)", def: "Clause d'assistance mutuelle de l'UE en cas d'agression armée contre un État membre.", sources: ["tue"] },
    { term: "Viginum", def: "Service du SGDSN chargé de la vigilance et de la protection contre les ingérences numériques étrangères.", sources: ["sgdsn"] },
    { term: "ANSSI", def: "Agence nationale de la sécurité des systèmes d'information : l'autorité nationale de cyberdéfense, rattachée au SGDSN.", sources: ["anssi"] }
  ],

  annexes: [
    {
      title: "Chiffres clés (datés)",
      text: "- Budget des armées : **32 Md€** (2017) → **57,1 Md€** (2026, mission Défense) → objectif **64 Md€** (2027)\n- LPM 2024-2030 : **413 Md€** (loi du 1er août 2023)\n- Actualisation : **+36 Md€** sur 2026-2030 (loi du 16 août 2026)\n- OTAN : **5 % du PIB** d'ici 2035, dont 3,5 % de défense « cœur » (La Haye, 25 juin 2025)\n- Arsenal nucléaire : « inférieur à 300 » têtes (2020) ; plus de chiffres publiés depuis mars 2026\n- Renseignement : **6** services au premier cercle\n- Conseil de sécurité : **15** membres dont **5** permanents ; dernier veto français en **1989**\n- Futur porte-avions : baptisé **France Libre** (annonce du 18 mars 2026)",
      sources: ["brienne2025", "senatPlf2026", "lpmLivret", "lpm2026", "otanLaHaye", "dissuasion2020", "dissuasion2026", "csi", "onuVeto", "pang2026"]
    },
    {
      title: "Qui fait quoi ?",
      text: "- **Président** : chef des armées, décide de l'emploi de l'arme nucléaire, préside le Conseil de défense, accrédite les ambassadeurs\n- **Premier ministre** : responsable de la défense nationale, autorise les techniques de renseignement ; s'appuie sur le **SGDSN** (qui abrite l'ANSSI et Viginum)\n- **Ministre des Armées** : prépare et met en œuvre la politique de défense\n- **CEMA** : commande les opérations\n- **Ministère des Affaires étrangères** : conduit la diplomatie et le réseau d'ambassades\n- **Parlement** : vote la LPM et le budget, autorise les opérations de plus de 4 mois, contrôle via la DPR\n- **CNCTR** et **Conseil d'État** : contrôlent le renseignement",
      sources: ["constitution", "codeDefense", "csi", "sgdsn", "ord58"]
    },
    {
      title: "Bibliographie commentée",
      text: "- **Constitution, art. 5, 15, 16, 20, 21, 35** : la base, 5 minutes de lecture.\n- **Revue nationale stratégique 2025** : le diagnostic officiel des menaces, à lire en priorité.\n- **Discours de 2020 (École de guerre) et de 2026 (Île Longue)** : la doctrine nucléaire dans les mots du Président.\n- **Loi du 16 août 2026** : les vrais chiffres de la LPM actualisée.\n- **Institut Montaigne, Ifri** : regards critiques et analyses indépendantes, utiles pour nuancer.",
      sources: ["constitution", "rns2025", "dissuasion2020", "dissuasion2026", "lpm2026", "montaigneRns", "ifri2026"]
    }
  ]
});
