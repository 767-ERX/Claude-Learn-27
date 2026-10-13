registerModule({
  id: "ia",
  title: "Intelligence artificielle",
  emoji: "🤖",
  color: "#f59e0b",
  tagline: "Comment ça marche, ce que ça change, ce que ça risque, et comment on l'encadre.",
  updated: "2026-10",

  sources: {
    rumelhart1986: {
      title: "Learning representations by back-propagating errors",
      author: "D. Rumelhart, G. Hinton & R. Williams",
      year: 1986,
      url: "https://doi.org/10.1038/323533a0",
      kind: "primaire",
      publisher: "Nature"
    },
    nobelPhys2024: {
      title: "The Nobel Prize in Physics 2024 (John Hopfield & Geoffrey Hinton)",
      author: "Académie royale des sciences de Suède",
      year: 2024,
      url: "https://www.nobelprize.org/prizes/physics/2024/summary/",
      kind: "primaire",
      publisher: "nobelprize.org"
    },
    vaswani2017: {
      title: "Attention Is All You Need",
      author: "A. Vaswani et al. (Google)",
      year: 2017,
      url: "https://arxiv.org/abs/1706.03762",
      kind: "primaire",
      publisher: "arXiv / NeurIPS 2017"
    },
    brown2020: {
      title: "Language Models are Few-Shot Learners (GPT-3)",
      author: "T. Brown et al. (OpenAI)",
      year: 2020,
      url: "https://arxiv.org/abs/2005.14165",
      kind: "primaire",
      publisher: "arXiv / NeurIPS 2020"
    },
    ouyang2022: {
      title: "Training language models to follow instructions with human feedback (InstructGPT)",
      author: "L. Ouyang et al. (OpenAI)",
      year: 2022,
      url: "https://arxiv.org/abs/2203.02155",
      kind: "primaire",
      publisher: "arXiv / NeurIPS 2022"
    },
    kaplan2020: {
      title: "Scaling Laws for Neural Language Models",
      author: "J. Kaplan et al. (OpenAI)",
      year: 2020,
      url: "https://arxiv.org/abs/2001.08361",
      kind: "primaire",
      publisher: "arXiv"
    },
    hoffmann2022: {
      title: "Training Compute-Optimal Large Language Models (Chinchilla)",
      author: "J. Hoffmann et al. (DeepMind)",
      year: 2022,
      url: "https://arxiv.org/abs/2203.15556",
      kind: "primaire",
      publisher: "arXiv"
    },
    ji2023: {
      title: "Survey of Hallucination in Natural Language Generation",
      author: "Z. Ji et al.",
      year: 2023,
      url: "https://doi.org/10.1145/3571730",
      kind: "secondaire",
      publisher: "ACM Computing Surveys"
    },
    nobelChem2024: {
      title: "The Nobel Prize in Chemistry 2024 (David Baker, Demis Hassabis & John Jumper)",
      author: "Académie royale des sciences de Suède",
      year: 2024,
      url: "https://www.nobelprize.org/prizes/chemistry/2024/summary/",
      kind: "primaire",
      publisher: "nobelprize.org"
    },
    jumper2021: {
      title: "Highly accurate protein structure prediction with AlphaFold",
      author: "J. Jumper et al. (DeepMind)",
      year: 2021,
      url: "https://doi.org/10.1038/s41586-021-03819-2",
      kind: "primaire",
      publisher: "Nature"
    },
    lang2023: {
      title: "Artificial intelligence-supported screen reading versus standard double reading in the MASAI trial",
      author: "K. Lång et al.",
      year: 2023,
      url: "https://doi.org/10.1016/S1470-2045(23)00298-X",
      kind: "primaire",
      publisher: "The Lancet Oncology"
    },
    brynjolfsson2025: {
      title: "Generative AI at Work",
      author: "E. Brynjolfsson, D. Li & L. Raymond",
      year: 2025,
      url: "https://doi.org/10.1093/qje/qjae044",
      kind: "primaire",
      publisher: "Quarterly Journal of Economics"
    },
    noy2023: {
      title: "Experimental evidence on the productivity effects of generative artificial intelligence",
      author: "S. Noy & W. Zhang",
      year: 2023,
      url: "https://doi.org/10.1126/science.adh2586",
      kind: "primaire",
      publisher: "Science"
    },
    dellacqua2023: {
      title: "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality",
      author: "F. Dell'Acqua et al. (Harvard Business School, BCG)",
      year: 2023,
      url: "https://doi.org/10.2139/ssrn.4573321",
      kind: "primaire",
      publisher: "HBS Working Paper 24-013"
    },
    metr2025: {
      title: "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity",
      author: "J. Becker et al. (METR)",
      year: 2025,
      url: "https://arxiv.org/abs/2507.09089",
      kind: "primaire",
      publisher: "arXiv"
    },
    acemoglu2024: {
      title: "The Simple Macroeconomics of AI",
      author: "D. Acemoglu",
      year: 2024,
      url: "https://doi.org/10.3386/w32487",
      kind: "primaire",
      publisher: "NBER Working Paper 32487"
    },
    imf2024: {
      title: "Gen-AI: Artificial Intelligence and the Future of Work (Staff Discussion Note SDN/2024/001)",
      author: "M. Cazzaniga et al. (FMI)",
      year: 2024,
      url: "https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379",
      kind: "primaire",
      publisher: "Fonds monétaire international"
    },
    buolamwini2018: {
      title: "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification",
      author: "J. Buolamwini & T. Gebru",
      year: 2018,
      url: "https://proceedings.mlr.press/v81/buolamwini18a.html",
      kind: "primaire",
      publisher: "PMLR (FAccT 2018)"
    },
    obermeyer2019: {
      title: "Dissecting racial bias in an algorithm used to manage the health of populations",
      author: "Z. Obermeyer et al.",
      year: 2019,
      url: "https://doi.org/10.1126/science.aax2342",
      kind: "primaire",
      publisher: "Science"
    },
    iaisr2025: {
      title: "International AI Safety Report (janvier 2025)",
      author: "Y. Bengio (dir.) et 95 autres experts",
      year: 2025,
      url: "https://arxiv.org/abs/2501.17805",
      kind: "primaire",
      publisher: "arXiv / gouvernement du Royaume-Uni"
    },
    cais2023: {
      title: "Statement on AI Risk",
      author: "Center for AI Safety (signataires multiples)",
      year: 2023,
      url: "https://www.safe.ai/work/statement-on-ai-risk",
      kind: "primaire",
      publisher: "Center for AI Safety"
    },
    iea2025: {
      title: "Energy and AI",
      author: "Agence internationale de l'énergie (AIE)",
      year: 2025,
      url: "https://www.iea.org/reports/energy-and-ai",
      kind: "primaire",
      publisher: "IEA"
    },
    aiIndex2025: {
      title: "AI Index Report 2025",
      author: "Stanford HAI",
      year: 2025,
      url: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
      kind: "secondaire",
      publisher: "Stanford University"
    },
    aiAct: {
      title: "Règlement (UE) 2024/1689 sur l'intelligence artificielle (AI Act)",
      author: "Parlement européen & Conseil de l'UE",
      year: 2024,
      url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
      kind: "primaire",
      publisher: "EUR-Lex"
    },
    aiActPage: {
      title: "AI Act : cadre réglementaire et calendrier d'application",
      author: "Commission européenne",
      year: 2026,
      url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
      kind: "primaire",
      publisher: "Commission européenne"
    },
    oecdPrinciples: {
      title: "Principes de l'OCDE sur l'IA (2019, révisés en 2024)",
      author: "OCDE",
      year: 2024,
      url: "https://oecd.ai/en/ai-principles",
      kind: "primaire",
      publisher: "OECD.AI"
    },
    oecdLegal: {
      title: "Recommandation du Conseil sur l'intelligence artificielle (OECD/LEGAL/0449)",
      author: "OCDE",
      year: 2024,
      url: "https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449",
      kind: "primaire",
      publisher: "OCDE"
    },
    bletchley: {
      title: "The Bletchley Declaration by Countries Attending the AI Safety Summit, 1-2 November 2023",
      author: "Gouvernement du Royaume-Uni",
      year: 2023,
      url: "https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023",
      kind: "primaire",
      publisher: "gov.uk"
    },
    paris2025: {
      title: "Sommet pour l'action sur l'IA (Paris, 10-11 février 2025) et Déclaration pour une IA inclusive et durable : dossier sur elysee.fr",
      author: "Présidence de la République",
      year: 2025,
      url: "https://www.elysee.fr/emmanuel-macron/2025/02/11/declaration-sur-une-intelligence-artificielle-inclusive-et-durable-pour-les-peuples-et-la-planete",
      kind: "primaire",
      publisher: "elysee.fr"
    },
    commissionIA: {
      title: "IA : notre ambition pour la France, rapport de la Commission de l'intelligence artificielle (13 mars 2024) : publié sur info.gouv.fr",
      author: "Commission de l'IA (co-présidée par A. Bouverot et P. Aghion)",
      year: 2024,
      url: "https://www.info.gouv.fr/actualite/25-recommandations-pour-lia-en-france",
      kind: "primaire",
      publisher: "Gouvernement"
    }
  },

  lessons: [
    {
      id: "comment-ca-marche",
      title: "Comment ça marche",
      minutes: 4,
      takeaway: "Un LLM est un réseau de neurones de type Transformer qui prédit le prochain token, poli par des retours humains (RLHF), et qui peut halluciner avec aplomb.",
      punchline: "Une IA générative ne « sait » pas, elle prédit : c'est puissant, mais ça oblige à vérifier.",
      cards: [
        { title: "Apprendre plutôt que programmer", text: "En **machine learning**, on ne code pas les règles : on montre des milliers d'exemples et l'algorithme ajuste ses réglages pour réduire ses erreurs. Les **réseaux de neurones** empilent des couches de « neurones » mathématiques, entraînés par **rétropropagation** (1986). Prix Nobel de physique 2024 : John Hopfield et Geoffrey Hinton.", sources: ["rumelhart1986", "nobelPhys2024"] },
        { title: "2017 : le Transformer", text: "L'article « Attention Is All You Need » (Google, 2017) invente le **Transformer**. Grâce au mécanisme d'**attention**, chaque mot « regarde » tous les autres pour saisir le contexte, et les calculs se font en parallèle. C'est le « T » de GPT, et la base de quasiment tous les grands modèles de langage actuels.", sources: ["vaswani2017"] },
        { title: "Un LLM prédit la suite", text: "Un **grand modèle de langage (LLM)** découpe le texte en **tokens** (des morceaux de mots) et calcule, token après token, la suite la plus probable. Pas de magie : des milliards de **paramètres** réglés sur d'immenses corpus de textes. GPT-3 (2020) en comptait déjà 175 milliards.", sources: ["brown2020"] },
        { title: "Deux temps d'entraînement", text: "- **Pré-entraînement** : le modèle lit d'énormes quantités de texte en apprenant à prédire la suite.\n- **Ajustement** : des humains comparent ses réponses, et le modèle apprend à préférer les meilleures : c'est le **RLHF**.\nEn 2022, les réponses d'InstructGPT (1,3 milliard de paramètres) étaient préférées à celles de GPT-3 (175 milliards).", sources: ["ouyang2022"] },
        { title: "Plus gros = mieux ? Et les hallucinations", text: "Les **lois d'échelle** (2020) : les performances progressent de façon prévisible avec la taille du modèle, les données et le calcul. Chinchilla (2022) a montré qu'il faut aussi beaucoup plus de données. Limite majeure : les **hallucinations**, réponses fluides mais fausses, car le modèle optimise la plausibilité, pas la vérité.", sources: ["kaplan2020", "hoffmann2022", "ji2023"] }
      ],
      quiz: [
        { q: "Que signifie le « T » de GPT ?", choices: ["Turing", "Transformer", "Token", "Training"], answer: 1, explain: "GPT = Generative Pre-trained Transformer, l'architecture inventée en 2017.", sources: ["vaswani2017", "brown2020"] },
        { q: "Vrai ou faux : un LLM fonctionne en prédisant, étape par étape, le token suivant le plus probable.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai. C'est son principe de base, appris pendant le pré-entraînement.", sources: ["brown2020"] },
        { q: "Que désigne le RLHF ?", choices: ["Un type de puce électronique", "L'apprentissage par renforcement à partir de retours humains", "Une loi européenne", "Un langage de programmation"], answer: 1, explain: "Reinforcement Learning from Human Feedback : des humains classent les réponses, le modèle apprend à préférer les meilleures.", sources: ["ouyang2022"] },
        { q: "Vrai ou faux : les hallucinations sont un bug rare qui ne touche que les vieux modèles.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux. Elles découlent du fonctionnement même des modèles génératifs, qui produisent du plausible. Elles diminuent mais restent un risque à vérifier.", sources: ["ji2023"] },
        { q: "Qui a reçu le prix Nobel de physique 2024 pour des travaux fondateurs sur les réseaux de neurones ?", choices: ["John Hopfield et Geoffrey Hinton", "Demis Hassabis et John Jumper", "Ashish Vaswani et Noam Shazeer", "Alan Turing et John von Neumann"], answer: 0, explain: "Hopfield et Hinton, « pour des découvertes fondatrices permettant l'apprentissage automatique avec des réseaux de neurones artificiels ».", sources: ["nobelPhys2024"] }
      ],
      mission: { title: "Piège à hallucination", text: "Pose à un chatbot une question pointue dont tu connais la réponse (l'histoire de ton village, un détail de ton métier). Note s'il se trompe ou invente avec assurance. Tu viens d'observer une hallucination en vrai." }
    },

    {
      id: "benefices",
      title: "Les bénéfices",
      minutes: 4,
      takeaway: "L'IA a déjà des preuves solides (AlphaFold, dépistage du cancer, productivité des débutants), mais ses gains dépendent beaucoup de la tâche.",
      punchline: "Les études le montrent : l'IA aide d'abord le débutant à rattraper l'expert, pas l'inverse.",
      cards: [
        { title: "AlphaFold : un Nobel", text: "Déterminer la forme 3D d'une protéine pouvait prendre des années. **AlphaFold2** (DeepMind, 2020-2021) la prédit en quelques minutes avec une précision proche de l'expérience. Prix Nobel de chimie 2024 pour Demis Hassabis et John Jumper (avec David Baker). Environ 200 millions de structures ont été prédites.", sources: ["nobelChem2024", "jumper2021"] },
        { title: "Santé : un second regard", text: "Essai MASAI (Suède, publié en 2023, plus de 80 000 femmes) : le dépistage du cancer du sein assisté par IA a détecté au moins autant de cancers (6,1 contre 5,1 pour 1 000) tout en réduisant de **44 %** la charge de lecture des radiologues. Le suivi à long terme reste à confirmer.", sources: ["lang2023"] },
        { title: "Productivité : ce que disent les études", text: "- Service client (5 179 conseillers) : **+14 %** de demandes traitées par heure, **+34 %** pour les débutants, peu d'effet pour les plus expérimentés (QJE, 2025)\n- Rédaction professionnelle : **−40 %** de temps, **+18 %** de qualité (Science, 2023)", sources: ["brynjolfsson2025", "noy2023"] },
        { title: "La « frontière irrégulière »", text: "758 consultants du BCG (2023) : sur les tâches adaptées à l'IA, +12 % de tâches réalisées, 25 % plus vite, qualité +40 %. Mais sur une tâche hors de sa portée, les utilisateurs d'IA avaient **19 points de moins** de bonnes réponses. En 2025, des développeurs expérimentés ont même été **19 % plus lents** avec l'IA (étude METR).", sources: ["dellacqua2023", "metr2025"] },
        { title: "Économie & services publics", text: "Optimistes : pour le FMI (2024), environ la moitié des emplois exposés à l'IA pourraient gagner en productivité. Prudents : Daron Acemoglu (Nobel d'économie 2024) estime le gain de productivité globale à 0,7 % au plus sur 10 ans. Services publics : potentiel réel, mais l'AI Act classe à haut risque l'IA qui décide d'aides sociales.", sources: ["imf2024", "acemoglu2024", "aiAct"] }
      ],
      quiz: [
        { q: "Pour quelle avancée Demis Hassabis et John Jumper ont-ils reçu le Nobel de chimie 2024 ?", choices: ["Un vaccin à ARN messager", "La prédiction de la structure des protéines (AlphaFold)", "Le premier ordinateur quantique", "Le séquençage du génome humain"], answer: 1, explain: "AlphaFold2 prédit la structure 3D des protéines à partir de leur séquence.", sources: ["nobelChem2024"] },
        { q: "Vrai ou faux : dans l'étude sur le service client, ce sont les conseillers les plus expérimentés qui ont le plus gagné en productivité.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux : +34 % pour les débutants, effet minime pour les plus expérimentés.", sources: ["brynjolfsson2025"] },
        { q: "Dans l'étude publiée dans Science en 2023, de combien le temps de rédaction a-t-il baissé avec ChatGPT ?", choices: ["−5 %", "−20 %", "−40 %", "−90 %"], answer: 2, explain: "Environ −40 % de temps, avec une qualité jugée supérieure de 18 %.", sources: ["noy2023"] },
        { q: "Vrai ou faux : l'étude METR (2025) a montré que des développeurs expérimentés allaient 19 % plus vite avec l'IA.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux : ils ont été 19 % plus LENTS, alors qu'ils pensaient avoir gagné du temps. Les gains ne sont pas automatiques.", sources: ["metr2025"] },
        { q: "Quelle baisse de la charge de lecture des radiologues l'essai MASAI a-t-il observée ?", choices: ["4 %", "44 %", "84 %", "100 %"], answer: 1, explain: "44 %, sans détecter moins de cancers que la double lecture classique.", sources: ["lang2023"] }
      ],
      mission: { title: "Le match humain contre IA", text: "Choisis une tâche répétitive de ta semaine (un mail, un résumé, un tableau). Fais-la une fois seul, une fois avec une IA. Chronomètre et relis attentivement : gain réel, ou illusion ?" }
    },

    {
      id: "risques",
      title: "Les risques",
      minutes: 4,
      takeaway: "Biais, deepfakes, emploi, concentration, énergie, sécurité : les risques de l'IA sont documentés, mais leur ampleur fait débat.",
      punchline: "Le danger n'est pas que l'IA pense comme nous, c'est qu'elle reproduise nos biais à grande échelle.",
      cards: [
        { title: "Les biais", text: "Une IA apprend des données… et de leurs biais. **Gender Shades** (2018) : jusqu'à **34,7 %** d'erreur sur les femmes à peau foncée, contre **0,8 %** sur les hommes à peau claire, pour des logiciels commerciaux d'analyse de visages. En santé (2019), un algorithme américain sous-estimait les besoins des patients noirs.", sources: ["buolamwini2018", "obermeyer2019"] },
        { title: "Deepfakes & désinformation", text: "Textes, images et voix truqués ne coûtent presque plus rien à produire. Le Rapport international sur la sécurité de l'IA (2025) cite manipulations de l'opinion, arnaques et images intimes non consenties. Réponse européenne : l'**AI Act** impose de signaler les contenus hypertruqués (art. 50).", sources: ["iaisr2025", "aiAct"] },
        { title: "L'emploi", text: "FMI (janvier 2024) : près de **40 %** des emplois mondiaux sont exposés à l'IA, **60 %** dans les économies avancées. Environ la moitié pourrait en bénéficier ; pour l'autre, la demande de travail pourrait baisser. Risque identifié : une hausse des inégalités sans politiques d'accompagnement.", sources: ["imf2024"] },
        { title: "Concentration & énergie", text: "En 2024, près de **90 %** des modèles d'IA notables venaient d'entreprises ; 40 des États-Unis, 15 de Chine, 3 d'Europe (AI Index 2025). Énergie : les data centers ont consommé environ **415 TWh** en 2024 (~1,5 % de l'électricité mondiale) ; l'AIE projette ~945 TWh en 2030.", sources: ["aiIndex2025", "iea2025"] },
        { title: "Cyber & risques extrêmes", text: "Le **Rapport international sur la sécurité de l'IA** (janv. 2025, 96 experts présidés par Yoshua Bengio) pointe l'aide aux cyberattaques, les risques biologiques et une possible **perte de contrôle**. Mais les experts **divergent** fortement sur la probabilité et l'échéance de ces risques. En 2023, des centaines de chercheurs ont appelé à en faire une priorité mondiale.", sources: ["iaisr2025", "cais2023"] }
      ],
      quiz: [
        { q: "Selon le FMI (2024), quelle part des emplois mondiaux est exposée à l'IA ?", choices: ["Environ 10 %", "Environ 40 %", "Environ 75 %", "100 %"], answer: 1, explain: "Près de 40 % dans le monde, 60 % dans les économies avancées. Exposé ne veut pas dire supprimé.", sources: ["imf2024"] },
        { q: "Vrai ou faux : l'étude Gender Shades a mesuré des taux d'erreur très inégaux selon le genre et la couleur de peau.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai : de 0,8 % à 34,7 % d'erreur selon les groupes.", sources: ["buolamwini2018"] },
        { q: "D'où venaient la grande majorité des modèles d'IA notables en 2024 ?", choices: ["Des universités", "Des entreprises", "Des gouvernements", "Des ONG"], answer: 1, explain: "Près de 90 % venaient de l'industrie (AI Index 2025).", sources: ["aiIndex2025"] },
        { q: "Vrai ou faux : les experts du Rapport international sur la sécurité de l'IA sont unanimes sur l'échéance des risques extrêmes.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux. Le rapport insiste sur l'incertitude et les désaccords entre experts.", sources: ["iaisr2025"] },
        { q: "Selon l'AIE, combien d'électricité les data centers ont-ils consommé en 2024 ?", choices: ["Environ 15 TWh", "Environ 415 TWh", "Environ 4 150 TWh", "Environ 41 500 TWh"], answer: 1, explain: "Environ 415 TWh, soit ~1,5 % de l'électricité mondiale, avec une forte croissance attendue.", sources: ["iea2025"] }
      ],
      mission: { title: "Enquête deepfake", text: "Trouve une image ou une vidéo virale que tu soupçonnes d'être générée par IA. Fais une recherche d'image inversée et remonte à l'origine. Raconte le résultat à quelqu'un autour de toi." }
    },

    {
      id: "reguler",
      title: "Réguler l'IA",
      minutes: 4,
      takeaway: "L'Europe régule par niveaux de risque (AI Act, appliqué par étapes de 2025 à 2027), l'OCDE fixe des principes, et les sommets internationaux cherchent un terrain commun.",
      punchline: "Réguler trop tôt freine l'innovation, réguler trop tard laisse faire : tout le débat sur l'IA tient dans cette tension.",
      cards: [
        { title: "L'AI Act : la loi par le risque", text: "Règlement (UE) **2024/1689**, présenté comme la première loi transversale sur l'IA au monde. Quatre niveaux :\n- **Inacceptable** : interdit (notation sociale, manipulation…)\n- **Haut risque** : obligations strictes (emploi, éducation, crédit…)\n- **Transparence** : signaler chatbots et deepfakes\n- **Minimal** : libre\nAmendes jusqu'à 35 M€ ou 7 % du CA mondial.", sources: ["aiAct"] },
        { title: "Le calendrier", text: "- 1er août 2024 : entrée en vigueur\n- 2 février 2025 : interdictions + culture de l'IA\n- 2 août 2025 : modèles d'IA à usage général\n- 2 août 2026 : la plupart des règles\n- 2 août 2027 : haut risque intégré à des produits\nFin 2025, la Commission a proposé (« omnibus numérique ») de décaler une partie des règles haut risque.", sources: ["aiAct", "aiActPage"] },
        { title: "Les principes de l'OCDE", text: "Adoptés en **mai 2019**, premier standard intergouvernemental sur l'IA, révisés en **mai 2024** : croissance inclusive, droits humains et vie privée, transparence, robustesse et sécurité, responsabilité. Non contraignants, ils ont inspiré les principes du G20 la même année.", sources: ["oecdPrinciples", "oecdLegal"] },
        { title: "De Bletchley à Paris", text: "- **Bletchley** (novembre 2023) : 28 pays + l'UE, dont les États-Unis et la Chine, reconnaissent les risques des IA « de frontière »\n- **Paris** (10-11 février 2025) : Sommet pour l'action sur l'IA ; déclaration pour une IA « inclusive et durable », non signée par les États-Unis ni le Royaume-Uni ; 109 Md€ d'investissements annoncés en France.", sources: ["bletchley", "paris2025"] },
        { title: "Et la France ?", text: "Stratégie nationale lancée en **2018** (rapport Villani). En **mars 2024**, la Commission de l'IA (Anne Bouverot, Philippe Aghion) remet **25 recommandations** (« IA : notre ambition pour la France »). Les débats : puissance de calcul, formation, souveraineté, et le dosage entre innovation et régulation, critiqué dans les deux sens.", sources: ["commissionIA"] }
      ],
      quiz: [
        { q: "Quel est le numéro du règlement européen sur l'IA ?", choices: ["2016/679", "2022/2065", "2024/1689", "2025/001"], answer: 2, explain: "Règlement (UE) 2024/1689. 2016/679, c'est le RGPD ; 2022/2065, le DSA.", sources: ["aiAct"] },
        { q: "Vrai ou faux : l'AI Act interdit la notation sociale des personnes.", choices: ["Vrai", "Faux"], answer: 0, explain: "Vrai : c'est une pratique « à risque inacceptable » (art. 5), interdite depuis le 2 février 2025.", sources: ["aiAct"] },
        { q: "Depuis quand les obligations sur les modèles d'IA à usage général s'appliquent-elles ?", choices: ["1er août 2024", "2 février 2025", "2 août 2025", "2 août 2027"], answer: 2, explain: "Depuis le 2 août 2025, un an après l'entrée en vigueur.", sources: ["aiAct", "aiActPage"] },
        { q: "Vrai ou faux : les États-Unis ont signé la déclaration du Sommet de Paris de février 2025.", choices: ["Vrai", "Faux"], answer: 1, explain: "Faux : ni les États-Unis ni le Royaume-Uni ne l'ont signée.", sources: ["paris2025"] },
        { q: "Combien de recommandations la Commission de l'IA a-t-elle remises en mars 2024 ?", choices: ["5", "25", "100", "250"], answer: 1, explain: "25 recommandations, dans le rapport « IA : notre ambition pour la France ».", sources: ["commissionIA"] }
      ],
      mission: { title: "Classe ton IA", text: "Prends une IA que tu croises au quotidien (chatbot, filtre photo, tri automatique de CV, reconnaissance faciale…) et classe-la dans l'un des 4 niveaux de risque de l'AI Act. Justifie en une phrase, puis débats-en avec un·e ami·e." }
    }
  ],

  glossary: [
    { term: "Apprentissage automatique (machine learning)", def: "Méthode où un programme apprend à partir d'exemples plutôt que de règles écrites à la main.", sources: ["nobelPhys2024"] },
    { term: "Réseau de neurones", def: "Modèle composé de couches d'unités de calcul connectées, dont les poids sont ajustés pendant l'entraînement (rétropropagation).", sources: ["rumelhart1986"] },
    { term: "Transformer", def: "Architecture de réseau de neurones fondée sur l'attention (2017), base des grands modèles de langage.", sources: ["vaswani2017"] },
    { term: "LLM", def: "Large Language Model, grand modèle de langage : prédit le token suivant à partir d'un contexte (ex. GPT, Claude, Gemini, Mistral).", sources: ["brown2020"] },
    { term: "Token", def: "Unité de texte manipulée par un LLM : un mot, un morceau de mot ou un signe.", sources: ["brown2020"] },
    { term: "Paramètres", def: "Les « réglages » internes d'un modèle, ajustés pendant l'entraînement. GPT-3 en avait 175 milliards (2020).", sources: ["brown2020"] },
    { term: "RLHF", def: "Reinforcement Learning from Human Feedback : apprentissage par renforcement à partir de préférences humaines.", sources: ["ouyang2022"] },
    { term: "Hallucination", def: "Réponse fluide et assurée mais fausse ou inventée, produite par un modèle génératif.", sources: ["ji2023"] },
    { term: "Lois d'échelle", def: "Relations empiriques montrant que les performances progressent de façon prévisible avec la taille du modèle, les données et le calcul.", sources: ["kaplan2020", "hoffmann2022"] },
    { term: "GPAI", def: "General-Purpose AI, IA à usage général : catégorie de l'AI Act ; « risque systémique » présumé au-delà de 10^25 opérations de calcul d'entraînement.", sources: ["aiAct"] },
    { term: "Deepfake (hypertrucage)", def: "Image, son ou vidéo générés ou manipulés par IA pour paraître authentiques. L'AI Act impose de les signaler.", sources: ["aiAct", "iaisr2025"] },
    { term: "AI Act (RIA)", def: "Règlement européen sur l'intelligence artificielle (UE) 2024/1689, qui encadre l'IA selon son niveau de risque.", sources: ["aiAct"] }
  ],

  annexes: [
    {
      title: "Chiffres clés (datés)",
      text: "- **2017** : publication du Transformer\n- **2020** : GPT-3, 175 milliards de paramètres\n- **2024** : Nobel de physique (Hopfield, Hinton) et de chimie (Baker, Hassabis, Jumper)\n- **Janvier 2024** : ~40 % des emplois mondiaux exposés à l'IA (FMI)\n- **2024** : ~90 % des modèles notables issus d'entreprises (AI Index 2025)\n- **2024** : data centers ~415 TWh, ~1,5 % de l'électricité mondiale (AIE)\n- **1er août 2024** : entrée en vigueur de l'AI Act ; amendes jusqu'à 7 % du CA mondial",
      sources: ["vaswani2017", "brown2020", "nobelPhys2024", "nobelChem2024", "imf2024", "aiIndex2025", "iea2025", "aiAct"]
    },
    {
      title: "Le débat en un coup d'œil",
      text: "- **Optimistes** : percées scientifiques (AlphaFold), gains de productivité mesurés surtout chez les débutants, meilleur dépistage médical.\n- **Prudents** : gains macroéconomiques modestes (Acemoglu), ralentissements possibles chez les experts (METR), biais, consommation d'énergie.\n- **Inquiets** : perte de contrôle et usages malveillants, jugés plausibles par une partie des experts, contestés par d'autres.\n- **Consensus** : l'incertitude est grande, d'où l'intérêt d'évaluer et de mesurer.",
      sources: ["nobelChem2024", "brynjolfsson2025", "lang2023", "acemoglu2024", "metr2025", "buolamwini2018", "iea2025", "iaisr2025", "cais2023"]
    },
    {
      title: "Bibliographie commentée",
      text: "- **Attention Is All You Need (2017)** : l'article qui a tout changé ; lis au moins le résumé.\n- **International AI Safety Report (2025)** : la synthèse scientifique la plus complète sur les risques, prudente et nuancée.\n- **FMI, Gen-AI and the Future of Work (2024)** : l'emploi et les inégalités, pays par pays.\n- **AI Act** : les articles 5 (interdictions) et 50 (transparence) suffisent pour briller en débat.\n- **AIE, Energy and AI (2025)** : la référence sur l'électricité et les data centers.",
      sources: ["vaswani2017", "iaisr2025", "imf2024", "aiAct", "iea2025"]
    }
  ]
});
