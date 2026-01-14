import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'hover' | 'hero';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  onClick
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  if (type === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'hover') {
    return (
      <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={className}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'text-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 20 }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'parallax') {
    return (
      <motion.div style={{ y }} className={className}>
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
