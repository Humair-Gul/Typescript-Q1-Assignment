/* Question 28 

Stages of Life: Write an if-else chain that determines a person’s stage of life. 
Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */

let personAge: number = 30;
let personAgeResult =
  personAge < 2
    ? "Person is baby"
    : personAge >= 2 && personAge < 4
    ? "Person is Todler"
    : personAge >= 4 && personAge <= 13
    ? "Person is a kid"
    : personAge >= 13 && personAge < 20
    ? "Person is a teenager"
    : personAge >= 20 && personAge <= 65
    ? "Person is an adult"
    : personAge >= 65
    ? "Person is an elder"
    : "Enter an age";
console.log(personAgeResult);
