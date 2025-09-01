# Portfolio Production Deployment

## Build Instructions

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ or yarn 1.22+

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Code Quality
```bash
npm run lint
npm run lint:fix
```

## Deployment

### Build Output
The `dist/` folder contains the production-ready static files:
- Optimized and minified HTML, CSS, JS
- Compressed images and assets
- Service worker for PWA features
- Source maps for debugging (in dev mode)

### Performance Features
- **Code Splitting**: Vendor libraries separated for better caching
- **Tree Shaking**: Unused code eliminated
- **Asset Optimization**: Images optimized and compressed
- **Lazy Loading**: Components loaded on demand
- **PWA Ready**: Manifest and service worker included

### SEO Features
- **Meta Tags**: Comprehensive meta tag configuration
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling rules

### Accessibility Features
- **ARIA Labels**: Comprehensive accessibility labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Optimized for assistive technologies
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Proper focus indicators

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Deployment Targets
- **Netlify**: `npm run build` → Deploy `dist/` folder
- **Vercel**: Auto-deploy from Git repository
- **GitHub Pages**: Static site deployment
- **AWS S3**: Static website hosting
- **Azure Static Web Apps**: Automatic deployment

## File Structure
```
dist/
├── assets/
│   ├── vendor-[hash].js     # Third-party libraries
│   ├── index-[hash].js      # Application code
│   └── index-[hash].css     # Compiled styles
├── index.html               # Main HTML file
├── site.webmanifest         # PWA manifest
└── [various icon files]     # Favicon and app icons
```

## Performance Metrics Target
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.8s
- **Lighthouse Score**: 90+ (all categories)

## Security Features
- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Secure connection required
- **X-Frame-Options**: Clickjacking protection
- **X-Content-Type-Options**: MIME type sniffing protection
