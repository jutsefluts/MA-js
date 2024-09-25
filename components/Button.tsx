import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; // Optional className for extra styles
}

const Button = ({ onClick, children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-pink-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${className}`}
      {...rest}
      aria-label={children ? children.toString() : 'Button'}
    >
      {children ? children : 'Button'}
    </button>
  );
};

export default Button;
