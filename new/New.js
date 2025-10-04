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


