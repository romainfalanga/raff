import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);


  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose}
        />
        <div className={`relative bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-red-600/30 transition-all duration-300 ${
          isOpen ? 'transform translate-y-0 scale-100' : 'transform translate-y-4 scale-95'
        }`}>
          <div className="flex items-center justify-between p-6 border-b border-red-600/30 bg-gradient-to-r from-gray-800 to-gray-900">
            <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-400 transition-all duration-300 p-2 rounded-xl hover:bg-red-900/20 hover:shadow-sm"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};