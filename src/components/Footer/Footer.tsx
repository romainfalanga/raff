import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                <Shield className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">SecuriTech Pro</h3>
                <p className="text-slate-400">Sécurité sans abonnement</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Expert en systèmes d'alarme, vidéoprotection et télésurveillance. 
              Solutions complètes sans abonnement avec investissement unique.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span className="text-sm">Bouches-du-Rhône (13) • Var (83) • Alpes-Maritimes (06) • Vaucluse (84)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#/alarme" className="text-slate-300 hover:text-white transition-colors">
                  Systèmes d'alarme
                </a>
              </li>
              <li>
                <a href="#/videoprotection" className="text-slate-300 hover:text-white transition-colors">
                  Vidéoprotection HD
                </a>
              </li>
              <li>
                <a href="#/telesurveillance" className="text-slate-300 hover:text-white transition-colors">
                  Télésurveillance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span className="text-sm">Contactez-nous pour un devis</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <span className="text-sm">Réponse sous 24h garantie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © 2024 SecuriTech Pro - Raphaël Marot. Tous droits réservés.
            </p>
            <p className="text-slate-400 text-sm mt-2 sm:mt-0">
              Sécurité professionnelle • Sans abonnement • Investissement unique
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};