// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Pop-up when clicking "Contact Seller" buttons
  document.querySelectorAll('.car button').forEach(button => {
    button.addEventListener('click', function() {
      alert('Merci de votre intérêt ! Nous vous contacterons sous peu.');
    });
  });
  
  // Basic form validation
  const formElements = document.querySelectorAll('form');
  formElements.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '#ccc';
        }
      });

      if (!valid) {
        e.preventDefault();
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    });
  });
  
  // Simple page load animation
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1.5s";
      document.body.style.opacity = 1;
    }, 100);
  });
  // Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Pop-up when clicking "Contact Seller" buttons
  document.querySelectorAll('.car button').forEach(button => {
    button.addEventListener('click', function() {
      alert('Merci de votre intérêt ! Nous vous contacterons sous peu.');
    });
  });
  
  // Basic form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '#ccc';
        }
      });
  
      if (!valid) {
        e.preventDefault();
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    });
  });
  
  // Simple page load animation
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1.5s";
      document.body.style.opacity = 1;
    }, 100);
  });
  
  // Scroll animations (for car listings)
  const cars = document.querySelectorAll('.car');
  const carObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });
  
  cars.forEach(car => carObserver.observe(car));
  
  // Scroll to top button
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.textContent = '↑';
  scrollTopBtn.classList.add('scroll-top-btn');
  document.body.appendChild(scrollTopBtn);
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  
  let currentSlide = 0;
  const slides = document.querySelectorAll('.car');
  const totalSlides = slides.length;
  
  function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
  
    slides.forEach((slide, i) => {
      slide.style.display = i === currentSlide ? 'block' : 'none';
    });
  }
  
  showSlide(currentSlide);
  
  setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000); 