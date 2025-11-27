import { Ok, Err } from '../src/Result';

describe('error-handling', () => {
    test('parseIntSafe function handles invalid input', () => {
        const parseIntSafe = (input: string) => {
            const num = parseInt(input);
            if (isNaN(num)) {
                return new Err(400);
            }
            return new Ok(input);
        };

        const result1 = parseIntSafe('42');
        if (result1 instanceof Ok) {
            expect(result1.unwrap()).toBe('42');
        } else {
            expect(result1.unwrap()).toBe(400);
        }

        const result2 = parseIntSafe('not-a-number');
        const defaultValue = result2 instanceof Err ? '0' : result2.unwrap();
        expect(defaultValue).toBe('0');
    });
});
