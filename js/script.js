
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.carrera-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase 'active' de todos los botones
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'todos' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


   AOS.init({
    duration: 800,
    once: true
  });