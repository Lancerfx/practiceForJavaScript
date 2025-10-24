console.log("Hello world!");

function car(model){
  this.model = model
}

const BmwCar = new car("Bmw X1");
console.log(BmwCar)


const salad = ["Tomato","Potato","Egg","greenLeaf"];
const anotherSalad = new Array ("Tomato","Potato","Egg","greenLeaf");
console.log("Salad ",salad);
console.log("Another Salad ", anotherSalad)


for(let i = 0; i<= salad.length - 1; i++){
  console.log(`Recipe of this ${i} salad is ${salad[i]}`)
}


// Push - end (method).
salad.push("salt");
// what happens when we do this does it return any thing?
// this push does in return when we put push method this automatically adds +1 in an array 
// calling the push method in this salad doesnot make new array but it changes the source code it self. salad had 4 element before after calling push (method it self ) now it has 5 elements.
console.log(salad);



// unshift(merhod) - start it is like push but the different is push menthod put element in last but unshift method put element at begining of an array.
const unsht = salad.unshift("tomato");
console.log(unsht) // this unsht mean unshift i am checking is it retuning element or not (how many).
console.log(salad);


// Now how to erase or delete an element from an array.
// pop (method)- end < it is also works like push method but push put the element this pop menthod delete an element from an array from end.
// ehat does this [pop] return is it returns the removed element example if i remove tomato from last using pop and see its return it shows tomato cause it removed tomato.

console.log(salad);
salad.pop();
console.log(salad);

// this is the example of return pop.
// i have used 2 times same pop so there is no salt in the end now so dont be confuse.
console.log(salad);
const ret = salad.pop();
console.log(ret); // return by pop removed the element at last which was named as greenleaf
console.log(salad);


// shift(method) - same like unshift but opposite unshift removes from end shift removes from begining.

salad.shift(); // this shift method removes element of array from the begining.
console.log(salad);