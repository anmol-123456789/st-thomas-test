export type NavSection = 
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'placements'
  | 'campus-life'
  | 'student-hub'
  | 'gallery'
  | 'contact';

export interface Department {
  id: string;
  code: string;
  name: string;
  shortName: string;
  intake: number;
  established: number;
  description: string;
  iconName: string;
  hod: {
    name: string;
    qualification: string;
    experience: string;
    message: string;
  };
  vision: string;
  mission: string[];
  keyLabs: string[];
  careerProspects: string[];
  facultyCount: number;
  featuredProjects: {
    title: string;
    studentLead: string;
    year: string;
    desc: string;
  }[];
}

export interface Announcement {
  id: string;
  title: string;
  category: 'KTU' | 'Admission' | 'Placement' | 'Exam' | 'Event' | 'General';
  date: string;
  isNew?: boolean;
  linkText?: string;
  linkUrl?: string;
  description?: string;
}

export interface Recruiter {
  name: string;
  category: 'IT Services' | 'Core Engineering' | 'Product / MNC' | 'FinTech / Banking';
  offersCount: number;
  logoText: string;
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  batch: string;
  branch: string;
  company: string;
  role: string;
  quote: string;
  avatarSeed: string;
}

export interface BusRoute {
  routeNo: string;
  name: string;
  startingPoint: string;
  departureTime: string;
  arrivalCampus: string;
  driverName: string;
  contactNumber: string;
  stops: { stopName: string; time: string }[];
}

export interface CampusFacility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  category: 'Academic' | 'Student Life' | 'Innovation' | 'Sports';
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Workshop' | 'Seminar';
  description: string;
  registrationOpen: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
