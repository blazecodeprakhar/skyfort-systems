import { motion } from 'framer-motion';
import {
  Radio, Shield, Crosshair, Target, Zap, Cpu
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import CTASection from '@/components/home/CTASection';

const capabilities = [
  {
    category: "Electronic Warfare & C-UAS",
    description: "Mission-critical systems for spectrum awareness, threat detection, and neutralization.",
    items: [
      {
        icon: Radio,
        title: 'Electronic Warfare (EW)',
        description: 'Advanced EW systems enabling spectrum dominance and threat suppression in complex environments.',
        features: ['Spectrum Awareness', 'Threat Detection', 'Signal Jamming', 'Electronic Protection']
      },
      {
        icon: Shield,
        title: 'C-UAS Solutions',
        description: 'Comprehensive counter-drone systems integrating detection, identification, and neutralization capabilities.',
        features: ['Drone Detection', 'Signal Denial', 'Kinetic Interception', 'Asset Protection']
      },
      {
        icon: Zap,
        title: 'Unmanned Aerial Systems',
        description: 'Indigenous UAS platforms designed for surveillance, reconnaissance, and tactical operations.',
        features: ['Aerial Surveillance', 'Tactical Reconnaissance', 'Payload Delivery', 'Secure Data Link']
      }
    ]
  },
  {
    category: "Tactical Training Solutions",
    description: "Next-generation firing ranges and simulation systems for modern armed forces.",
    items: [
      {
        icon: Crosshair,
        title: 'Firing Ranges',
        description: 'Indigenously designed containerized and permanent firing ranges for live-fire training.',
        features: ['Containerized Ranges', 'Ballistic Containment', 'Safety Infrastructure', 'Hybrid Environments']
      },
      {
        icon: Target,
        title: 'Shoot Houses & CQB',
        description: 'Modular shoot houses and Close Quarters Battle facilities for realistic urban combat training.',
        features: ['Modular Design', 'Live/Dry Fire', 'Scenario Training', 'Breaching Zones']
      },
      {
        icon: Cpu,
        title: 'AI Training Software',
        description: 'AI-enabled shot detection, localization, and performance analysis software.',
        features: ['Shot Detection', 'Hit/Miss Analysis', 'After-Action Review', 'Performance Metrics']
      }
    ]
  }
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
              Core Expertise
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Our Capabilities
            </h1>
            <p className="text-white/70 text-lg md:text-xl">
              Delivering indigenous, technologically advanced solutions for modern defence and security challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Sections */}
      {capabilities.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-24 ${sectionIndex % 2 === 0 ? 'bg-background' : 'bg-muted/50'}`}>
          <div className="container mx-auto px-4">
            <SectionTitle
              badge="Domain Expertise"
              title={section.category}
              subtitle={section.description}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-card-hover transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
                Indigenous Design
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Commitment to Make in India
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Aligned with the Atmanirbhar Bharat initiative, we prioritize indigenous design,
                local manufacturing, and ownership of critical intellectual property.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Capabilities;
