<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <h1>balicerik</h1>
      <p>Welcome to my portfolio website</p>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
}

.main-content {
  flex: 1 0 auto;
  text-align: center;
  margin-top: 80px;
  padding: $spacing-large;
}
</style>
