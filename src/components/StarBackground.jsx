import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {stars.map((star) => (
      <div
        key={star.id}
        className="absolute rounded-full animate-pulse-subtle"
        style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          left: `${star.x}%`,
          top: `${star.y}%`,
          opacity: star.opacity,
          backgroundColor: "#ffffff",
          animationDuration: `${star.animationDuration}s`,
          filter: "blur(0.6px)",
          boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.8)",
        }}
      />
    ))}

    {meteors.map((meteor) => (
      <div
        key={meteor.id}
        className="absolute rounded-full animate-meteor"
        style={{
          width: `${meteor.size * 50}px`,
          height: `${meteor.size * 2}px`,
          left: `${meteor.x}%`,
          top: `${meteor.y}%`,
          backgroundColor: "#a8d0ff",
          opacity: 0.9,
          animationDelay: `${meteor.delay}s`,
          animationDuration: `${meteor.animationDuration}s`,
          transform: "rotate(-45deg)",
          boxShadow: "0 0 12px rgba(168, 208, 255, 0.7)",
          filter: "blur(0.5px)",
        }}
      />
    ))}
  </div>
);

};
