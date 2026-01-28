import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';

const clients = [
    { name: 'MOD', fullName: 'Ministry of Defence' },
    { name: 'IAF', fullName: 'Indian Air Force' },
    { name: 'IA', fullName: 'Indian Army' },
    { name: 'DRDO', fullName: 'Defence Research & Development Organisation' },
    { name: 'BEL', fullName: 'Bharat Electronics Limited' },
    { name: 'Para MF', fullName: 'Para Military Forces' },
    { name: 'State Police', fullName: 'Tamil Nadu State Police' },
];

const ClientsSection = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    badge="Partnerships"
                    title="Our Distinguished Clients"
                    subtitle="Trusted by the nation's most critical defense and security organizations"
                    centered
                />

                <div className="mt-12 flex flex-wrap justify-center gap-6 lg:gap-8">
                    {clients.map((client, i) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative flex flex-col items-center justify-center p-8 bg-card border border-border rounded-xl hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-40 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-24px)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                            <h3 className="relative text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                {client.name}
                            </h3>

                            <p className="relative mt-2 text-xs md:text-sm text-center text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                {client.fullName}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
