body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}


THE EXPLANATION
----------------------------------------------------------------------------------------

The styling of scrollbars is supported by WebKit-based browser engines, such as Safari and Chrome, using the -webkit vendor prefix. The following pseudo-elements and pseudo-selector classes can be used to style the scrollbar:

::-webkit-scrollbar: This addresses the background of the scrollbar itself.

::-webkit-scrollbar-button: This addresses the directional buttons on the scrollbar.

::-webkit-scrollbar-track: This addresses the empty space below the progress bar.

::-webkit-scrollbar-track-piece: This addresses the top-most layer of the progress bar not covered by the draggable scrolling element (thumb).

::-webkit-scrollbar-thumb: This addresses the draggable scrolling element that resizes depending on the size of the scrollable element.

::-webkit-scrollbar-corner: This addresses the bottom corner of the scrollable element, where two scrollbars might meet.

::-webkit-resizer: This addresses the draggable resizing handle that appears above the scrollbar corner at the bottom corner of some elements.

In addition to the pseudo-elements, there are also pseudo-selector classes that provide the ability to style various states and interactions of the scrollbar UI.

Its important to note that the -webkit-scrollbar properties are specific to WebKit-based browsers and may not work in other browsers. However, there are jQuery plugins available, such as jScrollPane, that can help extend this functionality to other browsers.

Its worth mentioning that the -ms-scrollbar-base-color property used in ancient versions of Internet Explorer no longer exists. Instead, the un-prefixed scrollbar-color and scrollbar-width properties are now part of the CSS standards for styling scrollbars.

Overall, while scrollbar styling has improved over time and become more standardized, it is still important to consider browser compatibility when using these properties.






THE CODE EXPLANATION
----------------------------------------------------------------------------------------

Scrollbar styling can indeed be a useful part of your web design toolkit! Even though it tends to be overlooked, customizing your websites scrollbar can improve usability and enrich the user experience. To that end, browsers and CSS have added capabilities over the years to allow us to modify scrollbars. Let's go over your points:

History of scrollbar styling:
Initially, only Internet Explorer had proprietary properties like -ms-scrollbar-base-color for scrollbar customization. These are no longer in use.
WebKit-based browsers (like Safari and Chrome) introduced ::-webkit-scrollbar and other associated properties to customize various aspects of scrollbars.
More recently, CSS standards have come up with un-prefixed properties like scrollbar-color and scrollbar-width that are not locked to a specific browser rendering engine.
How to adjust scrollbar:
Width: You can adjust the width by using ::-webkit-scrollbar pseudo-element. For example, to set scrollbar width to 10px:

     ::-webkit-scrollbar {
        width: 10px;
     }
     ```
Color: You can modify the color using ::-webkit-scrollbar-thumb. Here is how you can set it to red:
     ::-webkit-scrollbar-thumb {
        background: Red;
     }
     ```
Track Opacity: You can adjust the opacity of the track using ::-webkit-scrollbar-track. If you want to set it to semi-transparent black, you can do:
     ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.5);
     }
     ```
More options exist to style the buttons on the scrollbar (::-webkit-scrollbar-button), and the corner where scrollbars meet (::-webkit-scrollbar-corner).
Please keep in mind that this works for WebKit-based browsers. For Firefox, you would use the more standard scrollbar-color and scrollbar-width properties, for example:

body {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
}
Using jQuery Plugins: If you want to extend this functionality to other non-WebKit browsers, or want more possibilities with your scrollbar designs - you could use a jQuery plugin like jScrollPane.
In summary, customizing scrollbars involves a mix of vendor-specific and standard CSS properties, and can really help add an extra touch to your websites design. However, overusing this ability could potentially confuse users. Use this power sparingly and wisely to enhance your website's aesthetics and usability!

I hope this answered your question. If you have more concerns feel free to ask!





