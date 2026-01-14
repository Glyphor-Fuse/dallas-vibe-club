import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, className = '', delay = 0.25, width = '100%' }: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ width, position: 'relative' }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay, ease: [0.165, 0.84, 0.44, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
