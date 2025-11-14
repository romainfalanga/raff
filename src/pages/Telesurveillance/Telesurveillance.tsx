import React from 'react';
import { Monitor, Clock, Phone, Shield } from 'lucide-react';
import { CallToAction } from '../../components/Sections/CallToAction';
import { servicesData } from '../../data/services';

interface TelesurveillanceProps {
  onOpenModal: () => void;
}

export const Telesurveillance: React.FC<TelesurveillanceProps> = ({ onOpenModal }) => {
  const { telesurveillance } = servicesData;

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl mb-8">
              <Monitor size={32} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {telesurveillance.title}
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto">
              {telesurveillance.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Surveillance Professionnelle Continue
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Notre service de télésurveillance assure une protection permanente 
              de votre bien grâce à une équipe d'experts disponible 24h/24.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {telesurveillance.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-lg text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Tranquillité d'Esprit
              </h3>
              <div className="space-y-4">
                {telesurveillance.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Monitor size={20} className="text-green-600" />
                    <span className="text-slate-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comment Ça Fonctionne ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un processus simple et efficace pour assurer votre protection en permanence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Détection</h3>
              <p className="text-slate-600">
                Vos capteurs détectent une intrusion et transmettent l'alerte instantanément 
                à notre centre de surveillance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Vérification</h3>
              <p className="text-slate-600">
                Nos opérateurs analysent immédiatement la situation et vérifient 
                la nature de l'alerte reçue.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Intervention</h3>
              <p className="text-slate-600">
                Selon le protocole établi, nous contactons les forces de l'ordre 
                et vous prévenons immédiatement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Clock size={48} className="text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">24h/24 - 7j/7</h3>
              <p className="text-slate-600">
                Surveillance continue toute l'année, y compris weekends et jours fériés.
              </p>
            </div>
            
            <div className="text-center p-8">
              <Phone size={48} className="text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Temps de Réponse</h3>
              <p className="text-slate-600">
                Réaction immédiate dès réception de l'alerte, moins de 30 secondes.
              </p>
            </div>
            
            <div className="text-center p-8">
              <Shield size={48} className="text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Protocole Sécurisé</h3>
              <p className="text-slate-600">
                Procédures établies avec vous et respect strict de vos consignes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Bénéficiez d'une Surveillance Professionnelle"
        description="Service de télésurveillance 24h/24 sans abonnement mensuel récurrent. Devis gratuit personnalisé."
        onCtaClick={onOpenModal}
      />
    </div>
  );
};