<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Portfolio. All rights reserved.</p>
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
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding: $spacing-large;
  margin-top: auto;
}
</style>
