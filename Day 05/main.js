// function charLocations(str, x) {
//   var locations = [];

//   for (let index = 0; index < str.length; index++) {
//     if (str[index] === x) {
//       locations.push(index);
//     }
//   }

//   return locations;
// }

// // Example usage:
// var str="lolol";
// var loc = charLocations(str,"l");
// console.log("Locations is:", loc);

// //////////////////////////////////////////////////////

// function fizzBuzz(x) {
//   if (x % 15 == 0) {
//     console.log("Fizz Buzz");
//   } else if (x % 3 == 0) {
//     console.log("Fizz");
//   } else if (x % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log("None");
//   }
// }

// // Example usage:
// fizzBuzz(30);
// fizzBuzz(25);
// fizzBuzz(9);
// fizzBuzz(2);

// //////////////////////////////////////////////////
// function getRandomNames(names) {
//   if (names.length < 2) {
//     return "Array must contain at least two names.";
//   }

//   var randomNames = [];
//   var randomIndex1 = Math.floor(Math.random() * names.length);
//   randomNames.push(names[randomIndex1]);

//   var randomIndex2=0;
//   do {
//     randomIndex2 = Math.floor(Math.random() * names.length);
//   } while (randomIndex2 === randomIndex1);
//   randomNames.push(names[randomIndex2]);

//   return randomNames;
// }

// // Example usage:
// var persons = ["momo", "Bob", "lol", "leo", "ziko", "man", "women","mona" , " ahmed"];
// var randomNames = getRandomNames(persons);
// console.log("Random Names:", randomNames);

// //////////////////////////////////////////////