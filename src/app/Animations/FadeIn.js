import "./animations.css";

const FadeIn = ({ children, isHidden }) => {
  return (
    <div
      hidden={!isHidden}
      className={`h-full opacity-0 ${
        isHidden ? "animate-fadeIn animation-delay-500" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
