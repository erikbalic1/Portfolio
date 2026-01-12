<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Projects</h2>
      
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index" 
             data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <a :href="project.link" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="(tag, i) in project.tags" :key="i" class="tag">{{ tag }}</span>
            </div>
            <a :href="project.github" class="github-button" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Thesis Work: WheelWise',
          description: 'My thesis work for the Faculty of Informatics at the University of Debrecen. A web application based on car selling and AI advising.',
          image: 'src/assets/styles/photo/WheelWise.png',
          link: '#',
          github: 'https://github.com/erikbalic1/WheelWise',
          tags: ['React.js', 'Node.js', 'MongoDB']
        },
        {
          title: 'ReserveIT',
          description: 'A real-time reservation system for restaurants with user authentication and admin panel made for an university assignment for Web Development course.',
          image: 'src/assets/styles/photo/ReserveIT.png',
          link: '#',
          github: 'https://github.com/erikbalic1/ReserveIT',
          tags: ['React.js', 'Node.js', 'MongoDB']
        },
        {
          title: 'Portfolio Website',
          description: 'Modern and responsive portfolio website with smooth animations, where I showcase my projects and skills.',
          image: 'src/assets/styles/photo/Portfolio.png',
          link: '#',
          github: 'https://github.com/erikbalic1/Portfolio',
          tags: ['Vue.js', 'SCSS', 'AOS']
        },
        {
          title: 'World of Words',
          description: 'Group project for the Software Methodology course, on which I have done the front end side. A vocabulary learning web application with spaced repetition.',
          image: 'src/assets/styles/photo/WorldOfWords.png',
          link: '#',
          github: 'https://github.com/erikbalic1/World-Of-Words',
          tags: ['React.js', 'SpringBoot', 'MongoDB']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.projects {
  padding: 5rem $spacing-large;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
    color: var(--text-color);
    transition: color 0.3s ease;

    @media (max-width: $breakpoint-mobile) {
      font-size: 2rem;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background-color: var(--card-bg);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid var(--card-border);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(78, 204, 163, 0.1) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-10px);
      border-color: rgba(78, 204, 163, 0.5);
      box-shadow: 0 10px 25px rgba(78, 204, 163, 0.3);

      &::after {
        opacity: 1;
      }

      .project-overlay {
        opacity: 1;
      }

      .project-image img {
        transform: scale(1.1);
      }
    }

    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(26, 26, 26, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;

        .project-link {
          padding: $spacing-medium $spacing-large;
          background-color: $secondary-color;
          color: $primary-color;
          font-weight: bold;
          border-radius: 0.5rem;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }

    .project-content {
      padding: 1.5rem;
      position: relative;
      z-index: 1;

      h3 {
        font-size: 1.5rem;
        margin-bottom: $spacing-small;
        color: var(--text-color);
        transition: color 0.3s ease;
      }

      p {
        color: var(--text-secondary);
        margin-bottom: $spacing-medium;
        line-height: 1.6;
        transition: color 0.3s ease;
      }

      .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: $spacing-medium;

        .tag {
          background-color: rgba(78, 204, 163, 0.2);
          color: $secondary-color;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          border: 1px solid rgba(78, 204, 163, 0.3);
        }
      }

      .github-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.625rem 1.25rem;
        background-color: $secondary-color;
        color: $primary-color;
        border: 1px solid $secondary-color;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        z-index: 10;
        svg {
          width: 16px;
          height: 16px;
        }

        &:hover {
          background-color: transparent;
          color: $secondary-color;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(78, 204, 163, 0.3);
        }
      }
    }
  }
}
</style>
