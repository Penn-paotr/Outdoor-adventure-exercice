/* ***  Customizing BUTTON by embeding HTML tag in previous HTML tag *** */

const customizeAnchor = document.createElement('a');
customizeAnchor.href = '#customizePopup';

const customizeBtn = document.createElement('button');
customizeBtn.classList.add('customize-btn');
customizeAnchor.appendChild(customizeBtn);

const bluePalette = document.createElement('img');
bluePalette.classList.add('blue-palette');
bluePalette.src = 'assets/images/homepage/blue-palette.png';
bluePalette.alt = 'bouton palette par défaut';
customizeBtn.appendChild(bluePalette);

const whitePalette = document.createElement('img');
whitePalette.classList.add('white-palette');
whitePalette.src = 'assets/images/homepage/white-palette.png';
whitePalette.alt = 'bouton palette survolé';
bluePalette.appendChild(whitePalette);

const customizeText = document.createElement('span');
customizeText.textContent = 'Customize';
whitePalette.appendChild(customizeText);

const customizePopup = document.createElement('div');
customizePopup.id = 'customizePopup';
customizePopup.classList.add('customize-popup');

// Get the body and header HTML tags
const body = document.body;
const header = document.querySelector('header');

// Insert the containing element customizeAnchor before the header :
if (header) {
    body.insertBefore(customizeAnchor, header);
  } else {
    console.error('Header element not found. Element appended to body.');
    body.appendChild(customizeAnchor);
  }

// Insert  customizePopup after customizeAnchor
customizeAnchor.insertAdjacentElement("afterend", customizePopup);


/* ***  Customizing POPUP by innerHTML method and concatenation *** */

customizePopup.innerHTML = '<div class="popup-header">'+
                    '<h3>Outdoor Adventure</h3>'+
                    '<a href="#"><button class="close">&times;</button></a>'+
                '</div>'+
                '<div class="popup-container">'+
                    '<p>Use the template as-is or try different colors and fonts from the options below.</p>'+
                    '<div class="other-colors">'+
                        '<div class="colors-title">'+
                            '<h4>Try Other Colors</h4>'+
                            '<span class="default">Default</span>'+
                        '</div>'+            
                        '<div class="colors-grid">'+
                            '<div class="default-title c1">'+
                                '<span>default colors</span>'+
                               '<div class="default-set c2">'+
                                    '<div class="ball"></div>'+
                                    '<div class="ball"></div>'+
                                    '<div class="ball"></div>'+
                                    '<div class="ball"></div>'+
                                    '<div class="ball"></div>'+
                                '</div>'+
                            '</div>'+                    
                            '<div class="colors-item c3">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'
                            '<div class="colors-item c4">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c5">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c6">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c7">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c8">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c9">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c10">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c11">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c12">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c13">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c14">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c15">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                            '<div class="colors-item c16">'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                                '<div class="ball"></div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="other-fonts">'+
                        '<div class="fonts-title">'+
                            '<h4>Try Other Fonts</h4>'+
                            '<span class="default">Default</span>'+
                        '</div>'+    
                        '<div class="fonts-grid">'+
                            '<div class="fonts-item1"></div>'+
                            '<div class="fonts-item2"></div>'+
                            '<div class="fonts-item3"></div>'+
                            '<div class="fonts-item4"></div>'+
                            '<div class="fonts-item5"></div>'+
                            '<div class="fonts-item6"></div>'+
                            '<div class="fonts-item7"></div>'+
                            '<div class="fonts-item8"></div>'+
                            '<div class="fonts-item9"></div>'+
                        '</div>'+
                    '</div>'+     
                '</div>';
  