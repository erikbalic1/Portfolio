<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">Portfolio</div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.header {
  background-color: $primary-color;
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
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: $spacing-large;

      a {
        color: white;

        &:hover {
          color: $secondary-color;
        }
      }
    }
  }
}
</style>
