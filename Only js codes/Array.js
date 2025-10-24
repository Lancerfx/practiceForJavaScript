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

salad.push("salt");
console.log(salad);