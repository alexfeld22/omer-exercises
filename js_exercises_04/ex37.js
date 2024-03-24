/*
JavaScript – functions
The following exercise contains the following subjects:

● functions

Instructions

Please make the following changes to the HTML file while
navigating the DOM.

Create a variable that holds the <li> element with the class
“start-here”. Use traverse methods to complete these tasks:

1. Change the text from “title 2” to “main title”
2. Add another subtitle with the text “subtitle 4”
3. Delete the last <li> element from the list.
4. Change the <title> element text to “Master Of The Dom”.
5. Change the text of the <p> element ot something else of
your
Note:
On the next page, you have the HTML code

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport"
content="width=device-width, initial-scale=1.0" />
<title>Document</title>
<script src="./script.js" defer></script>
</head>
<body>
<ul>
<li>title 1</li>
<li class="start-here">title 2</li>
<li>
<ul>
<li>sub title 1</li>
<li>sub title 2</li>
<li>sub title 3</li>
</ul>
</li>
<li>title 3</li>
</ul>
<div>
<p>Hello World!</p>
</div>
</body>
</html>
*/

// =====================

// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:

let startElem = document.getElementsByClassName('start-here')[0];

// 1. Change the text from “title 2” to “main title”
startElem.innerHTML = 'main title';

// 2. Add another subtitle with the text “subtitle 4”
let currentElem = startElem.nextElementSibling.firstElementChild.appendChild(document.createElement('li',));
currentElem.textContent = "sub title 4";


// 3. Delete the last <li> element from the list.
currentElem.remove();


// 4. Change the <title> element text to “Master Of The Dom”.
//let title = document.getElementsByTagName('title')[0];

let title = startElem.parentElement.parentElement.previousElementSibling.lastElementChild.previousElementSibling;

console.log(title);

title.textContent = "Master Of The DOM";

// 5. Change the text of the <p> element ot something else of
// your

let p = title.parentElement.nextElementSibling.lastElementChild.firstElementChild;

p.textContent = "this is P";