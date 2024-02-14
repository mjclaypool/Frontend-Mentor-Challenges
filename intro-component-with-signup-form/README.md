# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/Solution-Screenshot_Intro-component-with-sign-up-form.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I learned

I learned how to use the checkValidity() method from JavaScript Validation API. For my form, I iterated over each of my input elements and attached error messages to the fields that were invalid.

```js
myValidation = () => {
      for (var i=0; i < myElement.length; i++) {
        myElement[i].style.borderColor = 'hsl(246, 25%, 77%)';
        myElement[i].style.background = 'none';
        myError[i].innerHTML = "";

        if (myElement[i].checkValidity() == false) {
          myElement[i].style.borderColor = 'red';
          myElement[i].style.background = 'url(./images/icon-error.svg) no-repeat 410px center';
          myError[i].innerHTML = myErrorMsg[i];
          }
        }
      }
```

### Continued development

I plan practice building more forms to build confidence defining and handling form validation. I also plan to focus more on using React.js to build reusable components and use hooks to handle state changes.

### Useful resources

- [W3Schools](https://www.w3schools.com/js/js_validation.asp) - I used this reference heavily to build my form and incorporate client-side validation.

## Author

- Frontend Mentor - [@mjclaypool](https://www.frontendmentor.io/profile/mjclaypool)
