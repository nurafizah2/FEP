function power(x, y) {
    // Base case: if y is 0, return 1
    if (y === 0) {
        return 1;
    }
    // If y is negative, compute reciprocal of x raised to the power -y
    if (y < 0) {
        return 1 / power(x, -y);
    }
    // Recursive case: compute x * x^(y-1)
    return x * power(x, y - 1);
}

// Example usage:
let base = 2; // You can change this to any base you want
let exponent = 3; // You can change this to any exponent you want
let result = power(base, exponent);
console.log(base, "raised to the power", exponent, "is", result);
