import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'solid' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
};

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'solid', 
  size = 'md', 
  as = 'button', 
  href, 
  target, 
  rel 
}: ButtonProps) => {
  const baseClasses = 'rounded-full font-semibold transition-all duration-300';

  const variantClasses = {
    solid: 'bg-green-700 text-white shadow-lg hover:bg-green-800 hover:scale-105',
    outline: 'bg-transparent border-2 border-green-700 text-green-800 hover:bg-green-100',
    gradient: 'bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg hover:shadow-xl',
  }[variant];

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  const Tag = as;

  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}>
      {children}
    </Tag>
  );
};

export default Button;
