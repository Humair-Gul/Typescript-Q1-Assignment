/* Question:29 

Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

let favorite_fruits = ["Guava", "Mango", "Banana"];

for (let fruit in favorite_fruits) {
  if (favorite_fruits[fruit] == "Grapes") {
    console.log(`You really like ${favorite_fruits[fruit]}!`);
  }
  if (favorite_fruits[fruit] == "Guava") {
    console.log(`You really like ${favorite_fruits[fruit]}!`);
  }

  if (favorite_fruits[fruit] == "Banana") {
    console.log(`You really like ${favorite_fruits[fruit]}!`);
  }
  if (favorite_fruits[fruit] == "Mango") {
    console.log(`You really like ${favorite_fruits[fruit]}!`);
  }
  if (favorite_fruits[fruit] == "Apple") {
    console.log(`You really like ${favorite_fruits[fruit]}!`)
  }}
