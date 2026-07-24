import { useEffect, useState } from "react";

const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

// Generate unique properties for each star
const generateStars = (count) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = getRandomInRange(1, 3.5);
    return {
      id: i,
      size,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        top: `${getRandomInRange(0, 100)}vh`, //Random vertical start
        left: `${getRandomInRange(0, 100)}vw`, //Random horizontal position
        animationDelay: `${getRandomInRange(0, 8)}s`, //Random animation start
        animationDuration: `${getRandomInRange(30, 60)}s`, //Random rise speed
        opacity: getRandomInRange(0.4, 0.9),
      },
    };
  });
};

export const SpaceBackground = ({ scrollProgress }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(70));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        /* Outer wrapper controls the subtle downward scroll shift */
        <div
          key={star.id}
          className="absolute transform-gpu transition-transform duration-100 ease-out will-change-transform"
          style={{
            top: star.style.top,
            left: star.style.left,
            transform: `translateY(${-scrollProgress * (star.size * 30)}px)`,
          }}
        >
          {/* Inner div controls the continuous upward float animation */}
          <div
            className="animate-spaceRise transform-gpu rounded-full bg-white will-change-transform"
            style={{
              width: star.style.width,
              height: star.style.height,
              opacity: star.style.opacity,
              animationDelay: star.style.animationDelay,
              animationDuration: star.style.animationDuration,
            }}
          />
        </div>
      ))}
    </div>
  );
};
