export interface Product {
  id: string;
  name: string;
  category: 'intelligence' | 'defense';
  subcategory: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  useCases: string[];
  image?: string;
}

export const products: Product[] = [
  // Intelligence & Law Enforcement Products
  {
    id: 'satellite-monitoring-x1',
    name: 'Satellite Monitoring System X1',
    category: 'intelligence',
    subcategory: 'ISR',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
    shortDescription: 'Advanced satellite surveillance platform for real-time global monitoring and intelligence gathering.',
    fullDescription: 'The Satellite Monitoring System X1 represents the pinnacle of space-based surveillance technology. This comprehensive platform integrates multi-spectral imaging, signals intelligence, and advanced analytics to provide unparalleled situational awareness across any terrain or weather condition.',
    features: [
      'Multi-spectral imaging (visible, IR, SAR)',
      'Real-time data processing and analysis',
      'Global coverage with constellation support',
      'AI-powered target recognition',
      'Encrypted data transmission',
      'Integration with ground-based systems'
    ],
    useCases: [
      'Border security monitoring',
      'Maritime surveillance',
      'Critical infrastructure protection',
      'Disaster response coordination',
      'Military reconnaissance'
    ]
  },
  {
    id: 'cellular-interception-pro',
    name: 'Cellular Interception Pro',
    category: 'intelligence',
    subcategory: 'Cellular Monitoring',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    shortDescription: 'Next-generation cellular monitoring system for lawful interception and intelligence operations.',
    fullDescription: 'Cellular Interception Pro provides law enforcement and intelligence agencies with advanced capabilities to monitor, intercept, and analyze cellular communications. Built with strict compliance frameworks and audit trails.',
    features: [
      '2G/3G/4G/5G support',
      'Real-time voice and data interception',
      'Location tracking and mapping',
      'Pattern analysis and link detection',
      'Encrypted evidence chain',
      'Court-admissible reporting'
    ],
    useCases: [
      'Counter-terrorism operations',
      'Organized crime investigations',
      'National security operations',
      'Emergency response coordination'
    ]
  },
  {
    id: 'lawful-interception-lia900',
    name: 'Lawful Interception Suite LIA-900',
    category: 'intelligence',
    subcategory: 'Lawful Interception',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    shortDescription: 'Comprehensive lawful interception platform compliant with international standards.',
    fullDescription: 'The LIA-900 provides a complete lawful interception solution that meets ETSI and CALEA standards. Designed for telecommunications providers and law enforcement agencies requiring legal compliance and operational efficiency.',
    features: [
      'ETSI LI compliance',
      'CALEA compatibility',
      'Multi-protocol support',
      'Centralized management console',
      'Automated warrant processing',
      'Secure evidence storage'
    ],
    useCases: [
      'Telecommunications compliance',
      'Law enforcement investigations',
      'Judicial oversight operations',
      'National security monitoring'
    ]
  },
  {
    id: 'radio-signal-analyzer-rsm500',
    name: 'Radio Signal Analyzer RSM-500',
    category: 'intelligence',
    subcategory: 'Radio Monitoring',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    shortDescription: 'Wideband radio monitoring and signal analysis platform for spectrum intelligence.',
    fullDescription: 'The RSM-500 delivers comprehensive radio frequency monitoring and signal analysis capabilities. From HF to microwave bands, this system detects, classifies, and geolocates radio emissions with exceptional accuracy.',
    features: [
      'Wideband coverage (1MHz - 40GHz)',
      'Real-time spectrum analysis',
      'Direction finding and geolocation',
      'Signal classification and demodulation',
      'Database of known emitters',
      'Mobile and fixed deployment options'
    ],
    useCases: [
      'Spectrum management',
      'Counter-surveillance operations',
      'Electronic warfare support',
      'Border control communications monitoring'
    ]
  },
  {
    id: 'dark-web-intelligence-tracker',
    name: 'Dark Web Intelligence Tracker',
    category: 'intelligence',
    subcategory: 'Cyber Intelligence',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    shortDescription: 'Advanced dark web monitoring and threat intelligence platform.',
    fullDescription: 'The Dark Web Intelligence Tracker continuously monitors hidden networks, forums, and marketplaces to identify threats, compromised data, and criminal activities before they impact your organization or national security.',
    features: [
      'Continuous dark web monitoring',
      'Automated threat detection',
      'Credential leak alerts',
      'Criminal marketplace tracking',
      'Entity relationship mapping',
      'Custom alert configurations'
    ],
    useCases: [
      'Threat intelligence gathering',
      'Brand protection',
      'Counter-terrorism',
      'Financial crime investigation',
      'Data breach detection'
    ]
  },
  {
    id: 'network-intelligence-nip360',
    name: 'Network Intelligence Platform NIP-360',
    category: 'intelligence',
    subcategory: 'Network Intelligence',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    shortDescription: 'Enterprise-grade network traffic analysis and threat detection system.',
    fullDescription: 'NIP-360 provides deep packet inspection, traffic analysis, and threat detection across enterprise and carrier networks. Identify anomalies, detect intrusions, and gain complete visibility into network communications.',
    features: [
      'Deep packet inspection',
      'Traffic analysis and metadata extraction',
      'Anomaly detection with ML',
      'Network forensics capabilities',
      'High-speed capture (100Gbps+)',
      'Integration with SIEM systems'
    ],
    useCases: [
      'Network security monitoring',
      'Incident response',
      'Compliance monitoring',
      'Threat hunting operations'
    ]
  },
  // Defense & Military Products
  {
    id: 'rcied-jammer-shield-x',
    name: 'RCIED Jammer Shield-X',
    category: 'defense',
    subcategory: 'Electronic Warfare',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    shortDescription: 'Radio-Controlled Improvised Explosive Device jammer for convoy and VIP protection.',
    fullDescription: 'Shield-X provides comprehensive protection against RCIED threats through advanced jamming technology. Designed for military convoys, VIP motorcades, and static installations, it neutralizes remote detonation signals across all common threat frequencies.',
    features: [
      'Multi-band jamming (20MHz - 6GHz)',
      'Reactive jamming technology',
      'Vehicle and portable variants',
      'Smart frequency management',
      'Friendly communications protection',
      'Real-time threat logging'
    ],
    useCases: [
      'Military convoy protection',
      'VIP motorcade security',
      'EOD operations support',
      'Critical infrastructure protection',
      'Special operations missions'
    ]
  },
  {
    id: 'rf-jammer-storm-200',
    name: 'RF Jammer Storm-200',
    category: 'defense',
    subcategory: 'Electronic Warfare',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    shortDescription: 'High-power RF jammer for communications denial and electronic attack.',
    fullDescription: 'Storm-200 delivers powerful electronic attack capabilities to deny enemy communications and navigation systems. With modular design and scalable power output, it adapts to tactical and strategic requirements.',
    features: [
      'Scalable power output (10W - 2kW)',
      'Software-defined waveforms',
      'GPS/GLONASS denial',
      'Communications jamming',
      'Remote operation capability',
      'Rapid deployment design'
    ],
    useCases: [
      'Electronic attack missions',
      'Area denial operations',
      'Force protection',
      'Counter-drone operations',
      'Special operations support'
    ]
  },
  {
    id: 'air-defense-radar-ard900',
    name: 'Air Defense Radar ARD-900',
    category: 'defense',
    subcategory: 'Radars',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop',
    shortDescription: 'Advanced 3D air surveillance radar for integrated air defense systems.',
    fullDescription: 'The ARD-900 is a state-of-the-art 3D air surveillance radar designed for medium to long-range detection and tracking. AESA technology provides electronic beam steering, jam resistance, and multiple target tracking capabilities.',
    features: [
      'AESA technology',
      '3D surveillance (azimuth, range, height)',
      '400km detection range',
      'Track-while-scan (500+ targets)',
      'Anti-jamming features',
      'Integrated IFF'
    ],
    useCases: [
      'National air defense',
      'Airfield protection',
      'Naval task force defense',
      'Early warning systems'
    ]
  },
  {
    id: 'weapon-locating-radar-wlr22',
    name: 'Weapon Locating Radar WLR-22',
    category: 'defense',
    subcategory: 'Radars',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    shortDescription: 'Counter-battery radar for artillery and mortar fire location.',
    fullDescription: 'WLR-22 rapidly detects and tracks incoming projectiles, computing launch and impact points in real-time. Essential for force protection and counter-fire operations in modern artillery warfare.',
    features: [
      '360° surveillance',
      'Simultaneous tracking of multiple threats',
      'Artillery, mortar, and rocket detection',
      'Impact point prediction',
      'Counter-fire data generation',
      'Mobile and deployable design'
    ],
    useCases: [
      'Counter-battery operations',
      'Force protection',
      'Base defense',
      'Artillery fire correction'
    ]
  },
  {
    id: 'fire-control-radar-fcr88',
    name: 'Fire Control Radar FCR-88',
    category: 'defense',
    subcategory: 'Fire Control',
    image: 'https://images.unsplash.com/photo-1581092583537-20d51876c1f7?w=800&h=600&fit=crop',
    shortDescription: 'Precision fire control radar for weapons guidance and target engagement.',
    fullDescription: 'The FCR-88 provides high-precision target tracking and weapons guidance for air defense and naval applications. Continuous wave and pulse-doppler modes ensure reliable engagement in complex environments.',
    features: [
      'X-band operation',
      'Multi-target tracking',
      'Missile guidance capability',
      'High update rate',
      'All-weather operation',
      'Integration with fire control systems'
    ],
    useCases: [
      'Air defense weapons guidance',
      'Naval fire control',
      'Point defense systems',
      'Mobile air defense'
    ]
  },
  {
    id: 'ground-surveillance-gsr11',
    name: 'Ground Surveillance Radar GSR-11',
    category: 'defense',
    subcategory: 'Radars',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
    shortDescription: 'Portable ground surveillance radar for perimeter security and battlefield awareness.',
    fullDescription: 'GSR-11 is a lightweight, portable radar designed for ground surveillance, perimeter security, and force protection. Doppler processing distinguishes personnel and vehicles in all conditions.',
    features: [
      'Personnel detection to 10km',
      'Vehicle detection to 24km',
      'Tripod or vehicle mounted',
      'Auto-classification algorithms',
      'GPS integration',
      'Silent operation'
    ],
    useCases: [
      'Border surveillance',
      'Perimeter security',
      'Force protection',
      'Reconnaissance operations'
    ]
  },
  {
    id: 'anti-drone-ads7',
    name: 'Anti-Drone Defense System ADS-7',
    category: 'defense',
    subcategory: 'Air Defense',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
    shortDescription: 'Integrated counter-UAS system for detection, tracking, and neutralization.',
    fullDescription: 'ADS-7 provides a complete counter-drone solution combining radar, EO/IR, and RF sensors with kinetic and electronic defeat mechanisms. Protects critical assets from the growing UAS threat.',
    features: [
      'Multi-sensor detection',
      'AI-powered classification',
      'RF jamming defeat',
      'Directed energy option',
      'Kinetic interceptor integration',
      'C2 integration'
    ],
    useCases: [
      'Airport protection',
      'Critical infrastructure',
      'Military base defense',
      'Event security',
      'VIP protection'
    ]
  },
  {
    id: 'c4is-command-platform',
    name: 'C4IS Command Platform CP-Alpha',
    category: 'defense',
    subcategory: 'C4IS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    shortDescription: 'Unified command and control platform for joint force operations.',
    fullDescription: 'CP-Alpha integrates all battlefield systems into a unified command platform. Real-time common operational picture, secure communications, and decision support tools enable effective command at all levels.',
    features: [
      'Unified operational picture',
      'Multi-domain integration',
      'Secure communications',
      'Decision support AI',
      'Blue force tracking',
      'Coalition interoperability'
    ],
    useCases: [
      'Joint force operations',
      'Tactical command posts',
      'Operations centers',
      'Coalition operations'
    ]
  },
  {
    id: 'tactical-sdr-tsdr5',
    name: 'Tactical SDR Radio TSDR-5',
    category: 'defense',
    subcategory: 'Communication Security',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
    shortDescription: 'Software-defined tactical radio with advanced encryption and waveform flexibility.',
    fullDescription: 'TSDR-5 is a next-generation tactical radio built on software-defined architecture. Support for multiple waveforms, military-grade encryption, and seamless integration with modern tactical networks.',
    features: [
      'Multi-waveform support',
      'Type 1 encryption',
      'MANET networking',
      'Frequency hopping',
      'Voice and data',
      'GPS integration'
    ],
    useCases: [
      'Tactical communications',
      'Special operations',
      'Coalition interoperability',
      'Emergency response'
    ]
  },
  {
    id: 'transportable-satellite-tst400',
    name: 'Transportable Satellite Terminal TST-400',
    category: 'defense',
    subcategory: 'Communication Security',
    image: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=800&h=600&fit=crop',
    shortDescription: 'Rapid-deploy satellite communications terminal for expeditionary operations.',
    fullDescription: 'TST-400 provides high-bandwidth satellite connectivity anywhere in the world within minutes. Auto-pointing antenna, rugged design, and multi-band capability ensure reliable SATCOM in demanding environments.',
    features: [
      'X-band and Ku-band operation',
      'Auto-acquire antenna',
      '10 minute setup time',
      'High-throughput capability',
      'Integrated COMSEC',
      'Ruggedized design (MIL-STD)'
    ],
    useCases: [
      'Expeditionary headquarters',
      'Disaster response',
      'Remote site connectivity',
      'Mobile command posts'
    ]
  },
  {
    id: 'high-res-satellite-imagery',
    name: 'High Resolution Satellite Imagery Service',
    category: 'defense',
    subcategory: 'Satellite Imagery',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop',
    shortDescription: 'On-demand access to sub-meter resolution satellite imagery worldwide.',
    fullDescription: 'Access the highest resolution commercial satellite imagery available. Our service provides tasking priority, rapid delivery, and advanced analysis tools for defense and intelligence applications.',
    features: [
      '30cm resolution imagery',
      'Multi-spectral options',
      'Stereo collection',
      'Change detection',
      'AI-powered analysis',
      'Secure delivery'
    ],
    useCases: [
      'Intelligence preparation',
      'Battle damage assessment',
      'Infrastructure monitoring',
      'Treaty verification'
    ]
  },
  {
    id: 'defense-comm-solutions',
    name: 'Defense Communication Solutions',
    category: 'defense',
    subcategory: 'Communication Security',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
    shortDescription: 'End-to-end secure communication infrastructure for defense networks.',
    fullDescription: 'Comprehensive communication solutions including encrypted voice, data, and video systems. From tactical radios to strategic networks, we ensure secure and reliable communications at every level.',
    features: [
      'End-to-end encryption',
      'Multi-classification handling',
      'Network redundancy',
      'Satellite and terrestrial',
      '24/7 network operations',
      'Lifecycle support'
    ],
    useCases: [
      'Ministry/HQ communications',
      'Deployed force networks',
      'Critical infrastructure',
      'Emergency backup systems'
    ]
  }
];

export const getProductsByCategory = (category: 'intelligence' | 'defense') =>
  products.filter(p => p.category === category);

export const getProductById = (id: string) =>
  products.find(p => p.id === id);

export const getProductsBySubcategory = (subcategory: string) =>
  products.filter(p => p.subcategory === subcategory);
