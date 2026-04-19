import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Container } from '../layout/Container';

export function WhyDifferent() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Most apps <br className="hidden md:block"/>
              <span className="text-gray-500">track data.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aivra-neon-green to-aivra-neon-blue drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                Aivra explains
              </span><br />
              your energy.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-aivra-neon-green/50 pl-6 rounded-sm">
              We go beyond step counts and sleep hours. Aivra connects the dots, telling you exactly <strong className="text-white font-medium">*why*</strong> today was exhausting and what to tweak for tomorrow.
            </p>
          </div>
          
          {/* Animated Blob Graphic replacing static SVG */}
          <div className="order-1 lg:order-2 relative aspect-square max-w-lg mx-auto w-full flex items-center justify-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 90, 0],
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-8 bg-gradient-to-tr from-aivra-neon-green/30 to-aivra-neon-blue/30 blur-[60px]"
            />
            
            <div className="relative z-10 glass-card p-8 rounded-[2.5rem] w-4/5 aspect-square border-white/20 flex flex-col justify-between shadow-[0_0_40px_rgba(0,255,136,0.1)]">
               <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-aivra-neon-blue animate-pulse" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-aivra-neon-blue bg-aivra-neon-blue/10 px-3 py-1 rounded-full">AI Analysis</span>
               </div>
               
               <div className="space-y-4">
                  <div className="h-4 bg-white/10 rounded-full w-full" />
                  <div className="h-4 bg-white/10 rounded-full w-5/6" />
                  <div className="h-4 bg-white/10 rounded-full w-4/6" />
               </div>
               
               <div className="p-4 bg-aivra-neon-green/10 border border-aivra-neon-green/20 rounded-2xl">
                  <p className="text-sm font-medium text-aivra-neon-green">
                    "Late coffee yesterday disrupted deep sleep by 40%."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
