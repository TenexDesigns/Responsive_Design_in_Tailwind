The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

There are five different position values:

static
relative
fixed
absolute
sticky

Elements are then positioned using the top, bottom, left, and right properties.
  However, these properties will not work unless the position property is set first. They also work differently depending on the position value.







  STATIC
--------------------------------------------------------------------------------------------------------------

position: static;

HTML elements are positioned static by default.

Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:


Example
div{
  position: static;
  border: 3px solid #73AD21;
}



FIXED
--------------------------------------------------------------------------------------------------------------


  position: fixed;
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
  The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:

Example
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}






STICKY
--------------------------------------------------------------------------------------------------------------

position: sticky;
An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

  If you want the sticky element to be relative to a specific container, you can apply the relative class to that container.






RELATIVE
--------------------------------------------------------------------------------------------------------------
position: relative;

An element with position: relative; is positioned relative to its normal position in the normal flow of th document.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position in the normal flow of the document.
  Other content will not be adjusted to fit into any gap left by the element.
  

Example
div{
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}



ABSOLUTE
--------------------------------------------------------------------------------------------------------------
In CSS, an element with an absolute position is indeed removed from the normal flow of the document.
  When an element is positioned absolutely, it is taken out of the documents normal flow, and other elements will behave
  as if the absolutely positioned element does not exist.

Elements with absolute positions are positioned relative to the nearest positioned ancestor.
  If there is no positioned ancestor, they are positioned relative to the initial containing block, which is usually the documents viewport.

When an element with a relative position contains elements with absolute positions,
  the absolutely positioned elements are positioned relative to the boundaries of the relatively positioned element.
  The relatively positioned element acts as a positioning container for its absolutely positioned children.

Regarding overlay and stacking order, absolutely positioned elements can overlap other elements on the page. 
  The stacking order of absolutely positioned elements is determined by the z-index property.
  The z-index property specifies the stack level of an element, where a higher value will cause the element to appear on top of elements with lower values.

By default, positioned elements (including absolutely positioned elements) have a z-index value of auto,
  which means their stacking order is determined by their order in the HTML document.
  The last positioned element in the HTML document will appear on top of earlier positioned elements, assuming no z-index values have been specified.

However, you can explicitly set the z-index property on absolutely positioned elements to control their stacking order. 
  Elements with higher z-index values will appear on top of elements with lower values. 
  If two elements have the same z-index, their stacking order will be determined by their order in the HTML document.

Its worth noting that positioned elements (both relative and absolute) can affect the layout of other elements,
  as they still take up space in the document flow. Only when an element has a fixed position or is removed from the normal flow entirely
  (e.g., using absolute positioning) will it not affect the layout of other elements.





--------------------------------------------------------------------------------------------------------------



