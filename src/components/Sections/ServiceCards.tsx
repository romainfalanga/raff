import React from 'react';
import { Shield, Video, Monitor, ArrowRight } from 'lucide-react';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';

interface ServiceCardData {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ServiceCardsProps {
  services: ServiceCardData[];
  onNavigate: (path: string) => void;
}

const iconMap = {
  Shield,
  Video,
  Monitor
};

export const ServiceCards: React.FC<ServiceCardsProps> = ({ services, onNavigate }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight">
            Nos Solutions de Sécurité
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Des systèmes de sécurité modernes et fiables, sans abonnement mensuel. 
            Un seul investissement pour une protection durable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={IconComponent}
                hover={true}
                className="h-full"
              >
                <Button
                  onClick={() => onNavigate(service.link)}
                  variant="outline"
                  icon={ArrowRight}
                  className="mt-auto w-full justify-center"
                >
                  En savoir plus
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};