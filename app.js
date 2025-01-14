console.log("Hello World!");

//For Loops
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  keepLooping = Math.random() < 0.1;
  i++;
}

//Looping over arrays
const favouriteFoods = [
  "Pho",
  "Fried Chicken Burger",
  "Turkish Meat Platter",
  "Biria Tacos",
  "Sushi",
  "Roast Dinner",
  "Mashed Potatoes",
  "Pad Thaii",
  "Oranges",
  "Lychess",
];
for (let i = 0; i < favouriteFoods.length; i++) {
  console.log(favouriteFoods[i]);
}

for (let food of favouriteFoods) {
  console.log(food);
}
const numbers = [7, 19, 2, 28, 20];
for (let number of numbers) {
  console.log(number);
}

favouriteFoods.forEach(function (food) {
  console.log(food);
});

favouriteFoods.forEach(function (food, index) {
  console.log(index, food);
});

//Loop Workshop
const favouriteAnimals = [
  "Red Panda",
  "Cats",
  "Wales",
  "Dogs",
  "Chipmunk",
  "Deers",
  "Mustang",
];
for (let i = 0; i < favouriteAnimals.length; i++) {
  console.log(favouriteAnimals[i]);
}

const favouriteColour = ["Pink", "Red", "Black", "Green", "Yellow"];
for (let colour of favouriteColour) {
  console.log(colour);
}
