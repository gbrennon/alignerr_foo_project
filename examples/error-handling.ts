import { Ok, Err, Result } from '../src/Result';

function parseIntSafe(input: string): Result<string, number> {
    const num = parseInt(input);
    if (isNaN(num)) {
        return new Err(400);
    }
    return new Ok(input);
}

// Handling with explicit checks
const result1 = parseIntSafe('42');
if (result1 instanceof Ok) {
    console.log('Parsed successfully:', result1.unwrap());
} else {
    console.log('Parsing failed with error:', result1.unwrap());
}

// Using default value
const result2 = parseIntSafe('not-a-number');
const defaultValue = result2.unwrap() || '0';
console.log('Using default:', defaultValue);
