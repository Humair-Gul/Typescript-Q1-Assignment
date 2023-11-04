/* Question 16: 

More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.

• Use append() to add one new guest to the end of your list. 

• Print a new set of invitation messages, one for each person in your. */

let guests:string[]=["Ali", "Amir", "Haider", "Hanan"];

console.log('I found a bigger dinner table nowI can invite more people')

// To add one new guest in the start of array

guests.unshift("Rehan")

// To add one new guest in the middle of an array

let arrMean:number=Math.floor(guests.length/2)
guests.splice(arrMean,0,"Rizwan")

// To add one new guest in the last of array
guests.push("Imam")
 
for (let i=0;i<guests.length;i++){
  console.log(`I am inviting you to Dinner ${guests[i]}`)
}