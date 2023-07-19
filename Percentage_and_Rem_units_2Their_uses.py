Your classification of using rem units for typography-related properties and percentages for widths and heights to create a responsive layout is generally accurate and aligns with common best practices. Here's a breakdown of the classification:

rem Units:

Typography: rem units are commonly used for font sizes and line heights. By using rem units, you ensure consistent scaling and maintain a harmonious typography hierarchy across different devices and screen sizes.
Spacing: rem units are also suitable for defining margins and paddings. They allow for consistent spacing that scales proportionally with the root font size, maintaining visual harmony throughout the document.

Percentages:

Widths: Using percentages for widths enables fluid and responsive layouts. By setting an elements width to a percentage, it will adapt proportionally to its parent containers size, creating a flexible design that adjusts to different screen sizes.
Heights: Percentages can also be used for heights, but its important to ensure that the parent container has a specified height to establish a reference for the percentage calculation. Percentage heights are useful when you want elements to dynamically adjust their height relative to the parent container.
Your classification accurately captures the common usage patterns of rem units and percentages. It promotes consistency in typography and spacing while providing flexibility in creating responsive layouts. By using rem units for typography and percentages for widths and heights, you're adopting a best practice approach that balances design control, readability, and responsiveness.
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
             ------------------------------------------------------------------
Your understanding is correct. Heres a more detailed explanation:

Rem Units:

Rem units are relative to the root (html) elements font size. This makes them very useful for creating scalable and accessible designs.
  If a user changes their browsers default font size, elements sized with rem units will scale accordingly. This is why rem units are often used for typography-related properties, such as font size and line height.

In addition, rem units can also be used for other properties like margin, padding, width, and height to ensure consistent spacing and sizing across different devices. For example, if you want a box to always be the same size relative to the user's default font size, you can use rem units.

Heres an example:

html {
  font-size: 16px; /* This is usually the default font size in most browsers */
}

.box {
  width: 10rem; /* The box will be 160px wide (10 * 16px) */
  padding: 1rem; /* The padding will be 16px (1 * 16px) */
}
Percentages:

Percentages in CSS are relative to the size of the parent element. This makes them very useful for creating responsive layouts that adapt to the size of the viewport or the size of a containing element.

For example, if you want a box to always take up half the width of its parent, you can use percentages.

Here's an example:

.container {
  width: 80%; /* The container will take up 80% of the width of its parent element */
}

.box {
  width: 50%; /* The box will take up 50% of the width of the container */
}
In this example, the .box will take up 50% of the width of the .container, not 50% of the width of the viewport or the parent of the .container.

Conclusion:

In general, rem units and percentages can be used together to create designs that are both scalable and responsive. Use rem units for typography and spacing to ensure consistent scaling, and use percentages for layout properties like width and height to create a responsive layout.

Remember, the key to creating good designs is to understand how these units work and to use the right unit for the right job. There's no one-size-fits-all answer, and the best approach can depend on the specific needs of your project.
