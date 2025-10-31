const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const currentYear = document.getElementById('current-year');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const searchBar = document.querySelector('.search-bar');
if (searchBar) {
  searchBar.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = searchBar.querySelector('input');
    if (!input) return;
    const query = input.value.trim();
    if (query.length === 0) {
      input.focus();
      return;
    }
    const encodedQuery = encodeURIComponent(query);
    window.open(`https://www.fiverr.com/search/gigs?query=${encodedQuery}`, '_blank');
  });
}

const testimonialCards = document.querySelectorAll('.testimonial-card');
let activeIndex = 0;

const highlightCard = (index) => {
  testimonialCards.forEach((card, cardIndex) => {
    card.classList.toggle('active', cardIndex === index);
  });
};

if (testimonialCards.length > 0) {
  highlightCard(activeIndex);
  setInterval(() => {
    activeIndex = (activeIndex + 1) % testimonialCards.length;
    highlightCard(activeIndex);
  }, 6000);
}
