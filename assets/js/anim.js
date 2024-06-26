
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

// /***  TO TOGGLE the menu  ***/


//   document.querySelector('.burger-btn').addEventListener('click', function() {
//     const menu = document.querySelector('.dropdown-content');
//     if (menu.style.display === "flex") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "flex";
//         menu.style.flexDirection = "column";
//     }
//   });

/*** DROPDOWN menu ***/
// quand l'utilisateur clique sur le bouton burger, le menu s'affiche
document.querySelector('.burger-btn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

// quand l'utilisateur clique en dehors des onglets du menu, le menu disparaît
// document.addEventListener('click', function(event) { 
// window.onclick = function(event) {
//     if (!event.target.matches('burgerBtn')) {
//             let dropdowns = document.getElementById('burgerMenu');
//             let i;
//             for (i = 0; i < dropdowns.length; i++) {
//                 let openDropdown = dropdowns[i];
//                 if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//                 }
//             }
//     }
// };





