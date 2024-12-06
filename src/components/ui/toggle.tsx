import React from "react";

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Toggle: React.FC<ToggleProps> = ({ children, ...props }) => {
  return (
    <div>
      {children}
      {/* Underline */}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
      </div>
  );
};

export default Toggle;
