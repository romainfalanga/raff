import React from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
    secondary: 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white focus:ring-gray-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300',
    outline: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-2 border-red-600 focus:ring-red-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300',
    ghost: 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-red-900/20 focus:ring-red-500 hover:shadow-sm transition-all duration-300',
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm gap-2 font-semibold',
    md: 'px-6 py-3 text-base gap-2 font-semibold',
    lg: 'px-8 py-4 text-lg gap-3 font-bold',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
    </button>
  );
};