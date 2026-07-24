// PROPERTIES OF DOM


// GET NAME & TYPE


document.tagName() // returns the tag name of element nodes like - "BODY"

document.nodeName() // returns all type of node name. / Element node → Tag name / Text node - "#text" / Comment node - "#comment" / Document - "#document" /

document.nodeType() // returns the node type, use numeber to represent the type, 1 → Element / 3 → Text / 8 → Comment / 9 → Document




// INTERNAL DATA


document.nodeValue() // / text node - returns the text / comment node - returns the comment / element node - null /

document.innerText() // returns inner text including the text of child elments and all decendents. RESPECTS CSS PROPERTIES

document.textContent() // returns the text content inside a node and all its decendents, ignroes tags and access text inside them. ONLY CARES ABOUT TEXT CONTENT, NOT CSS.

document.innerHTML() // returns the html tags as it is including inner text, set the inner html ( tags + text ) and not only text.




// ATTRIBUTES


document.getAttribute() // returns the value of the attribute of elements.

document.setAttribute("attribute", "value"); // set the value of the attribute.

// Style Attribute
document.querySelector("p").style // access the data of style attribute. only stores the inline css data of the node.

document.body.style.color = "red"; // this made the color property red for the body element, here im setting the property of style attribute of the element. ( write the property name is camel case )




// BASIC HIERARCHY OF THE DOM TREE


document.parentNode() // returns the parent node and works for all nodes types

document.children() // returns the element nodes only. includes direct child only, make the html collection, which is live.

document.childnodes() // returns a node list which contain all type of nodes, its live, returns direct childs only.




// POSITIONS IN THE HIERARCHY


document.firstChild() // returns the first direct child, it can be any node element, text, comment.

document.firstElementChild() // returns the first direct first element child. no text nodes, nothing else.

document.lastChild() // returns the last child, any node.

document.lastElementChild() // returns the last element child only.


document.nextSibling() // returns the next direct sibling node

document.nextElementSibling() // returns the next element sibling node only

document.previousSibling() // returns the previous sibling of any node type

document.previousElementSibling() // returns the previous element sibling only




// INSERT AND REMOVE ELEMENTS


// create element

let el = document.createElement("p") // used to create element for inserting


// append & prepend - can insert elements + text at once, can insert multiple values. (existing child of another parent works too)

parent.prepend(el) // inserting the element as first child, element + text both and multiple can be inserted, multiple / any type child inserting.

parent.append(el) // prepend but starts in the ending, add the child in the same order but in the end

parent.prepend("sometexthere") // inserting the text node inside the elment


// append child & prepend child - one element at a time, returns the added child.

parent.prependchild(el) // prepend but accepts only one child at a time and returns the child node added.

parent.appendChild(el) // append but one child only and returns that child node.

parent.removeChild(el) // removes a child from a parent element


// add siblings before and after the targeted node inside the same parent.

parent.before(el) // inserting before the element ( outside the element)

parent.after(el) // inserting after the element ( outside the element)


// remove the child

el.remove() // remove the element completely.




// CLASSLIST - 


// as u know an element can have multiple clases, every element have a classlist, a list of classes a element belongs to.

el.classList // returns the classlist of the element

el.classList.add("classname") // add a class to the element

el.classList.remove("classname") // remove class of the element

element.classList.toggle("className") // if class present - remove, if absent - add

element.classList.contains("className") // check if the class exists - returns true n false

element.classList.replace("oldClass", "newClass") // replace the class with new one

element.classList.length // returns the total number of classes in the list

element.classList.item(index) // returns the class which is at the given index in the class list


// Extra_Info - ( DOMTokenList - an object which represent all the space seperated values ( tokens), js have internal class which creates this object type when needed, using class list is one way to call its constructor, every element node stores a property classlist which stores the DOMTokenList inside it)

//----------------------------------------