# SHOPLOC

## Commandes pour lancer le projet

### Backend
Cloner le projet shoploc-backend sur votre machine.
Depuis un terminal, lancer le projet grâce aux commandes suivantes :

```
mvn clean install -DskipTests
mvn spring-boot:run
```

### Frontend
Cloner le projet shoploc-frontend sur votre machine.
Lancer les commandes suivantes à la racine du projet (dossier shoploc-frontend) :
```
npm install
npm run start
```
Votre application est désormais accessible !

## Générer un fichier AAB
Pour construire le fichier AAB de l'application qui permet d'installer Shoploc sur son mobile, lancez la commande suivante :
```
eas build -p android 
```
Pour rappel, ce fichier permet de générer ensuite un fichier APK adapté au mobile de chaque personne le téléchargeant, c'est notamment utilisé par le PlayStore pour maximiser la comptabilité entre l'application et le smartphone. Il est donc impossible d'installer directement un fichier .AAB sur un Smartphone Android.

### Construit avec

* [![React Native][React.js]][React-url]
* [![Spring][Spring]](https://spring.io/)

### Contributeurs

[![Contributors][contributors-shield]][contributors-url]

## Contact

Lucas FOURNIER - Camille POIRIER

[![Linkedin][linkedin-shield]](https://www.linkedin.com/in/lucas-fournier-4321b31a3)
[![Linkedin][linkedin-shield]](https://www.linkedin.com/in/camille-poirier-5619271a2)


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/LucasFournier-GIT/shoploc?style=for-the-badge
[contributors-url]: https://img.shields.io/github/contributors/LucasFournier-GIT/shoploc?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/LucasFournier-GIT/shoploc?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Quarkus]: https://img.shields.io/badge/Quarkus-20232A?style=for-the-badge&logo=quarkus&logoColor=B21900
[Spring]: https://img.shields.io/badge/Spring-20232A?style=for-the-badge&logo=spring&logoColor=42B24E
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactnative.dev/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
