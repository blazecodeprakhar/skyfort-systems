import { motion } from 'framer-motion';
import { 
  Satellite, Radio, Shield, Radar, Lock, Crosshair, 
  Globe, Eye, Wifi, Server, Cpu, Plane 
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import CTASection from '@/components/home/CTASection';
import { cn } from '@/lib/utils';

const intelligenceCapabilities = [
  {
    icon: Satellite,
    title: 'ISR',
    description: 'Intelligence, Surveillance & Reconnaissance systems combining satellite, aerial, and ground-based sensors.',
    services: ['Satellite Monitoring', 'Aerial Reconnaissance', 'Ground Sensors', 'Multi-INT Fusion'],
  },
  {
    icon: Radio,
    title: 'Cellular Monitoring',
    description: 'Advanced cellular interception and monitoring systems for lawful intelligence operations.',
    services: ['2G/3G/4G/5G Interception', 'Location Tracking', 'Pattern Analysis', 'Target Identification'],
  },
  {
    icon: Shield,
    title: 'Lawful Interception',
    description: 'ETSI and CALEA compliant interception solutions for telecommunications providers.',
    services: ['VoIP Interception', 'Data Interception', 'Warrant Management', 'Evidence Chain'],
  },
  {
    icon: Wifi,
    title: 'Radio Monitoring',
    description: 'Wideband radio frequency monitoring and signal analysis platforms.',
    services: ['Spectrum Analysis', 'Direction Finding', 'Signal Classification', 'Emitter Location'],
  },
  {
    icon: Eye,
    title: 'Cyber Intelligence',
    description: 'Dark web monitoring and network intelligence for threat detection and investigation.',
    services: ['Dark Web Analysis', 'Threat Intelligence', 'Credential Monitoring', 'Actor Profiling'],
  },
  {
    icon: Server,
    title: 'Network Intelligence',
    description: 'Deep packet inspection and network traffic analysis for security monitoring.',
    services: ['DPI Systems', 'Traffic Analysis', 'Anomaly Detection', 'Network Forensics'],
  },
];

const defenseCapabilities = [
  {
    icon: Crosshair,
    title: 'Electronic Warfare',
    description: 'RCIED jammers, RF denial systems, and electronic attack capabilities.',
    services: ['RCIED Jamming', 'RF Jamming', 'GPS Denial', 'Reactive Jamming'],
  },
  {
    icon: Radar,
    title: 'Radar Systems',
    description: 'Air surveillance, ground surveillance, and fire control radar solutions.',
    services: ['Air Defense Radar', 'Weapon Locating', 'Fire Control', 'Ground Surveillance'],
  },
  {
    icon: Plane,
    title: 'Air Defense',
    description: 'Integrated air defense systems including counter-UAS capabilities.',
    services: ['Anti-Drone Systems', 'Missile Defense', 'Early Warning', 'Point Defense'],
  },
  {
    icon: Lock,
    title: 'Communication Security',
    description: 'Encrypted tactical communications and secure network infrastructure.',
    services: ['Tactical Radios', 'Satellite Terminals', 'COMSEC', 'Network Encryption'],
  },
  {
    icon: Globe,
    title: 'Satellite Imagery',
    description: 'High-resolution satellite imagery services for defense applications.',
    services: ['Sub-meter Imagery', 'Change Detection', 'AI Analysis', 'Rapid Tasking'],
  },
  {
    icon: Cpu,
    title: 'C4IS',
    description: 'Command, Control, Communications, Computers, Intelligence and Surveillance platforms.',
    services: ['Command Centers', 'Blue Force Tracking', 'Decision Support', 'Multi-domain C2'],
  },
];

const Capabilities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent/20 text-accent mb-4">
              Capabilities
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Our Capabilities
            </h1>
            <p className="text-white/70 text-lg md:text-xl">
              Comprehensive defense and intelligence solutions across two major domains: 
              Intelligence & Law Enforcement and Defense & Military.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Intelligence & Law Enforcement"
            title="Intelligence Solutions"
            subtitle="Advanced systems for intelligence agencies, law enforcement, and security organizations"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-card-hover transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <cap.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.services.map((service, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Defense Capabilities */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Defense & Military"
            title="Defense Systems"
            subtitle="Military-grade systems for armed forces and defense establishments"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defenseCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl border border-border p-6 hover:border-highlight/30 hover:shadow-card-hover transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center mb-5 group-hover:bg-highlight/20 transition-colors">
                  <cap.icon className="w-7 h-7 text-highlight" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-highlight transition-colors">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.services.map((service, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent/20 text-accent mb-4">
                System Integration
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Seamless Integration
              </h2>
              <p className="text-white/70 text-lg mb-10">
                All our systems are designed to integrate seamlessly with each other and 
                with existing infrastructure, creating a unified operational picture 
                across all domains.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Open Architecture', desc: 'Standards-based interfaces for easy integration' },
                { title: 'Multi-Domain', desc: 'Land, sea, air, space, and cyber integration' },
                { title: 'Interoperability', desc: 'Coalition and allied systems compatibility' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Capabilities;
