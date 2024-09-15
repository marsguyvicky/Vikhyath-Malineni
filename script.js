// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Smooth scrolling to the Projects section
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

// Mouse cursor effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});
