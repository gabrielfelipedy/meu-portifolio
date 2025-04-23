'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type FadeOnScrollProps = {
  children: ReactNode;
  maxScrollRatio?: number; // e.g. 0.5 means 50% of the viewport height
};

export default function FadeOnScroll({ children, maxScrollRatio = 0.5 }: FadeOnScrollProps) {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);

    updateViewportHeight(); // set initially
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxScroll = viewportHeight * maxScrollRatio;
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
