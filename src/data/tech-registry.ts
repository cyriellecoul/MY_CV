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
  'Selenium WebDriver': { color: '#00C853' },

  // ===== Bug tracking / collaboration =====
  'Jira': { color: '#00A6FB' },
  'Confluence': { color: '#F72585' },
  'Agile/Scrum': { color: '#FFBE0B' },
  'Bug Tracking & Reporting': { color: '#FF4D6D' },
  'Code Review': { color: '#0066FF' },
  'Pull Requests': { color: '#7B2CBF' },
  // ===== Languages =====
  'TypeScript': { color: '#3178C6' },

  'Python': { color: '#3776AB' },

  'Go': { color: '#00ADD8' },
  'Golang': { color: '#00ADD8' },
  'Figma': { color: '#DEA584' },
  'Ruby': { color: '#CC342D' },
  'PHP': { color: '#777BB4' },
  'C': { color: '#A8B9CC' },
  'C++': { color: '#00599C' },
  'C#': { color: '#512BD4' },
  'Swift': { color: '#F05138' },
  'Kotlin': { color: '#7F52FF' },
  'Dart': { color: '#0175C2' },
  'Objective-C': { color: '#FF00C2' },

  'Haskell': { color: '#5D4F85' },
  'Lua': { color: '#2C2D72' },
  'R': { color: '#276DC3' },
  'Perl': { color: '#39457E' },
  'Clojure': { color: '#5881D8' },
  'Zig': { color: '#F7A41D' },
  'OCaml': { color: '#EC6813' },

  // ===== Version control =====
  'Git': { color: '#FB5607' },
  'GitHub': { color: '#4361EE' },
  'Bitbucket': { color: '#9D4EDD' },
  'SourceTree': { color: '#FCA311' },

  // ===== API / Testing tools =====
  'Postman': { color: '#FF6F00' },
  'REST APIs': { color: '#00F5D4' },
  'Ngrok': { color: '#1D4ED8' },
  // ===== Mobile =====

  'Flutter': { color: '#02569B' },
  'Ionic': { color: '#3880FF' },
  'SwiftUI': { color: '#F05138' },


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


  // ===== Infra / tools =====
  'Docker': { color: '#2496ED' },


  // ===== Soft Skills =====
  'Analyse des besoins': { color: '#FF1493' },
  'Rédaction de documentation': { color: '#FF0033' },
  'Travail d\'équipe': { color: '#FF6A00' },
  'Adaptabilité/Flexibilité': { color: '#A6FF00' },
  'Modélisation des processus': { color: '#00E676' },
  'Suivi de projets': { color: '#00E676' },
  'Autonomie': { color: '#DC322F' },
  'Service à la clientèle': { color: '#0066FF' },
  'Rigueur': { color: '#7B00FF' },
  'Gestion du temps': { color: '#00D4FF' },
  'Empathie et écoute active': { color: '#FF1493' },
  'Prise d\'initiatives': { color: '#FF0033' },
  'Gestion du stress': {color :'#007396' },
  'Souci du détail': { color: '#FF6A00' },
  'Esprit d’analyse': { color: '#A6FF00' },
  'Gestion des risques': { color: '#FF6A00' },
  'Tests fonctionnels, automatisés et de régression': { color: '#326CE5' },
  'Résolution de problèmes': { color: '#FF9E00' }

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
