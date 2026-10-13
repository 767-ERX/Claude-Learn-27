registerModule({
  id: "institutions",
  title: "Institutions & campagne 2027",
  emoji: "🏛️",
  color: "#6366f1",
  tagline: "Qui décide quoi, comment on devient candidat, et les règles du jeu de 2027.",
  updated: "2026-10",

  sources: {
    legifrance_constitution: {
      title: "Constitution du 4 octobre 1958 (texte consolidé)",
      author: "République française",
      year: 1958,
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356",
      kind: "primaire",
      publisher: "Légifrance"
    },
    vp_constitution: {
      title: "Constitution de la Ve République (édition 2024, avec les révisions)",
      author: "Direction de l'information légale et administrative",
      year: 2024,
      url: "https://vie-publique.fr/files/2024-04/604240050_INT_Constitution-1958_Maj-2024_Web_Extrait.pdf",
      kind: "primaire",
      publisher: "vie-publique.fr"
    },
    conseil_constitutionnel: {
      title: "Conseil constitutionnel – site officiel",
      author: "Conseil constitutionnel",
      year: 2026,
      url: "https://www.conseil-constitutionnel.fr/",
      kind: "primaire",
      publisher: "Conseil constitutionnel"
    },
    legifrance_loi62: {
      title: "Loi n° 62-1292 du 6 novembre 1962 relative à l'élection du Président de la République au suffrage universel",
      author: "République française",
      year: 1962,
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000684037",
      kind: "primaire",
      publisher: "Légifrance"
    },
    infogouv_pres2027: {
      title: "Élection présidentielle 2027 : dates et vote",
      author: "Gouvernement",
      year: 2026,
      url: "https://www.info.gouv.fr/actualite/election-presidentielle-2027",
      kind: "primaire",
      publisher: "info.gouv.fr"
    },
    infogouv_conditions: {
      title: "Quelles sont les conditions pour être candidat à l'élection présidentielle ?",
      author: "Gouvernement",
      year: 2026,
      url: "https://www.info.gouv.fr/actualite/quelles-sont-les-conditions-pour-etre-candidat-a-l-election-presidentielle",
      kind: "primaire",
      publisher: "info.gouv.fr"
    },
    interieur_candidat: {
      title: "Élection présidentielle : je suis candidat",
      author: "Ministère de l'Intérieur",
      year: 2026,
      url: "https://www.elections.interieur.gouv.fr/scrutins/lelection-presidentielle/election-presidentielle-je-suis-candidat",
      kind: "primaire",
      publisher: "elections.interieur.gouv.fr"
    },
    interieur_presidentielle: {
      title: "L'élection présidentielle",
      author: "Ministère de l'Intérieur",
      year: 2026,
      url: "https://www.elections.interieur.gouv.fr/scrutins/lelection-presidentielle",
      kind: "primaire",
      publisher: "elections.interieur.gouv.fr"
    },
    publicsenat_financement: {
      title: "Présidentielle 2022 : quelles sont les règles de financement de la campagne ?",
      author: "Public Sénat",
      year: 2022,
      url: "https://www.publicsenat.fr/actualites/politique/presidentielle-2022-quelles-sont-les-regles-de-financement-de-la-campagne-191106",
      kind: "secondaire",
      publisher: "Public Sénat"
    },
    cnccfp: {
      title: "Commission nationale des comptes de campagne et des financements politiques – site officiel",
      author: "CNCCFP",
      year: 2026,
      url: "https://www.cnccfp.fr/",
      kind: "primaire",
      publisher: "CNCCFP"
    },
    arcom_2022: {
      title: "Presidential election 2022: Arcom's role",
      author: "Arcom",
      year: 2022,
      url: "https://www.arcom.fr/en/news/presidential-election-2022-arcoms-role",
      kind: "primaire",
      publisher: "Arcom"
    },
    arcom: {
      title: "Arcom – site officiel (pluralisme, temps de parole)",
      author: "Arcom",
      year: 2026,
      url: "https://www.arcom.fr/",
      kind: "primaire",
      publisher: "Arcom"
    },
    eurlex_teu: {
      title: "Traité sur l'Union européenne (version consolidée)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/eli/treaty/teu_2016/oj?locale=fr",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    eurlex_tfue: {
      title: "Traité sur le fonctionnement de l'Union européenne (version consolidée)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/eli/treaty/tfeu_2016/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    eurlex_tfue3: {
      title: "TFUE – article 3 (compétences exclusives de l'Union)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_3/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    eurlex_tfue4: {
      title: "TFUE – article 4 (compétences partagées)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_4/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    eurlex_tfue294: {
      title: "TFUE – article 294 (procédure législative ordinaire)",
      author: "Union européenne",
      year: 2016,
      url: "https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_294/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    }
  },

  lessons: [
    // ─────────────────────────────────────────────── (a)
    {
      id: "constitution-president",
      title: "La Constitution & les pouvoirs du Président",
      minutes: 5,
      takeaway: "Le Président a des pouvoirs propres (dissolution, référendum, art. 16, nomination du PM) et des pouvoirs partagés qui exigent le contreseing. Tout est écrit : lis les articles, pas les commentaires.",
      punchline: "« Le Président nomme le Premier ministre, mais il ne peut pas le révoquer : relis l'article 8. »",
      cards: [
        {
          title: "Le texte de 1958",
          text: "La **Constitution du 4 octobre 1958** fonde la Ve République. Elle a été révisée **25 fois**, la dernière en **mars 2024** (liberté de recourir à l'IVG). Depuis 1962, le Président est élu **au suffrage universel direct** ; depuis 2000, pour **5 ans** ; depuis 2008, **pas plus de deux mandats consécutifs** (art. 6).",
          sources: ["vp_constitution", "legifrance_constitution"]
        },
        {
          title: "Art. 5 et 8 : arbitre et nomination",
          text: "**Art. 5** : le Président veille au respect de la Constitution, assure par son **arbitrage** le fonctionnement régulier des pouvoirs publics, est **garant de l'indépendance nationale**.\n**Art. 8** : il **nomme le Premier ministre** et met fin à ses fonctions **sur présentation de la démission** du gouvernement. Sur proposition du PM, il nomme les ministres.",
          sources: ["legifrance_constitution"]
        },
        {
          title: "Art. 11 et 12 : peuple et dissolution",
          text: "**Art. 11** : référendum sur l'organisation des pouvoirs publics, la politique économique, sociale ou environnementale… Variante « **RIP** » : 1/5 des parlementaires + 1/10 des électeurs.\n**Art. 12** : **dissolution** de l'Assemblée après consultation du PM et des présidents des assemblées. Élections sous 20 à 40 jours ; pas de nouvelle dissolution dans l'année qui suit.",
          sources: ["legifrance_constitution"]
        },
        {
          title: "Art. 15 et 16 : armée et crise",
          text: "**Art. 15** : le Président est **chef des armées**.\n**Art. 16** : en cas de menace grave et immédiate ET d'interruption du fonctionnement des pouvoirs publics, il prend les **mesures exigées par les circonstances**. Garde-fous : Parlement réuni de plein droit, pas de dissolution, contrôle du Conseil constitutionnel après 30 puis 60 jours. Utilisé une seule fois, en 1961.",
          sources: ["legifrance_constitution", "vp_constitution"]
        },
        {
          title: "Art. 49 et 89 : censure et révision",
          text: "**Art. 49** : le gouvernement est responsable devant l'Assemblée. Une **motion de censure** (signée par 1/10 des députés) le renverse si elle obtient la **majorité absolue** des membres.\n**Art. 89** : réviser la Constitution = vote identique des deux assemblées, puis **référendum** ou **Congrès à 3/5**. La forme républicaine ne peut pas être révisée.",
          sources: ["legifrance_constitution"]
        }
      ],
      quiz: [
        {
          q: "Le Président peut-il révoquer seul le Premier ministre selon le texte de l'article 8 ?",
          choices: ["Oui, à tout moment", "Oui, avec l'accord du Sénat", "Non, il met fin à ses fonctions sur présentation de la démission du gouvernement"],
          answer: 2,
          explain: "Art. 8 : le Président met fin aux fonctions du PM « sur la présentation par celui-ci de la démission du Gouvernement ». En pratique, des PM ont démissionné à sa demande.",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Vrai ou faux : après une dissolution, le Président peut dissoudre à nouveau l'Assemblée dès le mois suivant.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : art. 12, pas de nouvelle dissolution dans l'année qui suit les élections.",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Combien de fois l'article 16 a-t-il été utilisé ?",
          choices: ["Jamais", "Trois fois", "Cinq fois", "Une fois (1961)"],
          answer: 3,
          explain: "Une seule fois, par le général de Gaulle en 1961, après le putsch d'Alger.",
          sources: ["vp_constitution"]
        },
        {
          q: "Pour réviser la Constitution via le Congrès (art. 89), quelle majorité faut-il ?",
          choices: ["La majorité simple", "La majorité absolue", "Les 3/5 des suffrages exprimés", "L'unanimité"],
          answer: 2,
          explain: "Le Congrès (députés + sénateurs) doit approuver à la majorité des 3/5 des suffrages exprimés.",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Vrai ou faux : depuis 2008, nul ne peut exercer plus de deux mandats présidentiels consécutifs.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : art. 6, issu de la révision du 23 juillet 2008.",
          sources: ["legifrance_constitution", "vp_constitution"]
        }
      ],
      mission: {
        title: "Défi : l'article 16 en entier",
        text: "Ouvre la Constitution sur Légifrance et lis l'article 16 en entier (2 minutes, promis). Puis explique à un ami les 2 conditions cumulatives et les 2 garde-fous. Bonus : lis l'article 89 et trouve la seule chose qu'on ne peut jamais réviser."
      }
    },

    // ─────────────────────────────────────────────── (b)
    {
      id: "pouvoirs",
      title: "Parlement, gouvernement, Conseil constitutionnel, collectivités",
      minutes: 4,
      takeaway: "Le Parlement vote la loi et contrôle le gouvernement ; le gouvernement conduit la politique de la nation ; le Conseil constitutionnel vérifie que tout le monde respecte la Constitution ; les collectivités s'administrent librement.",
      punchline: "« En cas de désaccord entre les deux chambres, c'est l'Assemblée qui a le dernier mot, pas le Sénat. »",
      cards: [
        {
          title: "Le Parlement : deux chambres",
          text: "**Art. 24** : le Parlement **vote la loi**, **contrôle** le gouvernement et **évalue** les politiques publiques.\n- **Assemblée nationale** : 577 députés max, élus au suffrage direct\n- **Sénat** : 348 sénateurs max, élus au suffrage indirect, représente les **collectivités**",
          sources: ["legifrance_constitution"]
        },
        {
          title: "Navette et dernier mot",
          text: "Un texte fait la **navette** entre les deux chambres. En cas de désaccord, une **commission mixte paritaire** (7 députés + 7 sénateurs) cherche un compromis. Si ça bloque, le gouvernement peut demander à l'**Assemblée de statuer définitivement** (art. 45).",
          sources: ["legifrance_constitution"]
        },
        {
          title: "Le gouvernement",
          text: "**Art. 20** : le gouvernement **détermine et conduit la politique de la nation**, dispose de l'administration et de la force armée, et est **responsable devant le Parlement**.\n**Art. 21** : le Premier ministre **dirige l'action du gouvernement**.\n**Art. 23** : un ministre ne peut pas rester député ou sénateur.",
          sources: ["legifrance_constitution"]
        },
        {
          title: "Le Conseil constitutionnel",
          text: "**9 membres** nommés pour **9 ans** non renouvelables (3 par le Président, 3 par le président de l'Assemblée, 3 par celui du Sénat), + les anciens Présidents de droit (art. 56).\n- Contrôle **avant** promulgation (art. 61, saisine par 60 députés ou sénateurs)\n- Contrôle **après**, via la **QPC** (art. 61-1)\nSes décisions sont sans recours (art. 62).",
          sources: ["legifrance_constitution", "conseil_constitutionnel"]
        },
        {
          title: "Les collectivités territoriales",
          text: "**Art. 72** : communes, départements, régions, collectivités à statut particulier et d'outre-mer. Elles **s'administrent librement** par des conseils élus. Principe de **subsidiarité** : décider au niveau le plus pertinent. Et aucune collectivité ne peut exercer de **tutelle** sur une autre.",
          sources: ["legifrance_constitution"]
        }
      ],
      quiz: [
        {
          q: "Combien de membres nommés compte le Conseil constitutionnel ?",
          choices: ["12", "7", "15", "9"],
          answer: 3,
          explain: "9 membres nommés pour 9 ans, renouvelés par tiers tous les 3 ans (art. 56), plus les anciens Présidents de la République.",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Vrai ou faux : la QPC permet à un justiciable de contester une loi déjà en vigueur.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : art. 61-1, le Conseil constitutionnel est saisi sur renvoi du Conseil d'État ou de la Cour de cassation.",
          sources: ["legifrance_constitution", "conseil_constitutionnel"]
        },
        {
          q: "En cas de désaccord persistant entre les deux chambres, qui peut avoir le dernier mot sur une loi ordinaire ?",
          choices: ["L'Assemblée nationale, à la demande du gouvernement", "Le Sénat", "Le Conseil constitutionnel"],
          answer: 0,
          explain: "Art. 45 : après échec de la CMP, le gouvernement peut demander à l'Assemblée de statuer définitivement.",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Selon l'article 20, qui « détermine et conduit la politique de la nation » ?",
          choices: ["Le Président de la République", "Le Parlement", "Le gouvernement", "Le Conseil d'État"],
          answer: 2,
          explain: "Le gouvernement (art. 20). Une question piège classique : ce n'est pas le Président dans le texte.",
          sources: ["legifrance_constitution"]
        },
        {
          q: "Vrai ou faux : une région peut exercer une tutelle sur les communes de son territoire.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : art. 72, aucune collectivité ne peut exercer une tutelle sur une autre.",
          sources: ["legifrance_constitution"]
        }
      ],
      mission: {
        title: "Défi : une QPC dans la vraie vie",
        text: "Va sur conseil-constitutionnel.fr, rubrique des décisions, et ouvre la dernière QPC publiée. Lis seulement le titre et le dispositif final (conforme ? non conforme ?). Résume-la en une phrase à un ami : qui contestait quoi, et qui a gagné."
      }
    },

    // ─────────────────────────────────────────────── (c)
    {
      id: "union-europeenne",
      title: "L'Union européenne",
      minutes: 4,
      takeaway: "La Commission propose, le Parlement européen et le Conseil de l'UE votent, le Conseil européen donne le cap. L'UE n'agit que dans les compétences que les traités lui attribuent.",
      punchline: "« Conseil européen, Conseil de l'UE, Conseil de l'Europe : trois noms, deux dans l'UE, un en dehors. Qui confond perd le débat. »",
      cards: [
        {
          title: "La Commission européenne",
          text: "Elle **propose** les lois (quasi-monopole de l'initiative), **exécute** le budget et veille au respect des traités : « gardienne des traités ». Un commissaire par État. Son président est proposé par le Conseil européen en tenant compte des **élections européennes**, puis **élu par le Parlement** (art. 17 TUE).",
          sources: ["eurlex_teu"]
        },
        {
          title: "Le Conseil de l'UE",
          text: "Réunit les **ministres** des États selon le sujet (agriculture, finances…). Il **vote les lois** avec le Parlement. Règle courante : la **majorité qualifiée** = **55 % des États** représentant **65 % de la population** de l'UE (art. 16 TUE). Présidence tournante tous les **6 mois**.",
          sources: ["eurlex_teu", "eurlex_tfue"]
        },
        {
          title: "Le Parlement européen",
          text: "Élu au **suffrage universel direct** tous les 5 ans (dernières élections : **juin 2024**, 720 eurodéputés dont 81 pour la France). Il est **colégislateur** avec le Conseil dans la **procédure législative ordinaire** (art. 294 TFUE), vote le budget et élit le président de la Commission.",
          sources: ["eurlex_teu", "eurlex_tfue294"]
        },
        {
          title: "Le Conseil européen",
          text: "Les **chefs d'État ou de gouvernement** + son président + la présidente de la Commission. Il donne les **impulsions** et orientations politiques, mais **n'exerce pas de fonction législative** (art. 15 TUE). Son président est élu pour **2 ans et demi**, renouvelable une fois.",
          sources: ["eurlex_teu"]
        },
        {
          title: "Qui fait quoi : les compétences",
          text: "Principe d'**attribution** : l'UE n'agit que là où les traités l'autorisent (art. 5 TUE), avec **subsidiarité** et **proportionnalité**.\n- **Exclusives** (art. 3 TFUE) : union douanière, concurrence, **monnaie** (zone euro), politique commerciale\n- **Partagées** (art. 4) : marché intérieur, environnement, agriculture, énergie…",
          sources: ["eurlex_teu", "eurlex_tfue3", "eurlex_tfue4"]
        }
      ],
      quiz: [
        {
          q: "Quelle institution détient l'essentiel de l'initiative législative dans l'UE ?",
          choices: ["La Commission européenne", "Le Parlement européen", "Le Conseil européen", "La Cour de justice"],
          answer: 0,
          explain: "La Commission (art. 17 TUE) : sauf exceptions prévues par les traités, un acte législatif ne peut être adopté que sur sa proposition.",
          sources: ["eurlex_teu"]
        },
        {
          q: "Vrai ou faux : le Conseil européen vote les lois de l'Union.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : art. 15 TUE, il n'exerce pas de fonction législative. Ce sont le Parlement européen et le Conseil de l'UE.",
          sources: ["eurlex_teu"]
        },
        {
          q: "La majorité qualifiée au Conseil de l'UE, c'est…",
          choices: ["L'unanimité", "50 % des États", "2/3 des États", "55 % des États représentant 65 % de la population"],
          answer: 3,
          explain: "Art. 16 § 4 TUE : 55 % des membres du Conseil représentant au moins 65 % de la population.",
          sources: ["eurlex_teu"]
        },
        {
          q: "La politique monétaire de la zone euro est une compétence…",
          choices: ["Exclusive de l'Union", "Partagée", "D'appui", "Purement nationale"],
          answer: 0,
          explain: "Exclusive, pour les États dont la monnaie est l'euro (art. 3 TFUE).",
          sources: ["eurlex_tfue3"]
        },
        {
          q: "Vrai ou faux : dans la procédure législative ordinaire, le Parlement européen et le Conseil de l'UE sont à égalité.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : ils sont colégislateurs (art. 294 TFUE), un texte doit être approuvé par les deux.",
          sources: ["eurlex_tfue294"]
        }
      ],
      mission: {
        title: "Défi : trouve ton eurodéputé",
        text: "Sur le site du Parlement européen, cherche les 81 eurodéputés français et repère-en un dont tu ne connaissais pas le nom. Regarde dans quel groupe politique il siège et sur quelle commission il travaille. Puis lis l'article 5 du TUE (subsidiarité) sur EUR-Lex : 5 lignes."
      }
    },

    // ─────────────────────────────────────────────── (d)
    {
      id: "candidat-2027",
      title: "Être candidat à la présidentielle",
      minutes: 5,
      takeaway: "Pour 2027 : 500 parrainages d'élus dans au moins 30 départements avant le 12 mars, un compte de campagne plafonné et contrôlé par la CNCCFP, et un vote les 18 avril et 2 mai 2027.",
      punchline: "« Un parrainage n'est pas un soutien politique : c'est un filtre de sérieux, et il est public. »",
      cards: [
        {
          title: "Les conditions de base",
          text: "Pour être candidat, il faut avoir la **qualité d'électeur** (nationalité française, 18 ans, droits civiques), ne pas être inéligible, et déposer une **déclaration de situation patrimoniale** et une **déclaration d'intérêts**. Le Président sortant ne peut pas se représenter après **deux mandats consécutifs** (art. 6).",
          sources: ["infogouv_conditions", "legifrance_loi62", "legifrance_constitution"]
        },
        {
          title: "Les 500 parrainages",
          text: "Loi n° 62-1292 du 6 novembre 1962 : il faut **500 présentations** d'élus (maires, parlementaires, conseillers départementaux et régionaux…), venant d'au moins **30 départements ou collectivités d'outre-mer**, sans que plus d'**1/10 (50)** viennent du même. L'élu l'envoie **lui-même** au Conseil constitutionnel ; les noms sont **publiés**.",
          sources: ["legifrance_loi62", "infogouv_pres2027", "interieur_candidat"]
        },
        {
          title: "Le rôle du Conseil constitutionnel",
          text: "**Art. 58** : il veille à la **régularité** de l'élection présidentielle, examine les réclamations et **proclame les résultats**. C'est lui qui reçoit les parrainages, vérifie leur validité et **arrête la liste officielle** des candidats.",
          sources: ["legifrance_constitution", "conseil_constitutionnel", "interieur_presidentielle"]
        },
        {
          title: "L'argent de la campagne",
          text: "- **Plafond** (2022) : **16,851 M€** au 1er tour, **22,509 M€** pour les finalistes\n- **Dons** : personnes physiques seulement, max **4 600 €** par personne ; entreprises interdites\n- **Remboursement** : **47,5 % du plafond** au-delà de 5 % des voix, 4,75 % sinon\nLa **CNCCFP** contrôle les comptes ; en 2012, un compte a été rejeté.",
          sources: ["publicsenat_financement", "legifrance_loi62", "cnccfp"]
        },
        {
          title: "Temps de parole et calendrier 2027",
          text: "L'**Arcom** encadre les médias : en 2022, **équité** puis **égalité** du temps de parole, stricte pendant la campagne officielle.\n**Calendrier 2027** (annoncé le 1er juillet 2026) :\n- Parrainages : jusqu'au **12 mars 2027**\n- 1er tour : **dimanche 18 avril 2027**\n- 2nd tour : **dimanche 2 mai 2027**",
          sources: ["arcom_2022", "arcom", "infogouv_pres2027"]
        }
      ],
      quiz: [
        {
          q: "Combien de parrainages faut-il pour être candidat à la présidentielle ?",
          choices: ["1 000", "150", "500", "50 000 signatures citoyennes"],
          answer: 2,
          explain: "500 présentations d'élus (loi n° 62-1292 du 6 novembre 1962).",
          sources: ["legifrance_loi62"]
        },
        {
          q: "Les 500 parrainages doivent venir d'au moins combien de départements ou collectivités d'outre-mer ?",
          choices: ["10", "50", "101", "30"],
          answer: 3,
          explain: "Au moins 30, et pas plus de 1/10 (50) d'un même département ou collectivité.",
          sources: ["legifrance_loi62", "infogouv_pres2027"]
        },
        {
          q: "Vrai ou faux : une entreprise peut financer la campagne d'un candidat à hauteur de 4 600 €.",
          choices: ["Vrai", "Faux"],
          answer: 1,
          explain: "Faux : seules les personnes physiques peuvent donner (max 4 600 €). Les dons des personnes morales sont interdits.",
          sources: ["publicsenat_financement", "legifrance_loi62"]
        },
        {
          q: "Date du premier tour de la présidentielle 2027 ?",
          choices: ["11 avril 2027", "25 avril 2027", "2 mai 2027", "18 avril 2027"],
          answer: 3,
          explain: "Dimanche 18 avril 2027 (17 avril dans certains territoires d'outre-mer et en Polynésie). Second tour : 2 mai 2027.",
          sources: ["infogouv_pres2027"]
        },
        {
          q: "Vrai ou faux : c'est le Conseil constitutionnel qui proclame les résultats de l'élection présidentielle.",
          choices: ["Vrai", "Faux"],
          answer: 0,
          explain: "Vrai : art. 58 de la Constitution.",
          sources: ["legifrance_constitution"]
        }
      ],
      mission: {
        title: "Défi : simule une campagne",
        text: "Ouvre la loi n° 62-1292 sur Légifrance et lis l'article 3 (parrainages et financement). Puis fais le calcul : avec le plafond 2022 de 16,851 M€, combien rembourse l'État à un candidat à 4 % ? à 6 % ? Vérifie enfin sur info.gouv.fr que tu es bien inscrit sur les listes avant le 12 mars 2027."
      }
    }
  ],

  glossary: [
    { term: "Contreseing", def: "Signature d'un ministre ou du PM sur un acte du Président ; certains pouvoirs propres en sont dispensés (art. 19).", sources: ["legifrance_constitution"] },
    { term: "Article 16", def: "Pouvoirs exceptionnels du Président en cas de crise grave ; utilisé une seule fois, en 1961.", sources: ["legifrance_constitution", "vp_constitution"] },
    { term: "Dissolution", def: "Décision du Président de mettre fin au mandat des députés et de provoquer des élections législatives (art. 12).", sources: ["legifrance_constitution"] },
    { term: "Motion de censure", def: "Vote de l'Assemblée qui renverse le gouvernement s'il réunit la majorité absolue des députés (art. 49).", sources: ["legifrance_constitution"] },
    { term: "49.3", def: "Engagement de la responsabilité du gouvernement sur un texte, adopté sauf motion de censure votée.", sources: ["legifrance_constitution"] },
    { term: "Référendum d'initiative partagée (RIP)", def: "Référendum de l'art. 11 lancé par 1/5 des parlementaires et soutenu par 1/10 des électeurs inscrits.", sources: ["legifrance_constitution"] },
    { term: "QPC", def: "Question prioritaire de constitutionnalité : contester une loi en vigueur à l'occasion d'un procès (art. 61-1).", sources: ["legifrance_constitution", "conseil_constitutionnel"] },
    { term: "Commission mixte paritaire", def: "7 députés + 7 sénateurs chargés de trouver un texte commun en cas de désaccord (art. 45).", sources: ["legifrance_constitution"] },
    { term: "Majorité qualifiée (UE)", def: "Au Conseil de l'UE : 55 % des États représentant 65 % de la population.", sources: ["eurlex_teu"] },
    { term: "Subsidiarité", def: "Principe selon lequel une décision est prise au niveau le plus pertinent (UE ou collectivités).", sources: ["eurlex_teu", "legifrance_constitution"] },
    { term: "Parrainage (présentation)", def: "Signature d'un élu habilité présentant un candidat à la présidentielle ; 500 nécessaires, rendues publiques.", sources: ["legifrance_loi62"] },
    { term: "CNCCFP", def: "Autorité qui contrôle les comptes de campagne et fixe le remboursement de l'État.", sources: ["cnccfp", "publicsenat_financement"] },
    { term: "Plafond de dépenses", def: "Montant maximal qu'un candidat peut dépenser : 16,851 M€ au 1er tour en 2022.", sources: ["publicsenat_financement"] }
  ],

  annexes: [
    {
      title: "Calendrier 2027 (officiel)",
      text: "- **1er juillet 2026** : le gouvernement annonce les dates\n- **12 mars 2027** : fin du dépôt des parrainages et des inscriptions sur les listes électorales\n- **Fin mars 2027** : liste officielle des candidats publiée par le Conseil constitutionnel\n- **18 avril 2027** : 1er tour (samedi 17 dans certains territoires d'outre-mer)\n- **2 mai 2027** : 2nd tour (samedi 1er mai outre-mer concerné)\n- Le décret de convocation doit paraître au moins **10 semaines** avant le 1er tour.",
      sources: ["infogouv_pres2027", "legifrance_loi62"]
    },
    {
      title: "Fiche réflexe : les articles à connaître",
      text: "- **Art. 5** : Président arbitre et garant\n- **Art. 6-7** : mandat de 5 ans, 2 mandats consécutifs max, majorité absolue\n- **Art. 8** : nomination du PM\n- **Art. 11** : référendum et RIP\n- **Art. 12** : dissolution\n- **Art. 16** : pouvoirs exceptionnels\n- **Art. 20-21** : gouvernement et PM\n- **Art. 47** : budget en 70 jours\n- **Art. 49** : responsabilité, censure, 49.3\n- **Art. 58** : contrôle de la présidentielle\n- **Art. 61-1** : QPC\n- **Art. 89** : révision",
      sources: ["legifrance_constitution"]
    },
    {
      title: "Bibliographie commentée",
      text: "- **Constitution sur Légifrance** : le seul texte qui fait foi, consolidé.\n- **Édition vie-publique 2024** : pratique, avec l'historique des 25 révisions.\n- **Loi n° 62-1292** : tout sur les parrainages et le financement de la présidentielle.\n- **info.gouv.fr / elections.interieur.gouv.fr** : le calendrier 2027 et le guide du candidat.\n- **Traités TUE/TFUE sur EUR-Lex** : pour vérifier qui fait quoi dans l'UE.",
      sources: ["legifrance_constitution", "vp_constitution", "legifrance_loi62", "infogouv_pres2027", "interieur_candidat", "eurlex_teu", "eurlex_tfue"]
    }
  ]
});
