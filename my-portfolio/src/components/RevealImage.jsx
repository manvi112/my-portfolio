import { motion } from "framer-motion";

export function RevealImage({ src, alt, delay = 0 }) {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "14px",
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ y: -120, rotate: -2, opacity: 0 }}

        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          width: "100%",
          maxWidth: "400px",
          display: "block",
        }}
      />
    </div>
  );
}

