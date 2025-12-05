
export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  securityFeatures?: string;
  highlights?: string;
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  skills?: string[];
  type?: 'work' | 'education';
  badge?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  description?: string;
  skills?: string[];
  type?: 'professional' | 'internship' | 'course';
}

export interface Skill {
  name: string;
  icon: string; // URL for the icon
  level: string; // Proficiency or Years of Exp
  context?: string; // Brief tooltip context
}

// Removed SkillCategory as we are using a flat list now

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
