# Frontend Mentor - Age Calculator App Solution

This is a solution to the [Age Calculator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View their age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid (e.g., 31/04/1991, as April has only 30 days)
- View an optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final values when the form is submitted

### Screenshot

![Screenshot of the Age Calculator App](./screenshot.jpg)

### Links

- Solution URL: [Solution on Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript for validation and age calculation
- Custom fonts loaded using `@font-face`

### What I learned

While building this project, I refined my skills in form validation, responsive design, and font management using custom assets. Here are some key learnings:

1. **Font Management**: Loaded multiple weights of the Poppins font family using `.ttf` files, utilizing the `@font-face` rule for each weight variation. This made the design consistent and visually appealing across different text elements.
   ```css
   @font-face {
     font-family: "Poppins";
     src: url("./assets/fonts/Poppins-Bold.ttf") format("truetype");
     font-weight: bold;
     font-style: normal;
   }
   ```

## My process

### Form Validation

Implemented JavaScript validation to ensure data integrity and improve user experience by checking for the following conditions:

- **Empty Fields**: If any of the day, month, or year fields are left empty, an error message is shown.
- **Valid Date Ranges**: Ensures that the day is within 1-31, the month is within 1-12, and the year is not in the future.
- **Logical Date Correctness**: Prevents invalid dates like 31/04/1991, where April has only 30 days. This checks for month-specific days and leap years, adding a layer of logical validation.

### Responsive Design

Used Flexbox and CSS Grid to create a responsive layout that adapts to different screen sizes, providing an optimal view for both mobile and desktop users. The layout reorganizes itself seamlessly, making it easy to navigate and interact with on any device.

## Continued Development

In future projects, I plan to focus on:

- **Animations**: Experimenting with CSS and JavaScript animations to add smooth, engaging transitions. This can enhance user interaction, especially when age values are displayed after submission.
- **Error Handling**: Further refining form validation to account for complex date inputs and edge cases, improving overall robustness and reliability.
- **Accessibility**: Enhancing accessibility by adding ARIA roles, ensuring proper focus management, and improving keyboard navigability for users relying on assistive technologies.

## Useful Resources

- [Frontend Mentor](https://www.frontendmentor.io) - Provided the challenge and initial design inspiration, helping me practice real-world design and functionality implementation.
- [The Markdown Guide](https://www.markdownguide.org/) - Assisted in formatting this README effectively, ensuring clear communication of the project details.

## Author

- Website - [Your Name](https://github.com/Mayen007)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Mayen007)
