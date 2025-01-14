export interface Project {
  id?: string;
  name: string;
  description: string;
  role?: string;
  timeline?: string;
  images?: string[];
  image?: string;
  metrics?: Record<string, string | number>;
  recognition?: string[];
  technologies: string[];
  link?: string;
  achievements?: string[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export interface NavigationHandlers {
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}
