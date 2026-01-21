import { motion } from 'framer-motion';
import { Shield, Target, Users, Globe, Award, Zap, Eye, Lock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import CTASection from '@/components/home/CTASection';

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Operating with the highest ethical standards in every engagement.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering superior solutions that exceed client expectations.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously advancing technology to stay ahead of emerging threats.',
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Protecting sensitive information and maintaining operational security.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Eye,
      title: 'Deep Industry Expertise',
      description: 'Our team comprises former military officers, intelligence analysts, and defense industry veterans with decades of combined experience.',
    },
    {
      icon: Globe,
      title: 'Global Footprint',
      description: 'With operations in over 40 countries, we understand regional requirements and maintain strong relationships with defense establishments worldwide.',
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      description: 'We work as an extension of your team, providing tailored solutions and responsive support throughout the project lifecycle.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Over 120 successfully completed defense projects with zero security incidents and consistently high customer satisfaction ratings.',
    },
  ];

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
              About Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Who We Are
            </h1>
            <p className="text-white/70 text-lg md:text-xl">
              A trusted partner in defense technology, serving nations with advanced 
              intelligence and military systems since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              badge="Company Overview"
              title="Pioneering Defense Innovation"
              centered={false}
            />
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                AegisTech Systems was founded in 2009 with a clear mission: to provide 
                governments and defense organizations with the most advanced technology 
                solutions for national security. From our headquarters in Arlington, 
                Virginia, we have grown to become a leading provider of intelligence, 
                surveillance, reconnaissance, and electronic warfare systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                Our portfolio spans the complete spectrum of defense technology, from 
                satellite monitoring systems and cyber intelligence platforms to 
                advanced radar systems and secure communications infrastructure. We 
                serve defense ministries, intelligence agencies, law enforcement 
                organizations, and critical infrastructure operators across more than 
                40 countries.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                What sets us apart is our commitment to understanding each client's 
                unique operational environment and delivering solutions that integrate 
                seamlessly with existing systems while providing a decisive technological 
                advantage.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years of Excellence', suffix: '' },
              { value: '40+', label: 'Countries Served', suffix: '' },
              { value: '120+', label: 'Defense Projects', suffix: '' },
              { value: '500+', label: 'Security Experts', suffix: '' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower governments and defense organizations with cutting-edge 
                technology solutions that enhance national security, protect critical 
                infrastructure, and ensure operational superiority in an increasingly 
                complex threat environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-highlight" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the world's most trusted defense technology partner, recognized 
                for our innovation, reliability, and unwavering commitment to our 
                clients' missions. We envision a world where nations can protect their 
                citizens with the most advanced systems available.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            badge="Core Values"
            title="What Guides Us"
            subtitle="The principles that define our approach to every mission"
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Why Choose Us"
            title="The AegisTech Advantage"
            subtitle="What makes us the preferred partner for defense organizations worldwide"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
