/* Question :24 

More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following: */

// • Tests for equality and inequality with strings:

let nameInLowcase : string = "humair";
let nameInUppercase : string = "HUMAIR";
console.log(
  nameInLowcase == nameInUppercase
    ? "Print YES if true"
    : "Print NO if false"
); //False becaue a and A are not equal. 2nd statement will print

// • Tests using the lower case function:

console.log(
  nameInLowcase.toLowerCase() == nameInUppercase.toLowerCase()
    ? "Print YES if true"
    : "Print NO if false"
); //true. 1st statement will print

/* • Numerical tests involving equality and inequality, 
greater than and less than, greater than or equal to, and less than or equal to. */

console.log(40 == 40); //true as 40 is equal to 40
console.log(4 <= 5); //true as 4 is less than 5
console.log(3 < 4); //true as 3 is less than 4
console.log(7 > 5); //true as 7 is greater than 5
console.log(21 >= 20); //true as 21 is greater than 20

// • Tests using "and" and "or" operators

// Using OR || Operator

console.log(
  "Humair" == "Humair" || 10 == 10 ? "Print YES if true" : "Print NO if false"
); // true 1st statement will print

// Using and && operator

console.log(
    "Humair" == "Humair" || 10 == 10 ? "Print YES if true" : "Print NO if false"
);// both conditions are true. 1st statement will print

// • Test whether an item is in a array

let arrayChk = [1, 2, 3, 4, 5, 6];
let isInArray = arrayChk.indexOf(3)
console.log(isInArray); //true as it is an array

// • Test whether an item is not in a array
let chkArr2 = true;
console.log(`it is an array or not ${chkArr2}`, Array.isArray(chkArr2)); //false it is boolean