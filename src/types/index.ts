export interface Page {
  id: string;
  name: string;
  path: string;
}

export interface FormData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  message: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}