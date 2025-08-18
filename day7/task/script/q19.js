/** Q19
	 * This program reads a set of numbers from the user and calculates 
	 the cumulative product, which means multiplying all the numbers 
	 together one by one.
	 
	 Code Flow 
	Get number count n
	Use for loop to input numbers
	Multiply each number with product
	Print final result
	
	Test Data
	Input:
	6.2, 12.3, 5.0, 18.8, 7.1, 12.8
	Output:
	Cumulative Total = 514537.165312


	 */
let n = parseInt(prompt("Enter the number of elements:"));
let product = 1;
for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
  product *= num;
}
console.log("Cumulative Total = " + product.toFixed(6));
