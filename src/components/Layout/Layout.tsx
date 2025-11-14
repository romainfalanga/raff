import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  onOpenModal: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenModal }) => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenModal={onOpenModal} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};