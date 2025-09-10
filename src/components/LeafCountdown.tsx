import React, { useState, useEffect, useCallback } from "react";

const targetDate = new Date("2026-08-01T11:00:00");

type Leaf = {
  id: number;
  style: React.CSSProperties;
};

const getTimeLeft = () => {
  const diff = targetDate.getTime() - new Date().getTime();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const LeafCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  const addLeaf = useCallback(() => {
    const newLeaf: Leaf = {
      id: Date.now() + Math.random(),
      style: {
        left: `${Math.random() * 80 + 10}%`,
        animationDuration: `${Math.random() * 3 + 4}s`,
        animationName: `fall, sway-${Math.ceil(Math.random() * 2)}`,
        transform: `scale(${Math.random() * 0.5 + 0.7}) rotate(${
          Math.random() * 360
        }deg)`,
        opacity: Math.random() * 0.7 + 0.3,
      },
    };
    setLeaves((currentLeaves) => [...currentLeaves, newLeaf]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = getTimeLeft();
      if (newTimeLeft) {
        if (timeLeft && timeLeft.seconds !== newTimeLeft.seconds) {
          addLeaf();
        }
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    const cleanupTimer = setInterval(() => {
      setLeaves((currentLeaves) => currentLeaves.slice(-50));
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(cleanupTimer);
    };
  }, [timeLeft, addLeaf]);

  if (!timeLeft) {
    return (
      <div className="text-2xl text-green-800 font-semibold">
        Nadešel náš den!
      </div>
    );
  }

  const renderUnit = (value: number, label: string) => (
    <div className="text-center w-24 h-24 bg-beige-100/50 backdrop-blur-sm rounded-full flex flex-col justify-center items-center shadow-lg border border-beige-200/50">
      <div className="text-4xl font-bold text-green-800 font-serif">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase text-green-700 tracking-wider mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden z-0 pointer-events-none">
        {leaves.map((leaf) => (
          <div key={leaf.id} className="leaf" style={leaf.style}>
            🍃
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {renderUnit(timeLeft.days, "Dní")}
        {renderUnit(timeLeft.hours, "Hodin")}
        {renderUnit(timeLeft.minutes, "Minut")}
        {renderUnit(timeLeft.seconds, "Sekund")}
      </div>

      <div className="mt-8 text-5xl opacity-80 select-none">🍂</div>
    </div>
  );
};

export default LeafCountdown;
