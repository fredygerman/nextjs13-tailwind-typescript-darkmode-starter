import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <>
      <button
        className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
