import "./animations.css";
import { useState, useEffect } from "react";

const FadeIn = ({ children, isHidden }) => {

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isHidden && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isHidden, hasAnimated]);

  return (
    <div
      // hidden={!isHidden}
      className={`transition-opacity
      ${
        !isHidden && !hasAnimated ? 'animate-fadeIn animation-delay-500' : 'opacity-100'
      } ${hasAnimated ? 'opacity-100' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default FadeIn;
