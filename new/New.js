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