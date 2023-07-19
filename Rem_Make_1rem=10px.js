How to set root rem to 10px in Tailwind CSS




1.Do it via a plugin

By adding this to your config file:

const plugin = require('tailwindcss/plugin');

module.exports = {
  // other settings
  plugins: [
    plugin(function({ addBase }) {
     addBase({
        'html': { fontSize: "10px" },
      })
    }),
  ],
}

This will set the root rem to 10px, which means 1rem will be equivalent to 10px in your CSS dev.to.

Once youve set the root rem to 10px, it will affect all rem values in your CSS, not just font-size.
  This is because rem units are relative to the root html element. 
  So, if you set the root font-size to 10px, 1rem will be equivalent to 10px for all properties, including width, height, padding, margin, etc. tailwindcss.com.

  Heres an example that demonstrates the usage of the adjusted rem value for font size and width:

.example {
  font-size: 1.6rem; /* Equivalent to 16px (1.6rem * 10px/rem = 16px) */
  width: 20rem; /* Equivalent to 200px (20rem * 10px/rem = 200px) */
}
By using 1rem = 10px as a baseline, you can apply it to various CSS properties, including font size, width, height, margin, padding, and more. This approach allows for consistent and scalable sizing throughout your project.



For example, if you want to set the width of an element to 200px, you can now use 20rem in your Tailwind CSS class:

<div class="w-[20rem]">...</div>
And if you want to set the font-size of an element to 15px, you can use 1.5rem:

<p class="text-[1.5rem]">...</p>

Remember, the main advantage of using rem units is that they are scalable and adjust according to the root font-size. 
  This makes your design more responsive and accessible.








2.One extra step if you use the VSCode extension

If you use the official extension for VSCode you may notice that the class preview shows the pixel values still using 16px as a base. To change this you need to add this to your VSCode config:

// other vscode settings
"tailwindCSS.rootFontSize": 10 // <- your root font size here
Now the class preview will have the correct values:



That’s it for this one! I hope you learned how to change the Tailwind CSS default base font size and how to make the VSCode extension reflect that change in its class preview.


























