import React, { useState, useEffect } from 'react';
import { Shield, Phone } from 'lucide-react';
import { Navigation } from './Navigation';
import { DevisModal } from './DevisModal';
import { Button } from '../UI/Button';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <div className="px-4 py-2">
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="secondary"
            size="sm"
            icon={Phone}
            className="w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-md"
          >
            Obtenir un devis gratuit
          </Button>
        </div>
      </div>

      <header className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50' : 'bg-white/90 backdrop-blur-lg'
      }`}
      style={{ top: window.innerWidth < 1024 ? '52px' : '0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 flex-1">
              <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg">
                <Shield className="text-white" size={window.innerWidth < 1024 ? 20 : 28} />
              </div>
              <div className="hidden sm:block lg:block">
                <h1 className="text-lg lg:text-xl font-bold text-slate-900 tracking-tight">SecuriTech Pro</h1>
                <p className="text-xs lg:text-sm text-slate-600 font-medium">Sécurité sans abonnement</p>
              </div>
            </div>

            {/* Navigation */}
            <Navigation />

            {/* Desktop Devis Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                className="shrink-0 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ml-6"
              >
                Obtenir un devis
              </Button>
            </div>
          </div>
        </div>
      </header>

      <DevisModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};