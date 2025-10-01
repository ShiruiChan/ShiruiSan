import { motion } from "framer-motion";
export function MorphingGradient() {
  return (
    <motion.div className="absolute -inset-32 opacity-30 blur-3xl" aria-hidden>
      <motion.div
        className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-primary/60 via-fuchsia-500/40 to-cyan-400/40"
        animate={{
          rotate: [0, 30, -15, 0],
          scale: [1, 1.1, 0.95, 1],
          x: [0, 40, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
