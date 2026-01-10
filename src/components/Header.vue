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
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: isMenuOpen }">
        <ul class="mobile-nav-links">
          <li v-for="(link, index) in navLinks" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <a :href="link.href" @click="toggleMenu">{{ link.text }}</a>
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
      navLinks: [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' },
        { text: 'Skills', href: '#skills' },
        { text: 'Projects', href: '#projects' },
        { text: 'Contact', href: '#contact' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.header {
  background-color: rgba(26, 26, 26, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: $spacing-medium $spacing-large;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      color: white;
      font-size: $font-size-large;
      font-weight: bold;
      z-index: 1001;

      .highlight {
        color: $secondary-color;
      }
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: $spacing-large;

      a {
        color: white;
        position: relative;
        padding-bottom: 5px;
        font-size: $font-size-medium;
        
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

      @media (max-width: $breakpoint-mobile) {
        display: none;
      }
    }

    // Hamburger Menu
    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      z-index: 1001;
      gap: 5px;

      @media (max-width: $breakpoint-mobile) {
        display: flex;
      }

      span {
        width: 25px;
        height: 3px;
        background-color: white;
        transition: all 0.3s ease;
        border-radius: 3px;
      }

      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        span:nth-child(2) {
          opacity: 0;
        }

        span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }
      }
    }

    // Mobile Menu
    .mobile-menu {
      position: fixed;
      top: 0;
      left: -100%;
      width: 70%;
      height: 100vh;
      background-color: rgba(26, 26, 26, 0.98);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: left 0.4s ease;
      padding-top: 80px;

      &.open {
        left: 0;
      }

      .mobile-nav-links {
        list-style: none;
        padding: $spacing-large;

        li {
          opacity: 0;
          transform: translateX(-20px);
          animation: fadeInSlide 0.5s ease forwards;

          a {
            display: block;
            color: white;
            font-size: 1.5rem;
            padding: $spacing-medium 0;
            position: relative;

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
