import { Ok, Err, Result } from '../src/Result';

function divide(a: number, b: number): Result<number, string> {
    if (b === 0) {
        return new Err('Division by zero');
    }
    return new Ok(a / b);
}

// Successful case
const success = divide(10, 2);
console.log(success.unwrap()); // Output: 5

// Error case
const failure = divide(10, 0);
console.log(failure.unwrap()); // Output: Division by zero
