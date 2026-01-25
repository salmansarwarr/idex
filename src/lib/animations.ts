import { Variants } from "framer-motion";

/**
 * Fade in animation variant
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

/**
 * Slide up animation variant
 */
export const slideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

/**
 * Slide down animation variant
 */
export const slideDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

/**
 * Stagger item animation
 */
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

/**
 * Hover scale animation
 */
export const hoverScale = {
    scale: 1.05,
    transition: {
        duration: 0.2,
        ease: "easeInOut",
    },
};

/**
 * Tap scale animation
 */
export const tapScale = {
    scale: 0.98,
};

/**
 * Page transition variants
 */
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
};

/**
 * Text reveal animation - for character-by-character reveals
 */
export const textRevealContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.2,
        },
    },
};

export const textRevealItem: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        rotateX: -90,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.01, 0.05, 0.95],
        },
    },
};

/**
 * Word-by-word reveal animation
 */
export const wordRevealContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const wordRevealItem: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Scatter animation - elements appear from random positions
 */
export const scatterContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

export const scatterItem: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.3,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
            duration: 0.8,
        },
    },
};

/**
 * Advanced stagger with rotation
 */
export const staggerRotate: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotateY: -90,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, 0.01, 0.05, 0.95],
        },
    },
};

/**
 * Magnetic hover effect
 */
export const magneticHover = {
    scale: 1.1,
    rotate: [0, -5, 5, -5, 0],
    transition: {
        duration: 0.5,
        ease: "easeInOut",
    },
};

/**
 * Pulse animation
 */
export const pulse: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

/**
 * Glow animation
 */
export const glow: Variants = {
    initial: {
        boxShadow: "0 0 0px rgba(139, 0, 0, 0)",
    },
    animate: {
        boxShadow: [
            "0 0 0px rgba(139, 0, 0, 0)",
            "0 0 20px rgba(139, 0, 0, 0.5)",
            "0 0 0px rgba(139, 0, 0, 0)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

/**
 * Float animation
 */
export const float: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

/**
 * Bounce in animation
 */
export const bounceIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.3,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.8,
        },
    },
};

/**
 * Slide and rotate animation
 */
export const slideRotate: Variants = {
    hidden: {
        opacity: 0,
        x: -100,
        rotate: -180,
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
        },
    },
};

/**
 * Advanced stagger container with faster timing
 */
export const fastStaggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};
