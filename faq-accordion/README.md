# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/Solution-Screenshot_FAQ-accordion.png)

## My process

### Built with

- Semantic HTML5
- CSS
- JavaScript

### What I learned

To add interaction to the FAQs component, I learned how to pass a clicked question's id into a JavaScript function inside the HTML file. This function appended the id to variables for expanding the accordion and displaying the state icon, then opened/closed the target question, closed any previously opened questions, and switched the state icon accordingly.

```html
<section class="question-heading" id="q1" onclick="switchDisplay(id)">
```

I also learned how to add a drop-shadow to a section and adapt its color/opacity with a rgba value to elevate the component on the page.

```css
.card {
  filter: drop-shadow(0 6px 10px rgba(76, 44, 80, 0.15));
}
```

### Continued development

I plan to focus more on using React.js to build reusable components and use hooks to handle state changes. Additionally, I plan to integrate the Styled Components library into these React components.

### Useful resources

- [W3Schools](https://www.w3schools.com/cssref/index.php) - This reference helped answer most of my CSS formatting questions. I really like how the site is organized and how explanations are presented.

## Author

- Frontend Mentor - [@mjclaypool](https://www.frontendmentor.io/profile/mjclaypool)
