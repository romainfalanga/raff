import React from 'react';
import { MapPin, Award, Clock, Users } from 'lucide-react';
import { CallToAction } from '../../components/Sections/CallToAction';
import { aboutContent } from '../../data/services';

interface AboutProps {
  onOpenModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 shadow-2xl border-4 border-red-400">
              <img 
                src="/raff.png" 
                alt="Raphaël Mareau" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              À Propos d'Alpilles Sécurité
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              Votre expert en sécurité moderne sans abonnement
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 space-y-8">
              <h2 className="text-4xl font-bold text-white">
                {aboutContent.name}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Award className="text-red-400" size={24} />
                  <div>
                    <p className="text-lg font-semibold text-white">Âge</p>
                    <p className="text-gray-300">{aboutContent.age} ans</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-red-400" size={24} />
                  <div>
                    <p className="text-lg font-semibold text-white">Expérience</p>
                    <p className="text-gray-300">{aboutContent.experience}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-400 shrink-0" size={24} />
                  <div>
                    <p className="text-lg font-semibold text-white">Zones d'intervention</p>
                    <ul className="text-gray-300 space-y-1">
                      {aboutContent.zones.map((zone, index) => (
                        <li key={index}>{zone}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Mon Engagement
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionné par les technologies de sécurité depuis 5 ans, j'ai choisi de proposer 
                une approche différente : <strong>des solutions complètes sans abonnement mensuel</strong>. 
                Mon objectif est simple : vous offrir une sécurité de qualité professionnelle avec 
                un investissement unique, sans frais cachés ni engagement long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Mes Valeurs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche professionnelle basée sur la confiance, la transparence et l'excellence technique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Zone d'Intervention
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Service professionnel dans tout le Sud-Est de la France
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.zones.map((zone, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <MapPin className="text-red-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white">
                  {zone}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why No Subscription */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pourquoi Sans Abonnement ?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 shadow-md">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Dans le secteur de la sécurité, les abonnements mensuels sont monnaie courante. 
                J'ai fait le choix de proposer une alternative transparente et économique :
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 shrink-0"></div>
                  <span><strong>Transparence totale :</strong> Un prix unique, pas de surprises</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 shrink-0"></div>
                  <span><strong>Économies à long terme :</strong> Votre système s'amortit rapidement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 shrink-0"></div>
                  <span><strong>Indépendance :</strong> Votre sécurité vous appartient</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 shrink-0"></div>
                  <span><strong>Qualité professionnelle :</strong> Équipements et installation de niveau expert</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Prêt à Faire Confiance à Alpilles Sécurité ?"
        description="Contactez Raphaël Mareau dès maintenant pour discuter de votre projet sécurité. Devis gratuit et conseil personnalisé."
        onCtaClick={onOpenModal}
      />
    </div>
  );
};