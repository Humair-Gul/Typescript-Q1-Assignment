/* Question 41 Magicians: 

Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array. */

let magicianName = ["Humair", "Zaroon", "Talat", "Usama","Waseem"];

let show_magicians = () => {
  for (let name in magicianName) {
    console.log(magicianName[name]);
  }
};
show_magicians();