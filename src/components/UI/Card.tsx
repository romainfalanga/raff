import React from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  children,
  className = '',
  hover = false,
}) => {
  const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

  return (
    <div className={`bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 border border-gray-700/50 hover:border-red-600/50 ${hover ? 'hover:-translate-y-2 hover:scale-105' : ''} ${className} group`}>
      {Icon && (
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-2xl mb-6 group-hover:from-red-800/40 group-hover:to-red-700/40 transition-all duration-500 shadow-md group-hover:shadow-lg">
          <Icon size={28} className="text-red-400 group-hover:text-red-300 group-hover:scale-110 transition-all duration-300" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300 tracking-tight">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      {children}
    </div>
  );
};