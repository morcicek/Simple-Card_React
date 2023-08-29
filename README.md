# Simple Card React

This is an application for simple card React.js

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

![](./screenShot-1.png)
![](./screenShot-2.png)

### Links

- Live Site URL: [Add live site URL here](https://simplereact-card.netlify.app)

## My process

### Built with

- CSS custom properties
- Flexbox
- Sass-CSS preprocessor
- Responsive Design
- React.js Basics

### What I learned

I learned essential parts of responsive design at this challenge.Also I reinrorced some konowledge I have about CSS.

To see how you can add code snippets, see below:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

```scss
@import './variables';
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 1rem;
  gap: 1rem;
}
```

```jsx
import React from 'react';
import cardStyle from '../scss/card.module.scss';
function Card({ data }) {
  return (
    <div className={cardStyle['container']}>
      {data.map((item) => {
        const { id, name, job, text, img } = item;
        return (
          <div key={id} className={cardStyle['card']}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{text}</p>
            <img src={img} alt="" />
            <div className={cardStyle['btn-container']}>
              <button className={cardStyle['btn-container--small']}>
                Small
              </button>
              <button className={cardStyle['btn-container--large']}>
                Large
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
```

### Continued development

- Responsive Design
- Sass
- React

### Useful resources

- [React Documentation](https://react.dev/)
- [Sass Basics](https://sass-lang.com/guide/)

## Author

- Github - [morcicek](https://github.com/morcicek)
- Linkedin - [Mehmet Cevat Morcicek](https://linkedin.com/in/mehmet-cevat-morcicek-b50a29178)
- Twitter - [@morcicek_m](https://twitter.com/morcicek_m)
