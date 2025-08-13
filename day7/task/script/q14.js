/** Q14
	 *  This program will read a line of text from the user, analyze 
	 each character, and count how many are letters, digits, whitespace, 
	 or other types of characters (like punctuation).
	 
	 Problem Flow:
	Prompt the user to input a line of text.
	Initialize counters for letters, digits, spaces, and other characters.
	Loop through each character and classify it into one of the categories.
	Display the count for each category: letters, digits, spaces, and others.

	Sample Input / Output:
	Input:
	Enter the text below:
	Hello World! 123

	Output:
	Letters : 10
	Digits : 3
	Space Chars : 2
	Others : 2

	 */

// Read a line of text from the user
let input = prompt("Enter the text below:");
// Initialize counters
let lettersCount = 0;
let digitsCount = 0;
let spacesCount = 0;
let othersCount = 0;
// Loop through each character in the input
for (let i = 0; i < input.length; i++) {
  let char = input[i];
  // Check if the character is a letter
  if (/[a-zA-Z]/.test(char)) {
    lettersCount++;
  }
  // Check if the character is a digit
  else if (/\d/.test(char)) {
    digitsCount++;
  }
  // Check if the character is a space
  else if (/\s/.test(char)) {
    spacesCount++;
  }
  // If it's none of the above, count it as 'other'
  else {
    othersCount++;
  }
}
// Display the counts
console.log(`Letters : ${lettersCount}`);
console.log(`Digits : ${digitsCount}`);
console.log(`Space Chars : ${spacesCount}`);
console.log(`Others : ${othersCount}`);
