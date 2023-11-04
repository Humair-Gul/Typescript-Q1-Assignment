/* Question 15: 

Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

let GuestsList: string[] = ["Ali", "Amir", "Haider", "Hanan"];
console.log(`${GuestsList[3]} is not available due to work`);
GuestsList[3] = "Abrar";

for (let guest in GuestsList) {
  console.log(
    ` ${GuestsList[guest]} I am inviting you to dinner tonight at my place`
  );
}
