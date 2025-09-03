/**
 * Smooth Scroll Utilities - TypeScript Version
 * Enhanced with type safety and improved functionality
 * @author Caner Coşkun
 * @version 2.0.0
 */

import React from 'react';
import type { ScrollToOptions, SectionId } from '@/types';

/**
 * Get dynamic header height for accurate scroll offset
 * @returns Height of the newspaper header in pixels
 */
const getHeaderHeight = (): number => {
  const header = document.querySelector('.newspaper-header');
  if (header) {
    return header.getBoundingClientRect().height;
  }
  return 60; // Fallback value
};

/**
 * Smooth scroll to element by ID with enhanced options
 * @param options - Scroll configuration options
 */
export const scrollToSection = ({
  elementId,
  offset,
  behavior = 'smooth'
}: ScrollToOptions): void => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  // Try using scrollIntoView with block: 'start' to mimic manual hash behavior
  element.scrollIntoView({ 
    behavior, 
    block: 'start' 
  });
  
  // If offset is provided, apply additional adjustment
  if (offset !== undefined) {
    setTimeout(() => {
      window.scrollBy(0, -offset);
    }, 100);
  }
};

/**
 * Handle navigation click events with improved type safety
 * @param event - Click event
 * @param onSectionChange - Optional callback for section changes
 */
export const handleNavClick = (
  event: React.MouseEvent<HTMLAnchorElement>,
  onSectionChange?: (section: SectionId) => void
): void => {
  event.preventDefault();
  
  const target = event.currentTarget;
  const href = target.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    const sectionId = href.substring(1) as SectionId;
    
    // Update URL hash
    window.history.pushState(null, '', href);
    
    scrollToSection({ elementId: sectionId });
    updateActiveNavLink(target);
    
    // Call callback if provided
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  }
};

/**
 * Update active navigation link with proper type handling
 * @param clickedLink - The clicked navigation link element
 */
export const updateActiveNavLink = (clickedLink: HTMLAnchorElement): void => {
  // Remove active class from all nav links
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to clicked link
  clickedLink.classList.add('active');
};

/**
 * Get current active section based on scroll position
 * @param offset - Offset from top for determining active section
 * @returns The ID of the currently active section
 */
export const getCurrentSection = (offset?: number): SectionId | null => {
  const sections: SectionId[] = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const scrollOffset = offset !== undefined ? offset : getHeaderHeight() + 350;
  const scrollPosition = window.scrollY + scrollOffset;

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return sectionId;
      }
    }
  }

  return null;
};

/**
 * Handle hash change events (when user manually changes URL hash)
 */
export const handleHashChange = (): void => {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#')) {
    const sectionId = hash.substring(1) as SectionId;
    const sections: SectionId[] = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
    
    if (sections.includes(sectionId)) {
      // Use browser's default scroll behavior for manual hash changes
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};

/**
 * Set up scroll spy to track active sections
 * @param callback - Function to call when active section changes
 * @param throttleMs - Throttle delay in milliseconds
 * @returns Cleanup function to remove event listeners
 */
export const setupScrollSpy = (
  callback: (section: SectionId | null) => void,
  throttleMs: number = 100
): (() => void) => {
  let ticking = false;

  const handleScroll = (): void => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const activeSection = getCurrentSection();
        callback(activeSection);
        ticking = false;
      });
      ticking = true;
    }
  };

  // Throttled scroll handler
  let lastCall = 0;
  const throttledHandler = (): void => {
    const now = Date.now();
    if (now - lastCall >= throttleMs) {
      handleScroll();
      lastCall = now;
    }
  };

  window.addEventListener('scroll', throttledHandler, { passive: true });
  
  // Listen for hash changes (manual URL editing)
  window.addEventListener('hashchange', handleHashChange);

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', throttledHandler);
    window.removeEventListener('hashchange', handleHashChange);
  };
};

/**
 * Utility to check if an element is in viewport
 * @param element - Element to check
 * @param threshold - Percentage of element that should be visible (0-1)
 * @returns Boolean indicating if element is in viewport
 */
export const isElementInViewport = (
  element: HTMLElement,
  threshold: number = 0.1
): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticalVisible = (rect.top <= windowHeight * (1 - threshold)) && 
                         ((rect.top + rect.height) >= windowHeight * threshold);
  const horizontalVisible = (rect.left <= windowWidth * (1 - threshold)) && 
                           ((rect.left + rect.width) >= windowWidth * threshold);

  return verticalVisible && horizontalVisible;
};

/**
 * Smooth scroll to top of page
 * @param behavior - Scroll behavior
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({
    top: 0,
    behavior
  });
};

/**
 * Get scroll progress as percentage
 * @returns Scroll progress from 0 to 100
 */
export const getScrollProgress = (): number => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return (winScroll / height) * 100;
};

/**
 * Debounce function for scroll events
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: never[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
