# Outdoor-adventure-exercice

Intégration (HTML, CSS) d'une maquette fournie (par blocs puis en intégralité)

---

Dans cet exercice, vous allez développer en HTML et CSS une interface dont la maquette vous sera fournie en blocs séparés, puis en intégralité.
Voici le site que vous aurez finalement à développer : https://websitedemos.net/outdoor-adventure-02/

--

## Phase 1 : développement par blocs

Pour vous entraîner, la page d'accueil a été découpée en blocs que vous développerez séparément.
Voici les différents blocs :

- **navbar** :![navbar](/blocs/navbar.png)
Ne vous préoccupez pas à ce stade de l'image de fond.
La navbar est contituée d'une image (le logo, situé dans un lien), du menu (ul, li, a) et d'un bouton.
Observez le positionnement du logo par rapport au menu et utilisez *display:flex* pour obtenir le positionnement désiré.
Observez dès à présent le comportement du menu sur différentes largeurs d'écrans.
- **footer** :![footer](/blocs/footer.png)
Même s'il n'apparait qu'en dernier sur la page, nous vous proposons de vous exercer sur le footer maintenant car il est moins difficile que le reste de la page. Les éléments comportent du texte, utilisez les balises appropriées. Le positionnement est centré horizontalement et équitablement réparti verticalement. La hauteur peut-être fixée en px; on peut aussi utiliser du padding pour créer de l'espacement.
- **main-section** :![main-section](/blocs/main-section.png)
Une partie un peu *"touchy"* avec du positionnement absolu et un centrage des titres pas évident à gérer.
Le mieux est peut-être d'inclure la navbar et les titres dans un bloc **header** (avec l'image en background). Le background est fixé (le menu et les titres défilent devant l'image lors du scroll).
- **banner** :![banner](/blocs/banner.png)
Cette partie est globalement centrée, sauf l'image sur le côté. Il y a plusieurs façon de gérer cela, votre réalisation ne sera peut-être pas tout à fait identique à l'original.
- **evenement-section** :![evenement-section](/blocs/evenement-section.png)
Tout est centré ici. Flex vous sera très utile.
- **section-bg-fix** :![section-bg-fix](/blocs/section-bg-fix.png)
Encore un background fixed, avec du contenu décalé sur la droite.
- **destination-section** :![destination-section](/blocs/destination-section.png)
Partie difficile. A gérer en flex (ou grid??). Observez le responsive :/.

## Phase 2 : développement du site entier

Vous trouverez ici les pages à développer.

Voici quelques consignes :

- utilisez au maximum des dimensions en % ou en vw.
- utilisez flex (ou grid)
- toutes les pages doivent être responsive (utilisation de flex-column et/ou les media queries)

## Rendu de votre production

Vous effectuerez le rendu sur un repository Github.

## Points d'attention

Vous pouvez récupérer un certain nombre de ressources (images, couleur, typos) sur le site fourni en exemple.
En revanche, vous constaterez que la structuration du Html comporte de nombreux éléments, ceci étant dû à la technologie utilisée, à savoir Wordpress (avec Elementor). Faites la structure la plus simple possible. Cela n'a rien de facile...
**Pensez à push votre code sur Github.**
Un conseil : si vous envisagez une modification importante du code risquant de dégrader l'existant, vous pouvez créer une branche ou même une nouvelle version.
