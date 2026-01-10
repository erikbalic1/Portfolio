<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">About Me</h2>
      
      <div class="about-grid">
        <!-- Skills -->
        <div class="about-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-icon">💻</div>
          <h3>Skills</h3>
          <div class="skills-list">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">HTML/CSS</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">SCSS</span>
            <span class="skill-tag">Git</span>
          </div>
        </div>

        <!-- Languages -->
        <div class="about-card" data-aos="fade-up" data-aos-delay="200">
          <div class="card-icon">🌍</div>
          <h3>Languages</h3>
          <ul class="info-list">
            <li>English - Fluent</li>
            <li>Spanish - Native</li>
            <li>French - Intermediate</li>
          </ul>
        </div>

        <!-- Work Experience -->
        <div class="about-card" data-aos="fade-up" data-aos-delay="300">
          <div class="card-icon">💼</div>
          <h3>Work Experience</h3>
          <div class="experience-item">
            <h4>Senior Developer</h4>
            <p class="company">Tech Company</p>
            <p class="date">2020 - Present</p>
          </div>
          <div class="experience-item">
            <h4>Frontend Developer</h4>
            <p class="company">Startup Inc</p>
            <p class="date">2018 - 2020</p>
          </div>
        </div>

        <!-- Education -->
        <div class="about-card" data-aos="fade-up" data-aos-delay="400">
          <div class="card-icon">🎓</div>
          <h3>Education</h3>
          <div class="education-item">
            <h4>Computer Science</h4>
            <p class="school">University Name</p>
            <p class="date">2014 - 2018</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.about {
  padding: 5rem $spacing-large;
  background-color: rgba(255, 255, 255, 0.02);

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
    color: $text-color;

    @media (max-width: $breakpoint-mobile) {
      font-size: 2rem;
    }
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .about-card {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(78, 204, 163, 0.1);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(78, 204, 163, 0.1), transparent);
      transition: left 0.5s ease;
    }

    &:hover {
      transform: translateY(-10px);
      border-color: rgba(78, 204, 163, 0.5);
      box-shadow: 0 10px 25px rgba(78, 204, 163, 0.3);
      background-color: rgba(255, 255, 255, 0.08);

      &::before {
        left: 100%;
      }
    }

    .card-icon {
      font-size: 2.5rem;
      margin-bottom: $spacing-medium;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: $spacing-medium;
      color: $secondary-color;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .skill-tag {
        background-color: rgba(78, 204, 163, 0.2);
        color: $secondary-color;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        border: 1px solid rgba(78, 204, 163, 0.3);
      }
    }

    .info-list {
      list-style: none;
      
      li {
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        
        &:last-child {
          border-bottom: none;
        }
      }
    }

    .experience-item,
    .education-item {
      margin-bottom: $spacing-medium;

      &:last-child {
        margin-bottom: 0;
      }

      h4 {
        color: $text-color;
        margin-bottom: 0.25rem;
      }

      .company,
      .school {
        color: rgba(224, 224, 224, 0.7);
        font-size: 0.9rem;
      }

      .date {
        color: $secondary-color;
        font-size: 0.85rem;
        margin-top: 0.25rem;
      }
    }
  }
}
</style>
