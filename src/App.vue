<template>
  <div id="app">
    <h1>Portfolio</h1>
    <p>Welcome to my portfolio website</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import './assets/styles/variables.scss';

#app {
  font-family: $font-family;
  text-align: center;
  color: $text-color;
  margin-top: 60px;
}
</style>
