Its important to note that percentage heights work best when the parent container on the viewport has an explicit height value specified, either in pixels (px)  or rems another unit.



In CSS, the height of a percentage-based element depends on the height of its parent container. If the parents height is not explicitly set, or if its height is set to auto (the default value), the height of the child element with a percentage height will not be able to calculate its height properly.

In your example, if the parent containers height is not explicitly set or set to auto, the child elements height of 60% will not work as expected because it doesnt have a defined height reference. The percentage height is relative to a known height value, and when the parent's height is not specified, it becomes ambiguous.

To make percentage-based heights work, you need to ensure that the parent container has a specified height. Heres an updated example:


.container {
    width: 20%; /* The container will take up 80% of the width of its parent element */
    height: 100px; /* Specifying a fixed height for the parent container */
    background-color: aqua;
}

.child {
    width: 20%; /* The child will take up 20% of the width of the container */
    height: 60%; /* The child will take up 60% of the height of the parent container */
    background-color: red;
}
In the revised example, I set a fixed height of 100px for the parent container, allowing the child elements percentage height (60%) to calculate its height correctly relative to the parent container.

Its important to note that percentage heights work best when the parent container has an explicit height value specified, either in pixels (px) or another unit.



Why does percentage height not work on parent element in CSS
-----------------------------------------------------------------------------------------------------------------------------
In CSS, the percentage height of an element is calculated with respect to the height of its parent element (also known as the containing block). If the height of the parent element isnt explicitly specified (i.e., it depends on content height), then the child element's percentage height computes to 'auto', unless the child element is absolutely positioned teamtreehouse.com.

Here are some scenarios where the percentage height might not work as expected:

Parent element does not have a defined height: When using a percentage height on a child element, its parent element must have a defined height. If the parents height is not defined, then the child element percentage height will be undefined. To fix this, define a fixed or percentage height for the parent element javascript-code.dev.
.parent {
  height: 500px; /* or 100% if the parents parent has a defined height */
}

.child {
  height: 50%; /* Now the child will be 250px tall */
}
Parent element's height is set to "auto": If the parent's height is set to "auto", it will expand to fit its contents and wont have a defined height. To fix this, change the parent's height to a fixed or percentage value javascript-code.dev.
Parent has a percentage height: When the parent element has a percentage height, the browser cant calculate the height of the child element because it doesnt know the height of the parent element. To fix this, use a different unit for the child element height, such as pixels glasshost.tech.
.parent {
  height: 50%;
}

.child {
  height: 200px; /* Now the child will be 200px tall, regardless of the parent's height */
}
Child element has position:absolute: If the child element is positioned absolutely, the parents height cant be calculated based on the childs height. To fix this, either remove the absolute positioning from the child element or define a height for the parent element glasshost.tech.
.parent {
  height: 500px; /* or 100% if the parent's parent has a defined height */
  position: relative; /* This is necessary for the child's absolute positioning to work as expected */
}

.child {
  height: 50%; /* Now the child will be 250px tall */
  position: absolute;
}
In conclusion, when dealing with percentage heights in CSS, its crucial to ensure that parent elements have a defined height. If the parent's height is not explicitly set, the child's percentage height will not work as expected.







  
