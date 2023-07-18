Here is where the object-fit property comes in. The object-fit property can take one of the following values:
I would alawys prefer cover and a  height of auto for responsive design e.g object-fit:auto , Heoght:auto


cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
none - The image is not resized
scale-down - the image is scaled down to the smallest version of none or contain



                                                 
MORE EXPLANANTION
--------------------------------------------------------------------------------

The object-fit property in CSS is used to control how an image or video content should fit within its container. It determines how the content should be resized or positioned to maintain its aspect ratio.

Here's a breakdown of the different values for the object-fit property:

fill (default): The image is resized to completely fill the container's dimensions, potentially stretching or squishing the image to fit. The aspect ratio may not be maintained.

contain: The image retains its aspect ratio and is resized to fit within the containers dimensions. The entire image will be visible, 
and it may leave empty space within the container if the images aspect ratio differs from the containers aspect ratio.

cover: The image maintains its aspect ratio and covers the entire container, potentially cropping parts of the image to fit within the containers dimensions. The entire container will be filled, and some parts of the image may be hidden.

none: The image is not resized, and it will retain its original size. The image may overflow or extend beyond the container if its dimensions are larger.

scale-down: The image is scaled down to the smallest version of either none or contain. If the image is smaller than the containers dimensions, it will be displayed at its original size. If the image is larger, it will be resized to fit within the container while maintaining its aspect ratio.

By applying different values to the object-fit property, you can control how the image fits within its container, maintaining the aspect ratio and adjusting the visibility or cropping of the image as needed.

Its important to note that the object-fit property only applies to replaced elements like <img> or <video> that have intrinsic dimensions. It doesnt affect non-replaced elements like background images.








..
