/* Question 23:

Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this: 

let car = 'subaru';
 console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let student = "Humair";
let institution = "PIAIC";
console.log(student == "Humair" ? true : false); //true
console.log(student == "ALI" ? true : false); //false

console.log(
  `The Result with OR Operator`,
  student == "Humair" || institution == "AIC" ? true : false
); //true will print as first condition is true

console.log(
  `The Result with AND Operator`,
  student == "Humair" && institution == "AIC" ? true : false
); //false will print as second condition is false

console.log(
  `The Result with Not Operator`,
  student != "ALI" && institution != "AIC" ? true : false
); //true will print as first and second condition are true

console.log(
  `The Result with Not Operator`,
  student != "Humair" && institution != "AIC" ? true : false
); //false will print as first condition is false

console.log("HUMAIR" > "humair"); //false as h is greater than H in unicode


console.log("h" > "H"); //true


console.log(5 > 9 ? "yes 5 is grater than 9" : "5 is smaller than 9");
//false as 5 is less than 9. 2nd statement will print


console.log("K" > "z" ? "yes K is grater than z" : "K is smaller than z");
//False z is greater than K in unicode so 2nd statement will print


console.log(
  "true" > "false"
    ? "Yes true is Greater than false"
    : "No true is Smaller than false"
); //True so 1st statement will print. //Because true==1 and false==0