import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { Button } from '../UI/Button';

interface CallToActionProps {
  title?: string;
  description?: string;
  onCtaClick?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title = "Prêt à Faire Confiance à Alpilles Sécurité ?",
  description = "Contactez Raphaël Marot dès maintenant pour discuter de votre projet sécurité. Devis gratuit et conseil personnalisé.",
  onCtaClick
}) => {
  const benefits = [
    "Devis gratuit sous 24h",
    "Visite technique incluse",
    "Prix fixe sans surprise",
    "Garantie constructeur"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-red-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="space-y-8">
            <h2 className="text-5xl font-black leading-tight tracking-tight bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-2xl text-red-100 leading-relaxed font-light">
              {description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-1 bg-red-500/20 rounded-full backdrop-blur-sm border border-red-400/30 group-hover:bg-red-500/30 transition-all duration-300">
                    <CheckCircle size={18} className="text-red-400" />
                  </div>
                  <span className="text-red-100 font-medium group-hover:text-white transition-colors duration-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center lg:text-right relative">
            <div className="space-y-8">
              <Button
                onClick={onCtaClick}
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl px-12 py-6 w-full sm:w-auto font-bold shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-500"
              >
                Demander un devis gratuit
              </Button>
              <div className="text-red-200 bg-red-800/30 backdrop-blur-sm rounded-2xl p-6 border border-red-400/20">
                <p className="font-bold text-lg mb-2">Intervention dans :</p>
                <p className="text-base font-medium">Bouches-du-Rhône • Var • Alpes-Maritimes • Vaucluse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};