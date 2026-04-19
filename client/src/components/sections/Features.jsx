import { motion } from 'framer-motion';
import { Activity, Brain, Lightbulb, TrendingUp } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';

const features = [
  {
    title: "Energy Score",
    description: "Real-time assessment of your daily capacity.",
    icon: Activity,
    color: "text-aivra-neon-green",
    bg: "bg-aivra-neon-green/10",
    border: "border-aivra-neon-green/20"
  },
  {
    title: "Smart Insights",
    description: "Discover the hidden patterns in your routine.",
    icon: Lightbulb,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    title: "Predictions",
    description: "Forecasts your energy based on upcoming events.",
    icon: TrendingUp,
    color: "text-aivra-neon-blue",
    bg: "bg-aivra-neon-blue/10",
    border: "border-aivra-neon-blue/20"
  },
  {
    title: "Behavior Learning",
    description: "Continuously adapts to your unique lifestyle.",
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export function Features() {
  return (
    <SectionWrapper id="features" className="bg-black/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.03)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Features</h2>
          <p className="text-gray-400 text-lg">Everything you need to master your energy.</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants} className="h-full">
              <Card className="flex flex-col items-start p-6 lg:p-8 h-full">
                <div className={`p-4 rounded-2xl mb-6 ${feature.bg} ${feature.border} border`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
