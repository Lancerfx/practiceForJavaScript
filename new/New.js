function Names(){
  let firstName = "Sagar";
  let lastName = "Adhikari";
  return firstName + " " + lastName;
}
document.getElementById("Names").innerHTML = Names();

function AboutMe(){
      let Name = "Sagar Adhikari";
    let Age = 20;
    let Collage = "Jotykunj Secondary English School";
    let GPA = 2.71;
    let location = "Khalte Mashina";
    return "About me " + "My name is "+ Name +". "+ "I am "+Age +" years old."+ " I Graduaded from "+ Collage +" . " + " I got "+GPA+" GPA in class 12. "+" My live in ward n.o 14 named "+location+".";
}
document.getElementById("AboutMe").innerHTML = AboutMe();

// This day 5th js Operators practice
function Add(){
  let a = 5; b = 5; c = a + b;
  return c;
}
document.getElementById("Add").innerHTML = "5 + 5 = "+ Add();

// function for subtraction 
function Subtract(){
  let a = 5; b = 5; c = a - b;
  return c;
}
document.getElementById("Subtract").innerHTML = "5 - 5 = "+ Subtract();

// This function is for multiplication 
function Multip(){
  let a = 5; b = 5; c = a * b;
  return c;
}
document.getElementById("Multip").innerHTML = "5 * 5 = "+ Multip();

//This is for division (/)

function Divid(){
  let a = 5; b = 5; c = a / b;
  return c;
}
document.getElementById("Divid").innerHTML = "5 / 5 = "+ Divid();

// This function is for increment for (++)

function Incre(){
  let a = 5; a++; c = a;
  return c;
}
document.getElementById("Incre").innerHTML = "5++ = "+ Incre();

// This function is for decrement (--)

function Decre(){
  let a = 5; a--; c = a;
  return c;
}
document.getElementById("Decre").innerHTML = "5-- = "+ Decre();

// This function is for Remainder (%)

function Remain(){
  let a = 5; b = 5; c = a % b;
  return c;
}
document.getElementById("Remain").innerHTML = "5 % 5 = "+ Remain();

//This function is for Dmultiply power xsquare type

function Dmulti(){
  let a = 5; b = a ** 2;
  return b;
}
document.getElementById("Dmulti").innerHTML = "5 ** 2 = "+ Dmulti();

// This is extra and easy way to use operators 

// first function is for (=)
  function equals(){
    let x =10; y = 5; x = y;
    return x;
  }
  document.getElementById("equals").innerHTML = " x is 10 and y is 5 then x = y that what is the value of x = " + equals();

  // Second function is for (+=)combination.

    function Combo(){
    let x =10; y = 5; x += y;
    return x;
  }
  document.getElementById("Combo").innerHTML = " same as before except operator is += chaged value is  = " + Combo();

  // This function is use for -= operator

      function subAndEqual(){
    let x =10; y = 5; x -= y;
    return x;
  }
  document.getElementById("-=").innerHTML = " same as before except operator is -= chaged value is  = " + subAndEqual();

  // This function is for (*=) Operators.

      function multiAndEqual(){
    let x =10; y = 5; x *= y;
    return x;
  }
  document.getElementById("*=").innerHTML = " same as before except operator is *= chaged value is  = " + multiAndEqual();

  // This is for (**=) Operator to use.

      function dMultiAndEqual(){
    let x =10; y = 5; x **= y;
    return x;
  }
  document.getElementById("**=").innerHTML = " same as before except operator is **= chaged value is  = " + dMultiAndEqual();

  // This is for (/=) Operators.

      function divideAndEqual(){
    let x =10; y = 5; x /= y;
    return x;
  }
  document.getElementById("/=").innerHTML = " same as before except operator is /= chaged value is  = " + divideAndEqual();

  //This function is for (%=) Operators.

      function remAndEqual(){
    let x =10; y = 5; x %= y;
    return x;
  }
  document.getElementById("%=").innerHTML = " same as before except operator is %= chaged value is  = " + remAndEqual();

  // This Operators is some kind hard and i feel like VIMP

  // This function is (&&=)Truly Operators.
      function andAndEquals(){
    let x =10; y = 5; x &&= y;
    return x;
  }
  document.getElementById("&&=").innerHTML = " same as before except operator is &&= chaged value is  = " + andAndEquals();

  // This function is for (||=)Falsy Operators.

      function dDashEqual(){
    let x =10; y = 5; x ||= y;
    return x;
  }
  document.getElementById("||=").innerHTML = " same as before except operator is ||= chaged value is  = " + dDashEqual();

  //This function is (??=) null Operators.

      function dWhatEquals(){
    let x =10; y = 5; x ??= y;
    return x;
  }
  document.getElementById("??=").innerHTML = " same as before except operator is ??= chaged value is  = " + dWhatEquals();


  // This is for Day six 6th.

  function Bracket(){
    let a =5;
    let x = (5+5)*a;
    return x;
  }
  document.getElementById("Bracket").innerHTML = "(5 + 5)*5 = " + Bracket();

  // This is for Concatenate String (Text).

  function Text(){
    let text = "My name is ";
    text += "Sagar.";
    return text;
  }
  document.getElementById("Text").innerHTML = "Name = " + Text();


  // Comparing two values for which one id greater than which.

  
  function Compare(){
    let a =5;
    let x = 7;
    let b = a > 7;
    return b;
  }
  document.getElementById("Compare").innerHTML = "5 > 7 = " + Compare();

  // Comparing text here liikely A-Z.

  function CompareText(){
    let a = "A";
    let b = "Z";
    let c = "A" < "Z";
    return c;
  }
  document.getElementById("CompareText").innerHTML = "Comparing Text A < Z = " + CompareText();


  // Comparison Operators
//Equals to Operator
  function Equals(){
    let x = 5;
    let y = x == 8;
    return y;

  }
  document.getElementById("Equals").innerHTML = "x = 5; is x == 8; =  "+ Equals();

  //equals value or equals type 

  function Value(){
    x = 5;
    y = x === "8";
    return y;
  }
  document.getElementById("Value").innerHTML = "Equals value or Equals type of 5 is '8' = "+ Value();

  // This is for Not Equals Value and also not equals or not equals type 

  function NotEqual(){
    let x = 5;
    let y = x !== 8;
    return y ;
  }
  document.getElementById("NotEqual").innerHTML = "Is x = 5 is not !== 8? = " + NotEqual();

  // THis is for gerater or less values are asssigned in  a container

  function GreaterThan(){
    let x  = 5;
    let y = 8;
    let z = x > y;//In this contex this question asks that is x is greater than y?
    return z;
  }
  document.getElementById("GreaterThan").innerHTML = "Is 5 greater than 8 = "+ GreaterThan();

  // less than or Equalls to

  function LessThanOrEquals(){
    let x = 5;
    let y = 4;
    let z = x <= y;
    return z;
  }
  document.getElementById("LessThanOrEquals").innerHTML = "Is 5 Less than or Equals to 4 = " + LessThanOrEquals();

  // This is to Know that if the 15 years old kid can buy alchol or not

  function Alchol(){
    let amanAge= 15;
    if(amanAge >= 18){
      return "Yes,Congrulations you have Successfully bought a Alchol.";
    }else{
      return "No,You have to wait 3years to buy it.";
    }
  }
  document.getElementById("Alchol").innerHTML = "The Kid age is 15 can he buy alchol? = " + Alchol();

  


