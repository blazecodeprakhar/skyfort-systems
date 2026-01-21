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
              title="Defending Nations Since 2009"
              subtitle="AegisTech Systems is a premier provider of advanced defense technology solutions, specializing in intelligence, surveillance, reconnaissance, and electronic warfare systems."
              centered={false}
            />

            <p className="text-muted-foreground mb-8">
              With headquarters in Arlington, Virginia, and regional offices across Europe, 
              the Middle East, and Asia-Pacific, we serve government agencies, defense 
              ministries, and law enforcement organizations worldwide. Our mission is to 
              provide cutting-edge technology that ensures operational superiority and 
              national security.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '40+', label: 'Countries Served' },
                { value: '120+', label: 'Defense Projects' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading font-bold text-3xl md:text-4xl text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
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
