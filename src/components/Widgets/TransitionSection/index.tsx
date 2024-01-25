import React, { useEffect, useState } from "react";

interface TransitionSectionProps {
  children: React.ReactNode;
  className?:string;
}

 const TransitionSection: React.FC<TransitionSectionProps> = ({ className,children }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsContentVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const transitionStyles = {
    transition: "transform 1s ease, opacity 0.6s ease",
    transitionDelay: "0.1s",
    transform: isContentVisible ? "translatex(0)" : "translatex(100%)",
    opacity: isContentVisible ? 1 : 0,
  };

  return (
    <section
      style={transitionStyles}
      className={`transition-transform transform ${className}`}
    >
      {children}
    </section>
  );
};
export default TransitionSection;