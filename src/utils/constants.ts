import { Language, CourseLevel, Testimonial, Statistic, SocialMedia } from '../types';

export const LANGUAGES: Language[] = [
  { id: 'en', name: 'English', code: 'en', emoji: '🗽', flagCode: 'GB', description: 'Master the global language of business and international communication.' },
  { id: 'es', name: 'Spanish', code: 'es', emoji: '💃', flagCode: 'ES', description: 'Learn one of the most widely spoken languages in the world.' },
  { id: 'fr', name: 'French', code: 'fr', emoji: '🗼', flagCode: 'FR', description: 'Discover the language of culture, art, and diplomacy.' },
  { id: 'de', name: 'German', code: 'de', emoji: '🏰', flagCode: 'DE', description: 'Learn the language of innovation and engineering excellence.' },
  { id: 'it', name: 'Italian', code: 'it', emoji: '🏛️', flagCode: 'IT', description: 'Immerse yourself in the language of art, music, and cuisine.' },
  { id: 'ar', name: 'Arabic', code: 'ar', emoji: '🕋', flagCode: 'SA', description: 'Master the language of rich cultural heritage and business opportunities.' },
  { id: 'tr', name: 'Turkish', code: 'tr', emoji: '🕌', flagCode: 'TR', description: 'Bridge cultures with the language that connects East and West.' }
];

export const COURSE_LEVELS: CourseLevel[] = [
  { id: 1, title: 'Level One', description: 'Begin your language journey with basic vocabulary and simple phrases.', emoji: '🐣',  },
  { id: 2, title: 'Level Two', description: 'Build on your foundation with more complex sentences and grammar.', emoji: '🐥', },
  { id: 3, title: 'Level Three', description: 'Develop conversational skills and expand your vocabulary.', emoji: '🐓',   },
  { id: 4, title: 'Level Four', description: 'Master advanced grammar and specialized vocabulary.', emoji: '🦅',   },
  { id: 5, title: 'Level Five', description: 'Achieve fluency and cultural understanding.', emoji: '🚀',   }
];

export const CONTACT_INFO = {
  email: 'iboosahud@gmail.com',
  phone: '05362368798',
  whatsapp: '05362368798'
};

export const SOCIAL_MEDIA: SocialMedia[] = [
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/dpu.oktant', icon: 'Instagram' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/company/oktant-iha', icon: 'Linkedin' },
  { id: 'twitter', name: 'Twitter', url: 'https://twitter.com/oktantlang', icon: 'Twitter' },
  { id: 'youtube', name: 'YouTube', url: 'https://www.youtube.com/oktantlag', icon: 'Youtube' },
  { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@oktantlag', icon: 'Music' },
  { id: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/oktantlang', icon: 'Facebook' }
];

export const NAV_ITEMS = [
  { id: 'home', label: 'HOME', path: '/' },
  { id: 'about', label: 'ABOUT', path: '/about' },
  { id: 'programs', label: 'PROGRAMS', path: '/programs', submenu: [
      { id: 'language-courses', label: 'Language Courses', path: '/programs/courses' },
      { id: 'intensive-programs', label: 'Intensive Programs', path: '/programs/intensive' },
      { id: 'business-language', label: 'Business Language', path: '/programs/business' },
      { id: 'online-courses', label: 'Online Courses', path: '/programs/online' },
      { id: 'kids-courses', label: 'Kids Courses', path: '/programs/kids' },
      { id: 'private-lessons', label: 'Private Lessons', path: '/programs/private' }
    ] 
  },
  { id: 'exams', label: 'EXAMS', path: '/exams' },
  { id: 'student-guide', label: 'STUDENT GUIDE', path: '/student-guide' },
  { id: 'course-schedule', label: 'COURSE SCHEDULE', path: '/course-schedule' },
  { id: 'contact', label: 'CONTACT', path: '/contact' }
];

// ✅ Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Student',
    content: 'This program greatly improved my language skills 🚀',
    avatar: "/images/john.jpg"
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Student',
    content: 'The courses were well structured and fun 🗓️',
    avatar: "/images/jane.jpg"

  }
];

// ✅ Statistics
export const STATISTICS: Statistic[] = [
  {
    id: 1,
    label: 'Students Enrolled',
    value: 1200,
    icon: 'Users'
  },
  {
    id: 2,
    label: 'Courses Offered',
    value: 35,
    icon: 'BookOpen'
  },
  {
    id: 3,
    label: 'Certified Teachers',
    value: 20,
    icon: 'Users'
  },
  {
    id: 4,
    label: 'Languages Available',
    value: 7,
    icon: 'Globe'
  }
];
