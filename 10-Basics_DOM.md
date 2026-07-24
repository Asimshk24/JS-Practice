
# WINDOWS OBJECT

This Is the Root Object Which Contains All the JavaScript Functionalities Given by the Browser, Including All the Objects, Methods, Properties, and Other Features Created by the Browser Itself.

The Browser contain the JS-Engine, but every window ( tab ) in the browser contain its own instance of the js engine.

---
# DOM -

this window object Contain a object called document, which is a property of the window object and all this is created by the browser.

The entire dom is inside the document object, the document is the root object and the entry point to access and inspect the entire DOM.

the document object is created by converting the html into a document object model, where it becomes a tree like strcuture which follow hierarchy, where eveything is an node / object, 

Every node becomes A parents, childs, siblings, etc

---
### Structure of dom - 

The DOM Tree Format – Parent elements contain child elements. Child elements on the same level are siblings of each other. All elements below a parent are its descendants, while that parent and all elements above them are their ancestors.

### Types of node -

1. **Document node** - the root node, contains the entire info bout the html doc, child nodes like html and all

2. **Element nodes**  - tag name, its attribute, child nodes, parent node, position in the tree, text nodes inside them.

3. **Text nodes** - contain text only, contains parent but no child becuz it dont have one.

4. **comment node** - contains the parent node and the comment inside it, nothing else.

As you know everything is a node, every node is an object which store the data about itself

- its position in the tree
- its parent and child elements
- the text inside it
- html tag
- attributes
- etc

These are some common type of data a node stores

==The main purpose of converting the html into dom is to manipulate the html to make the website dynamic by adding js functionalities.==

### Inspecting the elements in document -

use console.log( ) - too see the html format
and console.dir( ) - inspect the element as an object to view the internal stored data

---
# Dom Manipulation -

The DOM represents everything in an HTML document - elements (tags), text nodes, comments, etc.

JavaScript can access and manipulate all of them.

---

## Accessing dom elements - 

to modify the html through dom, First access the elements using js

there are some methods which allows accessing the dom elements

### Type I - Premetive

### getElementBy

have three types inside it

```js
document.getElementById("my_id");

document.getElementsByClassName("class_name");

document.getElementsByTagName("p");
```

- Used to search the element, specifying its type if its id or class or tag, 

- returns the element nodes only

- id returns a single element node only

- the tag and class returns a html collection which contain all the element nodes of the same class or same tag.

### Type II - New one's

THESE ARE CALLED QUERY SELECTORS

While the GetElementBy can only search with one specific things like ID, Class, Tag, the query selector can search with any css selectors like  , div > p, .class > div, etc

- **querySelectorAll() can use any valid CSS selector.**

Therefore they need css selector format, for ex. - not only "my_id" without the #

```js
document.querySelector("#id");

document.querySelector(".class");

document.querySelector("p");

// all
document.querySelector("<any CSS selector>");

// some othere special css selectors
document.querySelectorAll("div > p");

document.querySelectorAll(".card img");

document.querySelectorAll("#menu li");
```

- **querySelector** can use anything id, class, tag - it **searches for the element node** and returns the first match. rest of them are ignored here.  

- To get all the matching elements use  - **querySelectorAll**

- **querySelectorAll** can use .class or tag - returns multiple element nodes

- When returning multiple elements it returns it in the format of **nodelist**

- IDs are meant to be unique, so querySelectorAll("#id") would return a NodeList containing only one element.

---
## HTML COLLECTION VS NODE LIST

### Some Facts about both -

html collection and nodelist both are objects.

An html collection only contains the element nodes, but an nodelist can contain other type of nodes too ( text and comment nodes ).

all the getElementBy and querySelector are methods of dom for selecting the dom objects & both of them returns **element nodes**

a node list can contain nodes other then element nodes but the queryselectorall only returns a nodelist of elements nodes in any condition.

both of them only contain the nodes from the dom, they do not create a copy of them. used only to access all of them at once.

### Live vs Static

A html collection gets updates when new nodes are added of the same type

suppose
```js
const list = document.getElementByTag("p");
```

is done, 

later the dom get's another p inside it which is happened by dom manipulation -

```js
document.body.innerHTML += "<p>Three</p>";
```

then the browser reflects the changes into the html collection.

but this doesn't happen with nodelist.

For the nodelist, the browser doesn't check for the p again, the NodeList which contains all the p's remains the same. and this is a featue when you do not want to update over the time.

the nodes are individual objects which can be manipulated ( changed ) but that does not make any differece to the nodeList, it will still contain the same object, even when they are updated individually.

so even when the internal elements nodes get's updated,

THE LIST REMAINS THE SAME BUT THE COLLECTION GET'S UPDATED.

---
## Properties of HTMLCollection & NodeList

==**both of them are array like objecs but they are not the actual arrays**==

- INDEXING WORKS ON THEM
- A LOOP CAN ITERATE OVER THEM
- METHODS LIKE .length WORKS PERFECTLY

DIFFERENCE -

foreach() method - it works on NodeList but dosen't work on the HTMLCollection

The reason behind this is not technical but historical, just a designing decision

NodeList got the foreach() method which made it easier to use the NodeList

the method was not added to HTMLCollection because the old website were dependant on its behaviour and the collection was supposed to stay minimal.

( that's what i got to know when i was reading bout this topic :-\ )

---
### Properties of nodes ( objects )

1. element.children

- property of element objects / element nodes
- returns a HTMLCollection of all the element nodes inside the element nodes
- only returns element nodes and ignores all othere nodes.

2. element.childNodes

- for all the node types ( even if dosen't make sense using on text node )
- returns a live NodeList containing all the child nodes inside the node. 
- returns NodeList including text and comment nodes, etc

The NodeList which were created using querySelector was static, still the elments inside it were updating, but the list not, becuz of the list was the result of a search operation,

The browser searches the DOM **once** and returns the search results then it stays the same forever.

but the childnodes is a property of nodes, which shows the current nodes inside them.

SO HERE THE NODE LIST UPDATES BECUZ ITS A PROPERTY OF NODES WHICH SHOWS CURRENT CHILDNODES INSIDE A NODE

---
