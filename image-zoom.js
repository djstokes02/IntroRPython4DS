document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.quarto-figure img');
  
  images.forEach(img => {
    img.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
    
    // Add keyboard support for accessibility
    img.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.classList.toggle('zoomed');
      }
      if (e.key === 'Escape') {
        this.classList.remove('zoomed');
      }
    });
    
    // Make images focusable for keyboard navigation
    img.setAttribute('tabindex', '0');
  });
  
  // Close zoom when clicking outside the image
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.quarto-figure')) {
      const zoomedImages = document.querySelectorAll('.quarto-figure img.zoomed');
      zoomedImages.forEach(img => {
        img.classList.remove('zoomed');
      });
    }
  });
  
  // Close zoom on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const zoomedImages = document.querySelectorAll('.quarto-figure img.zoomed');
      zoomedImages.forEach(img => {
        img.classList.remove('zoomed');
      });
    }
  });
});