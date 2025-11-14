import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from '../../hooks/useRouter';
import { Page } from '../../types';

const pages: Page[] = [
  { id: 'home', name: 'Accueil', path: '/' },
  { id: 'alarme', name: 'Alarme', path: '/alarme' },
  { id: 'videoprotection', name: 'Vidéoprotection', path: '/videoprotection' },
  { id: 'telesurveillance', name: 'Télésurveillance', path: '/telesurveillance' },
  { id: 'about', name: 'À propos', path: '/about' },
];

export const Navigation: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    return currentPath === path;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-8">
          {pages.map((page) => (
            <li key={page.id}>
              <button
                onClick={() => handleNavigation(page.path)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isActivePage(page.path)
                    ? 'text-red-400 border-b-2 border-red-400 pb-1'
                    : 'text-gray-300'
                }`}
              >
                {page.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-300 hover:text-red-400 transition-all duration-300 hover:bg-red-900/20 rounded-lg"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-red-600/30 shadow-2xl z-50">
          <nav className="p-6">
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => handleNavigation(page.path)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActivePage(page.path)
                        ? 'text-red-400 bg-gradient-to-r from-red-900/30 to-red-800/30 shadow-md'
                        : 'text-gray-300 hover:text-red-400 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-red-900/20 hover:shadow-sm'
                    }`}
                  >
                    {page.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};