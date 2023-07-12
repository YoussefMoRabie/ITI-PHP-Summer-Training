console.log(
  `/////////////////////////////////// Task 01 /////////////////////////////////`
);
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

console.log(
  `/////////////////////////////////// Task 02 /////////////////////////////////`
);

function findMinMax(...values) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    return [min, max];
}

const array1 = [1, 5, 10, 3, 8];
const array2 = [15, 2, 6, 12];
const array3 = [7, 4, 9];

const [min1, max1] = findMinMax(...array1);
const [min2, max2] = findMinMax(...array2);
const [min3, max3] = findMinMax(...array3);

console.log(`Array 1 - Min: ${min1}, Max: ${max1}`);
console.log(`Array 2 - Min: ${min2}, Max: ${max2}`);
console.log(`Array 3 - Min: ${min3}, Max: ${max3}`);

console.log(
  `/////////////////////////////////// Task 03 /////////////////////////////////`
);

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const isEveryElementString = fruits.every((fruit) => typeof fruit === "string");
console.log(isEveryElementString);

const hasSomeElementStartingWithA = fruits.some((fruit) =>
    fruit.startsWith("a")
);
console.log(hasSomeElementStartingWithA);

const filteredArray = fruits.filter(
    (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);
console.log(filteredArray);

const newArray = fruits.map((fruit) => `I like ${fruit}`);
console.log(newArray);

newArray.forEach((fruit) => console.log(fruit));
