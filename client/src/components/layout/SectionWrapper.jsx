import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function SectionWrapper({ 
  className, 
  children, 
  id,
  delay = 0 
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={cn("py-20 md:py-32", className)}
    >
      {children}
    </motion.section>
  );
}
