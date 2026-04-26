import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Calculate circle progress (0 to 360 degrees)
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        {/* Circular Progress */}
        <svg className="w-64 h-64 -rotate-90" viewBox="0 0 250 250">
          {/* Background circle */}
          <circle
            cx="125"
            cy="125"
            r="120"
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
          />

          {/* Progress circle */}
          <motion.circle
            cx="125"
            cy="125"
            r="120"
            stroke="#404040"
            strokeWidth="1"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.3, ease: "linear" }}
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl tracking-[0.3em] text-gray-500 font-light mb-2">
              WELCOME
            </h1>
            <div className="text-sm text-gray-600 tracking-wider">
              {progress}%
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
