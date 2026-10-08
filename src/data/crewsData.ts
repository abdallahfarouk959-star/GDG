import { Crew } from '../types/expedition';

export const CREWS: Crew[] = [
  {
    id: 'web',
    name: 'Web Development',
    pirateRole: 'The Shipbuilders',
    islandName: 'Port Frontend & Harbor of Sails',
    tagline: 'Build for the web. Connect your ideas to the world.',
    brief: 'Build for the web. Connect your ideas to the world. (The Shipbuilders)',
    description: 'Every grand expedition requires vessels that can brave unpredictable tides. The Shipbuilders craft the sails, decks, and steering wheels that millions of users touch every day. From modern reactive interfaces to responsive web applications, you forge the visual ship that carries GDGoC Aswan across the global digital ocean.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web Vitals', 'Vite', 'REST & GraphQL'],
    weaponsAndTools: ['Chromium Rigging', 'Component Drydocks', 'Lighthouse Spyglass', 'Responsive Anchors'],
    voyageQuest: 'Construct high-performance, accessible web platforms for campus students and community hackathons.',
    captainLogQuote: '"A galleon is only as formidable as the interface between the sailor and the helm. We make every click feel effortless."',
    coordinates: {
      lat: '24°05\'14"N',
      lng: '32°53\'59"E',
      mapX: 20,
      mapY: 28,
    },
    accentColor: '#38bdf8', // sky/blue
    badgeIcon: 'Compass',
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    pirateRole: 'The Navigators',
    islandName: 'Isle of Neural Horizons',
    tagline: 'Teach machines to think. Discover what comes next.',
    brief: 'Teach machines to think. Discover what comes next. (The Navigators)',
    description: 'When night blankets the deep ocean and no stars are visible, the Navigators summon artificial minds to calculate our bearing. Harnessing cutting-edge models, natural language, and neural architectures, this crew charts courses through once-impassable frontiers of machine intelligence.',
    techStack: ['Gemini API', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'Computer Vision', 'NLP'],
    weaponsAndTools: ['Neural Astrolabe', 'Transformer Sextant', 'Prompt Sextant', 'Vector Compasses'],
    voyageQuest: 'Build autonomous AI agents, intelligent campus assistants, and generative AI prototypes that solve real community challenges.',
    captainLogQuote: '"The horizon is no longer the limit when your ship can predict the storm before the clouds even gather."',
    coordinates: {
      lat: '24°06\'48"N',
      lng: '32°54\'30"E',
      mapX: 78,
      mapY: 22,
    },
    accentColor: '#a855f7', // purple
    badgeIcon: 'Sparkles',
  },
  {
    id: 'datascience',
    name: 'Data Science',
    pirateRole: 'The Map Readers',
    islandName: 'Archipelago of Currents & Insights',
    tagline: 'Follow the patterns. Turn data into discoveries.',
    brief: 'Follow the patterns. Turn data into discoveries. (The Map Readers)',
    description: 'Underneath every tidal surge lies a hidden rhythm. The Map Readers sift through gigabytes of raw sea spray, uncovering golden veins of statistical truth. You turn mountains of campus metrics and market patterns into clear, actionable cartography that guides the entire fleet.',
    techStack: ['Python', 'Pandas & NumPy', 'SQL / BigQuery', 'Seaborn & Plotly', 'Scikit-Learn', 'Power BI'],
    weaponsAndTools: ['Depth Sounders', 'Cartographic Quadrants', 'Statistical Compasses', 'Tidal Tables'],
    voyageQuest: 'Analyze regional and campus datasets to reveal predictive insights, uncover student trends, and fuel evidence-based decisions.',
    captainLogQuote: '"No ocean is too murky when you know how to read the whispers of the data stream."',
    coordinates: {
      lat: '24°04\'30"N',
      lng: '32°52\'10"E',
      mapX: 50,
      mapY: 52,
    },
    accentColor: '#10b981', // emerald
    badgeIcon: 'Map',
  },
  {
    id: 'se',
    name: 'Software Engineering',
    pirateRole: 'The Hull Crafters',
    islandName: 'Ironclad Citadel of Architecture',
    tagline: 'Build strong foundations. Craft software that lasts.',
    brief: 'Build strong foundations. Craft software that lasts. (The Hull Crafters)',
    description: 'A vessel must survive monstrous rogue waves and tempest winds without a single plank splintering. The Hull Crafters engineer the internal ribs, databases, APIs, and microservices that keep our flagship afloat under immense load. Robust, scalable, and resilient.',
    techStack: ['Go', 'Node.js', 'Docker', 'PostgreSQL', 'Microservices', 'Clean Architecture', 'CI/CD Pipelines'],
    weaponsAndTools: ['Oak Keel Wedges', 'Load-Bearing Bulkheads', 'Containerized Bilge Pumps', 'Automated Bilge Tests'],
    voyageQuest: 'Architect scalable backends, fault-tolerant campus APIs, and continuous delivery pipelines that never go down.',
    captainLogQuote: '"Fine paint washes away in a typhoon; solid timber and clean structure withstand the deepest abyss."',
    coordinates: {
      lat: '24°03\'10"N',
      lng: '32°55\'00"E',
      mapX: 24,
      mapY: 76,
    },
    accentColor: '#f59e0b', // amber/gold
    badgeIcon: 'Hammer',
  },
  {
    id: 'cyber',
    name: 'Cybersecurity',
    pirateRole: 'The Cannons & Lookouts',
    islandName: 'Bastion of the High Watchtower',
    tagline: 'Spot the threats. Learn to defend the digital seas.',
    brief: 'Spot the threats. Learn to defend the digital seas. (The Cannons & Lookouts)',
    description: 'Hostile krakens, rogue privateers, and zero-day sirens lurk in the dark waters. The Cannons & Lookouts stand vigilant at the crow\'s nest, scanning packets, securing shipboard ciphers, and loading defense batteries against intrusive breaches.',
    techStack: ['Linux & Bash', 'Wireshark', 'Burp Suite', 'Metasploit', 'Cryptography', 'Network Defense', 'OWASP Top 10'],
    weaponsAndTools: ['Crow\'s Nest Periscope', 'Double-Shotted Cannons', 'Encrypted Cipher Wheels', 'Firewall Ballistas'],
    voyageQuest: 'Audit digital vulnerabilities, run red-team vs blue-team drills, host CTFs, and safeguard the community\'s assets.',
    captainLogQuote: '"We keep watch while the harbor sleeps. Touch our vessel, and you will meet the iron of our cannons."',
    coordinates: {
      lat: '24°07\'15"N',
      lng: '32°51\'40"E',
      mapX: 76,
      mapY: 75,
    },
    accentColor: '#ef4444', // red
    badgeIcon: 'ShieldAlert',
  },
];

export const EXPEDITION_STATS = [
  { value: '500+', label: 'Sailors Welcomed', detail: 'Passionate student explorers across Aswan' },
  { value: '24+', label: 'Voyages & Workshops', detail: 'Hands-on technical bootcamps & live code labs' },
  { value: '1', label: 'Flagship Hackathon', detail: 'Annual grand tech showdown on the Nile' },
  { value: '5', label: 'Specialized Crews', detail: 'From AI to Cyber, find your true crew post' },
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'A sudden storm strikes the fleet. Where do your pirate instincts take you first?',
    options: [
      { text: 'To the steering wheel and helm—ensuring sailors have smooth control over the ship’s controls.', crewId: 'web' as const },
      { text: 'To the charts and celestial instruments—predicting the tempest’s vector with intelligence.', crewId: 'ai' as const },
      { text: 'To the barometer and tidal gauges—analyzing historical weather patterns to find an exit.', crewId: 'datascience' as const },
      { text: 'Down into the lower hull—reinforcing structural beams and checking engine pumps.', crewId: 'se' as const },
      { text: 'Up to the crow\'s nest—securing defenses and scanning for hostile raiders capitalizing on chaos.', crewId: 'cyber' as const },
    ],
  },
  {
    id: 2,
    question: 'What kind of treasure gets your pirate blood pumping the most?',
    options: [
      { text: 'Crafting an interface so stunning and smooth that even the Royal Navy stops to stare.', crewId: 'web' as const },
      { text: 'Teaching a mechanical parrot or machine to understand human speech and paint maps.', crewId: 'ai' as const },
      { text: 'Discovering an unmapped trend hidden inside thousands of scattered nautical logs.', crewId: 'datascience' as const },
      { text: 'Building an ironclad engine that can run 10,000 leagues without a single breakdown.', crewId: 'se' as const },
      { text: 'Cracking an ancient encrypted cipher chest and catching infiltrators red-handed.', crewId: 'cyber' as const },
    ],
  },
  {
    id: 3,
    question: 'How do you want to contribute on our voyage across the Nile and beyond?',
    options: [
      { text: 'The Shipbuilder: Shaping what the world sees and interacts with.', crewId: 'web' as const },
      { text: 'The Navigator: Exploring the frontier of cognitive machines and future tech.', crewId: 'ai' as const },
      { text: 'The Map Reader: Translating raw chaotic data into crystal-clear strategy.', crewId: 'datascience' as const },
      { text: 'The Hull Crafter: Engineering backend foundations that never crack.', crewId: 'se' as const },
      { text: 'The Cannon & Lookout: Protecting the crew and hunting security vulnerabilities.', crewId: 'cyber' as const },
    ],
  },
];
