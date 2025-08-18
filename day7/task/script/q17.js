/** Q17
	 *  This program checks the temperature value (temp) and determines 
	 the physical state of water:
		If temp < 0 → "ICE"
		If temp is between 0 and 100 (inclusive) → "WATER"
		If temp > 100 → "STEAM"
		
		Flow Summary:
		Get user input for temperature
		Use if-else to decide the state of water
		Display the result to the user
		
		Sample I/O:
		Input:
		Enter the water temperature: 120
		Output:
		Water status is STEAM for the Temperature 120.00

	 */
// Read a temperature value from the user
let temp = parseFloat(prompt("Enter the water temperature:"));
// Initialize waterStatus variable
let waterStatus = "";
// Use if-else statements to determine the state of water
if (temp < 0) {
  waterStatus = "ICE";
} else if (temp >= 0 && temp <= 100) {
  waterStatus = "WATER";
} else {
  waterStatus = "STEAM";
}
// Display the water status and temperature
console.log(
  `Water status is ${waterStatus} for the Temperature ${temp.toFixed(2)}.`
);
