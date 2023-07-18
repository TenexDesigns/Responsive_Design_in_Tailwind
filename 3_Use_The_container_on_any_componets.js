Yes, there is a way to write the container styles once and apply them to multiple elements using utility classes in Tailwind CSS. You can create a custom utility class that encapsulates the container styles you want to apply.

Here's an example of how you can achieve this:

Open your tailwind.config.js file.

Locate the theme object within the configuration file.

Inside the theme object, add a container key with the desired container styles:

javascript
Copy code
module.exports = {
  theme: {
    container: {
      padding: '0.5rem',
      center: true,
    },
    // ...
  },
  // ...
};
In this example, the container key sets the default container styles with a padding of 0.5rem and centers the container content.

Save the tailwind.config.js file after making the modifications.
Now, you can create a custom utility class in your HTML to apply the container styles:

html
Copy code
<div class="custom-container">
  <!-- Content goes here -->
</div>
Open your styles.css (or any other CSS file you're using).

Define the custom utility class .custom-container and apply the desired container width styles:

css
Copy code
.custom-container {
  @apply container mx-auto px-2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl;
}
In this example, the @apply directive is used to apply the predefined utility classes to the .custom-container class.

Now, you can simply use the .custom-container class on any element where you want to apply the container styles, reducing the amount of code you need to write:

html
Copy code
<div class="custom-container">
  <!-- Content goes here -->
</div>

<div class="custom-container">
  <!-- Another element with the same container styles -->
</div>
By defining a custom utility class and applying it to the desired elements, you can reuse the container styles without having to repeat the entire set of utility classes each time. This provides a more concise and modular approach to applying the container styles in your project.
