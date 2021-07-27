Read: 12 - Docs for the HTML <canvas> Element & Chart.js

Chart.js.API:

1.  Chart.js is a JavaScript plugin that uses HTML5's canvas element to draw the graph onto the page.
2.  We can create all different types of charts such as bar charts, line charts, pie charts and much more.

Canvas API:

1.  Canvas element is a HTML element and it has only two attributes, width and height. 
2.  Canvas is like the <img> element without the src and alt attributes.
3.  If attributes are not specified, the default canvas will be 300 pixels wide and 150 pixels high.
4.  The canvas is inititlaly blank.
5.  <canvas> element creates a fixed-size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown.
6.  The canvas rendering context provides two methods to render text:
    fillText(text, x, y [, maxWidth])
      Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
    strokeText(text, x, y [, maxWidth])
      Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.
7.  measureText()
      Returns a TextMetrics object containing the width, in pixels, that the specified text will be when drawn in the current text style.
