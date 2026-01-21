import { useState } from 'react';
import { motion } from 'framer-motion';
import { Satellite, Radar, Shield, Target, Radio, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DefenseNode {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  position: { x: number; y: number };
  color: string;
}

const nodes: DefenseNode[] = [
  {
    id: 'satellite',
    icon: Satellite,
    label: 'ISR Satellite',
    description: 'High-resolution surveillance and global monitoring from space',
    position: { x: 50, y: 8 },
    color: 'accent',
  },
  {
    id: 'radar',
    icon: Radar,
    label: 'Ground Radar',
    description: 'Early warning and target tracking system with 360° coverage',
    position: { x: 15, y: 45 },
    color: 'military-400',
  },
  {
    id: 'drone',
    icon: Target,
    label: 'UAV / Aircraft',
    description: 'Unmanned aerial systems for reconnaissance and strike missions',
    position: { x: 50, y: 40 },
    color: 'highlight',
  },
  {
    id: 'command',
    icon: Cpu,
    label: 'Command Center',
    description: 'C4IS unified control platform for joint force operations',
    position: { x: 85, y: 45 },
    color: 'accent',
  },
  {
    id: 'defense',
    icon: Shield,
    label: 'Air Defense',
    description: 'Integrated air defense missile system for area protection',
    position: { x: 30, y: 78 },
    color: 'military-400',
  },
  {
    id: 'comms',
    icon: Radio,
    label: 'Communications',
    description: 'Secure tactical communications network with encryption',
    position: { x: 70, y: 78 },
    color: 'highlight',
  },
];

const connections = [
  { from: 'satellite', to: 'command' },
  { from: 'satellite', to: 'drone' },
  { from: 'radar', to: 'command' },
  { from: 'radar', to: 'defense' },
  { from: 'drone', to: 'command' },
  { from: 'command', to: 'defense' },
  { from: 'command', to: 'comms' },
  { from: 'comms', to: 'defense' },
];

const DefenseSystemVisualization = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getNodePosition = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? node.position : { x: 0, y: 0 };
  };

  const getColorClass = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; shadow: string }> = {
      'accent': { 
        bg: 'bg-accent', 
        border: 'border-accent', 
        shadow: 'shadow-[0_0_30px_rgba(46,139,87,0.5)]' 
      },
      'military-400': { 
        bg: 'bg-military-400', 
        border: 'border-military-400', 
        shadow: 'shadow-[0_0_30px_rgba(46,139,87,0.5)]' 
      },
      'highlight': { 
        bg: 'bg-highlight', 
        border: 'border-highlight', 
        shadow: 'shadow-[0_0_30px_rgba(212,175,55,0.5)]' 
      },
    };
    return colorMap[color] || colorMap['accent'];
  };

  return (
    <section className="py-20 bg-navy-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent/20 text-accent mb-4">
            Integrated Defense
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Connected Defense Ecosystem
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how our systems work together to provide comprehensive situational awareness and protection
          </p>
        </motion.div>

        {/* Interactive Visualization */}
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] max-w-5xl mx-auto">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(146, 55%, 36%)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(146, 55%, 36%)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {connections.map((conn, i) => {
              const fromPos = getNodePosition(conn.from);
              const toPos = getNodePosition(conn.to);
              const isActive = activeNode === conn.from || activeNode === conn.to;
              
              return (
                <motion.line
                  key={i}
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  stroke="url(#lineGradient)"
                  strokeWidth={isActive ? "0.5" : "0.3"}
                  className="signal-line"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: 1,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const colors = getColorClass(node.color);
            const isActive = activeNode === node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Pulse Ring */}
                <div className={cn(
                  'absolute inset-0 rounded-full animate-ping',
                  colors.bg,
                  'opacity-20'
                )} style={{ animationDuration: '2s' }} />
                
                {/* Node Circle */}
                <motion.div
                  className={cn(
                    'relative w-14 h-14 md:w-20 md:h-20 rounded-full cursor-pointer',
                    'flex items-center justify-center',
                    'border-2 transition-all duration-300',
                    colors.border,
                    isActive ? colors.shadow : '',
                    'bg-navy-600'
                  )}
                  whileHover={{ scale: 1.15 }}
                  animate={{ 
                    scale: isActive ? 1.1 : 1,
                  }}
                >
                  <div className={cn(
                    'absolute inset-1 rounded-full',
                    colors.bg,
                    'opacity-20'
                  )} />
                  <Icon className={cn(
                    'w-6 h-6 md:w-8 md:h-8 relative z-10',
                    node.color === 'accent' && 'text-accent',
                    node.color === 'military-400' && 'text-military-400',
                    node.color === 'highlight' && 'text-highlight',
                  )} />
                </motion.div>

                {/* Label */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-white text-xs md:text-sm font-medium">{node.label}</span>
                </div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                  }}
                  className={cn(
                    'absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2',
                    'bg-white rounded-lg shadow-xl p-4 w-64',
                    'pointer-events-none z-20'
                  )}
                >
                  <h4 className="font-heading font-semibold text-navy-600 mb-1">{node.label}</h4>
                  <p className="text-sm text-muted-foreground">{node.description}</p>
                  <div className={cn(
                    'absolute -bottom-2 left-1/2 transform -translate-x-1/2',
                    'w-4 h-4 bg-white rotate-45'
                  )} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {[
            { color: 'bg-accent', label: 'Intelligence & Surveillance' },
            { color: 'bg-military-400', label: 'Defense Systems' },
            { color: 'bg-highlight', label: 'Communications' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={cn('w-3 h-3 rounded-full', item.color)} />
              <span className="text-white/70 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefenseSystemVisualization;
