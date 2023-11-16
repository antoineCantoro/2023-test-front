# Test de recrutement - Développeur Front-End

Cet exercice a pour but d'évaluer rapidement votre capacité de réflexion, vos compétences dans les langages HTML/CSS/JS et PHP, l'utilisation de packages manager (Composer, NPM...) et de de bundlers (Webpack, Gulp, Parcel ou autre).

Il vous sera demandé de cloner/forker ce dépôt Git, créer votre propre dépôt, nous le mettre à disposition via GitHub, GitLab ou Bitbucket une fois l'exercice terminé.

## Objectif

Votre objectif est de réaliser une page web affichant une liste de bières (😏) sous forme d'un catalogue de produits.
Au clic d'une bière, une modale latérale s'ouvrira et affichera les détails de la bière selectionnée.

L'API à interroger est [PUNK API](https://punkapi.com), il vous sera demandé d'afficher une liste de 60 bières pour lesquelles il vous faudra afficher :

- name
- tagline
- first_brewed
- image_url

Dans chaque modale, vous devrez afficher :

- name
- image_url
- description
- abv
- ingredients
- food pairings

Vous trouverez les maquettes ici :

- [Liste des bières]([https://projects.invisionapp.com/share/EAYO5TZTHDS#/screens/430821303](https://www.figma.com/file/Sam2tHAwMzRDQXdQ2IIWJ8/EXO.-DEV?type=design&node-id=1%3A2&mode=design&t=ugGALa4xXWY0kTei-1))
- [Modale de la bière]([https://projects.invisionapp.com/share/EAYO5TZTHDS#/screens/430821304](https://www.figma.com/file/Sam2tHAwMzRDQXdQ2IIWJ8/EXO.-DEV?type=design&node-id=3%3A110&mode=design&t=ugGALa4xXWY0kTei-1))

## Spécifications

- Les sources seront placées dans le dossier `src` et compilées dans le dossier `/public/assets/`.
- Les données devront être récupérées en JavaScript en interrogant un endpoint : `/public/endpoint.php`.
- Cet endpoint devra interroger le client de l'API : `/library/Client.php`.
Les 2 points ci-dessus ne sont pas obligatoires mais permettent que nous ayons une vue sur vos capacités en PHP.
- La gestion des erreurs lors d'un appel API n'est pas demandée.
- Les animations ne sont pas imposées, à vous de nous proposer quelque chose de léger et fluide, exemples :
  - Animation des boutons CTA et de la modale
  - Apparation (barba.js)
  - Reveal sur la liste des bières (prendre en compte l'entrée dans le viewport)
  - etc.
- Le code doit être propre et documenté !

## Libraries

- Vous éviterez `jQuery` et favoriserez l'emploi de l'`ES6`.
- Afin de réaliser les appel à l'endpoint, vous pouvez utiliser l'API `Fetch` (si PHP utilisé).
- Afin de réaliser les appel à l'API, vous pouvez utiliser `cURL` ou `Guzzle`.
- L'utilisation des préprocesseurs CSS `SCSS`/`SASS` ou `Less` est possible.
- Vous pouvez utiliser le bundler avec lequel vous êtes le plus à l'aise.

Si vous êtes sur macOS (👏) ou une distribution Linux (👏), vous pouvez utiliser le serveur PHP interne en utilisant la commande:
`php -S localhost:8000` depuis le dossier public. Si vous êtes sur Windows, vous pouvez passer par WAMP ou utiliser WSL pour passer par une distribution Linux.
<br>
<br>
<br>
![Good Luck](https://media.giphy.com/media/xUOwGkoxib4Y9A9T9u/giphy.gif)
