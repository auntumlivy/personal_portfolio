// NAVBAR SCROLL
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// FILTER PORTFOLIO
function filterProject(btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    const cat = card.getAttribute('data-category');
    if (category === 'semua' || cat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// SCROLL ANIMATION CARD
const cards = document.querySelectorAll('.project-card');

if (cards.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}

// VALIDASI FORM CONTACT
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function(e) {
    const nama  = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    if (!nama || !email || !pesan) {
      e.preventDefault();
      alert('Semua field wajib diisi!');
    }
  });
}