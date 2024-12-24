const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
let evenNumber = [];
let oddNumber = [];
for (let num of number) {
    if (num %2 ==0){
        evenNumber.push(num);
    } else {
        oddNumber.push(num);
    }
} 
console.log("Even Number:",evenNumber)
console.log("Odd Number:",oddNumber) 