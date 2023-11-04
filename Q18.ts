/* Question:18 

Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that 
its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed. */

let placesToVisit = ["Karachi","Hyderabad","Sukkur","Lahore","Islamabad"];
  
console.log(placesToVisit);
  
  // To print array in alphabatical order Order
  
  let alphaOrder = [...placesToVisit].sort((a, b) => a.localeCompare(b));
  
  console.log("Array in Alphabatical Order: ", alphaOrder);

  console.log("The original array is still in same order as before: ", placesToVisit);
  
 // To print array in reverse alphabatical order Order
  
  let reverseOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
  console.log("Now Array is in reverse alphabatical order: ", reverseOrder);
  
  console.log("The original array is still in same order as before: ", placesToVisit);
  
  let orderChange1 = placesToVisit.sort((a, b) => a.localeCompare(b));
  
  console.log("Now it is converted to alphabatical order: ", orderChange1);
  
  let orderChange2 = placesToVisit.sort((a, b) => b.localeCompare(a));
  
  console.log("Now it is converted to reverse alphabatical order: ", orderChange2);