import { motion } from "framer-motion";

export function HoverCard({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
