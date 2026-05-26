import { motion } from 'motion/react';

export default function CelestialBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radiant light divine background */}
      <div className="absolute inset-0 bg-radial-[at_top] from-[#fffdf5] via-[#faf6ea] to-[#f4edd8]" />

      {/* Sun/Aura Light Glow Overlays */}
      <div className="absolute top-[-10%] left-[10%] w-[60%] h-[60%] rounded-full bg-amber-200/40 blur-[120px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/30 blur-[130px]" />
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-100/40 blur-[140px]" />

      {/* Sacred Astro Ring Vector */}
      <div className="absolute top-[-150px] right-[-150px] md:top-[-250px] md:right-[-250px] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full border border-amber-600/15 flex items-center justify-center">
        <div className="w-[85%] h-[85%] rounded-full border border-dashed border-amber-500/20 flex items-center justify-center animate-spin-slow">
          {/* Inner details to represent zodiac wheels */}
          <div className="w-[70%] h-[70%] rounded-full border border-amber-500/10 flex items-center justify-center">
            <div className="w-[50%] h-[50%] rounded-full border border-dashed border-orange-500/10" />
          </div>
        </div>
      </div>

      {/* Radiant Golden Blessings floating particles */}
      <div className="absolute inset-0 opacity-60">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.7 + 0.4,
            }}
            animate={{
              opacity: [0.3, 0.9, 0.3],
              y: [0, -15, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Soft celestial sparkles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-500 font-serif select-none"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              fontSize: `${Math.random() * 8 + 8}px`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </div>
  );
}
