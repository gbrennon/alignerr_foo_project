import { Ok, Err, Result } from '../src/Result';

// Demonstrating Result chaining pattern
function validateAndProcess(input: string): Result<string, string> {
    const lengthCheck = new Ok(input);

    return lengthCheck
        .map(str => {
            if (str.length < 5) {
                return new Err('Input too short');
            }
            return str.toUpperCase();
        })
        .mapErr(err => err + ' (validation failed)');
}

// Chain of operations
const result = validateAndProcess('hello');
console.log(result.unwrap() instanceof Ok ? 'Success: ' + result.unwrap() : 'Error: ' + result.unwrap());
