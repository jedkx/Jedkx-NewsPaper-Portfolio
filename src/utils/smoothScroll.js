// 🔄 Smooth Scroll Utilities
// Gazete section'ları arasında yumuşak geçiş için

/**
 * Smooth scroll to element by ID
 * @param {string} elementId - Target element ID (without #)
 * @param {number} offset - Offset from top (optional)
 */
export const scrollToSection = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementTop = element.offsetTop - offset
  
  window.scrollTo({
    top: elementTop,
    behavior: 'smooth'
  })
}

/**
 * Handle navigation click events
 * @param {Event} event - Click event
 */
export const handleNavClick = (event) => {
  event.preventDefault()
  
  const href = event.target.getAttribute('href')
  if (href && href.startsWith('#')) {
    const sectionId = href.substring(1) // Remove #
    scrollToSection(sectionId)
    
    // Update active nav state
    updateActiveNavLink(event.target)
  }
}

/**
 * Update active navigation link
 * @param {Element} clickedLink - The clicked navigation link
 */
export const updateActiveNavLink = (clickedLink) => {
  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
  })
  
  // Add active class to clicked link
  clickedLink.classList.add('active')
}

/**
 * Initialize smooth scroll for all navigation links
 */
export const initSmoothScroll = () => {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavClick)
  })
}

/**
 * Cleanup smooth scroll event listeners
 */
export const cleanupSmoothScroll = () => {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.removeEventListener('click', handleNavClick)
  })
}
