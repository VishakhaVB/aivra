import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Activity, Battery, Zap, BrainCircuit } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function Hero() {
  const headingText = "Know exactly why you feel tired — and fix it in 24 hours".split(" ");
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, 86, { duration: 2.5, ease: "easeOut", delay: 0.8 });
    return controls.stop;
  }, []);

  return (
    <SectionWrapper className="pt-8 pb-12 md:pt-8 md:pb-24 overflow-hidden relative min-h-[calc(100vh-64px)] flex items-center">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep layered radial gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-aivra-neon-green/10 rounded-full blur-[150px] opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-aivra-neon-blue/10 rounded-full blur-[120px] opacity-40 -translate-x-1/4 translate-y-1/4" />
        {/* Subtle moving orb */}
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#00ff88]/5 rounded-full blur-[100px]" 
        />
      </div>      <Container className="relative z-10 w-full mt-4 xl:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-4 lg:gap-6 xl:pl-4"
          >
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] flex flex-wrap gap-x-2 lg:gap-x-4 gap-y-2"
            >
              {headingText.map((word, i) => (
                <motion.span 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
                  }}
                  className={word === "exactly" || word === "fix" || word === "24" ? "text-transparent bg-clip-text bg-gradient-to-r from-aivra-neon-green to-aivra-neon-blue drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
              className="text-base sm:text-lg lg:text-xl text-[#9CA3AF] max-w-lg leading-relaxed font-medium"
            >
              Detect hidden patterns in your sleep, focus, and habits. Stop guessing your energy levels.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button variant="primary" className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 gap-2 w-full sm:w-auto overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
                  Start Tracking <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="secondary" className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto group">
                <span className="group-hover:text-white transition-colors">View Demo</span>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
              className="mt-4 lg:mt-6 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-[#9CA3AF]"
            >
              <div className="flex -space-x-4">
                {[11, 32, 45, 68].map((i) => (
                  <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#161a20] border-2 border-[#0B0F14] flex items-center justify-center overflow-hidden z-10">
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="font-medium tracking-wide">Used by 10,000+ top performers</p>
            </motion.div>
          </motion.div>

          {/* Right Mockup - Live Simulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 5, rotateX: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
            className="relative lg:h-[500px] xl:h-[600px] flex items-center justify-center perspective-[1500px]"
          >
            {/* Main Interactive Card */}
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 glass-card bg-black/40 shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden w-full max-w-sm xl:max-w-md mx-auto z-20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
              
              {/* Card Header */}
              <div className="p-4 lg:p-5 border-b border-white/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00e1ff] p-[2px] shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                    <div className="w-full h-full bg-[#0B0F14] rounded-full overflow-hidden border-2 border-black/50">
                      <img src="https://i.pravatar.cc/100?img=33" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-base font-bold text-white tracking-wide">Aivra Diagnostics</h3>
                    <p className="text-[10px] lg:text-xs text-gray-400 font-medium">Live Feed • <span className="text-aivra-neon-green">Scanning</span></p>
                  </div>
                </div>
                <div className="p-2 lg:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 relative cursor-pointer hover:bg-white/[0.08] transition-colors">
                  <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-aivra-neon-green" />
                  <span className="w-2 h-2 rounded-full bg-aivra-neon-green absolute top-0 right-0 animate-ping opacity-75" />
                  <span className="w-2 h-2 rounded-full bg-aivra-neon-green absolute top-0 right-0 shadow-[0_0_8px_#00ff88]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-8 space-y-6 lg:space-y-8 relative">
                {/* Score Visualization */}
                <div className="flex flex-col items-center justify-center relative">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-aivra-neon-green/20 rounded-full blur-[40px] lg:blur-[60px] pointer-events-none" 
                  />
                  <div className="w-48 h-48 lg:w-56 lg:h-56 relative flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/[0.03]" />
                      <motion.circle 
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 40 }}
                        transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
                        cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" 
                        className="text-aivra-neon-green stroke-current drop-shadow-[0_0_12px_rgba(0,255,136,0.8)]"
                        style={{ strokeDasharray: 283, strokeLinecap: "round" }} 
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <motion.span className="text-5xl lg:text-[5rem] font-black text-white tracking-tighter leading-none">
                        {rounded}
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="text-[10px] lg:text-xs font-bold text-[#0B0F14] uppercase tracking-[0.2em] mt-2 lg:mt-3 bg-aivra-neon-green px-2 lg:px-3 py-1 lg:py-1.5 rounded-full shadow-[0_0_15px_rgba(0,255,136,0.4)]"
                      >
                        Optimal
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Sub-Metrics */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {/* Metric 1 */}
                  <div className="p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2 lg:space-y-3 hover:bg-white/[0.05] transition-all cursor-pointer group">
                    <div className="flex justify-between items-center text-aivra-neon-blue mb-1">
                      <BrainCircuit className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(0,225,255,0.5)]" />
                      <span className="text-[8px] lg:text-[10px] font-bold bg-aivra-neon-blue/20 text-aivra-neon-blue px-2 py-1 rounded tracking-wide uppercase">Peak</span>
                    </div>
                    <div>
                      <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">4h 12m</p>
                      <p className="text-[9px] lg:text-[11px] uppercase tracking-wider text-[#9CA3AF] mt-1 font-semibold">Deep Focus Est.</p>
                    </div>
                  </div>
                  {/* Metric 2 */}
                  <div className="p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2 lg:space-y-3 hover:bg-white/[0.05] transition-all cursor-pointer group relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-20 h-20 lg:w-24 lg:h-24 bg-rose-500/10 rounded-full blur-[20px] pointer-events-none" />
                    <div className="flex justify-between items-center text-rose-400 mb-1 relative z-10">
                      <Zap className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" />
                      <span className="text-[8px] lg:text-[10px] font-bold bg-rose-500/20 text-rose-400 px-2 py-1 rounded tracking-wide uppercase">Watch</span>
                    </div>
                    <div className="relative z-10">
                      <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">4:00 PM</p>
                      <p className="text-[9px] lg:text-[11px] uppercase tracking-wider text-[#9CA3AF] mt-1 font-semibold">Predicted Crash</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* External Floating Card 1: Recovery */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0, y: [-5, 5, -5] }}
              transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
              className="absolute -left-4 lg:-left-8 xl:-left-20 top-[10%] lg:top-[15%] p-3 lg:p-4 rounded-2xl glass-card z-30 hidden sm:block shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-default w-40 lg:w-48 border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-2 lg:gap-3">
                <div className="p-2 lg:p-2.5 rounded-full bg-aivra-neon-blue/10 text-aivra-neon-blue border border-aivra-neon-blue/20">
                   <Activity className="w-3 h-3 lg:w-4 lg:h-4" />
                </div>
                <div className="flex flex-col pt-0.5 lg:pt-1">
                  <p className="text-[10px] lg:text-xs font-bold text-white tracking-wide uppercase">Recovery Optimal</p>
                  <p className="text-[8px] lg:text-[10px] text-gray-400 mt-0.5 lg:mt-1 leading-snug">HRV is +8% above your baseline</p>
                </div>
              </div>
            </motion.div>

            {/* External Floating Card 2: Circadian Sync */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0, y: [5, -5, 5] }}
              transition={{ opacity: { delay: 1.8, duration: 0.5 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
              className="absolute -right-2 lg:-right-6 xl:-right-16 bottom-[10%] lg:bottom-[15%] p-3 lg:p-4 rounded-xl glass-card z-30 hidden sm:block shadow-[0_15px_30px_rgba(0,0,0,0.5)] cursor-default border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="relative flex h-2 w-2 lg:h-3 lg:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aivra-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 lg:h-3 lg:w-3 bg-aivra-neon-green shadow-[0_0_8px_#00ff88]"></span>
                </div>
                <p className="text-[10px] lg:text-xs font-bold text-white uppercase tracking-wide">Sync +12%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
