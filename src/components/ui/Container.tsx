import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: '3xl' | '4xl' | '6xl' | '7xl';
};

const Container = ({ children, className = '', maxWidth = '7xl' }: ContainerProps) => {
  const maxWidthClass = {
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  }[maxWidth];

  return (
    <div className={`${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
