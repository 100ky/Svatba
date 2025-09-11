import { useInView } from "react-intersection-observer";
import React from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Zpoždění v milisekundách
};

const AnimateOnScroll = ({
  children,
  className,
  delay = 0,
}: AnimateOnScrollProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Spustit animaci pouze jednou
    threshold: 0.1, // Spustit, když je vidět 10 % prvku
  });

  return (
    <div
      ref={ref}
      // Aplikujeme animaci, jen když je prvek vidět. Jinak je neviditelný.
      className={`${className} ${inView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
