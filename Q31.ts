
/*  Question:31  

No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
let usersInArr= ["Ali", "Akbar", "Haider", "Hamza", "Admin"];
let usersInArr1 = ["Admin", "Ahmad", "Aslam", "Asad", "Abrar"];

for (let users in usersInArr1) {
  if (usersInArr1[users] == "Admin") {
    console.log(
      `Hello ${usersInArr1[users]} , would you like to see a status report?`
    );
  }
  if (usersInArr[users] == usersInArr[users] && usersInArr[users] != "Admin") {
    console.log(` Hello ${usersInArr1[users]} thank you for logging in again.`);
  } else {
    console.log("We Need Some Users");
  }
}