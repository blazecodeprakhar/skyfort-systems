import { cn } from '@/lib/utils';
import SectionTitle from '@/components/common/SectionTitle';

const logos = [
    { name: 'Ministry of Defence', src: '/companys logo/Ministry_of_Defence.png' },
    { name: 'Indian Air Force', src: '/companys logo/Badge_of_the_Indian_Air_Force.png' },
    { name: 'Indian Army', src: '/companys logo/Indian_Army_Insignia_circular.png' },
    { name: 'DRDO', src: '/companys logo/Defence_Research_and_Development_Organisation.svg.png' },
    { name: 'BEL', src: '/companys logo/Bharat_Electronics_Limited_Logo.png' },
    { name: 'Indian Armed Forces', src: '/companys logo/Flag_of_Indian_Armed_Forces.svg.png' },
    { name: 'Partner', src: '/companys logo/19c1d473b34355c7b463ba0a2096a060.png' },
];

const LogoMarquee = () => {
    return (
        <section className="py-20 bg-white border-t border-b border-border/50 overflow-hidden relative">
            {/* Premium Gradient Overlay/Background effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="container mx-auto px-4 mb-12 relative z-10">
                <SectionTitle
                    badge="Partnerships"
                    title="Our Distinguished Clients"
                    subtitle="Trusted by the nation's most critical defense and security organizations"
                    centered
                />
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden z-10">
                <div
                    className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row [--duration:35s]"
                >
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] min-w-full items-center">
                        {logos.map((logo, index) => (
                            <div key={index} className="relative h-24 w-48 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                {/* Logo Image - Full Color & Visible */}
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-h-full max-w-full object-contain filter drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
                                    style={{ opacity: 1 }}
                                />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {logos.map((logo, index) => (
                            <div key={`dup-${index}`} className="relative h-24 w-48 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-h-full max-w-full object-contain filter drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
                                    style={{ opacity: 1 }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for wider screens */}
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] min-w-full items-center" aria-hidden="true">
                        {logos.map((logo, index) => (
                            <div key={`dup2-${index}`} className="relative h-24 w-48 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-h-full max-w-full object-contain filter drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
                                    style={{ opacity: 1 }}
                                />
                            </div>
                        ))}
                        {logos.map((logo, index) => (
                            <div key={`dup3-${index}`} className="relative h-24 w-48 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-h-full max-w-full object-contain filter drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
                                    style={{ opacity: 1 }}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Gradients for smooth fade in/out - Updated to White/Transparent for clean look */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </section>
    );
};

export default LogoMarquee;
