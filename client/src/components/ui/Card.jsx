import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Card({ 
  children, 
  className, 
  ...props 
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("glass-card p-6 relative overflow-hidden group", className)}
      {...props}
    >
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-aivra-neon-green/0 via-transparent to-aivra-neon-blue/0 group-hover:from-aivra-neon-green/5 group-hover:to-aivra-neon-blue/5 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
