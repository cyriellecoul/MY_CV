import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Cyrielle Coulais',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '👩‍💻',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Quality Assurance Analyst (QA)',
      fr: 'Consultante TI',
    },

    title1: {
      en: 'Quality Assurance Analyst (QA)',
      fr: 'développement d’affaires & recrutement',
    },
    titleSpecialized: {
      titleSpecialized1: {
        en: 'After',
        fr: 'Après',
      },
      titleSpecialized2: {
        en: ' 5 years of experience',
        fr: ' 5 années d’expérience en TI',
      },
      titleSpecialized3: {
        en: ' as a ',
        fr: ' en tant que ',
      },
      titleSpecialized4: {
        en: 'software developer ',
        fr: 'développeuse logiciels, ',
      },
      titleSpecialized5: {
        en: ' I am now looking to transition into a ',
        fr: 'je souhaite aujourd’hui orienter ma carrière vers un poste ',
      },
      titleSpecialized6: {
        en: 'manual and automated QA role ',
        fr: 'd\'analyste QA manuel et automatisé ',
      },
      titleSpecialized7: {
        en: 'in order to contribute to the reliability and performance of digital products.',
        fr: 'afin de contribuer à la fiabilité et à la performance des produits numériques.',
      },

    },
    location: 'Montréal, Québec',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Cyrielle C — Quality Assurance Analyst',
    description: 'Interactive resume of Cyrielle C, Quality Assurance Analyst.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'email', label: 'cyriellecoul@gmail.com' },
    { type: 'phone', label: '+1 514 442 2470' },

    { type: 'portfolio', label: 'Portfolio', href: 'https://cyriellecoul.github.io/devPortfolio/' },
    { type: 'linkedin', label: 'Cyrielle C', href: 'https://www.linkedin.com/in/cyrielle-c/' },

    { type: 'location', label: 'Montréal, Québec' },

  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' } },
      ],
    },

    {
      title: { en: 'Tools & Tech Stack', fr: 'Outils & Tech Stack' },
      type: 'badges',
      items: [
        { name: 'Jira' },
        { name: 'Git' },
        { name: 'Postman' },
        { name: 'Java' },
        { name: 'Node.js' },
        { name: 'JavaScript' },
        { name: 'MongoDB' },
        { name: 'SQL' },
        { name: 'Bitbucket' },
        { name: 'QA' },
        { name: 'Confluence' },
        { name: 'Agile/Scrum' },
        { name: 'Code Review' },
        { name: 'Pull Requests' },
        { name: 'SourceTree' },
        { name: 'Docker' },
        { name: 'GitHub' },
        { name: 'Objective-C' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'React' },
        { name: 'Angular' },
        { name: 'React Native' },
        { name: 'Android Studio' },
        { name: 'Xcode' },
        { name: 'REST APIs' },
        { name: 'Ngrok' },
        { name: 'Selenium' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'mPhase', fr: 'mPhase' },
      role: { en: 'QA Analyst & Software Developer', fr: 'Analyste QA & Développeuse logiciels' },
      type: { en: 'Montréal', fr: 'Montréal' },
      period: { en: '02/2021 - 10/2025', fr: '02/2021 - 10/2025' },
      description: {
        en: 'Product development, implementation, and testing of a web platform and its associated applications used by more than 10,000 users.',
        fr: 'Conception, développement et tests d’une plateforme web et de ses applications associées utilisées par plus de 10 000 utilisateurs·rices.',
      },
      techs: ['Analyse des besoins TI', 'Résolution de problèmes', 'Communication avec les parties prenantes','Agile/Scrum',  'Cycle de vie du développement logiciel (SDLC)',
        
        'Jira',
        'Confluence',
        'Postman',
        'REST APIs',
        'Git',
        'MongoDB',
        'SQL',
        'Intégration de systèmes',
        'JavaScript',
        'Node.js',
        'Angular',
        'Android Studio',
        'Xcode',
        'Souci du détail',
        ],
      isHighlighted: true,
      details: {
        context1: {
          en: 'Quality assurance has always been one of my core strengths, as I proactively anticipate issues and ensure high-quality deliverables from the early stages of development.',
          fr: 'J’accorde une grande importance à la communication et à la collaboration, en assurant un échange fluide et constant avec les différentes parties prenantes afin de bien comprendre les besoins, faciliter la prise de décision et contribuer à la réussite des projets dans un environnement technique.',
        },

        tasks: {
          en: [
            '**Analyzed business and technical requirements** to understand client needs in IT environments and translate them into actionable solutions.',
            '**Collaborated with cross-functional technical teams** (developers, QA, product stakeholders) to ensure alignment between business objectives and technical delivery.',
            '**Participated in Agile/Scrum environments**, contributing to iterative delivery and continuous improvement of digital products.',
            '**Supported client-oriented discussions around technical solutions**, including APIs (REST), system integrations, and data workflows.',
            '**Leveraged strong analytical skills to understand complex technical systems** (web, mobile, backend) and communicate them in a clear and structured way.',
            '**Worked closely with development teams (Front-End, Back-End, Mobile)** to identify needs, constraints, and delivery priorities.',
            '**Contributed to bug analysis and product quality discussions**, ensuring better understanding of technical issues and user impact.',
            '**Used tools such as Jira, Git, Postman and MongoDB** to follow development progress, validate functionalities, and support delivery tracking.',
            '**Demonstrated strong problem-solving and communication skills** in collaborative and fast-paced environments.',
          ],
          fr: [
            '**Analyse des besoins techniques et d’affaires** afin de comprendre les enjeux clients et les traduire en solutions concrètes.',
            '**Collaboration avec des équipes techniques multidisciplinaires** (développeurs, QA, parties prenantes produit) pour assurer l’alignement entre besoins d’affaires et livraison technique.',
            '**Participation à des environnements Agile/Scrum**, contribuant à des livraisons itératives et à l’amélioration continue des produits numériques.',
            '**Contribution aux échanges techniques orientés client**, incluant les API REST, intégrations systèmes et flux de données.',
            '**Utilisation d’un fort esprit analytique pour comprendre des systèmes techniques complexes** (web, mobile, backend) et les vulgariser clairement.',
            '**Collaboration étroite avec les équipes de développement (Front-End, Back-End, Mobile)** pour comprendre les besoins et priorités de livraison.',
            '**Contribution à l’analyse de bugs et à la qualité produit**, facilitant la compréhension des impacts techniques et utilisateurs.',
            '**Utilisation d’outils tels que Jira, Git, Postman et MongoDB** pour suivre les développements et valider les fonctionnalités.',
            '**Fortes capacités en résolution de problèmes et communication** dans des environnements collaboratifs et dynamiques.',
          ],
        },
        features: {
          en: [

          ],
          fr: [

          ],
        },
        env: {
          en: '',
          fr: '',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'Communauto', fr: 'Communauto' },
      role: { en: 'Road agent', fr: 'Agente de route' },
      type: { en: 'Montréal', fr: 'Montréal' },
      period: { en: '02/2018 - 09/2019', fr: '02/2018 - 09/2019' },
      description: {
        en: 'Managed technical aspects of the vehicle fleet, including inspections, transfers to car wash or charging stations, and equipping vehicles with missing essentials.',
        fr: 'Gestion technique de la flotte automobile : inspections, transferts vers les stations de lavage ou de recharge, ajout d\'équipements de base manquants...',
      },
      techs: ['Travail d\'équipe', 'Adaptabilité / Flexibilité', 'Suivi de projets', 'Autonomie', 'Rigueur', 'Résolution de problèmes',],
      details: {
        context1: {
          en: 'Leading car-sharing company in Canada, operating over 4,500 self-service vehicles in 6 cities."',
          fr: 'Leader de l’autopartage au Canada avec plus de 4500 véhicules en libre-service dans 6 villes.',
        },
        tasks: {
          en: [
            'Maintain daily centralized tracking of actions with the logistics team via the internal application.',
            'Conduct vehicle inspections (interior and exterior) to ensure proper functioning.',
            'Ensure consistent workflow and optimal service quality.',
            'Identify solutions to improve team performance.',
            'Communicated regularly with the team to ensure efficient fleet management.',
          ],
          fr: [
            'Établir un suivi quotidien et centralisé des actions avec l\'équipe logistique via l\'application interne.',
            'Inspections des véhicules (intérieur et extérieur) pour assurer un bon fonctionnement.',
            'Assurer une régularité de travail et une qualité de service optimal.',
            'Identifier des solutions pour améliorer la performance de l’équipe.',
            'Assurer une communication régulière avec l\'équipe pour assurer un bon suivi de la flotte automobile.',
          ],
        },
        training: {
          en: [
          ],
          fr: [
          ],
        },
        env: {
          en: '',
          fr: '',
        },
      },
    },
    {
      id: 'company-c',
      company: { en: 'Familiprix - L.Dufour et S. Lamoureux', fr: 'Familiprix - L.Dufour et S. Lamoureux' },
      role: { en: 'Delivery and Pharmacy Technician', fr: 'Livreuse et technicienne en pharmacie' },
      type: { en: 'Montréal', fr: 'Montréal' },
      period: { en: '06/2015 - 01/2018', fr: '06/2015 - 01/2018' },
      description: {
        en: 'Handled deliveries of medications and other items, ensuring a high standard of customer service with every client interaction.',
        fr: 'Effectuer les livraisons de médicaments et autres produits et assurer un service à la clientèle de qualité lors des interactions avec les clients.',
      },
      techs: ['Empathie et écoute active', 'Service à la clientèle', 'Prise d\'initiatives', 'Autonomie', 'Gestion du temps', 'Travail d\'équipe', 'Gestion du stress'],
      details: {
        context1: {
          en: 'Human-scale, community-oriented pharmacy.',
          fr: 'Pharmacie de proximité à taille humaine.',
        },
        tasks: {
          en: [
            'Prepare delivery bags and ensure their accuracy by asking verification questions.',
            'Optimized delivery routes according to urgency.',
            'Build strong relationships with clients to maintain high-quality service.',
            'Communicated regularly with the team to guarantee seamless operations',
          ],
          fr: [
            'Préparer les sacs de livraison et s\'assurer de leur exactitude et en posant des questions.',
            'Optimiser les itinéraires en fonction des urgences.',
            'Établir une relation de proximité avec les clients afin de maintenir un service de qualité.',
            'Assurer une communication régulière avec l\'équipe pour le bon déroulement des opérations.',
          ],
        },
        training: {
          en: [
          ],
          fr: [
          ],
        },
        env: {
          en: '',
          fr: '',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'mTransport - Driver Application', fr: 'mTransport - Application Conducteur' },
      description: {
        en: 'This application, developed natively is a valuable tool for school bus drivers to determine the correct route, locate scheduled stops along a route, and check the presence of students (expected, absent, or already on board).',
        fr: 'Application développée en natif constitue une aide précieuse pour les conducteur·rice·s de véhicules scolaire afin de déterminer la direction à prendre, localiser les arrêts prévus sur un trajet et connaître la présence des élèves (attendus, absents ou déjà à bord), ect.',
      },
      techs: ['Java', 'Android Studio', 'Objective-C', 'Xcode', 'Node.js', 'REST APIs'],
      url: 'https://www.mtransport.ca/',
      googlePlay: 'https://play.google.com/store/apps/details?id=ca.mphase.mtransport_driver&pcampaignid=web_share&pli=1',
      appleStore: 'https://apps.apple.com/ca/app/mtransport-driver/id1273216576',
    },
    {
      id: 'project-b',
      title: { en: 'mTransport - Parent Application', fr: 'mTransport - Application Parent' },
      description: {
        en: 'Initially developed natively and then recently using React Native, this application allows parents to track their children\'s journeys, receive real-time notifications, and access information on routes and schedules.',
        fr: 'Développée à la base en native puis récemment en React Native, cette application permet aux parents de suivre les trajets de leurs enfants, de recevoir des notifications en temps réel et d\'accéder à des informations sur les itinéraires et les horaires.',
      },
      techs: ['React Native', 'Java', 'Android Studio', 'Objective-C', 'Xcode', 'Node.js', 'REST APIs'],
      url: 'https://www.mtransport.ca/fr/avantages',
      googlePlay: 'https://play.google.com/store/apps/details?id=ca.mphase.mtransport&pcampaignid=web_share',
      appleStore: 'https://apps.apple.com/ca/app/mtransport-parent/id1152483902',
    },
    {
      id: 'project-c',
      title: { en: 'mTransport - Portal Web', fr: 'mTransport - Portail Web' },
      description: {
        en: 'Transport - Web Portal is a complete platform that includes many tools that allow dispatchers to track the vehicle fleet in real time on a map',
        fr: 'Transport - Portail Web est une plateforme complète qui comprend beaucoup d’outils permettant aux répartiteur·rice·s de pouvoir suivre en temps réel la flotte automobile sur une carte. Elle facilite, entre autres, la planification des trajets et l’affectation des conducteur·rice·s.',
      },
      techs: ['Angular', 'JavaScript', 'Node.js', 'REST APIs', 'HTML', 'CSS'],
      url: 'https://portail.mtransport.ca/#!/',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Udemy', fr: 'Udemy' },
      degree: { en: 'Selenium Webdriver - Udemy Certificate', fr: 'Selenium Webdriver - Certificat Udemy' },
      city: { en: 'Online', fr: 'En ligne' },
      period: '03/2026 - 05/2026',
    },
    {
      school: { en: 'Intern training', fr: 'Formation interne' },
      degree: { en: 'AI for developers (Techno Compétences)', fr: 'IA pour développeurs (Techno Compétences)' },
      city: { en: 'Montreal, CA', fr: 'Montréal, CA' },
      period: '03/2025 - 03/2025',
    },
    {
      school: { en: 'Collège Ahuntsic', fr: 'Collège Ahuntsic' },
      degree: { en: 'AEC in Mobile Application Development', fr: 'AEC - Développement d\'applications mobiles' },
      city: { en: 'Montreal, CA', fr: 'Montréal, CA' },
      period: '2020 - 2021',
    },
    {
      school: { en: 'Saint Gabriel Campus', fr: 'Campus Saint Gabriel' },
      degree: { en: 'BTS - International Trade', fr: 'BTS - Commerce International' },
      city: { en: 'St. Laurent, FR', fr: 'St. Laurent, FR' },
      period: '2007 - 2010',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'A favorite subject?', fr: 'Un sujet de prédilection ?' },
      details: [
        { en: 'The city of Montreal and which means of transport to choose to go from point A to B optimally.', fr: 'La ville de Montréal et les moyens de transport à choisir pour se déplacer de A à B de manière optimale.' },
      ],
    }, {
      title: { en: 'Arts', fr: 'Arts' }, details: [
        { en: 'In all its forms: exhibitions, museums, circus, music, theater, etc.)', fr: 'Sous toutes ses formes : expositions, musées, cirque, musique, théâtre, etc.)' },
      ],
    },
    {
      title: { en: 'Sports', fr: 'Sports' },
      details: [
        { en: 'Squash & Balle Molle', fr: 'Squash & Balle Molle' },
      ],
    },


  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/en/CV_Cyrielle_EN.pdf', fr: '/cv/fr/CV_Cyrielle_FR.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'grass',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      mainFeatures: { en: 'Key features:', fr: 'Fonctionnalités majeures développées :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: '', fr: '' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
