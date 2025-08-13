/** Q13
	 * This program first reads how many numbers the user wants to enter 
	 (N). Then it reads those N numbers and finds the smallest among 
	 them.
	 
	 Problem Flow:
	Get total number of inputs N
	Read first number as smallest
	Loop remaining N-1 times
	Compare each number with smallest
	Update smallest if a smaller number is found
	Print final smallest number
	
	Sample Input / Output:
	Input:
	Enter how many numbers you want to input: 5
	Enter number 1: 22
	Enter number 2: 18
	Enter number 3: 31
	Enter number 4: 6
	Enter number 5: 27
	Output:
	The smallest number is: 6

	 */
let n = parseInt(prompt("Enter how many numbers you want to input: "));
let smallest = parseInt(prompt(`Enter number 1:`));
for (let i = 2; i <= n; i++) {
  let num = parseInt(prompt(`Enter number ${i}:`));
  if (num < smallest) {
    smallest = num;
  }
}
console.log(`The smallest number is: ${smallest}`);
