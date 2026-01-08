import { motion } from "framer-motion";

export function RevealText({ children, delay = 0 }) {
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1.7,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
