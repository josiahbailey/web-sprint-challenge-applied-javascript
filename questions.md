## What is the DOM?

DOM is an acronym that stands for Document Object Model. It's represented as an object comprised of HTML elements on a webpage, with various properties and methods that can be interacted with in order to modify attributes of the webpage, e.g., styling and content. The DOM has a tree structure, with all nodes descending from the `document` object, whose child nodes serve as parent nodes to elements nested further down the tree structure.

## What is an event?

Events occur as a user interacts with a webpage, in order to notify the web browser that something has happened, so that it can respond appropriately. A browser event is represented as an object with various properties, which provide information about the event, e.g., which key was pressed, what element was clicked, and so forth. Events propagate through the DOM, so that when an event occurs on a child node, it then successively bubbles up to all of its parent nodes.

## What is an event listener?

An event listener is represented as an object that can handle an event as it occurs, by executing a specified function through the `addEventListener` method on its target. For example, the following code will log the mouse event that occurs when the `button` element is clicked:
```
button.addEventListener("click", e => console.log(e))
```
There are many different types of events (e.g., "click", "wheel", "keydown", "load") that can be individually included as the first parameter, i.e., one event type per listener, which is the function specified in the second parameter and handles the event, followed by various options in order to control how the event is handled.

## Why would we convert a NodeList into an Array?

A NodeList can be converted into an array in order to access array methods, such as `map`, `filter`, and `reduce`. This can be achieved by using the `from` method on the `Array` prototype:
```
const arr = Array.from(nodeList)
```
The NodeList interface includes `forEach`, so that it can be used without converting to an array, and children in a NodeList can also be accessed using bracket notation, e.g., `nodeList[0]`.

## What is a component?

A UI component is a reusable piece of code, which can create and append an HTML element dynamically with JavaScript, rather than writing an element into the HTML file. This is useful when developing applications with many similar elements, so that they do not need to be manually created and code is kept DRY. Components are often used to dynamically create HTML elements with data retrieved from an API.