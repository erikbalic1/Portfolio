<template>
  <transition name="fade">
    <button 
      v-if="showButton" 
      @click="scrollToTop" 
      class="scroll-to-top"
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      showButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background-color: $secondary-color;
  color: $primary-color;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(78, 204, 163, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9000;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(78, 204, 163, 0.5);
    animation: morphButton 4s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: $breakpoint-mobile) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }
}

@keyframes morphButton {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
  }
  75% {
    border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
