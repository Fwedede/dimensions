# dimensions_demo
Le projet 'Dimensions' sans Bootstrap

## Installation pré-requis (environnement Windows)

### Installer Sass
Installer Ruby sur le PC en suivant les directives de ce site [http://rubyinstaller.org/](http://rubyinstaller.org/).

Une fois installer, ouvrir le terminal de Windows (touche windows et taper 'cmd') et écrire :
```shell
(sudo) gem install sass
```

### Installer Bourbon & Sass
```shell
gem install bourbon
```
```shell
gem install neat
```

## Activation du projet
Afin de transformer le SCSS en CSS ouvrir le terminal et lancer cette ligne de commande dans le dossier du stylesheet
```shell
sass --watch styles.scss:styles.css
```
