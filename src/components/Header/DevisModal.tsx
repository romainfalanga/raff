import React, { useState } from 'react';
import { Modal } from '../UI/Modal';
import { Button } from '../UI/Button';
import { FormData } from '../../types';
import { Send } from 'lucide-react';

interface DevisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevisModal: React.FC<DevisModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est obligatoire';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est obligatoire';
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est obligatoire';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est obligatoire';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Ici, dans une version future, on intégrera l'envoi du formulaire
      console.log('Formulaire soumis:', formData);
      
      // Reset form and close modal
      setFormData({
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        message: '',
      });
      onClose();
      
      // Notification de succès (à implémenter)
      alert('Votre demande de devis a été envoyée avec succès !');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Demander un devis gratuit"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-1">
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                errors.nom ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400 focus:border-blue-500 bg-white hover:bg-slate-50'
              }`}
              placeholder="Votre nom"
            />
            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
          </div>

          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-slate-700 mb-1">
              Prénom *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                errors.prenom ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400 focus:border-blue-500 bg-white hover:bg-slate-50'
              }`}
              placeholder="Votre prénom"
            />
            {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-slate-700 mb-1">
            Numéro de téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              errors.telephone ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400 focus:border-blue-500 bg-white hover:bg-slate-50'
            }`}
            placeholder="06 12 34 56 78"
          />
          {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400 focus:border-blue-500 bg-white hover:bg-slate-50'
            }`}
            placeholder="votre.email@exemple.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-300 ${
              errors.message ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400 focus:border-blue-500 bg-white hover:bg-slate-50'
            }`}
            placeholder="Décrivez votre projet de sécurité..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50">
          <p className="text-sm text-blue-800 font-medium">
            <strong>Sans engagement</strong> - Nous vous recontactons rapidement pour établir un devis personnalisé et gratuit.
          </p>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={Send}
          className="w-full"
        >
          Envoyer ma demande
        </Button>
      </form>
    </Modal>
  );
};