/**
 * Main Entry Point - TypeScript Version
 * Enhanced with error boundaries and performance optimizations
 * @author Caner Coşkun
 * @version 2.0.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Enhanced error handling for development
if (import.meta.env.DEV) {
  console.log(`🚀 Portfolio v${__APP_VERSION__} - Built at ${__BUILD_TIME__}`);
}

// Get root element with proper type safety
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Make sure you have a div with id="root" in your HTML.');
}

// Create root with enhanced error handling
const root = createRoot(rootElement);

// Render app with strict mode for development checks
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
