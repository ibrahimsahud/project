export interface Language {
  id: string;
  name: string;
  code: string;
  emoji: string;
  flagCode: string;
}

export interface CourseLevel {
  id: number;
  title: string;
  description: string;
  emoji: string;
  price: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  icon: string;
}