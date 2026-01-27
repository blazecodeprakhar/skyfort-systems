import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Satellite, Shield, Target, Radio, Cpu, Crosshair } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { cn } from '@/lib/utils';

const capabilities = [
  {
    icon: Radio,
    title: 'Electronic Warfare',
    subtitle: 'Spectrum Dominance',
    description: 'Advanced EW systems enabling spectrum awareness, threat detection, and electronic attack capabilities.',
    features: ['Spectrum Monitoring', 'Signal Jamming', 'Threat Analysis'],
    color: 'accent',
  },
  {
    icon: Shield,
    title: 'C-UAS Solutions',
    subtitle: 'Counter-Drone Defense',
    description: 'Comprehensive counter-unmanned aerial systems for detection, identification, and neutralization.',
    features: ['Drone Detection', 'Signal Denial', 'Kinetic Interception'],
    color: 'highlight',
  },
  {
    icon: Satellite,
    title: 'Tactical UAS',
    subtitle: 'Unmanned Aerial Systems',
    description: 'Indigenous UAS platforms designed for surveillance, reconnaissance, and tactical operations.',
    features: ['Aerial Surveillance', 'Target Acquisition', 'Secure Data Link'],
    color: 'accent',
  },
  {
    icon: Crosshair,
    title: 'Firing Ranges',
    subtitle: 'Live-Fire Training',
    description: 'Indigenously designed containerized and permanent firing ranges for safe, realistic training.',
    features: ['Containerized Ranges', 'Ballistic Safety', 'Target Systems'],
    color: 'highlight',
  },
  {
    icon: Target,
    title: 'Shoot Houses',
    subtitle: 'CQB & Urban Combat',
    description: 'Modular shoot houses and Close Quarters Battle facilities for scenario-based tactical training.',
    features: ['Modular Layouts', 'Breaching Zones', 'Live-Fire Ready'],
    color: 'accent',
  },
  {
    icon: Cpu,
    title: 'AI Training Software',
    subtitle: 'Performance Analytics',
    description: 'AI-enabled shot detection, localization, and performance analysis for data-driven training.',
    features: ['Shot Detection', 'AAR Tools', 'Shooter Metrics'],
    color: 'highlight',
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          badge="Our Capabilities"
          title="Indigenous Defence Excellence"
          subtitle="Comprehensive solutions across electronic warfare, unmanned systems, and tactical training"
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
