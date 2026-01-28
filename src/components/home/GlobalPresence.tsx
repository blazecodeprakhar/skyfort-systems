import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';

const regions = [
  { name: 'Middle East', countries: 12, projects: 28 },
  { name: 'Asia Pacific', countries: 10, projects: 22 },
  { name: 'Africa', countries: 8, projects: 15 },
];

const GlobalPresence = () => {
  return (
    <section className="py-24 bg-navy-600 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          badge="Global Presence"
          title="Operational Worldwide"
          subtitle="Supporting defense and security operations across key strategic regions"
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-3">
                    {region.name}
                  </h3>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold text-accent">{region.countries}</div>
                      <div className="text-white/50 text-sm">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-highlight">{region.projects}</div>
                      <div className="text-white/50 text-sm">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {[
            { value: '10+', label: 'Partner Countries' },
            { value: '15+', label: 'Active Contracts' },
            { value: '24/7', label: 'Global Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;
