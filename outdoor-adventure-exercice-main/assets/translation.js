
document.addEventListener('DOMContentLoaded', function() {
    const customizeBtn = document.querySelector('.customize-btn');
  
    // Initialement, le bouton est caché et positionné hors-écran dans stylesheet.css
    // Animation d'apparition en 2 secondes (transition 2s spécifiée dans stylesheet.css)
    customizeBtn.style.right = '0'; // Déplacement vers la gauche du bord
    customizeBtn.style.visibility = 'visible'; // Afficher le bouton
    customizeBtn.style.easing = 'easeInOutQuad'; // Fonction d'interpolation pour un mouvement fluide
  });

  document.querySelector('.customize-btn').addEventListener('click', function() {
    const customizeBtn = document.querySelector('.customize-btn');
    customizeBtn.style.right = '15.1rem'; // Déplacement vers la gauche de la popup
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    const customizeBtn = document.querySelector('.customize-btn');
    customizeBtn.style.right = '0'; // Déplacement vers la gauche de la popup
  });