/* Question 42 Great Magicians: 

Start with a copy of your program from Exercise 39. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

let magicianNames = ["Talat", "Waseem", "Huraira", "Abrar"];
let copyMagician = magicianNames;

let make_great = () => {
  for (let magician in magicianNames) {
    magicianNames[magician] = "The Great Magician " + magicianNames[magician];
  }
};

let show_magician = () => {
  for (let name in magicianNames) {
    console.log(magicianNames[name]);
  }
};

make_great();
show_magician();