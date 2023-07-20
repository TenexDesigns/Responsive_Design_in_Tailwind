allowing you to display videos, movie clips, or other video streams directly on a webpage. Heres an explanation of the key points covered in the provided notes:

Basic Video Example:
html
Copy code
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
In this example, the <video> element has a width of 320 pixels and a height of 240 pixels. It also has the controls attribute, which adds play, pause, volume, and other controls to the video player. The <source> elements inside the <video> tag specify different video sources in different formats (MP4 and OGG). The browser will choose the first supported source format. If none of the formats are supported, the text "Your browser does not support the video tag." will be displayed.

Supported Video Formats:
There are three supported video formats in HTML: MP4, WebM, and OGG. Different browsers support different formats, so providing multiple sources in different formats increases the chance of compatibility across different browsers.

Optional Attributes:

autoplay: If present, the video will start playing automatically as soon as it is ready.
controls: When specified, video controls (play/pause button, volume, etc.) will be displayed.
height: Sets the height of the video player in pixels.
loop: If present, the video will start playing again from the beginning when it finishes.
muted: If present, the audio output of the video will be muted.
poster: Specifies an image to be shown while the video is downloading or until the user hits the play button.
preload: Specifies if and how the video should be loaded when the page loads. Options are auto, metadata, and none.
src: Specifies the URL of the video file.
width: Sets the width of the video player in pixels.
Global Attributes and Event Attributes:
The <video> tag also supports Global Attributes and Event Attributes in HTML, making it possible to use common attributes and event handlers with the <video> element.

Overall, the <video> tag provides a convenient way to embed and control video content directly within your web pages. By utilizing the provided attributes and multiple source elements, you can ensure broader browser compatibility and enhance the user experience with various video controls and features.



  MORE EXPLANANTION
-------------------------------------------------------------------------------------------------------------------------

    The <video> tag in HTML is used to embed video content in a document, such as a movie clip or other video streams. The content between the opening <video> tag and the closing </video> tag will only be displayed in browsers that do not support the <video> element w3schools.com.

The <video> tag contains one or more <source> tags with different video sources. The browser will choose the first source it supports. There are three supported video formats in HTML: MP4, WebM, and OGG w3schools.com.

Attributes of the <video> tag

autoplay: This attribute specifies that the video will start playing as soon as it is ready.
controls: This attribute specifies that video controls should be displayed (such as a play/pause button etc).
height: This attribute sets the height of the video player.
loop: This attribute specifies that the video will start over again, every time it is finished.
muted: This attribute specifies that the audio output of the video should be muted.
poster: This attribute specifies an image to be shown while the video is downloading, or until the user hits the play button.
preload: This attribute specifies if and how the author thinks the video should be loaded when the page loads.
src: This attribute specifies the URL of the video file.
width: This attribute sets the width of the video player w3schools.com.
The <video> tag also supports the Global Attributes in HTML and the Event Attributes in HTML. The HTML DOM defines methods, properties, and events for the <video> element. This allows you to load, play, and pause videos, as well as setting duration and volume w3schools.com.

Finally, while the <video> tag itself doesnt have any default CSS settings, you can apply CSS to a <video> element just like any other HTML element to control its appearance and layout on the page w3schools.com.
