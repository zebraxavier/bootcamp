/** Q23
   This program prints a numeric pyramid pattern where numbers 
	 increase from the middle outwards and then decrease symmetrically. 
	 The pattern is centered and uses nested loops
	 
	 Problem Flow Summary
	Ask user for number of lines (n).
	For each line i from 1 to n:
	Print spaces to align the pyramid.
	Print increasing numbers (i to i + i - 1).
	Print decreasing numbers back to i.
	Move to the next line after printing each row.
	
Input / Output Example
Input:
Enter Number of Lines: 5

Output:
    1
   232
  34543
 4567654
567898765


	 
	 */
// Read number of lines from user
let n = parseInt(prompt("Enter Number of Lines:"));
// Validate input
if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
}
// Loop through each line
for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i); // Create leading spaces
  let increasingNumbers = ""; // String for increasing numbers
  let decreasingNumbers = ""; // String for decreasing numbers

  // Create increasing numbers from i to i + i - 1
  for (let j = i; j < i + i; j++) {
    increasingNumbers += j;
  }

  // Create decreasing numbers from i + i - 2 back to i
  for (let j = i + i - 2; j >= i; j--) {
    decreasingNumbers += j;
  }

  // Print the line with spaces and numbers
  console.log(spaces + increasingNumbers + decreasingNumbers);
}
