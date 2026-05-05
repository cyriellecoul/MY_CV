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
      fr: 'Analyste en assurance qualité (QA)',
    },
    titleSpecialized: {
      titleSpecialized1: {
        en: 'After',
        fr: 'Après',
      },
      titleSpecialized2: {
        en: ' 5 years of experience',
        fr: ' 5 années d’expérience',
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
      title: { en: 'Quality Assurance & Testing', fr: 'Assurance qualité et tests' },
      type: 'bullets',
      items: [
        { name: { en: 'Functional, regression, and exploratory testing (web & mobile)', fr: 'Tests fonctionnels, de régression et exploratoires (web et mobile)' } },
        { name: { en: 'Test case design, execution, and defect tracking', fr: 'Conception, exécution des cas de test et suivi des anomalies' } },
        { name: { en: 'Automated testing using Selenium WebDriver', fr: 'Tests automatisés avec Selenium WebDriver' } },
        { name: { en: 'API testing with Postman', fr: 'Tests d’API avec Postman' } },
        { name: { en: 'Test management and bug tracking using Jira', fr: 'Gestion des tests et suivi des anomalies avec Jira' } },
      ]
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
        { name: 'NoSQL' },
        { name: 'Bitbucket' },
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
      techs: ['Jira', 'Postman', 'Git', 'MongoDB', 'NoSQL', 'Agile/Scrum', 'REST APIs', 'JavaScript', 'Node.js', 'Java', 'Angular', 'Android Studio', 'Xcode', 'Rigueur', 'Souci du détail', 'Esprit d\'analyse'],
      isHighlighted: true,
      details: {
        context1: {
          en: '',
          fr: '',
        },
        context2: {
          en: 'At mPhase, I worked within a team of 10 developers in an Agile/Scrum environment with time-boxed sprints, utilizing a CI/CD pipeline (GitHub Actions, Sentry), and conducting code reviews and branch checkouts for every pull request.',
          fr: 'À mPhase, j\'ai travaillé avec une équipe de 10 développeur·euse·s appliquant la méthodologie Agile/Scrum basée sur des sprints d\'une durée définie, pipeline CI/CD avec GitHub Actions et Sentry, code review et checkout sur chaque PR.',
        },
        tasks: {
          en: [
            '**Requirements analysis** and design of **test cases (functional, regression)**.',
            'Execution of **manual and automated testing** with deliverables validation.',
            '**Defect management** (identification, documentation, tracking, and diagnosis).',
            '**Regression testing** and **proactive risk identification**.',
            'Validation of **REST APIs with Postman** and creation of **test data via MongoDB**.',
            '**Cross-platform testing** (Android Studio, Xcode).',
            '**Agile collaboration** with teams (dev, PO, SM) and continuous improvement.',
            'Design and **Front-End/Mobile development** with involvement in requirements analysis.'
          ],
          fr: [
            '**Analyse des besoins** et conception de **cas de test (fonctionnels, régression)**.',
            'Exécution de **tests manuels et automatisés** avec validation des livrables.',
            '**Gestion des anomalies** (détection, documentation, suivi et diagnostic).',
            '**Tests de régression** et **identification proactive des risques**.',
            'Validation d’**API REST avec Postman** et création de **données de test via MongoDB**.',
            '**Tests multi-plateformes** (Android Studio, Xcode).',
            '**Collaboration Agile** avec équipes (dev, PO, SM) et amélioration continue.',
            'Conception et **développement Front-End/Mobile** avec participation à l’analyse des besoins.'
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
