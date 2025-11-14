import React from 'react';
import { Hero } from '../../components/Sections/Hero';
import { ServiceCards } from '../../components/Sections/ServiceCards';
import { WhyChooseUs } from '../../components/Sections/WhyChooseUs';
import { CallToAction } from '../../components/Sections/CallToAction';
import { heroContent } from '../../data/services';

interface HomeProps {
  onNavigate: (path: string) => void;
  onOpenModal: () => void;
}

const serviceCards = [
  {
    title: "Systèmes d'Alarme",
    description: "Protection complète avec détecteurs, sirènes et contrôle mobile. Installation et paramétrage inclus.",
    icon: "Shield",
    link: "/alarme"
  },
  {
    title: "Vidéoprotection HD",
    description: "Caméras 4K avec vision nocturne et enregistrement local. Accès à distance sécurisé.",
    icon: "Video", 
    link: "/videoprotection"
  },
  {
    title: "Télésurveillance",
    description: "Monitoring professionnel 24h/24 avec intervention rapide et notifications instantanées.",
    icon: "Monitor",
    link: "/telesurveillance"
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <div className="min-h-screen">
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        features={heroContent.features}
        onCtaClick={onOpenModal}
      />
      
      <ServiceCards 
        services={serviceCards}
        onNavigate={onNavigate}
      />
      
      <WhyChooseUs />
      
      <CallToAction 
        onCtaClick={onOpenModal}
      />
    </div>
  );
};