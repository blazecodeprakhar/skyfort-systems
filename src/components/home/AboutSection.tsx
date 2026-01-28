import { motion } from 'framer-motion';
import { Shield, Globe, Users, Target } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Uncompromising commitment to protecting critical infrastructure and national interests.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operations and partnerships spanning over 40 countries across six continents.',
    },
    {
      icon: Users,
      title: 'Expert Teams',
      description: 'World-class engineers, analysts, and defense specialists with decades of experience.',
    },
    {
      icon: Target,
      title: 'Mission Focus',
      description: 'Delivering precision solutions tailored to each client\'s unique operational requirements.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="Who We Are"
              title="Indigenously Designed Defence Solutions"
              subtitle="RAVVIK Global Solutions is a defence deep-technology company focused on the indigenous design, development, and integration of advanced defence and security systems."
              centered={false}
            />

            <p className="text-muted-foreground mb-8">
              Aligned with the Government of India’s Make in India and Atmanirbhar Bharat initiatives,
              RAVVIK Global Solutions is committed to building self-reliant, secure, and future-ready
              defence capabilities through indigenous innovation, local manufacturing, and ownership
              of critical intellectual property.
            </p>

            {/* Initiative Logos */}
            <div className="flex flex-row items-center justify-start gap-4 sm:gap-8 mb-8">
              <img
                src="/made in india/makeinindia.png"
                alt="Make In India"
                className="h-10 sm:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <img
                src="/made in india/Startup-India-Hub-Logo-Vector.svg-.png"
                alt="Startup India"
                className="h-8 sm:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <img
                src="/made in india/IEX-3ff195b9.png"
                alt="IEX"
                className="h-6 sm:h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-8">
              {[
                { value: 'DeepTech', label: 'Ecosystem' },
                { value: 'Indigenous', label: 'Innovation' },
                { value: 'Mission', label: 'Ready' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-2 md:p-0 rounded-lg bg-accent/5 md:bg-transparent border border-accent/10 md:border-0"
                >
                  <div className="font-heading font-bold text-sm sm:text-2xl md:text-3xl text-accent mb-1 leading-tight">
                    {stat.value.split(' ').map((word, wI) => (
                      <span key={wI} className="block sm:inline">{word} <span className="hidden sm:inline"> </span></span>
                    ))}
                  </div>
                  <div className="text-muted-foreground text-[10px] sm:text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
