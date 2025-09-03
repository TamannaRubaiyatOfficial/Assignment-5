- 📂 **GitHub Repository** -->> https://github.com/TamannaRubaiyatOfficial/Assignment-5
- 🌐 **Live Link** -->> https://tamannarubaiyatofficial.github.io/Assignment-5/

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
  Ans: 
    getElementById will select element by it's id. Id is an unique attribute. So Id name must be unique in the whole page. It will return the element as output. 

    getElementsByClassName will select elements by it's class. As multiple element can share same class name it returns HTMLCollection as output. 

    querySelector will select the first element that is matching with the given css selector. It can target IDs, classes, tags, attributes. It will return the element as output.   

    querySelectorAll will select all elements that are matching with the given css selector.  It can also target IDs, classes, tags, attributes. It will return static NodeList which can be accessed through loop.

2. How do you **create and insert a new element into the DOM**?
  Ans:
    Step - 1: document.createElement("tag") to create an element.
    Step - 2: Set Content with tag.innerText / tag.innerHTML.
    Step - 3: Add attributes or class names or add template into innerHTML.
    Step - 4: Select the parent element into a variable.
    Step - 5: Add with appendChild() / append().

3. What is **Event Bubbling** and how does it work?
  Ans: 
    Event Bubbling is a concept in the DOM where an event starts from the target element and then bubbles up to its parent, then grandparent, and so on until it reaches the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?
  Ans:
    Event Delegation is a smart way in JavaScript to handle events. Instead of putting separate event listeners on every child element, you put just one listener on the parent. With event bubbling technique, the event travels up to the parent, and there you can check which child triggered it.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
  Ans: 
    preventDefault() -->> stops the default action of an element.

    stopPropagation() -->> stops the event from bubbling further up or down the DOM tree.