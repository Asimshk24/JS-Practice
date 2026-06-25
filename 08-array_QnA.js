// ### MINI challengeES - 

//----------------------------------------

// ### 1. SUM OF ALL VALUES OF ARRAY

let arr = [12,33,35,25,10,23,43];

let i = 0;

let sum = 0;

while(i < arr.length){
    sum += arr[i];
    i++;
}

console.log(sum);

//----------------------------------------

// ### 2. -  find the largest num in the array - let arr = [12, 45, 7, 89, 23];

let arr = [12, 45, 7, 89, 23];

let largest = arr[0];

for(let i = 1; i < arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    };
    console.log(largest);
}

console.log(largest);

//----------------------------------------

// ### 3. find the even numbers from the array and print them array = let arr = [2, 5, 8, 11, 14, 17];


let arr = [2, 5, 8, 11, 14, 17];

let sum = 0;

let count = 0;

for(let i = 0; i < arr.length; i++){
    sum = arr[i] % 2;
    if(sum === 0){
        count++
    };
}

console.log(count);

//----------------------------------------

/// ### 4. add string in the end of an array using arr.methods

let arr = [2, 5, 8, 11, 14, 17]; // random array

arr.push("mango");

console.log(arr);

//----------------------------------------

/// ### 5. print the following array in reverse without using the reverse method

let arr = [2, 5, 8, 11, 14, 17];

let reversed = [];

for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
}

console.log(reversed);

console.log(arr.reverse());  // also example of reverse method

//----------------------------------------

// ### 6. replace "orange" with "banana" in the following array let fruits = ["Apple", "Orange", "Mango"];

let fruits = ["Apple", "Orange", "Mango"];

fruits.splice(1, 1, "banana");

console.log(fruits);

//----------------------------------------

// ### 7. insert "watermelon" in the index 2    let fruits = ["Apple", "Banana", "Mango"];

let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(2, 0, "watermelon");

console.log(fruits);

//----------------------------------------

// ### 8. Create a new array which has only even numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let even = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        even.push(arr[i]);
    }
}

console.log(even);

//----------------------------------------

// ### 9. Double the original numbers of an array and store them in a new array

let arr = [2, 4, 6, 8];

let double = [];

for(let i = 0; i < arr.length; i++){
    exp = arr[i] * 2;
    double.push(exp);  
}

console.log(double);

//----------------------------------------

// ### 10. Count how many a's are there in the array

let letters = ["a", "b", "c", "a", "d", "a"];

let count = 0;

for(let i of letters){
    if(i === "a"){
        count++;
    }
}

console.log(count);

//----------------------------------------

// ### 11. check if the array is sorted or not

let arr = [10, 20, 30, 40, 50];

let sorted = true ;

for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] > arr[i+1]){
        sorted = false ;
        break;
    }
}

console.log(sorted);

//----------------------------------------

// ### 12. remove duplicate values from an array

let arr = [1, 2, 2, 3, 4, 4, 5];

let new_arr = [];

for(let i of arr){
    if(new_arr.includes(i)){
    } else {
        new_arr.push(i);
    }
}

console.log(new_arr);

//----------------------------------------

// ### 13. Find the second largest numberber from the array

let arr = [10, 45, 67, 89, 23, 89];

let largest = 0;
let second_largest = -Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        second_largest = largest;
        largest = arr[i];
    } else if(arr[i] > second_largest && largest !== arr[i]) {
        second_largest = arr[i];
    }
}

console.log(largest);
console.log(second_largest);

//----------------------------------------

// ### 14. rotate the array values to right by 1 - [1, 2, 3, 4, 5]  -- algo = run a loop to assign the value to its previous value using i - 1, this will swap the numbers, increasing their index by 1, but the number on the first index can not be swaped with the last one using loop so did it manually,


let arr = [1, 2, 3, 4, 5];

let temp = arr[arr.length -1]

for(let i = arr.length - 1; i > 0; i-- ){
    arr[i] = arr[i - 1];
}


arr[0] = temp;

console.log(arr);

//----------------------------------------

// ### 15. Check if an element appears more than 3 times in an array

let arr = [1, 2, 2, 2, 2, 3];

let count = 0;

let found = false;

for(let i = 0; i < arr.length; i++){

    count = 0;

    for(let j = 0; j < arr.length; j++ ){
        
        if(arr[i] === arr[j]){
            
            count++

        }
    }

    if(count>3){
        found = true;
        break;
    }
}

console.log(found);

//----------------------------------------

// ### 16. maximum product of any two numbers from the array.    ( finding 2 highest num first )

const arr = [1, 2, 4, 3, 5, 6];

let second_largest = -Infinity;

let largest = -Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i]>largest){
        second_largest = largest;
        largest = arr[i]
    } else if(arr[i]>second_largest) {
        second_largest = arr[i]
    }
}

console.log("product: ", second_largest*largest);

//----------------------------------------
