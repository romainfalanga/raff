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
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 border border-slate-200/50 hover:border-blue-200/50 ${hover ? 'hover:-translate-y-2 hover:scale-105' : ''} ${className} group`}>
      {Icon && (
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500 shadow-md group-hover:shadow-lg">
          <Icon size={28} className="text-blue-700 group-hover:text-blue-800 group-hover:scale-110 transition-all duration-300" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-300 tracking-tight">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">{description}</p>
      {children}
    </div>
  );
};