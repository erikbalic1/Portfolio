<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import ScrollToTop from './components/ScrollToTop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Hero,
    About,
    Projects,
    Contact,
    ScrollToTop
  }
}
</script>

<style lang="scss" scoped>
@import './assets/styles/variables.scss';

#app {
  font-family: $font-family;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
}

.main-content {
  flex: 1 0 auto;
  margin-top: 60px;
  width: 100%;
}
</style>
