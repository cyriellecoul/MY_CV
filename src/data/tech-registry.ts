/**
 * Central registry of known technologies with their brand colors.
 * Use the tech name in your config and the color is resolved automatically.
 *
 * To add a custom technology, add it here with its brand color.
 */
const TECH_REGISTRY = {
  // ===== Frontend Frameworks =====
  'React': { color: '#4FC08D' },
  'AngularJS': { color: '#DD0031' },
  'Vue': { color: '#4FC08D' },
  'Vue.js': { color: '#4FC08D' },
  'Svelte': { color: '#FF3E00' },
  'Next.js': { color: '#3366CC' },
  'Nuxt': { color: '#00DC82' },
  'Nuxt.js': { color: '#00DC82' },
  'Astro': { color: '#FF5D01' },
  'Solid': { color: '#2C4F7C' },
  'SolidJS': { color: '#2C4F7C' },
  'Qwik': { color: '#18B6F6' },
  'Gatsby': { color: '#663399' },
  'Remix': { color: '#000000' },
  'Ember': { color: '#E04E39' },
  'Preact': { color: '#673AB8' },
  'Alpine.js': { color: '#8BC0D0' },
  'htmx': { color: '#3366CC' },

  // ===== Languages =====
  'TypeScript': { color: '#3178C6' },
  'JavaScript': { color: '#F7DF1E' },
  'Python': { color: '#3776AB' },
  'Java': { color: '#E34F26' },
  'Go': { color: '#00ADD8' },
  'Golang': { color: '#00ADD8' },
  'Rust': { color: '#DEA584' },
  'Ruby': { color: '#CC342D' },
  'PHP': { color: '#777BB4' },
  'C': { color: '#A8B9CC' },
  'C++': { color: '#00599C' },
  'C#': { color: '#512BD4' },
  'Swift': { color: '#F05138' },
  'Kotlin': { color: '#7F52FF' },
  'Dart': { color: '#0175C2' },
  'Objective-C': { color: '#61DAFB' },
  'Android Studio': { color: '#FF00C8' },
  'Haskell': { color: '#5D4F85' },
  'Lua': { color: '#2C2D72' },
  'R': { color: '#276DC3' },
  'Perl': { color: '#39457E' },
  'Clojure': { color: '#5881D8' },
  'Zig': { color: '#F7A41D' },
  'OCaml': { color: '#EC6813' },

  // ===== Backend Frameworks =====
  'Node.js': { color: '#339933' },
  'NodeJS': { color: '#339933' },
  'Express': { color: '#000000' },
  'Express.js': { color: '#000000' },
  'NestJS': { color: '#E0234E' },
  'Fastify': { color: '#000000' },
  'Django': { color: '#092E20' },
  'Flask': { color: '#000000' },
  'FastAPI': { color: '#009688' },
  'Spring': { color: '#6DB33F' },
  'Spring Boot': { color: '#6DB33F' },
  'Rails': { color: '#CC0000' },
  'Ruby on Rails': { color: '#CC0000' },
  'Laravel': { color: '#FF2D20' },
  'Symfony': { color: '#000000' },
  'ASP.NET': { color: '#512BD4' },
  '.NET': { color: '#512BD4' },
  'Deno': { color: '#000000' },
  'Bun': { color: '#FBF0DF' },

  // ===== Mobile =====
  'React Native': { color: '#4FC08D' },
  'Flutter': { color: '#02569B' },
  'Ionic': { color: '#3880FF' },
  'SwiftUI': { color: '#F05138' },
  'Xcode': { color: '#DC382D' },

  // ===== Databases =====
  'PostgreSQL': { color: '#4169E1' },
  'MongoDB': { color: '#47A248' },
  'MySQL': { color: '#61DAFB' },
  'Redis': { color: '#DC382D' },
  'SQLite': { color: '#003B57' },
  'Elasticsearch': { color: '#005571' },
  'Firebase': { color: '#FFCA28' },
  'Supabase': { color: '#3FCF8E' },
  'DynamoDB': { color: '#4053D6' },
  'MariaDB': { color: '#003545' },
  'Neo4j': { color: '#4581C3' },
  'Cassandra': { color: '#1287B1' },
  'CouchDB': { color: '#E42528' },
  'PlanetScale': { color: '#000000' },
  'Neon': { color: '#00E599' },

  // ===== DevOps & Cloud =====
  'Docker': { color: '#2496ED' },
  'Kubernetes': { color: '#326CE5' },
  'AWS': { color: '#FF9900' },
  'GCP': { color: '#4285F4' },
  'Google Cloud': { color: '#4285F4' },
  'Azure': { color: '#0078D4' },
  'Terraform': { color: '#7B42BC' },
  'GitHub Actions': { color: '#2088FF' },
  'GitLab CI': { color: '#FC6D26' },
  'Jenkins': { color: '#D24939' },
  'Vercel': { color: '#000000' },
  'Netlify': { color: '#00C7B7' },
  'Cloudflare': { color: '#F38020' },
  'Heroku': { color: '#430098' },
  'Ngrok': { color: '#0080FF' },
  'Nginx': { color: '#009639' },
  'Linux': { color: '#FCC624' },

  // ===== CSS & UI =====
  'Tailwind CSS': { color: '#06B6D4' },
  'Tailwind': { color: '#06B6D4' },
  'SASS': { color: '#CC6699' },
  'SCSS': { color: '#CC6699' },
  'CSS': { color: '#06B6D4' },
  'HTML': { color: '#61DAFB' },
  'Styled Components': { color: '#DB7093' },
  'Material UI': { color: '#007FFF' },
  'MUI': { color: '#007FFF' },
  'Chakra UI': { color: '#319795' },
  'Ant Design': { color: '#0170FE' },
  'Bootstrap': { color: '#7952B3' },
  'Radix': { color: '#111111' },
  'shadcn/ui': { color: '#000000' },
  'Framer Motion': { color: '#0055FF' },

  // ===== Tools & Others =====
  'Git': { color: '#A6FF00' },
  'GitHub': { color: '#3178C6' },
  'GitLab': { color: '#FC6D26' },
  'GraphQL': { color: '#E10098' },
  'REST APIs': { color: '#FFCA28' },
  'Prisma': { color: '#2D3748' },
  'SourceTree': { color: '#F7DF1E' },
  'Vite': { color: '#646CFF' },
  'Webpack': { color: '#8DD6F9' },
  'Rollup': { color: '#EC4A3F' },
  'esbuild': { color: '#FFCF00' },
  'Turbopack': { color: '#000000' },
  'Storybook': { color: '#FF4785' },
  'Figma': { color: '#F24E1E' },
  'Stripe': { color: '#635BFF' },
  'Atlassian': { color: '#DC322F' },

  // ===== Testing =====
  'Jest': { color: '#C21325' },
  'Vitest': { color: '#6E9F18' },
  'Jira': { color: '#69D3A7' },
  'Confluence': { color: '#2596BE' },
  'Testing Library': { color: '#E33332' },
  'Bitbucket': { color: '#2EAD33' },
  'Selenium': { color: '#43B02A' },

  // ===== AI & Data =====
  'TensorFlow': { color: '#FF6F00' },
  'PyTorch': { color: '#EE4C2C' },
  'OpenAI': { color: '#412991' },
  'LangChain': { color: '#1C3C3C' },
  'Pandas': { color: '#150458' },
  'Postman': { color: '#DC322F' },

  // ===== CMS & Others =====
  'WordPress': { color: '#21759B' },
  'Strapi': { color: '#4945FF' },
  'Sanity': { color: '#F03E2F' },
  'Contentful': { color: '#2478CC' },

  // ===== Messaging & Realtime =====
  'RabbitMQ': { color: '#FF6600' },
  'Kafka': { color: '#231F20' },
  'Socket.io': { color: '#010101' },
  'WebSocket': { color: '#010101' },

  // ===== Legacy / Enterprise =====
  'J2EE': { color: '#007396' },
  'JSP': { color: '#007396' },
  'JSF': { color: '#007396' },
  'jQuery': { color: '#0769AD' },

  // ===== Soft Skills =====
  'Travail d\'équipe': { color: '#FF6A00' },
  'Communication': { color: '#A6FF00' },
  'Suivi de projets': { color: '#00E676' },
  'Autonomie': { color: '#00D4FF' },
  'Service à la clientèle': { color: '#0066FF' },
  'Rigueur': { color: '#7B00FF' },
  'Résolution de problèmes': { color: '#0769AD' },
  'Gestion du temps': { color: '#DC322F' },
  'Ponctualité': { color: '#FF1493' },
  'Prise d\'initiative': { color: '#FF0033' },

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
