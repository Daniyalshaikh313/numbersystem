const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
function isPrime(num) {
    if (num <=1) return false;
    for (let i=2; i<= Math.sqrt(num);i++){
        if (num % i ==0) return false;
    }
    return true;

}  
let primeNumbers = numbers.filter(isPrime);
let maxPrime = Math.max(...primeNumbers)
let minPrime = Math.min(...primeNumbers)
let sumOfPrime = primeNumbers.reduce((sum,num) =>sum + num, 0);

console.log("PrimeNumber",primeNumbers);
console.log("Maxprime",maxPrime);
console.log("Minprime",minPrime);
console.log("sumprime",sumOfPrime);
