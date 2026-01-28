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
    name: 'Loitering Munition',
    category: 'Electronic Warfare & C-UAS',
    subcategory: 'UAS',
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
    name: 'RF Detector',
    category: 'Electronic Warfare & C-UAS',
    subcategory: 'Electronic Warfare',
    image: '/products/RF Detector/rf-detector.jpg',
    shortDescription: 'All-weather, all-day detection systems for tracking moving targets (UAVs, Ground, Maritime) with high accuracy and low false alarm probability.',
    fullDescription: `### 1) Moving Target Surveillance Radar (BWR Series)
The BWR series Moving Target Surveillance Radars are all-weather, all-day detection systems used for detecting and tracking moving targets.

**Core detector capability:**
* Detect and track moving targets continuously
* Outputs target data in real time: position, speed, movement trajectory, target type

**Key detection strengths:**
* High detection probability
* Low false alarm probability
* High accuracy & High data refresh rate
* Strong capability for mobile targets
* Wide area coverage
* Multi-target detection simultaneously
* "Small blind spots at close range" (close-range detection improvement)
* Low interception rate
* Portable and easy operation

### 2) Low-Altitude Series Radars — Detector Systems
These are designed for low-altitude surveillance, mainly for UAV/drone threats and other low-altitude targets.

**a) BWR-T02 Low-Altitude Surveillance Radar**
* **Technology:** Azimuth mechanical scanning, Elevation digital beamforming
* **Function:** Continuous detection + tracking (All day / all weather)
* **Advantages:** High detection sensitivity, Low false alarm rate, High accuracy, High data rate, Strong tracking ability, Wide detection range, High cost effectiveness, Easy operation
* **Scenarios:** Border surveillance, Sea surface surveillance, Important place defense, Battlefield reconnaissance

**b) BWR-T05 Low-Altitude Surveillance Radar**
Similar operational concept as T02 with high sensitivity / low false alarms. Suitable for Border/Sea surveillance and Battlefield reconnaissance.

**c) BWR-T10 Low-Altitude Surveillance Radar**
Used for low-altitude security in complex environments (e.g. Major event security: 2024 Zhuhai Airshow).
* **Focus on:** Drone control monitoring, Dynamic monitoring of aircraft, Coordinated airspace management, Real-time detection support.

**d) BWR-T18 / BWR-T20 Low-Altitude Surveillance Radars**
Used for continuous moving target detection.

### 3) Low-Altitude A15 Radar — Detector
* **System:** Two-dimensional phased scanning system, Continuous detection and tracking.
* **Advantages:** High data rate + strong tracking, Low false alarm, Wide range + precision, High cost effectiveness.

### 4) Radar + Electro-Optical (EO) Coaxial Integrated Detector System
Radar and optoelectronics are coaxially mounted (No mutual blind spots). Uses AI classification algorithms and "Radar and video fusion" to improve target recognition.
* **Process:** Radar detects object -> EO camera confirms visually -> AI classifies target.
* **Advantages:** Lightning (fast) integration, Easy deployment, High recognition, Low cost.

### 5) Ground Series (BWR-G) — Detector Systems
These are ground/surface surveillance detectors featuring high intelligence and no mechanical parts for high reliability.

**a) BWR-G03:** Digital beamforming system, 24/7 detection + tracking. Good tracking under dense targets. Small size.
**b) BWR-G06:** Active phased array (AESA). High precision, High reliability, Wide coverage.
**c) BWR-G20 / BWR-G50:** AESA, Portable reconnaissance supported, Wide coverage, Dense tracking stability.
**d) BWR-G03Q:** Enhanced features including cross-boundary alarm, early warning, and recording. Provides distance, speed, orientation, and type.

### 6) Electro-Optical Linkage Detector System
Combined Radar + EO coordinated detection.
* **Example:** BWR-G12 radar + long-focus EO (Radar guides EO for precise tracking).
* **Example:** BWR-G06 EO linkage gives area surveillance within 4 km radius with virtually no false alarms in high wind/vegetation environments.

### 7) Reliability Enhancers
* **Target Database:** Million-level sample library & RCS feature library (UAVs, helicopters, birds, weather balloons, personnel, vehicles, ships).
* **Scenario Library:** Covers Rain, snow, sand/dust, High/low temperature, High humidity, Strong wind.`,
    features: [
      'Continuous detection and tracking of moving targets',
      'High detection probability with Low false alarm probability',
      'Multi-target detection simultaneously',
      'Azimuth mechanical scanning & Elevation digital beamforming',
      'Radar + Electro-Optical (EO) coaxial integration',
      'AI classification algorithms with Radar/Video fusion',
      'Active phased array (AESA) technology (Ground Series)',
      'All-weather operation (Rain, snow, dust, strong wind)',
      'Portable and easy operation',
      'Comprehensive Target Database (Million-level sample library)'
    ],
    useCases: [
      'Border and Sea surface surveillance',
      'Important place defense & Key area protection',
      'Battlefield reconnaissance',
      'Major event security (e.g. Airshows)',
      'Drone control monitoring & Interception',
      'Dynamic monitoring of aircraft',
      'Coordinated airspace management',
      'Waterway management',
      'Land border monitoring'
    ]
  },
  {
    id: 'uas-surveillance',
    name: 'RF Jammers',
    category: 'Electronic Warfare & C-UAS',
    subcategory: 'C-UAS',
    image: '/products/RF Jammers/rf-jammer.jpg',
    shortDescription: 'Advanced Multi-Mission Jammer, Interference, and Deception Systems for Anti-Drone Defence and Electronic Warfare.',
    fullDescription: `### AMMER / INTERFERENCE / DECEPTION SYSTEMS
Comprehensive Anti-Drone and Electronic Warfare capabilities designed for detection, interference, deception, and neutralization.

### 1) Anti-Drone Defence Systems (BBBS)
Portable anti-drone systems supplied to various commands. System capability demonstrated on naval warships.
*   **Capabilities:** Detection + Neutralization (CISR BBBS + ADSL).

### 2) Electronic Warfare (EW) Project
Non-kinetic capabilities to disrupt enemy electronics, communications, and control systems.
*   **Features:** Cyber Takeover, Electronic Disruption.

### 3) Electrical Detection + Interference + Deception
Integrated Anti-Non / Anti-Drone system construction (BWR-T20 radar + electro-optical + electrical detection interference + deception).
*   **System Architecture:** Radar Detection -> EO Confirmation -> Electrical Detection -> Interference (Jamming) -> Deception (Spoofing).

### 4) Deception (Spoofing)
Advanced deception modules to mislead hostile UAV navigation and communication.
*   **Techniques:** Spoofing GNSS/GPS, telemetry, or control links; Creating false signals.
*   **Outcome:** Force UAV to land, return home, or hover away.

### 5) Cyber Takeover (Control Hijack)
Advanced Control Hijack capabilities for complete denial of operator control.
*   **Mechanism:** Override control link, Command injection.
*   **Result:** Complete takeover of the target for forced landing or route deviation.`,
    features: [
      'Anti-drone defence systems (BBBS)',
      'Portable jamming and neutralization capabilities',
      'Electronic Warfare (EW) & Cyber Takeover',
      'Electrical Detection & Interference',
      'GPS/GNSS Spoofing & Deception capability',
      'Multi-layer neutralization (Jamming + Spoofing + Takeover)',
      'Demonstrated Naval Warship capability',
      'Anti-Non / Anti-Drone system construction',
      'Radar + EO + Electrical detection integration'
    ],
    useCases: [
      'Naval & Maritime Defence',
      'Critical Infrastructure Protection',
      'Anti-Drone Security',
      'Electronic Warfare Operations',
      'Border Security',
      'Strategic Area Denial',
      'Cyber Counter-Measures'
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
    name: 'CQB Shoot House',
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
    name: 'AI Training / Simulator',
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
