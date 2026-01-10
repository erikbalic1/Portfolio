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
              <a :href="project.link" class="project-link" target="_blank">View Project</a>
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="(tag, i) in project.tags" :key="i" class="tag">{{ tag }}</span>
            </div>
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
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
          image: 'https://via.placeholder.com/400x300',
          link: '#',
          tags: ['Vue.js', 'Node.js', 'MongoDB']
        },
        {
          title: 'Social Media App',
          description: 'Real-time social networking platform with chat and notifications.',
          image: 'https://via.placeholder.com/400x300',
          link: '#',
          tags: ['React', 'Firebase', 'WebSockets']
        },
        {
          title: 'Portfolio Website',
          description: 'Modern and responsive portfolio website with smooth animations.',
          image: 'https://via.placeholder.com/400x300',
          link: '#',
          tags: ['Vue.js', 'SCSS', 'AOS']
        },
        {
          title: 'Task Management',
          description: 'Collaborative task management tool with team features.',
          image: 'https://via.placeholder.com/400x300',
          link: '#',
          tags: ['Vue.js', 'Express', 'PostgreSQL']
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
    color: $text-color;

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
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(78, 204, 163, 0.1);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

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

      h3 {
        font-size: 1.5rem;
        margin-bottom: $spacing-small;
        color: $text-color;
      }

      p {
        color: rgba(224, 224, 224, 0.7);
        margin-bottom: $spacing-medium;
        line-height: 1.6;
      }

      .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tag {
          background-color: rgba(78, 204, 163, 0.2);
          color: $secondary-color;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          border: 1px solid rgba(78, 204, 163, 0.3);
        }
      }
    }
  }
}
</style>
