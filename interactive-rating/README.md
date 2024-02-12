# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./design/Solution-Screenshot_Interactive-rating-component.png)
![](./design/Solution-Screenshot_Interactive-rating-component-2.png)

## My process

### Built with

- Semantic HTML5
- CSS
- JavaScript

### What I learned

My main takeaway was how to display and hide sections of the webpage based on a user action. When a user clicks the submit button, a function is called to switch the component displayed in the viewport.

```js
switchCard = () => {
      document.getElementById('thank-you').style.display = 'flex';
      document.getElementById('rating').style.display = 'none';
    }
```

I also learned how to update a section of text with the innerHTML property. After enabling the submit button with a user's rating selection, I used innerHTML to display text including the user's selection.

```js
updateSelection = (value) => {
      selection = value;
      document.getElementById('submit').disabled = false;
      document.getElementById("user-selection").innerHTML = `You selected ${selection} out of 5`;
    }
```

### Continued development

I plan to focus more on using React.js to build reusable components and use hooks to handle state changes. Additionally, I plan to integrate the Styled Components library into these React components.

### Useful resources

- [W3Schools](https://www.w3schools.com/cssref/index.php) - This reference helped answer most of my CSS formatting questions. I really like how the site is organized and how explanations are presented.

## Author

- Frontend Mentor - [@mjclaypool](https://www.frontendmentor.io/profile/mjclaypool)
