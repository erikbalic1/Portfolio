<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-column">
        <p>&copy; {{ currentYear }} All rights reserved.</p>
      </div>
      <div class="footer-column">
        <p>Designed & Built by <strong>Erik Balic</strong></p>
      </div>
      <div class="footer-column">
        <a href="https://github.com/erikbalic1/Portfolio" target="_blank" rel="noopener noreferrer" class="source-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View Source Code
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.footer {
  flex-shrink: 0;
  background-color: var(--footer-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--text-color);
  padding: $spacing-large;
  margin-top: auto;
  transition: background-color 0.3s ease, color 0.3s ease;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-medium;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;

    @media (max-width: $breakpoint-tablet) {
      grid-template-columns: 1fr;
      gap: $spacing-small;
      text-align: center;
    }
  }

  .footer-column {
    p {
      margin: 0;
      color: var(--text-secondary);
      transition: color 0.3s ease;

      strong {
        color: var(--text-color);
      }
    }

    &:nth-child(2) {
      text-align: center;

      @media (max-width: $breakpoint-tablet) {
        text-align: center;
      }
    }

    &:nth-child(3) {
      text-align: right;

      @media (max-width: $breakpoint-tablet) {
        text-align: center;
      }
    }
  }

  .source-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: $secondary-color;
    transition: all 0.3s ease;
    text-decoration: none;

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      color: lighten($secondary-color, 10%);

      svg {
        transform: scale(1.1);
      }
    }
  }
}
</style>
