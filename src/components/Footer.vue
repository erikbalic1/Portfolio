<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} balicerik. All rights reserved.</p>
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
  background-color: rgba(26, 26, 26, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  padding: $spacing-large;
  margin-top: auto;
}
</style>
