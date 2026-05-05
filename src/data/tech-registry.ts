/**
 * Central registry of known technologies with their brand colors.
 * Use the tech name in your config and the color is resolved automatically.
 *
 * To add a custom technology, add it here with its brand color.
 */
const TECH_REGISTRY = {
   // ===== QA / Testing =====
  'Software Testing': { color: '#FF3B3F' },
  'Test Case Design': { color: '#FF9F1C' },
  'Test Plans': { color: '#2EC4B6' },
  'Regression Testing': { color: '#3A86FF' },
  'Manual Testing': { color: '#8338EC' },
  'QA Automation': { color: '#FF006E' },
  'Selenium': { color: '#00C853' },

  // ===== Bug tracking / collaboration =====
  'Jira': { color: '#00A6FB' },
  'Confluence': { color: '#F72585' },
  'Agile/Scrum': { color: '#FFBE0B' },
  'Bug Tracking & Reporting': { color: '#FF4D6D' },
  'Code Review': { color: '#0066FF' },
  'Pull Requests': { color: '#7B2CBF' },

  // ===== Version control =====
  'Git': { color: '#FB5607' },
  'GitHub': { color: '#4361EE' },
  'Bitbucket': { color: '#9D4EDD' },
  'SourceTree': { color: '#FCA311' },

  // ===== API / Testing tools =====
  'Postman': { color: '#FF6F00' },
  'REST APIs': { color: '#00F5D4' },
  'Ngrok': { color: '#1D4ED8' },

  // ===== Data =====
  'MongoDB': { color: '#38B000' },
  'SQL': { color: '#5E60CE' },

  // ===== Dev / scripting context =====
  'JavaScript': { color: '#FFD60A' },
  'Node.js': { color: '#A6FF00' },
  'Java': { color: '#E63946' },

  // ===== Front / mobile context =====
  'Angular': { color: '#D00000' },
  'React': { color: '#4CC9F0' },
  'React Native': { color: '#FF70A6' },
  'HTML': { color: '#FF9E00' },
  'CSS': { color: '#4D96FF' },

  // ===== Mobile environments =====
  'Android Studio': { color: '#00F5A0' },
  'Xcode': { color: '#1E90FF' },
  'Objective-C': { color: '#FF5C8A' },

  // ===== Infra / tools =====
  'Docker': { color: '#2496ED' },


  // ===== Soft Skills =====
  'Travail d\'équipe': { color: '#FF6A00' },
  'Adaptabilité / Flexibilité ': { color: '#A6FF00' },
  'Suivi de projets': { color: '#00E676' },
  'Autonomie': { color: '#DC322F' },
  'Service à la clientèle': { color: '#0066FF' },
  'Rigueur': { color: '#7B00FF' },
  'Gestion du temps': { color: '#00D4FF' },
  'Empathie et écoute active': { color: '#FF1493' },
  'Prise d\'initiatives': { color: '#FF0033' },
  'Gestion du stress': {color :'#007396' },

  'Tests logiciels': { color: '#FF3B3F' },
  'Conception de cas de test': { color: '#FF9F1C' },
  'Plans de test': { color: '#2EC4B6' },
  'Tests de régression': { color: '#3A86FF' },
  'Tests manuels': { color: '#8338EC' },
  'Automatisation QA': { color: '#FF006E' },

  'Souci du détail': { color: '#FF70A6' },
  'Esprit analytique': { color: '#48CAE4' },
  'Résolution de problèmes': { color: '#90DBF4' }


} as const satisfies Record<string, { color: string }>

export type TechName = keyof typeof TECH_REGISTRY

/**
 * Resolves the color for a given tech name.
 * Priority: registry → fallback gray.
 */
export function getTechColor(name: string): string {
  const registered = TECH_REGISTRY[name as TechName]
  if (registered) return registered.color

  return '#6b7280'
}
