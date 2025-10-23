console.log("I am learning loops.")
// let a = 1;
// for(let i = 0; i < 100; i++){
//   console.log("Number is: ",a+i);
// }

// Print numbers from 1 to 10 using a for loop.

// Print numbers from 10 down to 1 using a for loop.

// Print only even numbers between 1 and 20.

// Print only odd numbers between 1 and 20.

// Print multiples of 5 up to 50 (like 5, 10, 15…).

// Add all numbers from 1 to 10 and print the total.

// Print numbers from 50 to 100.

// Print numbers between 0 and 30, but skip numbers less than 10.

// Print “JavaScript is fun!” 5 times using a loop.

// Use a variable start = 3 and print the next 10 numbers after it.
















//Print numbers from 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++){
  console.log("The number is: ",i);
}


// Print numbers from 10 down to 1 using a for loop.

for(let i = 10; i >= 1; i--){
  console.log("The number is: ",i)
}


// Print only even numbers between 1 and 20.

for(let i = 20; i/2; i--){
  console.log("The number is even: ",i)
}

// Print only odd numbers between 1 and 20.

for(let i= 1; i/2; i++){
  console.log("The number is odd: ",i);
}


// Print multiples of 5 up to 50 (like 5, 10, 15…).
for(let i = 5; i<= 50; i++){
console.log("multiplication of 5: ",i);
}



// Print numbers from 50 to 100.

for(let i =50; i <= 10; i++){
  console.log("number from 50 to 100: ", i);
}

// Print numbers between 0 and 30, but skip numbers less than 10.

for(let i = 10; i <30; i++){
  console.log("numbers between 0 and 30, but skip numbers less than 10: ",i);
}

// Print “JavaScript is fun!” 5 times using a loop.

for(let i = 1; i <= 5; i++){
  console.log(i,") JavaScript is fun!");
}


// Use a variable start = 3 and print the next 10 numbers after it.

for(let start = 3; start <= 13; i++){
  console.log("variable start = 3 and print the next 10 numbers after it: ",i)
}



// day second same practice

// Print numbers from 1 to 10 using a for loop.

// Print numbers from 10 down to 1 using a for loop.

// Print only even numbers between 1 and 20.

// Print only odd numbers between 1 and 20.

// Print multiples of 5 up to 50 (like 5, 10, 15…).

// Add all numbers from 1 to 10 and print the total.

// Print numbers from 50 to 100.

// Print numbers between 0 and 30, but skip numbers less than 10.

// Print “JavaScript is fun!” 5 times using a loop.

// Use a variable start = 3 and print the next 10 numbers after it.

















// Print numbers from 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++){
  console.log("Numbers form 1 to 10: ",i);
}


// Print numbers from 10 down to 1 using a for loop.

for(let i = 10; i >= 1; i--){
  console.log("Numbers from 10 to 1: ",i);
}


// Print only even numbers between 1 and 20.

for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i," Is even number.")
  }
}



// Print only odd numbers between 1 and 20.

for(let i = 1; i <= 20; i++){
  if( i % 2 !== 0){
    console.log(i," Is odd number. ");
  }
}


// Print multiples of 5 up to 50 (like 5, 10, 15…).

for(let i = 5; i <= 50; i += 5){
  console.log("Multiplication of 5: ",i);
}


// Add all numbers from 1 to 10 and print the total.

sum = 0;
for(let i = 10; i >= sum; sum++){
  sum = sum + i;
  console.log("Adding all numbers from 1 to 10: ", sum);
}


// Print numbers from 50 to 100.

for(let i = 50; i<= 100; i++){
  console.log("Number from 50 to 100: ",i)
}


// Print numbers between 0 and 30, but skip numbers less than 10.

for(let i = 10; i <=30; i++){
  console.log("Number from 0 to 30 not less than 10: ", i);
}


// Print “JavaScript is fun!” 5 times using a loop.

for(let i = 1; i <= 5; i++){
  console.log(i,(") JavaScript is fun!"))
}



// Use a variable start = 3 and print the next 10 numbers after it.

for(let start =3; start <= 13; start++){
  console.log("variable start = 3 and print the next 10 numbers after it ",start);
}


// Starting If else 

 // 1️⃣ Write a program to check if a number is positive or negative.

var num = 1;
if(num >= 0){
  console.log("Is a positive number ",num);
}else if(num < 0){
  console.log("Number is less than 0 negative num ",num)
}

//2️⃣ Write a program to check if a number is even or odd.

var i = 20;
if(i % 2 ===0){
  console.log("Is Even number ", i);
} else if(i % 2 !==0){
  console.log("Is Odd number ", i)
}

//3️⃣ Write a program to check if a person is eligible to vote (age ≥ 18).

let age = 17;
if(age >= 18){
  console.log("Welcome for voting");
} else if(age < 18){
  console.log("You are unable to vote till 18 ");
}

//4️⃣ Write a program to find the largest of two numbers.

let i = [1,2,3,4,5]
console.log("largest number from 1,2,3,4,5 ", Math.max(i));


//5️⃣ Write a program to check whether a number is divisible by 5 and 11.

for(let i= 1; i <= 100;i++){
  if(i % 5||11 ===0){
    console.log("This number is divisivle by: ", i);
  }
}

//6️⃣ Write a program to check if a year is a leap year or not.
let year = 2000;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
  console.log("Year 2000 is a leap year.")
}else{
  console.log("The year 2000 is not a leap year")
}

//7️⃣ Write a program that takes a mark (0–100) and prints the grade:
// | Marks | Grade |
// | ----- | ----- |
// | ≥ 90  | A     |
// | 80–89 | B     |
// | 70–79 | C     |
// | 60–69 | D     |
// | < 60  | F     |


let marks = parseInt(prompt("Enter your marks between 0-100: "));
if(marks>=90 && marks<=100){
  console.log("Congrulation you got an 'A'");
}else if(marks>=80 && marks <=89){
  console.log("Congrulation you got 'B'");
}else if(marks>=70 && marks <= 79){
  console.log("you got 'C'");
}else if(marks>=60 && marks <= 69){
  console.log("You got 'D'");
}else if(marks>=0 && marks<=60){
  console.log("work hard next time 'F'");
}else{
  console.log("Try seeing your result again may be server issue.")
}


//8️⃣ Write a program to check if a number is zero, positive, or negative.

let number = parseInt(prompt("Please enter the number to check positive or negative between 100 to -100 "));
if(number = 0){
  console.log("Number is Zero not a positive neather negative number.")
} else if(number>=1 && number<=100){
  console.log("Number is positive number.")
} else if (number>=-1 && number<=-100){
  console.log("Number is negative.")
}else{
  console.log("try again")
}

//9️⃣ Write a program to check if a character is a vowel or consonant.

let vowels = prompt("Enter the character to check if is it vowel or not");

if(vowels.includes("a,e,i,o,u")){
  console.log(vowels," is a vowel character.")
}else{
  console.log(vowels," is not a vowel character.")
}


//🔟 Write a program to check if a person’s age falls under:

// Child (0–12)

// Teen (13–19)

// Adult (20–59)

// Senior (60+)

let Age = parseInt(prompt("Please enter your age to know what age you falls under."))

if(Age>=0 && Age<= 12){
  console.log(Age," you are a child.");
}else if(Age>=13 && Age<= 19){
  console.log(Age," yor are Teen");
}else if(Age>=20 && Age<=59){
  console.log(Age," you are Adult");
}else if (Age>=60 && Age<=100){
  console.log(Age," your are a senior");
}else{
  console.log("Congrulation you are in that 1% people who are wise.")
}

















// If else Level 2


// 1️⃣ Largest of Three Numbers
//Write a program to find the largest among three numbers.

let a= 20;
let b = 30;
let c =40;
if(a>=b && a>=c){
  console.log(a," is greater than other numbers.")
}else if(b>=a && b>=c){
  console.log(b," is greater than other numbers.")
}else{
  console.log(c," is greater and largest among of all.")
}


//2️⃣ Check if a Number is a Multiple of Both 3 and 7

for(let i =1; i<=100;i++){
  if(i % 3 === 0 && i % 7 === 0){
    console.log(i," is multiple of both 3 and 7.")
  }else{
    console.log(i," is not multiple of 3 and 7.")
  }
}


//Do while loop

let loop = 5;

do{
  console.log(loop)
  loop++
}while(loop<8)
