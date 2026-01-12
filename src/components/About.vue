<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">About Me</h2>
      
      <div class="about-grid">
        <!-- Languages -->
        <div class="about-card" data-aos="fade-up" data-aos-delay="200">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3>Languages</h3>
          <ul class="info-list">
            <li>Hungarian - Native</li>
            <li>English - B2</li>
            <li>Romanian - B2</li>
          </ul>
        </div>

        <!-- Education -->
        <div class="about-card" data-aos="fade-up" data-aos-delay="300">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <h3>Education</h3>
          <div class="education-item">
            <h4>High School</h4>
            <p class="school">Leowey Klara</p>
            <p class="date">2019 - 2023</p>
          </div>
          <div class="education-item">
            <h4>University</h4>
            <p class="school">University of Debrecen</p>
            <p class="date">2023 - Present</p>
          </div>
        </div>

        <!-- Work Experience -->
        <div class="about-card" data-aos="fade-up" data-aos-delay="400">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h3>Work Experience</h3>
          <div class="experience-item">
            <h4>Webshop Assistant</h4>
            <p class="company">Diplus Hungary Kft.</p>
            <p class="date">2025.09.12 - 2025.12.12</p>
            <ul class="duties-list">
              <li>Created and published individual web pages for the entire product catalog.</li>
              <li>Identified and solved logistical problems to ensure smooth product deliveries.</li>
              <li>Resolved customer inquiries regarding deliveries and order status via phone and email.</li>
            </ul>
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
      color: $secondary-color;
      margin-bottom: $spacing-medium;
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
