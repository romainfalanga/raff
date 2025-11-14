import React from 'react';
import { Video, Eye, HardDrive, Wifi } from 'lucide-react';
import { CallToAction } from '../../components/Sections/CallToAction';
import { servicesData } from '../../data/services';

interface VideoProtectionProps {
  onOpenModal: () => void;
}

export const VideoProtection: React.FC<VideoProtectionProps> = ({ onOpenModal }) => {
  const { videoprotection } = servicesData;

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-2xl mb-8">
              <Video size={32} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {videoprotection.title}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
            </p>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              {videoprotection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">
                Technologie de Pointe 4K
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nos caméras utilisent la dernière technologie de capteurs pour offrir 
                une qualité d'image exceptionnelle, de jour comme de nuit. 
                Chaque détail compte pour votre sécurité.
              </p>
              
              <div className="space-y-6">
                {videoprotection.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Vos Avantages
              </h3>
              <div className="space-y-4">
                {videoprotection.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Video size={20} className="text-red-400" />
                    <span className="text-gray-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Fonctionnalités Avancées
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une surveillance intelligente et complète pour tous vos besoins de sécurité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-md text-center">
              <Eye size={48} className="text-red-400 mx-auto mb-6" />
              <h3 className="text-lg font-semibold text-white mb-4">Vision Nocturne</h3>
              <p className="text-gray-300 text-sm">
                Images nettes même dans l'obscurité totale grâce à la technologie infrarouge.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-md text-center">
              <HardDrive size={48} className="text-red-400 mx-auto mb-6" />
              <h3 className="text-lg font-semibold text-white mb-4">Stockage Local</h3>
              <p className="text-gray-300 text-sm">
                Vos enregistrements restent chez vous, aucun cloud externe requis.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-md text-center">
              <Wifi size={48} className="text-red-400 mx-auto mb-6" />
              <h3 className="text-lg font-semibold text-white mb-4">Accès Mobile</h3>
              <p className="text-gray-300 text-sm">
                Visualisez vos caméras en temps réel depuis votre smartphone.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-md text-center">
              <Video size={48} className="text-red-400 mx-auto mb-6" />
              <h3 className="text-lg font-semibold text-white mb-4">Qualité 4K</h3>
              <p className="text-gray-300 text-sm">
                Résolution ultra-haute définition pour ne manquer aucun détail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Installez Votre Système de Vidéoprotection"
        description="Caméras 4K, vision nocturne et accès mobile. Devis gratuit avec visite technique personnalisée."
        onCtaClick={onOpenModal}
      />
    </div>
  );
};