import { motion } from 'framer-motion';
import { Target, Award, Eye, Cpu, Crosshair, Radio, Shield } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import CTASection from '@/components/home/CTASection';

const About = () => {
  const coreDomains = [
    {
      icon: Radio,
      title: 'Electronic Warfare, UAS & C-UAS',
      description: 'RAVVIK Global Solutions designs and delivers mission-critical EW and counter-drone systems that enable spectrum awareness, threat detection, identification, and neutralization in complex operational environments. Our solutions support modern battlefield requirements, homeland security, and critical infrastructure protection.',
      details: []
    },
    {
      icon: Crosshair,
      title: 'Firing Range & Shoot House Solutions',
      description: 'We offer indigenously designed firing ranges and shoot houses for military, paramilitary, police, and special forces training.',
      details: [
        'Containerized and permanent firing ranges',
        'Shoot houses and CQB training facilities',
        'Live-fire, dry-fire, and hybrid training environments',
        'Ballistic containment systems and safety infrastructure'
      ]
    },
    {
      icon: Cpu,
      title: 'AI-Enabled Shot Detection & Training Software',
      description: 'Advanced AI-powered software platforms that enhance training effectiveness and operational readiness.',
      details: [
        'Acoustic and sensor-based shot detection and localization',
        'Real-time hit/miss analysis and shooter performance metrics',
        'After-Action Review (AAR) and data-driven feedback',
        'Scenario-based training evaluation and progression tracking'
      ]
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
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent/20 text-accent mb-4">
              About Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              RAVVIK Global Solutions
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Pioneering indigenous design, development, and integration of advanced defence and security systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              badge="Overview"
              title="Building Self-Reliant Defence Capabilities"
              centered={false}
            />

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                RAVVIK Global Solutions is a defence deep-technology company focused on the indigenous design, development,
                and integration of advanced defence and security systems. Our core expertise lies in Electronic Warfare (EW),
                Unmanned Aerial Systems (UAS), Counter-Unmanned Aerial Systems (C-UAS), and next-generation firing range
                and tactical training solutions for the modernization of armed forces and security agencies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Aligned with the Government of India’s Make in India and Atmanirbhar Bharat initiatives,
                RAVVIK Global Solutions is committed to building self-reliant, secure, and future-ready defence capabilities
                through indigenous innovation, local manufacturing, and ownership of critical intellectual property.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
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
                To empower armed forces and security agencies with indigenous, technologically advanced EW,
                C-UAS, and tactical training solutions, enhancing operational readiness, survivability,
                and decision-making superiority.
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
                To become a globally competitive Indian defence technology company, recognized for innovation,
                reliability, and meaningful contribution to national security and force modernization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Domains */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Expertise"
            title="Core Domains"
            subtitle="Delivering excellence across critical defence verticals"
          />

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreDomains.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                {item.details.length > 0 && (
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4 mt-auto">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indigenous Design & Experience */}
      <section className="py-24 bg-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Indigenous Design */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Indigenous Design & Commitment</h2>
              </div>
              <p className="text-white/70 mb-6">
                RAVVIK Global Solutions places strong emphasis on self-reliance and local ecosystem development:
              </p>
              <ul className="space-y-4">
                {[
                  "Indigenous design, development, and system integration",
                  "Local manufacturing and supply-chain development",
                  "Minimal dependence on foreign components for critical subsystems",
                  "Compliance with Indian defence procurement policies, GSQRs, PSQRs, and RFP requirements",
                  "Collaboration with Indian MSMEs, DPSUs, and academic institutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-highlight/20 rounded-lg">
                  <Shield className="w-6 h-6 text-highlight" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Experience & Understanding</h2>
              </div>
              <p className="text-white/70 mb-6">
                With extensive experience across defence and security programs, we possess in-depth understanding of:
              </p>
              <ul className="space-y-4">
                {[
                  "Government tendering and procurement processes",
                  "User trials, evaluations, and acceptance procedures",
                  "Customization as per operational feedback",
                  "Lifecycle support, upgrades, and long-term sustainment",
                  "Solutions engineered for operational realities and future scalability"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
