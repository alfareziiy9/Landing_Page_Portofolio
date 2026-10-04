/*=============== BLUR HEADER ON SCROLL ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY >= 50) {
      header.classList.add('blur-header');
    } else {
      header.classList.remove('blur-header');
    }
  }
};
window.addEventListener('scroll', blurHeader);
document.addEventListener('DOMContentLoaded', blurHeader);

/*=============== CLOSE MOBILE MENU ON LINK CLICK ===============*/
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navCollapse = document.getElementById('navMenu');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 140;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(`.navbar-nav a[href*='${sectionId}']`);

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active');
      } else {
        sectionsClass.classList.remove('active');
      }
    }
  });
};
window.addEventListener('scroll', scrollActive);
document.addEventListener('DOMContentLoaded', scrollActive);

/*=============== SHOW SCROLL UP BUTTON ===============*/
const scrollUp = () => {
  const scrollUpElement = document.getElementById('scroll-up');
  if (scrollUpElement) {
    if (window.scrollY >= 350) {
      scrollUpElement.classList.add('show-scroll');
    } else {
      scrollUpElement.classList.remove('show-scroll');
    }
  }
};
window.addEventListener('scroll', scrollUp);

/*=============== CONTACT FORM SUBMISSION ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm && contactMessage) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    contactMessage.textContent = 'Message sent successfully';
    contactMessage.className = 'contact__message text-center mt-3 mb-0 success';

    // Reset input fields
    contactForm.reset();

    // Remove message after 5 seconds
    setTimeout(() => {
      contactMessage.textContent = '';
      contactMessage.className = 'contact__message text-center mt-3 mb-0';
    }, 5000);
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '25px',
    duration: 800,
    delay: 100,
    viewFactor: 0.05,
    reset: false
  });

  sr.reveal('.home__data, .about__image, .skills__data');
  sr.reveal('.home__image, .about__data, .skills__content', { origin: 'bottom', delay: 150 });
  sr.reveal('.services__card', { interval: 60 });
  sr.reveal('.projects__card', { interval: 60 });
  sr.reveal('.contact__form', { delay: 100 });
}
