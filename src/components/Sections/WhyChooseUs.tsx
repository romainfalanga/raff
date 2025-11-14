import React from 'react';
import { DollarSign, Shield, Clock, Wrench } from 'lucide-react';

const advantages = [
  {
    icon: DollarSign,
    title: "Sans Abonnement",
    description: "Un seul paiement, aucun frais mensuel. Votre système vous appartient définitivement."
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Équipements professionnels dernière génération pour une protection optimale."
  },
  {
    icon: Clock,
    title: "Disponibilité 24h/24",
    description: "Support technique et intervention d'urgence pour votre tranquillité d'esprit."
  },
  {
    icon: Wrench,
    title: "Installation Incluse",
    description: "Pose professionnelle, paramétrage et formation à l'utilisation comprises."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Une approche différente de la sécurité : transparente, moderne et sans engagement financier récurrent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-red-500/25">
                  <IconComponent size={36} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-300 transition-colors duration-300 tracking-tight">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};