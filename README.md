# Projet :

Ce projet est réalisé dans le cadre du cours de Réact de Supinfo Paris BenG2 2023-2024.
Il s'agit d'un site destiné aux étudiants et chercheurs en art qui leur permet de rechercher des œuvres d'art du Metropolitan Museum of Art (MET), nous l'avons nomé e-Met.

![Screen de la page d'accueil avec le MET en fond](https://cdn.sanity.io/images/cctd4ker/production/b8a5e07c166342e1c7f6fe30b8c45d64fea69ea5-4096x2326.jpg?w=3840&q=75&fit=clip&auto=format "website E-MET Home Screen")

## Installation & lancement

Pour unstaller et lancer le projet [vous devez obligatoirement être connecter à internet]

```bash
  npm i # Pour effectuer l'installation du projet (à éxécuter pour l'installation ou lors de chaque montée de version)
  npm run dev # Pour executer le projet ('ctl' + 'c' pour l'arrêter)
```

## Fichiers

- nodes_modules
  - {LesNodesModules}
- src
  - assets
      - [Tous les fichiers statiques pour affichage]
  - components
      - [MonComposant].tsx
      - ui
        - [composantShadcn].tsx
  - pages
      - [UnePage].tsx
  - queries
      - [UneRequête].tsx
  - App.tsx
  - index.css
  - main.tsx
- tests
  - [unTest].spec.ts
- package.json
- index.html
- [D'autres fichiers de configuration]

## Tests

- npx playwright test --update-snapshots [Pour réinitialiser les captures d'écrans]
- npx playwright test [Pour effectuer les tests]
- npx playwright show-report [Pour voir le résultat des tests]
- 'ctl' + 'c' [Pour arrêter la visualisation  des résultats des tests]

## Auteurs

- [Elias CASTEL MOUSSA](http://github.com/eliasctl)
