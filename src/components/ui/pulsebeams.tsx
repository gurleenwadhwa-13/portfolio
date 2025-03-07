"use client"

import type React from "react"
import { motion } from "framer-motion"

// Gradient animation variants
const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
}

const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
}

const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
}

const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
}

const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%",
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
}

const grad6 = {
  initial: {
    x1: "100%",
    x2: "100%",
    y1: "0%",
    y2: "20%",
  },
  animate: {
    x1: ["100%", "0%", "-50%"],
    x2: ["100%", "0%", "-30%"],
    y1: ["0%", "50%", "100%"],
    y2: ["20%", "70%", "120%"],
  },
}

const grad7 = {
  initial: {
    x1: "50%",
    x2: "70%",
    y1: "0%",
    y2: "0%",
  },
  animate: {
    x1: ["50%", "30%", "-20%"],
    x2: ["70%", "50%", "0%"],
    y1: ["0%", "50%", "80%"],
    y2: ["0%", "30%", "60%"],
  },
}

const grad8 = {
  initial: {
    x1: "100%",
    x2: "80%",
    y1: "50%",
    y2: "70%",
  },
  animate: {
    x1: ["100%", "150%", "200%"],
    x2: ["80%", "130%", "180%"],
    y1: ["50%", "30%", "0%"],
    y2: ["70%", "50%", "20%"],
  },
}

const grad9 = {
  initial: {
    x1: "0%",
    x2: "20%",
    y1: "30%",
    y2: "50%",
  },
  animate: {
    x1: ["0%", "-50%", "-100%"],
    x2: ["20%", "-30%", "-80%"],
    y1: ["30%", "50%", "70%"],
    y2: ["50%", "70%", "90%"],
  },
}

const grad10 = {
  initial: {
    x1: "70%",
    x2: "90%",
    y1: "100%",
    y2: "80%",
  },
  animate: {
    x1: ["70%", "50%", "30%"],
    x2: ["90%", "70%", "50%"],
    y1: ["100%", "120%", "150%"],
    y2: ["80%", "100%", "130%"],
  },
}

interface PulseBeamsProps {
  children: React.ReactNode
  className?: string
}

export const PulseBeams: React.FC<PulseBeamsProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full flex items-center justify-center overflow-hidden ${className}`}>
      <div className="relative z-10 w-full max-w-3xl">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>

      {/* Add subtle floating particles */}
      <Particles />
    </div>
  )
}

// Floating particles component
const Particles = () => {
  return (
    <div className="absolute inset-0 z-10 opacity-70">
      {[...Array(150)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400 dark:bg-blue-500"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [10, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: Math.random() * 6 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      {[...Array(550)].map((_, i) => (
        <motion.div
          key={i + 25}
          className="absolute rounded-full bg-purple-400 dark:bg-white"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 6 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      {[...Array(550)].map((_, i) => (
        <motion.div
          key={i + 45}
          className="absolute rounded-full bg-cyan-300 dark:bg-yellow-400"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export const SVGs = () => {
  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0 opacity-70"
    >
      <path
        d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="var(--slate-800, rgba(30, 41, 65, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M380 168V17C380 11.4772 384.477 7 390 7H414"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M300 50H500C505.523 50 510 54.4772 510 60V150"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M700 300H800C805.523 300 810 304.477 810 310V400"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M100 100V200C100 205.523 104.477 210 110 210H200"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M50 350H150C155.523 350 160 345.523 160 340V250"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path
        d="M650 100V180C650 185.523 645.523 190 640 190H550"
        stroke="var(--slate-800, rgba(30, 41, 59, 0.5))"
        strokeWidth="1.5"
      />
      <path d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5" stroke="url(#grad1)" strokeWidth="2" />
      <path d="M568 200H841C846.523 200 851 195.523 851 190V40" stroke="url(#grad2)" strokeWidth="2" />
      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
        strokeWidth="2"
      />
      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="url(#grad4)"
        strokeWidth="2"
      />
      <path d="M380 168V17C380 11.4772 384.477 7 390 7H414" stroke="url(#grad5)" strokeWidth="2" />
      <path d="M300 50H500C505.523 50 510 54.4772 510 60V150" stroke="url(#grad6)" strokeWidth="2" />
      <path d="M700 300H800C805.523 300 810 304.477 810 310V400" stroke="url(#grad7)" strokeWidth="2" />
      <path d="M100 100V200C100 205.523 104.477 210 110 210H200" stroke="url(#grad8)" strokeWidth="2" />
      <path d="M50 350H150C155.523 350 160 345.523 160 340V250" stroke="url(#grad9)" strokeWidth="2" />
      <path d="M650 100V180C650 185.523 645.523 190 640 190H550" stroke="url(#grad10)" strokeWidth="2" />

      <defs>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad6}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1.5,
            delay: Math.random() * 2,
          }}
          id="grad6"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad7}
          animate="animate"
          initial="initial"
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="grad7"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad8}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1.8,
            delay: Math.random() * 2,
          }}
          id="grad8"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad9}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1.2,
            delay: Math.random() * 2,
          }}
          id="grad9"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad10}
          animate="animate"
          initial="initial"
          transition={{
            duration: 3.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 0.8,
            delay: Math.random() * 2,
          }}
          id="grad10"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx="851"
        cy="34"
        r="6.5"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="770"
        cy="427"
        r="6.5"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="142"
        cy="427"
        r="6.5"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="6.5"
        cy="398.5"
        r="6"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="420.5"
        cy="6.5"
        r="6"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="510"
        cy="150"
        r="6"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="810"
        cy="400"
        r="6"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="200"
        cy="210"
        r="6"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="160"
        cy="250"
        r="6"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
      <circle
        cx="550"
        cy="190"
        r="6"
        fill="var(--slate-700, rgba(51, 65, 85, 0.7))"
        stroke="var(--slate-600, rgba(71, 85, 105, 0.6))"
      />
    </svg>
  )
}

const GradientColors = () => {
  return (
    <>
      <stop className="hidden dark:block" stopColor="#60A5FA" stopOpacity="0"></stop>
      <stop className="hidden dark:block" stopColor="#60A5FA"></stop>
      <stop className="hidden dark:block" offset="0.325" stopColor="#7C3AED"></stop>
      <stop className="hidden dark:block" offset="1" stopColor="#C084FC" stopOpacity="0"></stop>
      <stop className="block dark:hidden" stopColor="#3B82F6" stopOpacity="0"></stop>
      <stop className="block dark:hidden" stopColor="#3B82F6"></stop>
      <stop className="block dark:hidden" offset="0.325" stopColor="#6366F1"></stop>
      <stop className="block dark:hidden" offset="1" stopColor="#8B5CF6" stopOpacity="0"></stop>
    </>
  )
}

