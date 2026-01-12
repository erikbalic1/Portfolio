<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">balic<span class="highlight">erik</span></div>
      
      <!-- Hamburger Menu Icon -->
      <div 
        class="hamburger" 
        :class="{ active: isMenuOpen }" 
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Desktop Navigation -->
      <div class="nav-right">
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <!-- Theme Toggle Switch (Desktop) -->
        <div class="theme-toggle" @click="toggleTheme" :class="{ 'light': !isDarkMode }">
          <div class="toggle-dot"></div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: isMenuOpen }">
        <ul class="mobile-nav-links">
          <li v-for="(link, index) in navLinks" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <a :href="link.href" @click="toggleMenu">{{ link.text }}</a>
          </li>
          <li class="theme-toggle-mobile" :style="{ animationDelay: `${navLinks.length * 0.1}s` }">
            <div class="theme-toggle-wrapper">
              <span class="theme-label">{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
              <div class="theme-toggle-switch" @click="toggleTheme" :class="{ 'light': !isDarkMode }">
                <div class="toggle-dot"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      isDarkMode: true,
      navLinks: [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' },
        { text: 'Projects', href: '#projects' },
        { text: 'Contact', href: '#contact' }
      ]
    }
  },
  mounted() {
    // Always start in dark mode
    this.isDarkMode = true;
    document.documentElement.classList.add('dark');
    
    // Close mobile menu on resize to desktop
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 768 && this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.header {
  background-color: var(--header-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: $spacing-medium $spacing-large;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  transition: background-color 0.3s ease;

  @media (max-width: $breakpoint-mobile) {
    background-color: var(--header-bg);
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      color: var(--text-color);
      font-size: $font-size-large;
      font-weight: bold;
      z-index: 10001;
      position: relative;
      transition: color 0.3s ease;

      .highlight {
        color: $secondary-color;
      }
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: $spacing-medium;

      @media (max-width: $breakpoint-mobile) {
        display: none;
      }
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: $spacing-large;

      a {
        color: var(--text-color);
        position: relative;
        padding-bottom: 5px;
        font-size: $font-size-medium;
        transition: color 0.3s ease;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: $secondary-color;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover {

          color: $secondary-color;

          &::after {
            width: 100%;
          }
        }
      }
    }

    // Hamburger Menu
    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      z-index: 10001;
      gap: 5px;
      position: sticky;

      @media (max-width: $breakpoint-mobile) {
        display: flex;
      }

      span {
        width: 25px;
        height: 3px;
        background-color: var(--text-color);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border-radius: 3px;
        transform-origin: center;
      }

      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translateY(11px);
        }

        span:nth-child(2) {
          transform: scaleX(0);
          opacity: 0;
        }

        span:nth-child(3) {
          transform: rotate(-45deg) translateY(-11px);
        }
      }
    }

    // Theme Toggle Switch
    .theme-toggle {
      position: relative;
      width: 50px;
      height: 26px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 13px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid rgba(78, 204, 163, 0.3);

      &:hover {
        border-color: rgba(78, 204, 163, 0.5);
      }

      &.light {
        background: rgba(78, 204, 163, 0.2);

        .toggle-dot {
          transform: translateX(24px);
        }
      }

      .toggle-dot {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        background: $secondary-color;
        border-radius: 50%;
        transition: transform 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: $breakpoint-mobile) {
        display: none;
      }
    }

    // Mobile Menu
    .mobile-menu {
      position: fixed;
      top: 0;
      left: -100%;
      width: 70%;
      max-width: 300px;
      height: 100vh;
      background-color: var(--header-bg);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: left 0.4s ease, background-color 0.3s ease;
      padding-top: 100px;
      z-index: 9998;

      @media (max-width: $breakpoint-mobile) {
        display: block;
      }

      &.open {
        left: 0;
      }

      .mobile-nav-links {
        list-style: none;
        padding: $spacing-large;

        li {
          opacity: 0;
          transform: translateX(-20px);

          a {
            display: block;
            color: var(--text-color);
            font-size: 1.25rem;
            padding: $spacing-medium 0;
            position: relative;
            transition: color 0.3s ease;

            &::after {
              content: '';
              position: absolute;
              bottom: $spacing-small;
              left: 0;
              width: 0;
              height: 2px;
              background-color: $secondary-color;
              transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            &:hover {
              &::after {
                width: 100%;
              }
            }
          }
        }

        &.open li {
          animation: fadeInSlide 0.5s ease forwards;
        }
      }

      &.open .mobile-nav-links li {
        animation: fadeInSlide 0.5s ease forwards;
      }

      .theme-toggle-mobile {
        margin-top: $spacing-medium;
        padding-top: $spacing-medium;
        border-top: 1px solid rgba(78, 204, 163, 0.2);

        .theme-toggle-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: $spacing-small 0;

          .theme-label {
            color: var(--text-color);
            font-size: 1rem;
            transition: color 0.3s ease;
          }

          .theme-toggle-switch {
            position: relative;
            width: 50px;
            height: 26px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 13px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(78, 204, 163, 0.3);

            &:hover {
              border-color: rgba(78, 204, 163, 0.5);
            }

            &.light {
              background: rgba(78, 204, 163, 0.2);

              .toggle-dot {
                transform: translateX(24px);
              }
            }

            .toggle-dot {
              position: absolute;
              top: 2px;
              left: 2px;
              width: 18px;
              height: 18px;
              background: $secondary-color;
              border-radius: 50%;
              transition: transform 0.3s ease;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
}

@keyframes fadeInSlide {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
