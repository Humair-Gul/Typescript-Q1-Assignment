/* Question : 37 

Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
with the default message, and a shirt of any size with a different message. */

let make_shirt1 = (
    size: string = "Large",
    message: string = `I Love TypeScript`
  ): any => {
    console.log(
      `The Size of shirt is ${size} and the message to be printed on shirt is "${message}"`
    );
  };
  make_shirt1();
  make_shirt1("Medium", "I Love TypeScript");
  make_shirt1("Small", "Work Hard");