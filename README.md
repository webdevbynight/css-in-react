# CSS in React

This repository is an exercise for a quest during a course at Wild Code School.

## CSS preprocessor

I have chosen Sass (in its SCSS syntax).

## Why Sass?

I have chosen Sass for the following reasons :

- I am already used to it (if you are curious, just have a look at the Frontend Mentor challenges I have done and published on my GitHub 😉 );
- Sass can be a good choice for a project where the stylesheets are created by a web designer or one front-end developer, while another front-end developer is given the React development tasks (in case the person doing the CSS does not know React);
- I think it is much easier to separate the stylesheets and the functional components with Sass than with Styled components or Emotion: maintainability must win;
- if you want to split your stylesheet into several ones, you can do it with Sass: just think of partial files, the `@use` rule and the underscore (`_`);
- if you want dynamic styles, just add dynamic `classNames` within your functional components and create the CSS rules you need within your SCSS files.

If you want to learn how to use Sass, just check the [official documentation](https://sass-lang.com).

## Version en fançais (pour mes camarades de promotion allergiques à l’anglais)

### Préprocesseur CSS

J’ai choisi Sass (dans sa syntaxe SCSS).

### Pourquoi Sass ?

J’ai choisi Sass pour les raisons suivantes :

- j’ai déjà l’habitude de l’utiliser (si vous êtes curieux, jetez juste un coup d’œil aux challenges Frontend Mentor que j’ai faits et publiés sur mon GitHub 😉 ) ;
- Sass peut être un bon choix pour un projet où les feuilles de styles sont créées par un web designer ou un développeur front-end, tandis qu’un autre développeur front-end se voit confier les tâches liées au développement React (pour le cas où la personne qui fait les CSS ne connaît pas React) ;
- je pense qu’il est bien plus facile de séparer les feuilles de styles et les composants fonctionnels avec Sass qu’avec Styled components ou Emotion : la maintenabilité doit l’emporter ;
- si vous voulez séparer votre feuille de styles en plusieurs, vous pouvez le faire avec Sass : pensez juste aux fichiers partiels, à la règle `@use` et à l’underscore (`_`) ;
- si vous voulez des styles dynamiques, ajoutez juste des `classNames` dynamiques dans vos composants fonctionnels et créez les règles CSS dont vous avez besoin dans vos fichiers SCSS.

Si vous voulez apprendre à utiliser Sass, jetez juste un œil à la [documentation officielle (en anglais, désolé… 😕 )](https://sass-lang.com).