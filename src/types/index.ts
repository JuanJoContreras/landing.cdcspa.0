export interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  comuna: string;
  tipoProyecto: string;
  cantidadVentanas: string;
  mensaje?: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface WindowType {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  initials: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  location: string;
  type: string;
}
