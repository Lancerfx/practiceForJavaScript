function Outside(){
  document.getElementById("External").innerHTML = "Congrulation External Js is success.";
}

  function Change(){
    document.getElementById("Function").innerHTML = "This paragraph is changed Thanku for co-operation.";
  }

  //Js syntax like variables values keywords operators case-sensitive 
  let x;
  x = 4;
  y = 5;
  c = x * y;
document.write(c);

// day second 
let a = "Name";
  b = "Age";
c = a+b;
document.write(c);

// with function applying
let hari;
let gita;
let bita;
function names(){
  hari = 1;
  gita = 2;
  bita = 3;
  return "demo1";
}

document.getElementById(names()).innerHTML = "Total:" + (hari + gita + bita);


function Names(){
  let nameA= "Hari";
let nameB = "Gita";
let nameC = "Sita";
return "STD-Names";}
document.getElementById(Names()).innerHTML ="Students Names:"+" "+ (nameA+" "+ nameB+ " "+ nameC);

// let hari;
// let gita;
// let bita;

// function names(){
//   hari = 1;
//   gita = 2;
//   bita = 3;
//   return "demo1";
// }

// document.getElementById(names()).innerHTML =
//   "Total: " + (hari + gita + bita);



