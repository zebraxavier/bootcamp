/** Q21
	 * This program reads a number n and prints the first n prime numbers.
	 A prime number is a number that is divisible only by 1 and itself.
	 
	 Problem Flow
	Get input n (how many primes).
	Start checking from 2.
	Use isPrime() to validate.
	If prime, print it and increment count.
	Stop when count reaches n.
	 
	Input / Output Example
	Input:
	How many Prime numbers? 10
	Output:
	2 3 5 7 11 13 17 19 23 29

	 */
// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If divisible by any number other than 1 and itself
  }
  return true; // It's a prime number
}
// Read number of primes to find
let n = parseInt(prompt("How many Prime numbers?"));
// Validate input
if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
}
// Initialize variables
let count = 0; // Count of prime numbers found
let num = 2; // Starting number to check for primality
let primes = []; // Array to store prime numbers
while (count < n) {
  if (isPrime(num)) {
    // Check if the number is prime
    primes.push(num); // Add prime number to the array
    count++; // Increment count of found primes
  }
  num++; // Move to the next number
}
// Print the found prime numbers
console.log(primes.join(" ")); // Join the array into a string and print it
