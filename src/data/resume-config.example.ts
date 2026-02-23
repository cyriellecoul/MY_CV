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
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [{ name: 'Angular' },
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Next.js' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
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
        { name: 'mySQL' },

      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Git - GitHub' },
        { name: 'Atlassian (Bitbucket, Jira, Confluence)' },
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
        en: 'Led the development of a SaaS platform used by 10k+ users. Built microservices architecture and modern React frontend.',
        fr: 'Développement d\'une plateforme web et d\'applications natives utilisées par plus de 10K utilisateurs·rices.',
      },
      techs: ['AngularJS', 'JavaScript', 'Objective-C', 'Java', 'Node.js', 'Docker', 'REST APIs', 'Git', 'MongoDB', 'Atlassian'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Team of 8 developers within a 50-person product company. Agile/Scrum methodology with 2-week sprints, CI/CD pipeline with GitHub Actions, code reviews on every PR.',
          fr: 'Équipe de 10 développeur·euse·s au sein d\'une entreprise de 13 personnes. Méthodologie Agile/Scrum avec sprints de 2 semaines à 1 mois, pipeline CI/CD avec GitHub Actions et Sentry, code review sur chaque PR suivi de QA.',
        },
        tasks: {
          en: [
            'Implemented role-based access control (RBAC) across the entire platform',
            'Set up automated testing with 85% code coverage (unit, integration, E2E)',
            'Led the migration from REST to GraphQL for the main API',
            'Built a dashboard analytics module with interactive charts and export features',
            'Mentored 3 junior developers through pair programming and weekly 1-on-1s',
          ],
          fr: [
            'Conception et implémentation de nouvelles fonctionnalités.',
            'Intégration d’API en lien avec les équipes back-end (NodeJS), tests et debugging via Postman et Ngrok',
            'Consultation et analyse de données via MongoDB.',
            'Analyse, résolution de bugs et contrôle qualité des produits (QA).',
            'Participation au code review, sessions de pair programming et rencontres d’équipe dans un environnement Agile.',
          ],
        },
        features: {
          en: [
            'AWS Solutions Architect certification',
            'Formulaires internes (Formulaire discipline et technique)',
            'Formulaires internes (Formulaire discipline et technique)',
            'Formulaires internes (Formulaire discipline et technique)',
            'Formulaires internes (Formulaire discipline et technique)',
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
            'AWS Solutions Architect certification',
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
      company: { en: 'WebAgency', fr: 'WebAgency' },
      role: { en: 'Frontend Developer', fr: 'Développeuse Frontend' },
      type: { en: 'Montréal', fr: 'Montréal' },
      period: { en: '2019 - 2022', fr: '2019 - 2022' },
      description: {
        en: 'Developed responsive web applications for various clients. Specialized in React and Angular projects.',
        fr: 'Développement d\'applications web responsives pour divers clients. Spécialisée en projets React et Angular.',
      },
      techs: ['React', 'Angular', 'TypeScript', 'SCSS'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          en: [
            'Built 15+ client-facing web applications from scratch',
            'Created and maintained a shared design system used across all agency projects',
            'Implemented complex form workflows with multi-step validation',
            'Optimized web performance achieving 90+ scores on Core Web Vitals',
            'Integrated third-party APIs (payment, CRM, analytics)',
            'Set up Storybook documentation for reusable components',
            'Collaborated closely with UX designers to translate Figma mockups into pixel-perfect UIs',
          ],
          fr: [
            'Développement de 15+ applications web clients from scratch',
            'Création et maintenance d\'un design system partagé utilisé sur tous les projets de l\'agence',
            'Implémentation de workflows de formulaires complexes avec validation multi-étapes',
            'Optimisation des performances web avec scores 90+ sur les Core Web Vitals',
            'Intégration d\'APIs tierces (paiement, CRM, analytics)',
            'Mise en place de la documentation Storybook pour les composants réutilisables',
            'Collaboration étroite avec les designers UX pour traduire les maquettes Figma en interfaces pixel-perfect',
          ],
        },
        training: {
          en: [
            'Angular Advanced workshop (2 days)',
            'Accessibility (WCAG 2.1) certification',
          ],
          fr: [
            'Workshop Angular Avancé (2 jours)',
            'Certification Accessibilité (WCAG 2.1)',
          ],
        },
        env: {
          en: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
          fr: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'StartupXYZ', fr: 'StartupXYZ' },
      role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeuse Fullstack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2018 - 2019', fr: '2018 - 2019' },
      description: {
        en: 'Contributed to the development of an e-commerce platform. Gained experience in fullstack development.',
        fr: 'Contribution au développement d\'une plateforme e-commerce. Acquisition d\'expérience en développement fullstack.',
      },
      techs: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
      details: {
        context: {
          en: 'Early-stage startup (seed round), small team of 5 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.',
          fr: 'Startup en phase de démarrage (seed round), petite équipe de 5 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Développement du catalogue produits avec filtrage avancé et recherche',
            'Création du panier d\'achat avec vérification de stock en temps réel',
            'Intégration de la passerelle de paiement Stripe avec support 3D Secure',
            'Implémentation de l\'authentification utilisateur avec JWT et OAuth (Google, Facebook)',
            'Création d\'un tableau de bord admin pour la gestion des commandes et les analytics',
            'Rédaction de la documentation API avec Swagger/OpenAPI',
          ],
        },
        features: {
          en: [
            'AWS Solutions Architect certification',
          ],
          fr: [
            'AWS Solutions Architect certification',
          ],
        },
        env: {
          en: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
          fr: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'WeatherApp', fr: 'WeatherApp' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://weather-app.example.com',
      github: 'https://github.com/janedoe/weather-app',
    },
    {
      id: 'project-b',
      title: { en: 'TaskManager', fr: 'TaskManager' },
      description: {
        en: 'A Kanban-style task management tool with drag-and-drop.',
        fr: 'Un outil de gestion de tâches style Kanban avec glisser-déposer.',
      },
      techs: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/janedoe/task-manager',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of Paris', fr: 'Université de Paris' },
      degree: { en: 'Master in Computer Science', fr: 'Master Informatique' },
      specialty: { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' },
      period: '2017 - 2019',
    },
    {
      school: { en: 'University of Paris', fr: 'Université de Paris' },
      degree: { en: 'Bachelor in Computer Science', fr: 'Licence Informatique' },
      period: '2014 - 2017',
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
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'grass', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
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
