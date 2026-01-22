import React, { useEffect, useState } from "react";
import "./animatedWord.css";

const AnimatedWord = ({ text, delay = 0 }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="animated-word">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`animated-letter ${animate ? "animate" : ""}`}
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedWord;
