<template>
  <section id="home" class="hero">
    <div class="hero-content" data-aos="fade-up">
      <div class="text-content" data-aos="fade-right" data-aos-delay="200">
        <h1 class="name">balic<span class="highlight">erik</span></h1>
        <p class="title">Full Stack Developer</p>
        <p class="bio">Passionate about creating beautiful and functional web experiences</p>
        <a href="#contact" class="cta-button" data-aos="fade-up" data-aos-delay="400">Get In Touch</a>
      </div>
      <div class="image-content" data-aos="fade-left" data-aos-delay="300">
        <div class="image-placeholder">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-large;

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    gap: 4rem;
    width: 100%;

    @media (max-width: $breakpoint-mobile) {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .text-content {
      flex: 1;

      .name {
        font-size: 4rem;
        margin-bottom: $spacing-medium;
        font-weight: bold;

        @media (max-width: $breakpoint-mobile) {
          font-size: 2.5rem;
        }

        .highlight {
          color: $secondary-color;
        }
      }

      .title {
        font-size: 1.5rem;
        color: $secondary-color;
        margin-bottom: $spacing-small;
      }

      .bio {
        font-size: 1.125rem;
        color: rgba(224, 224, 224, 0.8);
        margin-bottom: $spacing-large;
        line-height: 1.6;
      }

      .cta-button {
        display: inline-block;
        padding: $spacing-medium $spacing-large;
        background-color: $secondary-color;
        color: $primary-color;
        font-weight: bold;
        border-radius: 0.5rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(78, 204, 163, 0.3);
        }
      }
    }

    .image-content {
      flex: 1;
      display: flex;
      justify-content: center;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        height: 3px;
        background: linear-gradient(90deg, transparent, $secondary-color, transparent);

        @media (max-width: $breakpoint-mobile) {
          width: 280px;
        }
      }

      .image-placeholder {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid $secondary-color;
        background-color: $secondary-color;
        box-shadow: 0 10px 40px rgba(78, 204, 163, 0.2);
        animation: morphing 8s ease-in-out infinite;

        @media (max-width: $breakpoint-mobile) {
          width: 280px;
          height: 280px;
        }
      }
    }
  }
}

@keyframes morphing {
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
</style>
