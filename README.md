# 🌐 Erik Balic - Portfolio Website

A modern, responsive portfolio website built with Vue.js, showcasing my skills, projects, and professional journey. Features a sleek dark/light theme toggle, smooth animations, and an elegant design.

## ✨ Features

- **🎨 Theme Switcher**: Seamlessly toggle between dark and light modes with a custom toggle switch
- **📱 Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **🎭 Smooth Animations**: Enhanced user experience with AOS (Animate On Scroll) library
- **🎯 Single Page Application**: Fast navigation with smooth scrolling between sections
- **💼 Project Showcase**: Display of key projects with GitHub integration
- **📧 Contact Section**: Easy-to-use contact form with social media links
- **🍔 Mobile Navigation**: Sleek hamburger menu for mobile devices

## 🛠️ Built With

- **[Vue.js 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[SCSS](https://sass-lang.com/)** - CSS preprocessor for modern styling
- **[AOS](https://michalsnik.github.io/aos/)** - Animate on scroll library
- **HTML5 & CSS3** - Modern web standards

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── main.scss          # Global styles and theme variables
│   │       ├── variables.scss     # SCSS variables (colors, spacing, etc.)
│   │       └── photo/             # Image assets
│   ├── components/
│   │   ├── Header.vue             # Navigation bar with theme toggle
│   │   ├── Hero.vue               # Landing section
│   │   ├── About.vue              # About section with skills
│   │   ├── Projects.vue           # Projects showcase
│   │   ├── Contact.vue            # Contact form and info
│   │   ├── Footer.vue             # Footer with copyright and links
│   │   └── ScrollToTop.vue        # Scroll to top button
│   ├── App.vue                    # Main app component
│   └── main.js                    # Application entry point
├── index.html                     # HTML entry point
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
└── README.md                      # Project documentation

```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/erikbalic1/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Theme System

The website features a custom theme system with two modes:

- **Dark Mode (Default)**: Easy on the eyes with a dark background and light text
- **Light Mode**: Clean and bright with a light background and dark text

The theme preference is applied instantly via CSS custom properties for smooth transitions.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔗 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Skills, experience, and education
3. **Projects** - Showcase of key projects with links to GitHub
4. **Contact** - Contact form and social media links

## 🌟 Key Components

### Theme Toggle
- Custom toggle switch with animated dot
- Persistent across all components
- Smooth color transitions

### Navigation
- Fixed header with smooth scrolling
- Desktop horizontal menu
- Mobile hamburger menu with slide-in animation
- Auto-closes on desktop resize

### Projects
- Card-based layout
- Hover animations
- Direct links to GitHub repositories
- Technology tags for each project

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Erik Balic**

- GitHub: [@erikbalic1](https://github.com/erikbalic1)
- LinkedIn: [erikbalic1](https://www.linkedin.com/in/erikbalic1/)
- Facebook: [erikbalic1](https://www.facebook.com/erikbalic1)
- Email: erikbalic1@gmail.com

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Vite for blazing-fast development experience
- AOS library for smooth scroll animations
- All open-source contributors

---

⭐ **If you like this project, please give it a star!** ⭐
