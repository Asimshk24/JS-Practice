//----------------------------------------

// OBJECT ORIENTED PROGRAMING IN JS


// OBJECT - ENTITY ( DATA STRUCTURE ) WHICH CAN STORE PROPERTIES ( DATA ) AND METHODS ( FUNCTIONS ) IN IT.

const obj = {

    obj_name : "new object",

    obj_contains : 5,

    obj_method : function (name) {
        console.log("hello", name);
    },

    obj_method2 : function (num) {
        console.log(":", num);
    },

    obj_method3 : function () {
        console.log(this.obj_name);
    },

    obj_method4 (para) {
        console.log("this is a shorthand syntax for methods inside a object, does not work outside an object, only for methods.")
    },
}


/*

this simple example of object contain 2 properties which contain some data, four methods which contain some function which can be called and execute some tasks.

properties can be called data or state and methods are also called behaviours.

THIS KEYWORD -

    i used the word this in the third method, i wanted to access the obj_name of the object, both the property and method are in the same object, the keyword this always points at the current object, so that makes obj.obj_name === this.obj_name, both are logically same.
    
    this can be used insted of the current object's name, it works the same.

*/




// PROTOTYPES -

/* 

JS OBJECTS HAVE A SPECIAL PROPERTY CALLED PROTOTYPE ( this prototype property stores reference to the object which is the actual prototype, or it stores null if there is no prototype.)


PROTOTYPE -
    
    Prototype is an object which contains shared properties and methods. The methods and properties are common/shared by all the
    objects that are linked to the same prototype. This saves space, and you no longer need to write the same methods and properties 
    for all the objects separately.

    All the object in js already contain one prototye inside them by default.

    note - if a object and its prototype both have same method, the method written in object will be considered.



PROTOTYPE CHAINS -

    The prototype chain is a concept which explains how the objects are inheriting the properties and methods from othere objcts, the othere objects are called the prototype for the object which inherits from them. every object contain a internal slot which contain the link for the prototype used to link object to its prototype object.

    # Understand it with an example -
    
    if i take a object-1 and a object-2, set the object-2 as the prototype of the object-1, now the object-1 replaces its prototype from the default-object-prototyp to the object-2, now the object-1 can inherit / access the properties and methods of object-2, but it looses the access to the default properties and methods of an object.

    but all the objects contain the default prototype, so even if the object-1 only inherit from the object-2, the object-2 still linked to the default object prototype.

    The concept of prototype chains comes in action here, the object-1 is linked to the object-2 and object-2 is linked to default object prototype, so this forms a chain, and becuz of that the object-1 can access the default object prototype throught the object-2.

*/


// syntax for setting one object a prototype for the othere object

obj.__proto__ = prototype_obj;


// Extra_Info - ( execpt premetives, almost everything in js is an object at fundamental level, normal objects, functions, arrays, etc, and every object have a prototype, the prototype can be replaced with new one. everything which is a object at fundamental level have a prototype given internally by js engine ( browser / window ))




//----------------------------------------

// CLASS IN JS


// CLASS - A Blueprint to create objects with the same pre-defined methods and properties. to create multiple objects with the same property and methods, create a blueprint ( class ).

// OBJECT - The object is a instance of a class which inherits properties and methods from the class

class myclass {          // use the work class to create a new class
    constructor() {}
    method() {}           // inside a class there is no need to give "," (coma) to seperate, and only shorthand syntax for methods works.
}

new myclass();  // use the keyword "new" to create a new object, use the class name to create the object from that class.

let obj = new myclass(); // stored into a variable.




// INSTANCE METHOD -

// DEFINE PROPERTY INSIDE OBJECT - a property can be defined inside an object using instance method, they are methods but specally and only for the objects. 

// This instance method let you access the name property to manually set / update / read / delete it for the objects you create with this class

class Myclass {
    constructor() {
        // empty
    }

    set_name(name) {           // this (name) is a parameter
        this.Fullname = name;      // used this keyword here, Fullname is the property name here, but the name here is the one used in parameter.
    }
}




// PARAMETER AND ARGUMENT - 

/*
    PARAMETER = a placeholder used, ARGUMENT = the actual data which will be filled in the place of the parameter

    the parameter is a empty slot which will be filled manually later when calling this method, you will give an argument (data) in the same place where the name parameter is written, and later that argument you gave will be accesable inside that object, it will be stored inside the property which is getting created inside that method.

    the property inside it also have that placeholder name in it, its refering to the same placeholder which is a parameter, the argument will take place of the name and will become the value of the fullname property.

THIS KEYWORD -

    this keyword always refers to the current object, so everytime this class will create a new object and the code inside will be executed, this keyword will always point to the current object which is getting created using this class, so this will store the property inside the current variable.

    Logically -  this.Fullname === IS EQUALS TO === obj.Fullname, both of them can access the property of an object, where obj is a fixed name, this keyword is dynamic.

*/

// Extra_info - ( the method is called instance method becuz as we know the objects are instance of a class, this method is associated with objects, that's why its called a instance method.)




/* CONSTRUCTOR -

    A special method created using the keywrod "CONSTRUCTOR"
    
    A constructor is used to initialize a new object by giving it some basic properties automatically when creating an object, a constructor is used to define properties inside every object created using that class, when creating a new object the parameters are given to take place of the values inside the constructor's properties.

*/

class Myclass {
    constructor(name,age){
        this.Fullname = name;
        this.Age = age;
    }
}

let obj = new Myclass(Asim,22);

// this will create an object which will have the properties fullname and age with the values asim and 22.

// A Constructor can also contain methods, when creating a new object the constructor is automatically executes the code inside it, mostly used to assign values to some properties, but can also used to execute any method or execute any type of code like printing "Hello" on every new object creation - console.log("Hello")




// INHERITANCE -

// passing down the properties and methods from the parent class to the child class, then the child class can also use the same properties and methods.

// BASIC SYNTAX -    EXTEND KEYWORD IS USED

class Parent {

}

class Child extends Parent{

}

// Example

class Parent {
    method1(name){
        console.log(name)
    }
}

class child extends Parent {
    method2(age){
        console.log(age)
    }
}

child.method1("asim") // returns "asim" even when method1 is not the child class's method.

// note - if child and parent have same method, then child's methods will be used for the child, not parent's. this concept called method overriding



// SUPER KEYWORD -

/*
Define -

    SUPER keyword refers to the parent class and can be used inside the child class, it have multiple usecases.

    this super keyword is used to access the parents method mostly in these special conditions.

1-Condition
    
    as we know if child and parent both have same method, then child's method is used, IF you also want to use parents method with child's method, use the keyword SUPER

2-Condition
    
    the constructor is also a special type of method, so the parents constructor can be used with child's constructor at the same time using the super keyword.

    when inheriting from a parent class, its necessasry to invoke the parent class's constructor inside the child class's constructor in the first place, using the super keyword.
*/

class Parent {
    constructor(name){
        this.fullname = name;
    }

    method1(example){
        console.log(example);
    }
}

class child extends Parent {
    constructor(age){
        super(name)     //  invoked / called the parent's class's constructor using super keyword.
        // super(age)   // this is an example of how to pass the value of any parameter of child class to its parent class using super keyword.
        this.age = age   // the super keyword must be used before using this. in child, becuz this keyword first will be used for parent.
    }

    method1(example2){
        super.method1()   // super can access a method of parent inside a child method, combining them both.
        console.log(example2);
    }
}


// Extra_Info - ( when using the super keyword in the child's constructor, the flow goes like, first the child's constructor starts executing, then it goes to parent and executes its constructor, then it comes back and executes the remaining child constructor code and then exits, and that's why both the classes use the this. keyword, so let the parent class use this first by writing super before using this in child, then the child can use this after parent constructor is done executing. )

// Extra_Info - ( when using super keyword in constructor, the name of the parameter dosen't matter if its different or same as parent class, giving same name here is just conventional )

//----------------------------------------