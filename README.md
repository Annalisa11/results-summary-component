# Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## 📖 Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshots

<img src="./src/design/my-desktop-design.png" alt="drawing" width="400" display="inline block"/> <img src="./src/design/my-mobile-design.png" alt="drawing" width="200" display="inline block"/>

## ⚒️ My process

### Built with

- CSS Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [SCSS](https://sass-lang.com/) - CSS with superpowers
- [Typescript](https://www.typescriptlang.org/) - Types for JavaScript

### What I learned

As it was my first time using SCSS in a project, I learned about the power of css variables and mixins.

```scss
@mixin panel-color($color) {
  background-color: rgba($color, 0.06);
  color: $color;
}

.blue {
  @include panel-color($primary-blue);
}
```

```tsx
<div className={`panel ${color}`}>
```

## 👩‍💻 Author

Annalisa Comin

- [Instagram](https://www.instagram.com/annalisa_comin/)
