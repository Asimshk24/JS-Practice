// EVENTS


// ANY ACITON PERFORMED BY THE USER OR TRIGGERED BY THE BROWSER ITSELF IS CALLED AN EVENT.

/*

User Events
---------------
click              - User clicks
dblclick           - User double-clicks
keydown            - User presses a key
mousemove          - User moves the mouse
submit             - User submits a form
scroll             - User scrolls the page


Browser Events
--------------
load               -  Page fully loaded
DOMContentLoaded   - DOM fully loaded
scroll             -  Page scrolled
online             -  Internet connection restored
offline            -  Internet connection lost

*/



//----------------------------------------

// EVENT HANDLING



// THE CODE WHICH IS SET TO BE EXECUTED WHEN AN EVENT OCCURS IS CALLED EVENT HANDLING. ( STORES THE CODE IN A FUNCTION SO IT CAN BE REUSED LATER WHEN THE EVENT OCCURS. )

// syntax
element.addEventListener("eventName", callbackFunction);



// USE-CASE //

// step_1
let button = document.body.querySelector("button");   // Access the element

// step_2
button.addEventListener("click", () => {         // Use the EvenetListener Method & give a callback function as parameter - this is a event handler
    console.log("Button clicked");
});

// step_3
button.addEventListener("click", () => {         // multiple eventListeners can be used on one element = MULTI EVENT HANDLER
    console.log("Button clicked - handler2 ");
});


// eventlistener - which is a shared method ( prototype ) of every node, this method is a higher order function which means it needs a another functionn as parameter. giving a arrow function in these type of situation is useually conventional, so here i given a arrow function as a callback function.



//----------------------------------------

// EVENT OBJECT


// EVENT OBJECT - When the event occurs, the browser create an event object for that event which stores the info about it, then it executes the callback function used in eventlistener, then it uses that event object as a argument for the callback function in the event listener, then it executes the code inside it.

// to access this event object to use it in your code, give the parameter in the callback function and use it in the code. in the below example i given it a name "e" now i can use it's properties and methods using e.

// Extra_Info - ( event object - created by the browser when event happens, the object contain info bout the event, the object created by the class and constructor of that specific type of event. js internally have classes and constructors for every type, predefined info get filled. )


button.addEventListener("click", (e) => {
    console.log("Button clicked");
});



//----------------------------------------

// EVENT OBJECT PROPERTIES & METHODS


button.addEventListener("click", (e) => {
    console.log(event.type) // returns the name of the event that happened, in this case it will return "click".
    console.log(event.target) // the element which triggered the event / where the event started    , in this case its button who got clicked.
    console.log(event.currentTarget) // the element who have the listener on it and responding to the events of elements inside it.
    console.log(event.clientX) // position of users mouse on x axis.
    console.log(event.clientY) // position of users mouse on y axis.
    console.log(event.key) // key pressed by user, "Enter", "a", "1", "@".
    console.log(event.button) // mouse button clicked.
    
})



// INTERNAL WORKING OF JS EVENTS -

//----------------------------------------

// TARGET VS CURRENT_TARGET -

/*

# TARGET -
    
    The Element Which Triggers The Event Is The Target, This Is Where The Event Starts.


# CURRENT_TARGET -
    
    This Is The Element Who Is Lisning To The Event, It Can Be Any Element Who Have Listener On It But The Condition Is, It Must Be Inside The Path Of The Target Element.


# PATH -  

    Placing The Listener On All The Elements Separately Is A Waste Of Time And Space.
    
    To Allow One Parent To React Over All Its Children And Descendants.
    
    Browser Create The Path Of The Event, From The Top Parent To The Target Child Who Started The Event, Eg - Document - Target
    
    The Browser Defines The Path As Soon As The Target Triggers The Event, The Path Goes From The Document - To - Trigger,
    
    This Happens Becuz All The Elements In The Dom Tree Are Connected To Each Othere.



//----------------------------------------

# THE THREE PHASES OF EVENT PROPAGATION ( CAPTURING & BUBBLING )- 


    Propagation = The Event Travelling In The Path Inside Dom Tree.
    
    1. Capturing -
        In This Phase The Event Object Travels From Top - Target, Checking Every Element, If It Have A Lisnter Then Run It, If Not Then Nothing Happpens And Then Move To Next One,
        By Default The Capturing Is False / Off On The Elements, 
        To Turn It On Do - Button.AddEventListener("click", Handler, True); - Do Capture:True Or Just Place A True After The Handler Function.

    2. Target Phase -
        Target Checked - If Have Listener Then Execute, If No Then Nothing Happens Then Move To The Next Phase

    3. Bubbling Phase - 
        In This Phase The Event Travels Upwords Like Bubbles, From The Event To The Top Parent,
        The Bubbling Is Default True, No Need To Write True Antwhere,
        All The Parents In The Path Are Checked For Listeners, If There Is One, It Executes, If No Then The Event Ends.

    
# Extra Info - ( How Actually Event Travels By Passing The Same Event Object As An Argument To The Lisnter's Callback Function )

*/



// stopping the parent from listning to child events

button.addEventListener("click", (e) => {
    e.stopPropagation(); // this method stop the propagation of this event, this event dosent travel in the dom tree and no bubbling and capturing happens
})



// REMOVE LISTNER FROM ELEMENT

const call_back_function = (e) => { 
    console.log("this is a callback function");
};

button.addEventListener("click", call_back_function);

button.removeEventListener("click", call_back_function);

// for this to work, the event and the callbackfunction should be exactly the same, so writing the same calllback function entirely twice dosent work becuz they do not have same reference point,  sol - store the callback function in a variable and use it on both add and remove



//----------------------------------------