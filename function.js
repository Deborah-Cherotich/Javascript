function add (num1, num2){
    const sum = num1 + num2;
    console.log({console:sum});
    return {return:sum};

}
console.log(add(2,3));
add(4,5);

//function expression
const subtract = function(num1,num2) {
    console.log(num1 - num2);

};
subtract(20,10);

//Arrow function
const multiply =(num1,num2) => console.log(num1 * num2);
multiply(5,6);

// map takes in afunction as a parameter

// immediately invokes function expression

(function(){
    console.log("Hello");
})();

//hoisting=> using a function before you declared it
//using function declaration works
//calling it before declaration

// function reverseString(){
//     const names = ["Jane","Mercy","Kim","Travor"];
//     const sortedArray = names.sort(a,b);

// }

function checkNumbers(){
    num = 20;
    if(num == positive){
        console.log("positve")}
  
    else{
        console.log("Zero");
    }
}
