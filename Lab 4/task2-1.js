function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10; // Add the last digit to sum
        number = Math.floor(number / 10); // Remove the last digit
    }
    return sum;
}

// Example usage:
let num = 12345; // You can change this to any number you want
let sum = sumOfDigits(num);
console.log("The sum of digits of", num, "is", sum);
