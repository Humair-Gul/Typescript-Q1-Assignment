/* Question 43:  

Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array 
to show that you have one array of the original names and one array with the Great added
 to each magician’s name. */

 let magiciansNames = ["Talat", "Waseem", "Huraira", "Abrar"];
 let copyMagicians = magiciansNames;
 
 let make_greats = () => {
     for (let magician in magiciansNames) {
       magiciansNames[magician] = "The Great Magician " + magiciansNames[magician];
     }
   };
   let show_magicians1 = () => {
     for (let name in magiciansNames) {
       console.log(magiciansNames[name]);
     }
   };
   
   show_magicians1();
   let show_magicians2 = () => {
     for (let name in copyMagicians) {
       console.log(copyMagicians[name]);
     }
   };
   
   make_greats();
   show_magicians2();