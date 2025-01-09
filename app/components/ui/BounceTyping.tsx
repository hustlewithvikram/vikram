import React from "react";
import { motion } from "framer-motion";

interface StretchTypingProps {
  text: string;
  delay?: number;
}

const BouncyTyping = ({ text, delay = 0 }: StretchTypingProps) => {
  const letters = text.split("");

  const stretchTransition = {
    type: "spring",
    stiffness: 0,
    mass: 2,
  };

  return (
    <div
      style={{
        display: "flex",
        fontSize: "2rem",
        fontWeight: "bold",
        whiteSpace: "pre",
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{width: 0, opacity: 0 }}
          animate={{width: "fit-content", opacity: 1 }}
          transition={{ ...stretchTransition, delay: (delay / 1000) + index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default BouncyTyping;
