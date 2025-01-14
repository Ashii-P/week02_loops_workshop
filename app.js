console.log("Hello World!");

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
