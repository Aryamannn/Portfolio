// animations.js
import { motion } from 'framer-motion';
import {
    fadeInUp,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight,
    MotionHeading,
    MotionCard,
    MotionSection,
    profileImageAnimation,
    socialIconAnimation
  } from './animations';

// Fade in animation with y movement
export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stagger children animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale animation for cards
export const scaleUp = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2
    }
  }
};

// Slide in from left
export const slideInLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Slide in from right
export const slideInRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Animated components
export const MotionHeading = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export const MotionCard = ({ children, index = 0 }) => (
  <motion.div
    variants={scaleUp}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    custom={index}
  >
    {children}
  </motion.div>
);

export const MotionSection = ({ children }) => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

// Navigation item animation
export const navItemAnimation = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3 }
};

// Social icons animation
export const socialIconAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  hover: { 
    scale: 1.2,
    rotate: 12,
    transition: { duration: 0.2 }
  }
};

// Profile image animation
export const profileImageAnimation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
};

