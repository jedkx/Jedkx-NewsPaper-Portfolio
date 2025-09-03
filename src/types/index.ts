/**
 * TypeScript Type Definitions for Portfolio
 * @author Caner Coşkun
 * @version 1.0.0
 */

import React from 'react';

// ===== CORE TYPES =====

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  icon: string;
  category: 'web' | 'mobile' | 'game' | 'tool' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies?: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  graduationDate?: string;
  gpa?: number;
  description: string;
  icon: string;
  type: 'degree' | 'certification' | 'course' | 'training';
}

export interface Skill {
  id: string;
  name: string;
  category: 'programming' | 'framework' | 'tool' | 'database' | 'design' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years?: number;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  medium?: string;
  website?: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  location: string;
  status: string;
  graduationYear: number;
}

// ===== COMPONENT PROPS =====

export interface NavigationProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ArticleCardProps {
  title: string;
  category: string;
  date: string;
  content: React.ReactNode;
  href?: string;
  className?: string;
  footer?: React.ReactNode;
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured' | 'minimal';
  onClick?: (project: Project) => void;
}

export interface SkillListProps {
  skills: Skill[];
  variant?: 'grid' | 'list' | 'columns';
  showProficiency?: boolean;
}

export interface ExperienceCardProps {
  experience: Experience;
  variant?: 'default' | 'timeline' | 'compact';
}

export interface EducationCardProps {
  education: Education;
  variant?: 'default' | 'grid' | 'list';
}

// ===== UTILITY TYPES =====

export type SectionId = 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'contact';

export interface ScrollToOptions {
  elementId: string;
  offset?: number;
  behavior?: ScrollBehavior;
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
}

// ===== CONFIGURATION TYPES =====

export interface AppConfig {
  siteName: string;
  siteDescription: string;
  author: PersonalInfo;
  contact: ContactInfo;
  social: {
    github: string;
    linkedin: string;
    email: string;
    medium?: string;
  };
  analytics?: {
    gtag?: string;
    plausible?: string;
  };
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
}

// ===== FORM TYPES =====

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

// ===== API TYPES =====

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ===== EVENT TYPES =====

export interface NavigationEvent {
  section: SectionId;
  element: HTMLElement;
  source: 'click' | 'scroll' | 'keyboard';
}

// ===== RESPONSIVE TYPES =====

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

export interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
  default: T;
}

// ===== ANIMATION TYPES =====

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
  repeat?: boolean;
  direction?: 'normal' | 'reverse' | 'alternate';
}

// ===== SEO TYPES =====

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// Re-export common React types for convenience
export type { FC, ReactNode, MouseEvent, KeyboardEvent, FormEvent } from 'react';
