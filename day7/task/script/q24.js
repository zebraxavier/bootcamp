/** Q24
	 * This program reads n numbers into an array, calculates the average 
	 of those numbers using a loop, and displays the result. 
	 It demonstrates how to use arrays and object-oriented concepts 
	 like classes and methods in Java.
	 
	Problem Flow
	Read input size n
	Read n elements into array
	Loop through array to compute sum
	Divide sum by n to get average
	Display result
	
	 Input / Output Example
Input:
Enter how many numbers: 5
Enter the numbers:
10
20
30
40
50

Output:
Average of the numbers: 30.00


	 */
// Read the number of elements from the user
let n = parseInt(prompt("Enter how many numbers:"));
// Validate input
if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
}
// Initialize an array to hold the numbers
let numbers = [];
// Read n numbers from the user
for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt(`Enter number ${i + 1}:`));
  // Validate each number
  if (isNaN(num)) {
    console.log("Invalid input. Please enter a valid number.");
    i--; // Decrement i to repeat this iteration
  } else {
    numbers.push(num); // Add the number to the array
  }
}
// Calculate the sum of the numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add each number to the sum
}
// Calculate the average
let average = sum / numbers.length;
// Display the average
console.log(`Average of the numbers: ${average.toFixed(2)}`);
// The toFixed(2) method formats the average to two decimal places
