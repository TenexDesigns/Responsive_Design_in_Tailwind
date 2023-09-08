To show an image on `md` screen size and above but hide it on smaller screens, you can use the `hidden` class to hide it by default and then apply a utility class that displays it on `md` screens and above. However, there isn't a `visible` class in Tailwind CSS to achieve this. Instead, you can use the `md:block` class, which will make the element visible on `md` screens and larger.

Here's how you can modify your HTML code:

```html
<img class="h-48 hidden md:block w-full object-cover object-center md:h-full md:w-48" src="/img/grocery-image.png" alt="Modern building architecture"/>
```

In the code above:

- `hidden` class is used to hide the image by default on all screen sizes.

- `md:block` class is used to make the image visible on `md` screen size and above. This class overrides the `hidden` class for `md` screens and larger.

With this code, the image will be hidden on small screens (smaller than `md`) and visible on `md` screens and above.



  
