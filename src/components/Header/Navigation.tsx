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
                    ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                    : 'text-slate-700'
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
          className="p-2 text-slate-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-lg"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-2xl z-50">
          <nav className="p-6">
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => handleNavigation(page.path)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActivePage(page.path)
                        ? 'text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 hover:shadow-sm'
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