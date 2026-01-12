<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Get In Touch</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Have a project in mind? Let's work together!
      </p>

      <div class="contact-content">
        <form class="contact-form" data-aos="fade-right" data-aos-delay="200">
          <div class="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>

        <div class="contact-info" data-aos="fade-left" data-aos-delay="300">
          <div class="info-item">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="info-content">
              <h4>Email</h4>
              <a href="mailto:erikbalic1@gmail.com">erikbalic1@gmail.com</a>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="info-content">
              <h4>Phone</h4>
              <a href="tel:+40748621282">+40 748 621 282</a>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="info-content">
              <h4>Location</h4>
              <p>Debrecen, Hungary</p>
            </div>
          </div>
          <div class="social-links">
            <a href="https://github.com/erikbalic1" class="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/erikbalic1/" class="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/erikbalic1" class="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.contact {
  padding: 5rem $spacing-large;
  background-color: rgba(255, 255, 255, 0.02);

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: $spacing-medium;
    color: $text-color;

    @media (max-width: $breakpoint-mobile) {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    text-align: center;
    color: rgba(224, 224, 224, 0.7);
    font-size: 1.125rem;
    margin-bottom: 4rem;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    @media (max-width: $breakpoint-mobile) {
      grid-template-columns: 1fr;
    }
  }

  .contact-form {
    .form-group {
      margin-bottom: $spacing-medium;

      input,
      textarea {
        width: 100%;
        padding: $spacing-medium;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(78, 204, 163, 0.2);
        border-radius: 0.5rem;
        color: $text-color;
        font-family: $font-family;
        font-size: 1rem;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: $secondary-color;
          background-color: rgba(255, 255, 255, 0.08);
        }

        &::placeholder {
          color: rgba(224, 224, 224, 0.5);
        }
      }

      textarea {
        resize: vertical;
      }
    }

    .submit-button {
      width: 100%;
      padding: $spacing-medium;
      background-color: $secondary-color;
      color: $primary-color;
      font-weight: bold;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(78, 204, 163, 0.3);
      }
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: $spacing-medium;
      padding: $spacing-medium;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 0.5rem;
      border: 1px solid rgba(78, 204, 163, 0.1);
      transition: all 0.3s ease;

      &:hover {
        border-color: rgba(78, 204, 163, 0.3);
        transform: translateX(5px);
      }

      .info-icon {
        color: $secondary-color;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 24px;
      }

      .info-content {
        flex: 1;

        h4 {
          color: $secondary-color;
          margin-bottom: 0.25rem;
        }

        a {
          color: $text-color;
          transition: color 0.3s ease;

          &:hover {
            color: $secondary-color;
          }
        }

        p {
          color: rgba(224, 224, 224, 0.7);
        }
      }
    }

    .social-links {
      display: flex;
      gap: $spacing-medium;
      flex-wrap: wrap;

      .social-link {
        padding: $spacing-small $spacing-medium;
        background-color: rgba(78, 204, 163, 0.1);
        color: $secondary-color;
        border: 1px solid rgba(78, 204, 163, 0.3);
        border-radius: 0.5rem;
        transition: all 0.3s ease;

        &:hover {
          background-color: $secondary-color;
          color: $primary-color;
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>
