import { useEffect, useState } from "react";

// The LoadingScreen component takes an 'onComplete' function as a prop to call when finished
export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;

    // Creates a typing effect character by character
    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));

      // Once the full text is typed out, clear the interval and wait 1 second to trigger completion
      if (index >= fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    // Clean up the timer if the component unmounts mid-animation
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    // Backdrop overlay: Pins the screen to the absolute top layer of the browser window
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-gray-100">
      {/* Monospace terminal-style text container with flashing cursor block */}
      <div className="mb-4 font-mono text-4xl font-bold">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      {/* Outer wrapper for the progress bar */}
      <div className="relative h-[2px] w-[200px] overflow-hidden rounded bg-gray-800">
        {/* Animated neon blue loading strip inside the bar */}
        <div className="animate-loading-bar h-full w-[40%] bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
      </div>
    </div>
  );
};
