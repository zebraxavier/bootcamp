/**Q22
   This program prints a right-aligned triangle star pattern using 
	 nested for loops. The number of lines (n) is provided by the user.
	 
	Problem Flow
	Get number of lines from user.
	Loop from 1 to n (line-by-line).
	For each line:
	Print n - i spaces.
	Print i stars.
	Go to the next line.

	Input / Output Example
	Input:
	How many Lines? 5
	Output:
    *
   **
   ***
  ****
  *****

	 */
// Read number of lines from user
let n = parseInt(prompt("How many Lines?"));
// Validate input
if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
}
// Loop through each line
for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i); // Create leading spaces
  let stars = "*".repeat(i); // Create stars for the current line
  console.log(spaces + stars); // Print the line with spaces and stars
}
