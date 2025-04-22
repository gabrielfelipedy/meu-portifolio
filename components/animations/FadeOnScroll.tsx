'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type FadeOnScrollProps = {
  children: ReactNode;
  maxScroll?: number; // Optional: how far to scroll before it's fully faded
};

export default function FadeOnScroll({ children, maxScroll = 300 }: FadeOnScrollProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = scrollY < maxScroll ? 1 - scrollY / maxScroll : 0;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity }}
      transition={{ duration: 0.1, ease: 'linear' }}
    >
      {children}
    </motion.div>
  );
}
