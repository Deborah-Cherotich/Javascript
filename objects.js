const cup = {
    color: "red",
    shape:"circular",
    weight:"50 grames",
    size:"medium",

    discription:{
        drinktype:"tea",
        temperature:"hot"
    },
// methods(properties whose value are function)

// not globally
drink:function(){
    console.log('Use me to drink');
    console.log(`The main purpose of this is to drink ${this.discription.temperature} ${this.discription.drinktype}`);
}
// globally
// drink:() =>{
//     console.log('Use me to drink');
//     console.log(`The main purpose of this is to drink ${cup.discription.temperature} ${cup.discription.drinktype}`);
// }


};
console.log({color: cup.color});
console.log('size', cup['size']);
console.log('temperature', cup.discription.temperature);

// log another property
cup. material = 'ceramic';
console.log({cup});

// to edit 
cup.color= 'green'
console.log({cup});

// delete a property
delete cup.material;

console.log({cup});

cup.drink();


const keys = Object.keys(cup);
console.log({keys});

const values = Object.values(cup);
console.log({values});

// iterate throught the object
// bracket notation because it has no that property

Object.keys(cup).forEach(item=>{
    console.log({key:item, values:cup[item]});
})


