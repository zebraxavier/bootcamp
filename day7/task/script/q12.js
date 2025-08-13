/** Q12
	 * This program reads 5 numbers (each between 1 and 30) from the user.
	 For each number, it prints a line with that many asterisks *, 
	 forming a simple bar chart or histogram.
	 
	 Problem Flow:
	Read 5 numbers from the user
	Loop through each number
	For each number:
	Print the number
	Print that many * using inner loop
	
	Sample Output:
	Input:
	Enter 5 Numbers in a same line: 
	3 7 2 6 1
	Output:
	3 ***
 	7 *******
 	2 **
 	6 ******
 	1 *
 	
	 */
let numbers = prompt("Enter 5 Numbers in a same line (between 1 and 30):")
  .split(" ")
  .map(Number);
if (numbers.length !== 5 || numbers.some((num) => num < 1 || num > 30)) {
  console.error("Please enter exactly 5 numbers, each between 1 and 30.");
}
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  let stars = "";
  for (let j = 0; j < num; j++) {
    stars += "*";
  }    console.log(`${num} `) console.log(`${stars}`);
}
// console.log(`(${numbers.join(" + ")} = ${numbers.reduce((a, b) => a + b, 0)})`);
