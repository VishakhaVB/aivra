import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-[#00ff88] text-black font-semibold hover:bg-[#00e676] shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_35px_rgba(0,255,136,0.5)] border border-transparent",
    secondary: "bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.08] backdrop-blur-md",
    glow: "bg-gradient-to-r from-aivra-neon-green to-aivra-neon-blue text-black font-bold shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:shadow-[0_0_50px_rgba(0,225,255,0.7)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
