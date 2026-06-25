///// ARRAYS

// STORE MULTIPLE VALUES IN ONE VARIABLE LINEARLY, VALUES ARE INDEXED, CAN STORE DIFF TYPE OF VALUES IN A SINGLE ARRAY.

// EXAMPLE OF ARRAY -

let arr = ["Asim", "Xyz", "Batman", "ABC", "OXD"];

console.log(arr);

// ALL THE VALUES ARE INDEXED STARTING FROM 0

arr[1] = "ijk";     // changed the value of original array directly, no need to make new array to store updated array

console.log(arr);


// ARRAYS ARE MUTABLE ( VALUES CAN BE CHANGED DIRECTLY ) BUT STRINGS ARE NOT, THEY CREATE A NEW VAR TO STORE CHANGED VALUE


// APPLYING LOOP ON ARRAY TO PRINT ALL THE VALUES OF THE ARRAY

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


//----------------------------------------

// ### MINI challenge - FIND THE AVERAGE MARKS [85, 97, 44, 37, 76, 60] FROM THIS ARRAY OF STUDENTS MARKS

let marks = [85, 97, 44, 37, 76, 60];

let total_marks = 0;

for(let avg of marks){
    total_marks += avg;
}

let average = total_marks / marks.length;

console.log(average);

//----------------------------------------

// ### MINI challenge - UPDATE THE ITEMS PRICE AFTER APPLYING 10% DISCOUNT ON EACH ITEM

//----------------------------------------

// solution using for of loop

let items = [250, 645, 300, 900, 50];

let i = 0;

for(let val of items){
    let offer = val / 10;
    items[i] = val - offer;
    console.log(items[i]);
    i++
}

//----------------------------------------

// solution using for loop


let items = [250, 645, 300, 900, 50];

for(let i = 0; i < 5; i++){
    let offer = items[i] / 10;
    let val = items[i] - offer;
    console.log(val);
}

//----------------------------------------//----------------------------------------//----------------------------------------//----------------------------------------

// ARRAY METHODS        -- TWO TYPES        1. CHANGES THE ARRAY ITSELF           2. STORE THE UPDATES INFO IN A NEW ARRAY

//----------------------------------------//----------------------------------------

// TYPE 1

//----------------------------------------

// arr.unshift();     - ADD TO START

let arr = ["item1", "item2", "item3", "item4", "item5"];

arr.unshift("item-1", "item0");

console.log(arr);

//----------------------------------------

// arr.shift();  -   REMOVE FROM START

let arr = ["item1", "item2", "item3", "item4", "item5"];

let deleted_items = arr.shift();

console.log(arr);

console.log("deleted_items : ", deleted_items);

//----------------------------------------

// arr.push();  - ADD TO END

let arr = ["item1", "item2", "item3", "item4", "item5"];

arr.push("item6", "item7");

console.log(arr);

//----------------------------------------

// arr.pop() - REMOVE FROM END

let arr = ["item1", "item2", "item3", "item4", "item5"];

let deleted_item = arr.pop();

console.log(arr);

console.log("deleted_item : ", deleted_item);

//----------------------------------------

// SPLICE METHOD -  OPPOSITE OF SLICE  -  arr.splice(starting_index,del_count, new_elements); - this removes elements from starting index including starting index itself, then push new elements.

let arr = ["item1", "item2", "item3", "item4", "item5"];

let new_arr = arr.splice(2, 2, "New_item", "New_item");

console.log(arr);


//----------------------------------------

// ADDING VALUES IN ARRAY USING SPLICE

let arr = ["item1", "item2", "item3", "item4", "item5"];

arr.splice(0, 0, "item0");

console.log(arr);

// - splice() always counts on the current item so it replaces the same item in this (0,1,"replacing_item") condition.

//----------------------------------------

// TYPE 2

//----------------------------------------

// CONVERT INTO STRING METHOD - toString()  - returns the values of a array in the string form seperated by ,

let arr = ["item1", "item2", "item3", "item4", "item5"];

let Array_String = arr.toString();

console.log(arr);

console.log("Array_String : ", Array_String);

//----------------------------------------

// CONCAT METHOD  -  arr.conccat()  - combines two arrays & returns the combined value ( no change in original array)

let arr = ["item1", "item2", "item3", "item4", "item5"];

let ary = ["item6", "item7"];

let combined = arr.concat(ary);

console.log("combined array : ", combined);

// MULTI STRING CONCAT

let aryy = ["item8", "item9"];

let triple = arr.concat(ary, aryy);

console.log("Triple : ",triple);

console.log("Og_array :" ,arr);

//----------------------------------------

// SLICE METHOD  -  arr.slice()  - RETURNS A SPECIFIC PART OF ARRAY

let arr = ["item1", "item2", "item3", "item4", "item5"];

console.log(arr.slice(0,3));

console.log(arr.slice(3,arr.length));

//----------------------------------------
