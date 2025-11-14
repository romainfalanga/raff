import React, { useState, useEffect } from 'react';
import { Shield, Phone } from 'lucide-react';
import { Navigation } from './Navigation';
import { Button } from '../UI/Button';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Top Bar - Devis Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 shadow-lg">
        <div className="px-4 py-2">
          <Button
            onClick={onOpenModal}
            variant="secondary"
            size="sm"
            icon={Phone}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-md"
          >
            Obtenir un devis gratuit
          </Button>
        </div>
      </div>

      <header className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-red-600/30' : 'bg-gray-900/90 backdrop-blur-lg'
      }`}
      style={{ top: window.innerWidth < 1024 ? '52px' : '0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 flex-1">
              <img 
                src="/logoraff.png" 
                alt="Alpilles Sécurité" 
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain drop-shadow-lg filter brightness-110"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.3)) brightness(1.1)'
                }}
              />
              <div className="hidden sm:block lg:block">
                <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight">Alpilles Sécurité</h1>
                <p className="text-xs lg:text-sm text-red-400 font-medium">Sécurité sans abonnement</p>
              </div>
            </div>

            {/* Navigation */}
            <Navigation />

            {/* Desktop Devis Button */}
            <div className="hidden lg:block">
              <Button
                onClick={onOpenModal}
                variant="primary"
                className="shrink-0 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ml-6"
              >
                Obtenir un devis
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};