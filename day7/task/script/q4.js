/** Q4
	 * This program converts temperature from Fahrenheit to Celsius using the formula:
		C = (5/9) × (F - 32)
		
	Problem Flow:
	Input temperature in Fahrenheit
	Apply formula: C = (5 / 9.0) × (F - 32)
	Display result in Celsius
	
	Input / Output Example:
	Sample Inputs to Test (from question):
	68, 150, 212, 0, -22
	Sample Output (for 68°F):
	68.000000 deg F is 20.000000 deg C
	
	 */

let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));
let celsius = (5 / 9.0) * (fahrenheit - 32);
console.log(`${fahrenheit.toFixed(6)} deg F is ${celsius.toFixed(6)} deg C`);
// Example usage: If the user inputs 68, the output will be "68.000
