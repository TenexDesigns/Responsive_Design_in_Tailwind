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


 



1rem =10px  vs 1rem=16px
-----------------------------------------------------------------------------------------------


Both approaches have their pros and cons, and the choice ultimately depends on your specific needs and preferences.

The traditional approach of setting 1rem equal to 16px has been widely used and is still considered the standard in many cases. It aligns with the default font size of most browsers and makes calculations easier when working with pixel values. However, as you mentioned, it can sometimes be cumbersome to convert pixel values to the corresponding rem values.

On the other hand, setting the root "rem" value to 10px can simplify calculations and make it easier to work with round numbers. Using this approach, 1rem would be equal to 10px, making it more straightforward to convert between pixel values and rem values. For example, 16px would be 1.6rem, and 28px would be 2.8rem.

The advantage of the 10px root rem approach is that it allows for simpler and more intuitive calculations, especially when you prefer working with even numbers. It can make your CSS code cleaner and easier to manage. However, it's worth noting that this approach deviates from the traditional standard and may require additional explanation or documentation for other developers who might work on the project.

Ultimately, its up to you to decide which approach fits your needs and aligns with your preferred workflow. Both approaches are valid, and the most important aspect is to be consistent throughout your project to ensure a cohesive and maintainable codebase.




  
Comparison between setting root rem to 10px vs 16px in CSS
-----------------------------------------------------------------------------------------------

  Choosing between setting the root rem to 10px or 16px in CSS depends on your needs and preferences. Both approaches have their advantages and disadvantages.

Setting the root rem to 10px simplifies the calculation process. If you set the root font size to 62.5% (which equates to 10px, given that the default browser font size is 16px), it becomes easier to work with rems. For example, if you want an element to have a font size of 20px, you would simply set the font size to 2rem, instead of having to calculate the equivalent rem value (20/16 = 1.25rem) w3docs.com.

html {
  font-size: 62.5%; /* 10px */
}

body {
  font-size: 2rem; /* 20px */
}
On the other hand, setting the root rem to 16px (which is the default browser font size) is more aligned with the user's settings. This approach allows the user to maintain control, especially if they have set their browser's font size to something other than the default. Moreover, using this approach can be more accessible and inclusive, as it allows users with visual impairments to adjust the font size to their preference stackoverflow.com.

html {
  font-size: 100%; /* 16px */
}

body {
  font-size: 1.25rem; /* 20px */
}
Also, note that using rem units for setting font sizes is generally preferred over using pixel units, as rem units are scalable and adjust according to the root font size. This makes your design more responsive and accessible w3docs.com.

In conclusion, both approaches are valid and can be used depending on the situation. If you prefer easier calculations and don't mind overriding the user's settings, setting the root rem to 10px can be a good choice. However, if you want to respect the user's settings and prioritize accessibility, setting the root rem to 16px would be the better option.




Does this mean that when I use 1rem = 10px, It does not enable the user to adjust the font size to their preference
-----------------------------------------------------------------------------------------------

  That's not entirely correct. When you set the root rem to 10px, it doesnt prevent users from adjusting the font size. However, it does override the default browser font size (which is usually 16px). This means that if a user has set their browser's font size to something other than the default, your setting of 10px will override their preference.

On the other hand, if you set the root rem to 16px (or 100%), it respects the users browser settings. So if a user has set their browsers font size to something other than 16px, your website will scale according to their preference.

In both cases, the user can still zoom in or out on your website, which will adjust the font size. But the key difference is whether your website respects the users initial browser font size setting.

Does this clarify your question?





