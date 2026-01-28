export interface Product {
  id: string;
  name: string;
  category: 'Electronic Warfare & C-UAS' | 'Tactical Training';
  subcategory: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  useCases: string[];
  image?: string;
}

export const products: Product[] = [
  // Electronic Warfare & C-UAS
  {
    id: 'c-uas-drone-shield',
    name: 'RAVVIK Loitering Missile',
    category: 'Electronic Warfare & C-UAS',
    subcategory: 'C-UAS',
    image: '/products/RAVVIK Loitering Missile/loitering-missile.png',
    shortDescription: 'AI-powered loitering missile system with modular deployment for special missions.',
    fullDescription: `Developed and manufactured in Taiwan, this advanced loitering missile system features AI vision-based tracking and targeting capabilities. The modular design supports various deployment methods including single-user, airborne, shipborne, and vehicle-mounted configurations.

The system utilizes AI-based visual recognition technology combined with edge computing and path planning functions. It calculates terrain and target coordinates by referencing offline maps, enabling automatic target search, tracking reconnaissance, and high-precision aiming.

Optional integration with multiple sensors allows for operation without GPS when detailed GIS 3D maps are provided, enabling autonomous identification and correction of targets even in harsh electromagnetic environments.

Once a target is confirmed, the system transmits its image and coordinate data in real-time to the ground control station, enabling operators to issue further commands and establish a complete mission feedback and decision-making process.`,
    features: [
      'Single-user capable with lightweight launcher for single-person operation',
      'Dual-mode launch: air pressure / powder gas mix',
      'Rapid deployment capability',
      'AI vision-based tracking and targeting system',
      'Autonomous target search and tracking reconnaissance',
      'High-precision aiming with edge computing',
      'GPS-independent operation with GIS 3D maps',
      'Real-time image and coordinate transmission',
      'Modular deployment design (Airborne, Shipborne, Vehicle-Mounted)',
      'Foldable wings with disposable fiber-based material',
      'Cost-saving, quick production',
      'Pickup truck-based mobile platform (Civilian or Military)',
      'Two-man job with quick deployment',
      'Autonomous execution: Detection → Lock-on → Decision Confirmation → Engagement'
    ],
    useCases: [
      'Special mission operations',
      'Counter-drone defense',
      'Tactical strike missions',
      'Border security and patrol',
      'Critical infrastructure protection',
      'Maritime security operations',
      'Rapid response scenarios',
      'Cooperative missions with wingman drones',
      'Extended mission radius operations',
      'High-mobility tactical deployment'
    ]
  },
  {
    id: 'ew-spectrum-analyzer',
    name: 'Spectrum Guard EW System',
    category: 'Electronic Warfare & C-UAS',
    subcategory: 'Electronic Warfare',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=85',
    shortDescription: 'Advanced electronic warfare system for spectrum monitoring and dominance.',
    fullDescription: 'Provides comprehensive spectrum awareness and electronic attack capabilities. Detects and analyzes hostile signals while offering jamming and suppression options to maintain electromagnetic dominance.',
    features: [
      'Wideband spectrum monitoring',
      'Direction finding and geolocation',
      'Signal classification',
      'Adaptive jamming',
      'Electronic protection',
      'Portable and vehicle-mounted options'
    ],
    useCases: [
      'Battlefield spectrum management',
      'Threat warning',
      'Counter-communications',
      'Signal analysis'
    ]
  },
  {
    id: 'uas-surveillance',
    name: 'RAVVIK Tactical UAS',
    category: 'Electronic Warfare & C-UAS',
    subcategory: 'UAS',
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=1200&h=800&fit=crop&q=85',
    shortDescription: 'Indigenously designed unmanned aerial system for surveillance and reconnaissance.',
    fullDescription: 'A rugged, versatile UAS platform optimized for tactical ISR missions. Features autonomous navigation, secure data links, and modular payload capability for diverse operational requirements.',
    features: [
      'Long-endurance flight',
      'EO/IR stabilized gimbal',
      'Secure encrypted data link',
      'Autonomous waypoint navigation',
      'Rapid deployment',
      'Low acoustic signature'
    ],
    useCases: [
      'Aerial reconnaissance',
      'Target acquisition',
      'Damage assessment',
      'Perimeter patrol'
    ]
  },
  // Tactical Training
  {
    id: 'container-fire-range',
    name: 'Modular Containerized Firing Range',
    category: 'Tactical Training',
    subcategory: 'Firing Ranges',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f1d44b1c28?w=1200&h=800&fit=crop&q=85',
    shortDescription: 'Turnkey containerized shooting range for safe, controlled live-fire training.',
    fullDescription: 'A fully self-contained firing range solution housed in ballistic-rated containers. Offers a safe, controlled environment for small arms training with integrated ventilation, target retrieval, and bullet traps.',
    features: [
      'Ballistic steel construction',
      'HEPA filtration and ventilation',
      'Automated target systems',
      'Sound dampening',
      'Climate control',
      'Rapid installation and relocation'
    ],
    useCases: [
      'Police station training',
      'Military unit qualification',
      'Special forces tactical drills',
      'Private security training'
    ]
  },
  {
    id: 'shoot-house-cqb',
    name: 'CQB Shoot House Facility',
    category: 'Tactical Training',
    subcategory: 'Shoot Houses',
    image: 'https://images.unsplash.com/photo-1590422553965-f8c634c0388d?w=1200&h=800&fit=crop&q=85',
    shortDescription: 'Customizable shoot house for realistic close quarters battle training.',
    fullDescription: 'Indigenously designed ballistic shoot houses for live-fire CQB training. Features reconfigurable walls, breachable doors, and overhead catwalks for instructor review, enabling complex scenario-based training.',
    features: [
      'Ballistic wall systems (360° protection)',
      'Breaching door integration',
      'Overhead observation catwalks',
      'Modular reconfigurable layout',
      'Video monitoring integration',
      'Safety signaling systems'
    ],
    useCases: [
      'Urban warfare training',
      'Room clearing drills',
      'Hostage rescue scenarios',
      'Active shooter response'
    ]
  },
  {
    id: 'ai-shot-detection',
    name: 'AI Training Analytics Suite',
    category: 'Tactical Training',
    subcategory: 'AI Software',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&q=85',
    shortDescription: 'AI-powered software for real-time shot detection and performance analysis.',
    fullDescription: 'Advanced training software that leverages acoustic sensors and computer vision to detect shots, locate hits, and analyze shooter performance. Provides data-driven insights for After-Action Reviews (AAR).',
    features: [
      'Acoustic shot detection',
      'Real-time heatmapping',
      'Shooter reaction time analysis',
      'Automated scoring',
      'Historical performance tracking',
      'Scenario-based evaluation'
    ],
    useCases: [
      'Marksmanship training',
      'Tactical decision evaluation',
      'Unit performance assessment',
      'Instructor-led AARs'
    ]
  }
];

export const getProductsByCategory = (category: 'Electronic Warfare & C-UAS' | 'Tactical Training') =>
  products.filter(p => p.category === category);

export const getProductById = (id: string) =>
  products.find(p => p.id === id);

export const getProductsBySubcategory = (subcategory: string) =>
  products.filter(p => p.subcategory === subcategory);
