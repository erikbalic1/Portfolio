import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

// Scroll to top on page reload
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0)
})

// Ensure page starts at top
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)
