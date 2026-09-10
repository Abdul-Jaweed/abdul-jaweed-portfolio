export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  contact: ContactInfo;
  summary: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  icon?: string;
  level?: 'Expert' | 'Advanced' | 'Proficient';
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  projectTitle?: string;
  techStack: string[];
  responsibilities: string[];
  keyAchievements?: string[];
}

export interface ProjectContribution {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI Infra' | 'MLOps' | 'RAG & Agents' | 'Open Source';
  status: string;
  description: string;
  techStack: string[];
  contributions: string[];
  githubUrl?: string;
  demoUrl?: string;
  isOpenSource?: boolean;
  featured?: boolean;
  architectureHighlights?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  metric?: string;
  badge?: string;
}

export interface CourseCertification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  period: string;
  credentialUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}

export interface SystemNode {
  id: string;
  name: string;
  type: 'agent' | 'gateway' | 'database' | 'observability' | 'auth' | 'storage';
  description: string;
  status: 'active' | 'standby' | 'processing';
}

export interface SystemFlowStep {
  stepNumber: number;
  nodeId: string;
  action: string;
  payloadSample: string;
}
