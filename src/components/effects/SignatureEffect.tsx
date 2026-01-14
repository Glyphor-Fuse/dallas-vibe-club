import React from 'react';

interface SignatureEffectProps {
  effect: 'noise' | 'glass' | 'gradient-blob';
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect, className = '' }) => {
  if (effect === 'noise') {
    return (
      <div 
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] pointer-events-none z-50 opacity-[0.05] ${className}`}
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
    );
  }

  return null;
};
