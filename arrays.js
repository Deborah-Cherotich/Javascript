let fruits = ["Mango","Banana","Orange"];

let arr = new Array (20, 30);

console.log({fruits});
console.log({arr});


console.log("fruit",fruits[1]);

//change Orange to kiwi
fruits[2] = "Kiwi"
console.log({fruits});

//finding the last item
console.log("last item",fruits[fruits.length-1]);

//slice is a method that akes in two urguments(takes the indexes as urguments)

let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});

//add items at the end
let addEnd = fruits.push("Pawpaw");
console.log({fruits});

//add item at the start
let addStart = fruits.unshift("Pineapple");
console.log({fruits});

//removing item at the end of the array

let remove = fruits.pop();
console.log({fruits});

//remove at the start of the array

let removeStart = fruits.shift();
console.log({fruits});


//Given an array of numbers, find the sum of all items in the array

let items = [20,30,40,50,60];
let add = items.reduce((acc,curr)=> acc + curr);
console.log({add});

//given ana array of numbers, multiply each items in the array by 2
//map go through single item manupilate and return an array
let multiply = items.map(item => item * 2);
console.log({multiply});

//Given an array of numbers  get the squre of each items and return them in an array

let square = [];
items.forEach(items => {
    const multiply = item * item;
    console.log({multiply});
    square.push(multiply)
});
console.log({square});

 const myPets = ["Cow","Bird","Snake","Dog"];
 const b = myPets.toString();
 console.log(b);

 let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
 let arr5 = arr3.sort();
 console.log({arr5});