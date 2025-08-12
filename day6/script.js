let ms = prompt("Enter your gender (male/female):");
let age = prompt("Enter your age:");
if (ms == "male" && age >= 30) {
  console.log("you are eligible");
} else if (ms == "female" && age >= 25) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}
