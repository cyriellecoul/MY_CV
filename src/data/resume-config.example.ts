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
    photo: '/images/profile.png',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Front-End & Mobile Developer',
      fr: 'Développeuse Front-End & Mobile',
    },
    subtitle: {
      en: '5 years of experience',
      fr: '5 ans d\'expérience',
    },
    location: 'Montréal, Québec',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Cyrielle Coulais — Front-End & Mobile Developer',
    description: 'Interactive resume of Cyrielle Coulais, Front-End & Mobile Developer.',
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
    { type: 'github', label: 'cyriellecoul', href: 'https://github.com/cyriellecoul' },
    { type: 'linkedin', label: 'Cyrielle C', href: 'https://www.linkedin.com/in/cyrielle-c/' },
    { type: 'email', label: 'cyriellecoul@gmail.com' },
    { type: 'phone', label: '+1 514 442 2470' },
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
      title: { en: 'Front-End', fr: 'Front-End' },
      type: 'badges',
      items: [
        { name: 'AngularJS' },
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Tailwind CSS' },
        { name: 'Next.js' },
      ],
    },
    {
      title: { en: 'Mobile', fr: 'Mobile' },
      type: 'badges',
      items: [
        { name: 'Java' },
        { name: 'Objective-C' },
        { name: 'React Native' },
        { name: 'Android Studio' },
        { name: 'Xcode' },
      ],
    },
    {
      title: { en: 'Back-End', fr: 'Back-End' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'REST APIs' },
        { name: 'Ngrok' },
        { name: 'Postman' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'MongoDB' },
        { name: 'MySQL' },

      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Bitbucket' }, 
        { name: 'Confluence' }, 
        { name: 'Jira' },
        { name: 'SourceTree' },
        { name: 'Docker' },
        { name: 'Figma' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, Code Review, QA', fr: 'Agile/Scrum, Code Review, QA' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'mPhase', fr: 'mPhase' },
      role: { en: 'Software developer', fr: 'Développeuse logiciels' },
      type: { en: 'Montréal', fr: 'Montréal' },
      period: { en: '02/2021 - 10/2025', fr: '02/2021 - 10/2025' },
      description: {
        en: 'LDevelopment of a web platform and native applications used by over 10,000 users.',
        fr: 'Développement d\'une plateforme web et d\'applications natives utilisées par plus de 10K utilisateurs·rices.',
      },
      techs: ['AngularJS', 'JavaScript', 'Objective-C', 'Java', 'Node.js', 'Docker', 'REST APIs', 'Git', 'MongoDB', 'Atlassian'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Team of 10 developers within a 13-person company. Agile/Scrum methodology with 2-week to 1-month sprints, CI/CD pipeline using GitHub Actions and Sentry, code review for each PR followed by QA.',
          fr: 'Équipe de 10 développeur·euse·s au sein d\'une entreprise de 13 personnes. Méthodologie Agile/Scrum avec sprints de 2 semaines à 1 mois, pipeline CI/CD avec GitHub Actions et Sentry, Code Review sur chaque PR suivi de QA.',
        },
        tasks: {
          en: [
            'Developed and implemented new features.',
            'Collaborated with back-end teams to integrate APIs (Node.js), conducting testing and debugging via Postman and Ngrok.',
            'Queried and analyzed data using MongoDB.',
            'Analyzed and resolved bugs, ensuring product quality (QA).',
            'Collaborated on code reviews and pair programming sessions, contributing to team activities in an Agile setting.',
          ],
          fr: [
            'Conception et implémentation de nouvelles fonctionnalités.',
            'Intégration d’API en lien avec les équipes back-end (NodeJS), tests et debugging via Postman et Ngrok.',
            'Consultation et analyse de données via MongoDB.',
            'Analyse, résolution de bugs et contrôle qualité des produits (QA).',
            'Participation au code review, sessions de pair programming et rencontres d’équipe dans un environnement Agile.',
          ],
        },
        features: {
          en: [
            'Internal communication module',
            'Internal forms (disciplinary and technical forms)',
            'Automatic vehicle departures and arrivals based on speed and location',
            'Overview of upcoming routes for drivers',
            'Improvements to mobile app UI and UX',
            'Display of recent changes to routes, etc...',
          ],
          fr: [
            'Module de communication interne',
            'Formulaires internes (Formulaire disciplinaire et technique)',
            'Départs et arrivées automatiques des véhicules en fonction de leur vitesse et de leur localisation',
            'Aperçu des trajets futurs pour les conducteurs·rices',
            'Améliorations du UI et UX de l’application mobile',
            'Affichage des modifications récentes sur les itinéraires, etc...',
          ],
        },
        training: {
          en: [
            'AI for developers (Techno Compétences) - March 2025',
          ],
          fr: [
            'IA pour développeurs (Techno Compétences) - mars 2025',
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
      role: { en: 'Frontend Developer', fr: 'Agente de route' },
      type: { en: 'Montréal', fr: 'Montréal' },
      period: { en: '02/2018 - 09/2019', fr: '02/2018 - 09/2019' },
      description: {
        en: 'Managed technical aspects of the vehicle fleet, including inspections, transfers to car wash or charging stations, and equipping vehicles with missing essentials.',
        fr: 'Gestion technique de la flotte automobile : inspections, transferts vers les stations de lavage ou de recharge, ajout d\'équipements de base manquants...',
      },
      techs: ['Travail d\'équipe', 'Communication', 'Suivi de projets', 'Autonomie', 'Service à la clientèle', 'Rigueur', 'Résolution de problèmes',],
      details: {
        context: {
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
      techs: ['Service à la clientèle', 'Prise d\'initiative', 'Autonomie', 'Ponctualité', 'Gestion du temps', 'Travail d\'équipe', 'Communication'],
      details: {
        context: {
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
            'Préparer les sacs de livraison et s\'assurer de leur exactitude en vérifiant posant des questions.',
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
      techs: ['AngularJs', 'JavaScript', 'Node.js', 'REST APIs', 'HTML', 'CSS'],
      url: 'https://portail.mtransport.ca/#!/',
    },
  ],

  // ===== EDUCATION =====
  education: [
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
      title: { en: 'Squash', fr: 'Squash' },
    },
    {
      title: { en: 'Balle Molle', fr: 'Balle Molle' },
      details: [
        { en: 'In 2 summer leagues', fr: 'Dans 2 équipes en été' },
      ],
    },
    {
      title: { en: 'Arts', fr: 'Arts' }, details: [
        { en: 'In all its forms: exhibitions, museums, circus, music, theater, drag, etc.)', fr: 'Sous toutes ses formes : expositions, musées, cirque, musique, théâtre, drag, etc.)' },
      ],
    },
    {
      title: { en: 'A favorite subject?', fr: 'Un sujet de prédilection ?' },
      details: [
        { en: 'The city of Montreal and which means of transport to choose to go from point A to B optimally.', fr: 'La ville de Montréal et les moyens de transport à choisir pour se déplacer de A à B de manière optimale.' },
      ],
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/en/CV_Cyrielle_en.pdf', fr: '/cv/fr/CV_Cyrielle_fr.pdf' },
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
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
