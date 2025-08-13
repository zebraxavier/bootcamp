/** Q7
	 * This program reads a five-letter word from the user and encodes 
	 it by subtracting 1 from the ASCII value of each character. 
	 It then prints the newly encoded word.
	 
	 Problem Flow:
	Get 5-letter word input
	Loop each character → subtract 1 from ASCII
	Build new string with changed characters
	Print encoded result
	
	Input / Output Example:
	Input:
	Enter a Five letter word: white
	Output:
	Encoded Word: vghsd
	 */
let word = prompt("Enter a Five letter word:");
if (word.length !== 5) {
  console.log("Please enter a five-letter word.");
} else {
  let encodedWord = "";
  for (let i = 0; i < word.length; i++) {
    encodedWord += String.fromCharCode(word.charCodeAt(i) - 1);
  }
  console.log(`Encoded Word: ${encodedWord}`);
}
