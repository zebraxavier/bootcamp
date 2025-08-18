/** Q16 
	 *  This program uses a switch statement to examine the value of a 
	 char-type variable called colour and prints one of the following
	 messages, depending on the character assigned:
		RED if either r or R is assigned to colour.
		GREEN if either g or G is assigned to colour.
		BLUE if either b or B is assigned to colour.
		BLACK if any other character is assigned to colour.
		
		Problem Flow:
		Prompt the user to enter a single character for the color code.
		Use a switch statement to check the character and assign the corresponding color.
		Print the entered color code and the corresponding color name.

		Sample Input / Output:
		Input:
		Enter Color code character: g
		Output:
		Color Code g is GREEN

	 */
// Read a character value from the user
let colour = prompt("Enter Color code character:");
// Initialize color variable
let color = "";
// Use a switch statement to determine the color
switch (colour.toLowerCase()) {
  case "r":
    color = "RED";
    break;
  case "g":
    color = "GREEN";
    break;
  case "b":
    color = "BLUE";
    break;
  default:
    color = "BLACK";
}
// Display the entered color code and its corresponding color name
console.log(`Color Code ${colour} is ${color}`);
