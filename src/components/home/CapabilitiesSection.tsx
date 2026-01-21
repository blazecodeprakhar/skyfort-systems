import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Satellite, Shield, Radar, Radio, Lock, Crosshair } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { cn } from '@/lib/utils';

const capabilities = [
  {
    icon: Satellite,
    title: 'ISR',
    subtitle: 'Intelligence, Surveillance & Reconnaissance',
    description: 'Space and airborne systems for comprehensive situational awareness and intelligence gathering.',
    features: ['Satellite Monitoring', 'Aerial Reconnaissance', 'Real-time Analytics'],
    color: 'accent',
  },
  {
    icon: Shield,
    title: 'Cyber Intelligence',
    subtitle: 'Network & Dark Web Analysis',
    description: 'Advanced cyber operations including dark web monitoring, network intelligence, and threat detection.',
    features: ['Dark Web Tracking', 'Network Analysis', 'Threat Intelligence'],
    color: 'highlight',
  },
  {
    icon: Crosshair,
    title: 'Electronic Warfare',
    subtitle: 'Jammers & Countermeasures',
    description: 'RCIED jammers, RF denial systems, and electronic attack capabilities for force protection.',
    features: ['RCIED Jamming', 'RF Countermeasures', 'GPS Denial'],
    color: 'accent',
  },
  {
    icon: Radar,
    title: 'Radar Systems',
    subtitle: 'Surveillance & Fire Control',
    description: 'Air defense, ground surveillance, and fire control radars with advanced target tracking.',
    features: ['Air Defense Radar', 'Ground Surveillance', 'Fire Control'],
    color: 'highlight',
  },
  {
    icon: Lock,
    title: 'Communication Security',
    subtitle: 'Encrypted Defense Comms',
    description: 'Tactical radios, satellite terminals, and secure communication infrastructure.',
    features: ['SDR Radios', 'SATCOM Terminals', 'Encryption'],
    color: 'accent',
  },
  {
    icon: Radio,
    title: 'C4IS',
    subtitle: 'Command & Control Systems',
    description: 'Unified command platforms integrating all battlefield systems for effective operations.',
    features: ['Command Centers', 'Blue Force Tracking', 'Decision Support'],
    color: 'highlight',
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          badge="Our Capabilities"
          title="Defense Technology Excellence"
          subtitle="Comprehensive solutions across the full spectrum of defense and intelligence requirements"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className={cn(
                'h-full bg-card rounded-xl border border-border p-6',
                'hover:border-accent/30 hover:shadow-card-hover transition-all duration-300',
                'hover:-translate-y-1'
              )}>
                {/* Icon */}
                <div className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center mb-5',
                  'transition-colors duration-300',
                  cap.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-highlight/10 group-hover:bg-highlight/20'
                )}>
                  <cap.icon className={cn(
                    'w-7 h-7',
                    cap.color === 'accent' ? 'text-accent' : 'text-highlight'
                  )} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl mb-1 text-foreground group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{cap.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-5">
                  {cap.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cap.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to="/capabilities"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
