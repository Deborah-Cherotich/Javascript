const documentElement =document.documentElement;
console.log({documentElement});

console.log('body',document.body);
console.log('head',document.head);

const container = document.getElementById('container');
console.log('parent', container.parentElement);
console.log('previousSibling', container.previousElementSibling);
console.log('nextSibling', container.nextElementSibling);
console.log('children', container.children);
console.log('firstChild', container.firstElementChild);
console.log('lastchild', container.lastElementChild);

// UPDATE DOM
const heading = document.getElementById('container-heading');
heading.innerHTML = "Intro to DOM manupilation";
heading.style.color = 'red';

// CREATE DOM
const newChild = document.createElement('p');
container.appendChild(newChild);
newChild.innerHTML = 'I am the new child'

// ADD CLASS
newChild.setAttribute('class','container-new-text');

// DELETE DOM
newChild.remove();

const button = document.getElementById('button');
button.style.border = 'none';
button.style.padding = "10px 15px";
button.style.background ="#4169E1";
button.style.bordeRadius = "5px";
button.style.cursor = "pointer";
button.style.color = "#ffffff";

button.addEventListener('click',function(){
button.innerHTML = "Clicked!";
button.style.background = "#50C878"

})
