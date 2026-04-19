import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from './Container';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all"
    >
      <Container className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Animated Waveform Logo */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#00ff88]/20 to-[#00e1ff]/20 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.6)] transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                d="M3 12h3l3 -8l5 16l3 -8h4" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              />
              <defs>
                <linearGradient id="paint0_linear" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00ff88" />
                  <stop offset="1" stopColor="#00e1ff" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <span className="text-xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-[0.2em] uppercase">
            AIVRA
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="relative group hover:text-white transition-colors duration-300">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-aivra-neon-green to-aivra-neon-blue group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#product" className="relative group hover:text-white transition-colors duration-300">
            Product
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-aivra-neon-green to-aivra-neon-blue group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" className="relative group hover:text-white transition-colors duration-300">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-aivra-neon-green to-aivra-neon-blue group-hover:w-full transition-all duration-300" />
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" className="text-sm px-6 py-2.5">
            Start Tracking
          </Button>
        </div>
      </Container>
    </motion.header>
  );
}
