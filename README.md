# 📰 Jedkx NewsPaper Portfolio

> A vintage newspaper-themed portfolio showcasing modern software engineering skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-purple.svg)](https://vitejs.dev/)

## 📸 Preview

<div align="center">
  <img src="./src/assets/developer-daily-preview.png" alt="Developer Daily - Vintage Newspaper Portfolio Preview" width="800">
  <p><em>Authentic 1880s newspaper design meets modern web development</em></p>
</div>

## 🌟 Live Demo

**<a href="https://jedkx.github.io/Jedkx-NewsPaper-Portfolio" target="_blank">Visit Portfolio →</a>**

## 📋 About

Professional portfolio website featuring a vintage newspaper design, built with modern technologies. Showcases my journey as a Software Engineering student and full-stack developer.

> **🚀 Recently Upgraded:** Complete TypeScript migration with modern component architecture, enhanced navigation, and production-ready optimizations!

### 👨‍💻 Profile
- **Name:** Caner Coşkun
- **Role:** Software Engineering Student & Full-Stack Developer
- **University:** Atılım University (Expected graduation: June 2026)
- **Current Position:** Software Engineering Intern at Belsis
- **Experience:** 6+ years in video editing, cybersecurity certified

## 🚀 Features

- **🎨 Vintage Newspaper Design** - Authentic 1880s newspaper aesthetic with modern UX
- **📱 Fully Responsive** - Optimized for all devices with adaptive layouts
- **⚡ High Performance** - Vite build optimization with code splitting
- **🔒 Type Safety** - Full TypeScript integration with strict checking
- **🎯 Smart Navigation** - Smooth scroll with section-aware navigation
- **📊 Project Showcase** - Interactive project cards with GitHub integration
- **🔍 SEO Optimized** - Complete meta tags and Open Graph support
- **♿ Accessible** - Semantic HTML structure with ARIA labels
- **🛡️ Error Handling** - Robust error boundaries with themed fallbacks
- **🏗️ Modern Architecture** - Component-based design with clean separation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest UI library with enhanced performance
- **TypeScript 5.6** - Full type safety and developer experience
- **Vite 7** - Fast build tool with HMR and optimization
- **Modern CSS** - Custom properties, Grid, Flexbox, responsive design

### Development Tools
- **ESLint 9** - Code quality with TypeScript integration
- **Path Aliases** - Clean imports with @/ prefix
- **Error Boundaries** - Robust error handling
- **Component Architecture** - Modular, reusable components

### Build & Deploy
- **GitHub Pages** - Automated deployment
- **Code Splitting** - Optimized bundle sizes
- **Asset Optimization** - Image and CSS optimization

## 🏃‍♂️ Quick Start

```bash
# Clone repository
git clone https://github.com/jedkx/Jedkx-NewsPaper-Portfolio.git
cd Jedkx-NewsPaper-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: http://localhost:3000

## 📦 Scripts

```bash
npm run dev          # Start development server with TypeScript
npm run build        # Build for production (TypeScript + Vite)
npm run preview      # Preview production build
npm run lint         # Check code quality (ESLint + TypeScript)
npm run lint:fix     # Fix linting issues automatically
npm run type-check   # Run TypeScript type checking
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com/jedkx) and create a new repository: `Jedkx-NewsPaper-Portfolio`
2. Make it **public**

### Step 2: Upload Code
```bash
# Navigate to your project
cd "your-project-folder"

# Initialize git
git init
git add .
git commit -m "Initial commit: Vintage newspaper portfolio"

# Connect to GitHub
git remote add origin https://github.com/jedkx/Jedkx-NewsPaper-Portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Click **Pages** section
3. Under **Source**, select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **Save**

### Step 4: Build & Deploy
```bash
npm run build
```

Your site will be live at: **https://jedkx.github.io/Jedkx-NewsPaper-Portfolio**

> Takes 5-10 minutes to deploy after pushing to GitHub

## 📁 Project Structure

```
src/
├── components/           # React components (TypeScript)
│   ├── layout/          # Header, Footer components
│   │   ├── NewspaperHeader.tsx
│   │   ├── NewspaperFooter.tsx
│   │   └── index.ts     # Barrel exports
│   ├── sections/        # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── index.ts
│   ├── ui/              # Reusable UI components
│   │   ├── ArticleCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── index.ts
│   ├── ErrorBoundary.tsx # Error handling
│   └── index.ts         # Main barrel export
├── lib/                 # Business logic & utilities
│   ├── data.ts          # Portfolio configuration
│   └── scroll.ts        # Smooth scroll utilities
├── types/               # TypeScript definitions
│   ├── index.ts         # Core types
│   └── global.d.ts      # Global declarations
├── styles/              # CSS files
│   ├── newspaper.css    # Main theme
│   ├── typography.css   # Typography
│   └── layout.css       # Layout utilities
├── assets/              # Images, icons, SVGs
├── App.tsx              # Main component (TypeScript)
├── main.tsx             # Entry point (TypeScript)
└── index.css            # Global styles
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/newspaper.css`:
```css
:root {
  --color-primary: #2C1810;
  --color-gold: #D4AF37;
  --color-paper: #F5F1E8;
}
```

### Content
Update portfolio data in `src/lib/data.ts`:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... other fields
};

export const projects: Project[] = [
  // Your projects
];
```

### Components
All components are in TypeScript with full type safety:
```typescript
// Example: Adding a new section
export const CustomSection: FC<CustomSectionProps> = ({ className }) => {
  return (
    <ArticleCard
      title="Your Section"
      category="CUSTOM"
      // ... props
    >
      {/* Your content */}
    </ArticleCard>
  );
};
```

## 📊 Performance

- **🏗️ Modern Architecture** - TypeScript + Component-based design
- **⚡ Fast Build** - Vite with code splitting and optimization
- **📦 Lightweight** - ~200KB gzipped (optimized bundles)
- **🚀 Type Safety** - Zero runtime type errors
- **📱 Mobile Optimized** - Responsive design with performance focus
- **🔍 SEO Ready** - Complete meta tags and structured data

## 🔧 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers

## 📞 Contact

**Caner Coşkun**
- Portfolio: [jedkx.github.io/Jedkx-NewsPaper-Portfolio](https://jedkx.github.io/Jedkx-NewsPaper-Portfolio)
- GitHub: [@jedkx](https://github.com/jedkx)
- Email: ccoskun742@gmail.com

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository if you found it helpful!**
