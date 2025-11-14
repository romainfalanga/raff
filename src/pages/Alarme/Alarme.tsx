import React from 'react';
import { Shield, Smartphone, Zap, Home } from 'lucide-react';
import { CallToAction } from '../../components/Sections/CallToAction';
import { servicesData } from '../../data/services';

interface AlarmeProps {
  onOpenModal: () => void;
}

export const Alarme: React.FC<AlarmeProps> = ({ onOpenModal }) => {
  const { alarme } = servicesData;

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-8">
              <Shield size={32} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {alarme.title}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              {alarme.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Équipements Professionnels Inclus
              </h2>
              <div className="space-y-6">
                {alarme.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Nos Avantages Uniques
              </h3>
              <div className="space-y-4">
                {alarme.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield size={20} className="text-blue-600" />
                    <span className="text-slate-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Adapté à Tous Types de Biens
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nos systèmes d'alarme s'adaptent parfaitement à votre environnement, 
              que vous soyez particulier ou professionnel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <Home size={48} className="text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Résidences</h3>
              <p className="text-slate-600">
                Maisons, appartements, villas. Protection complète de votre domicile et de votre famille.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <Zap size={48} className="text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Commerces</h3>
              <p className="text-slate-600">
                Boutiques, bureaux, entrepôts. Sécurisez votre activité professionnelle efficacement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <Smartphone size={48} className="text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contrôle Mobile</h3>
              <p className="text-slate-600">
                Application dédiée pour armer/désarmer et recevoir les alertes où que vous soyez.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Protégez Votre Bien avec un Système d'Alarme Professionnel"
        description="Installation complète sans abonnement. Devis gratuit et personnalisé selon vos besoins spécifiques."
        onCtaClick={onOpenModal}
      />
    </div>
  );
};