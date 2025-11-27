import { Ok, Err } from '../src/Result';

describe('advanced-patterns', () => {
    test('validateAndProcess function handles different input lengths', () => {
        const validateAndProcess = (input: string) => {
            const lengthCheck = new Ok(input);

            return lengthCheck
                .map(str => {
                    if (str.length < 5) {
                        return new Err('Input too short');
                    }
                    return str.toUpperCase();
                })
                .mapErr(err => err + ' (validation failed)');
        };

        expect(validateAndProcess('hello').unwrap()).toBe('HELLO');
        expect(validateAndProcess('hi')).toBe(new Err('Input too short (validation failed)'));
    });
});
