import React, { useState } from 'react';
import { Modal } from '../UI/Modal';
import { Button } from '../UI/Button';
import { FormData } from '../../types';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        // Préparer les données pour Netlify Forms
        const formDataToSend = new URLSearchParams();
        formDataToSend.append('form-name', 'devis');
        formDataToSend.append('nom', formData.nom);
        formDataToSend.append('prenom', formData.prenom);
        formDataToSend.append('telephone', formData.telephone);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('message', formData.message);

        // Envoyer à Netlify
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDataToSend.toString(),
        });

        if (response.ok) {
          setSubmitStatus('success');
          // Reset form
          setFormData({
            nom: '',
            prenom: '',
            telephone: '',
            email: '',
            message: '',
          });
          // Fermer la modal après 2 secondes
          setTimeout(() => {
            onClose();
            setSubmitStatus('idle');
          }, 2000);
        } else {
          throw new Error('Erreur lors de l\'envoi');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Demander un devis gratuit"
    >
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Demande envoyée !</h3>
          <p className="text-gray-300">
            Votre demande de devis a été envoyée avec succès. Nous vous recontacterons rapidement.
          </p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="space-y-4"
          name="devis"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Champs cachés pour Netlify */}
          <input type="hidden" name="form-name" value="devis" />
          <input type="hidden" name="bot-field" />

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
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                errors.nom ? 'border-red-400 bg-red-50' : 'border-gray-600 hover:border-gray-500 focus:border-red-500 bg-gray-800 hover:bg-gray-700 text-white disabled:opacity-50'
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
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                errors.prenom ? 'border-red-400 bg-red-50' : 'border-gray-600 hover:border-gray-500 focus:border-red-500 bg-gray-800 hover:bg-gray-700 text-white disabled:opacity-50'
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
            disabled={isSubmitting}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              errors.telephone ? 'border-red-400 bg-red-50' : 'border-gray-600 hover:border-gray-500 focus:border-red-500 bg-gray-800 hover:bg-gray-700 text-white disabled:opacity-50'
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
            disabled={isSubmitting}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-gray-600 hover:border-gray-500 focus:border-red-500 bg-gray-800 hover:bg-gray-700 text-white disabled:opacity-50'
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
            disabled={isSubmitting}
            rows={4}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-300 ${
              errors.message ? 'border-red-400 bg-red-50' : 'border-gray-600 hover:border-gray-500 focus:border-red-500 bg-gray-800 hover:bg-gray-700 text-white disabled:opacity-50'
            }`}
            placeholder="Décrivez votre projet de sécurité..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 p-6 rounded-xl border border-red-600/30">
          <p className="text-sm text-red-200 font-medium">
            <strong>Sans engagement</strong> - Nous vous recontactons rapidement pour établir un devis personnalisé et gratuit.
          </p>
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-4 flex items-center space-x-3">
            <AlertCircle size={20} className="text-red-400 shrink-0" />
            <p className="text-red-200 text-sm">
              Une erreur s'est produite lors de l'envoi. Veuillez réessayer.
            </p>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={Send}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </Button>
      </form>
      )}
    </Modal>
  );
};