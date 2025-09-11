import React from 'react';

type ContentCardProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentCard = ({ children, className = '' }: ContentCardProps) => {
  return (
    <div className={`bg-white/70 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg p-8 ${className}`}>
      {children}
    </div>
  );
};

export default ContentCard;
