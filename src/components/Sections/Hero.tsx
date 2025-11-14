import React from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../UI/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  features: string[];
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  features,
  onCtaClick
}) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center pt-24 lg:pt-0">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30 animate-pulse"></div>
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-indigo-900/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:space-y-10">
            <h1 className="text-4xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in-up">
              {title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
            
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-1 bg-green-500/20 rounded-full backdrop-blur-sm border border-green-400/30 group-hover:bg-green-500/30 transition-all duration-300">
                    <CheckCircle size={18} className="text-green-400" />
                  </div>
                  <span className="text-lg text-slate-200 font-medium group-hover:text-white transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={onCtaClick}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-10 py-5 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-500"
              >
                Obtenir un devis gratuit
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-slate-700/10 rounded-3xl backdrop-blur-lg border border-white/20 flex items-center justify-center overflow-hidden group hover:scale-105 transition-all duration-700">
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-8 w-6 h-6 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-12 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              <div className="text-center space-y-8 z-10">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:rotate-3">
                    <Shield size={64} className="text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Protection Complète</h3>
                  <p className="text-slate-300 font-medium">Sans abonnement, sans surprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};