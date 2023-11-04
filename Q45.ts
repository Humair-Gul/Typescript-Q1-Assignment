/*  Question 45 Cars: 

Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned 
to make sure all the information was stored correctly. */

function Carinfo(
    manufacturer: string,
    modelName: string,
    ...options: any[]
  ) {
    let carComponents = {
      manufacturer,
      modelName,
      ...options,
    };
    return carComponents;
  }
  
  const first_car = Carinfo("Tesla", "X SUV", { color: "Black" });
  const second_car = Carinfo("Honda", "City", { color: "White" });
  console.log(first_car);
  console.log(second_car);