import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function FinalCta() {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8 glass-card border border-white/10 p-12 md:p-24 rounded-[3rem] relative overflow-hidden group">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-aivra-neon-green/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.15)_0%,transparent_50%)] z-0 pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white relative z-10 tracking-tight leading-tight">
            Stop guessing.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aivra-neon-green to-aivra-neon-blue">Start understanding.</span>
          </h2>
          
          <p className="text-xl text-gray-400 relative z-10 max-w-xl mx-auto">
            Experience the absolute clarity of knowing exactly what fuels your mind and what drains it.
          </p>

          <div className="pt-10 relative z-10 flex flex-col items-center gap-4">
            <Button variant="primary" className="text-xl px-12 py-5 gap-3 shadow-[0_0_40px_rgba(0,255,136,0.5)]">
              Start Your Free Trial <ArrowRight className="w-6 h-6" />
            </Button>
            <p className="text-xs text-gray-500 font-medium">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
