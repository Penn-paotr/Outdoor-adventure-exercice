
/*** TRANSLATION du bouton  /de la popup customize à l'ouverture ***/

// Capture de l'évenement de chargement de la page
document.addEventListener('DOMContentLoaded', function() {     
    // Ciblage du bouton customize   
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


/*** TRANSFORMATION en X du bouton du menu hamburger à la fermeture ***/
document.querySelector('.burger-btn').addEventListener('click', function() {
    const  burgerBtn = document.querySelector('.burger-btn');
    burgerBtn.classList.toggle("transform");
});

/***  TO TOGGLE the menu  ***/

function toggleMenu() {
    var menu = document.getElementsByClassName("mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
  }
document.querySelector('.burger-btn').addEventListener('click', toggleMenu)







