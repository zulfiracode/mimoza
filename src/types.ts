export interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  issuer: string;
  type: 'international' | 'republican' | 'district' | 'school';
  badge: string;
  description: string;
  imageUrl?: string;
  highlights: string[];
}

export interface QualificationItem {
  id: string;
  title: string;
  organization: string;
  hours: number;
  period: string;
  certificateNo?: string;
  description: string;
  category: 'it' | 'methodology' | 'pedagogy';
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  audience: string;
  description: string;
  outcomes: string[];
  tools: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  faculty?: string;
  specialty: string;
  degree: string;
  description: string;
}

export interface CareerItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  badge?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'award' | 'school' | 'certificate' | 'event';
  caption: string;
  year?: string;
}
