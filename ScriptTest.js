// Samantha's Version - Lesson 2
const myUser = "Samantha";

const sayHello = (friendName) => {
  return `Hi ${friendName}, nice to meet you! ✨`;
};

// Added 5 classmates
const myClassmates = ["Earl", "Jake", "Mia", "Luffy", "Zoro"];

// View this in Chrome Console (F12)
console.log("Assignment Output:");
console.log(myClassmates.map(name => sayHello(name)));