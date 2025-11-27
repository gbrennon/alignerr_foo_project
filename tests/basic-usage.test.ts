import { Ok, Err } from '../src/Result';

describe('basic-usage', () => {
    test('divide function handles division by zero', () => {
        const divide = (a: number, b: number) => {
            if (b === 0) {
                return new Err('Division by zero');
            }
            return new Ok(a / b);
        };

        expect(divide(10, 2).unwrap()).toBe(5);
        expect(divide(10, 0).unwrap()).toBe('Division by zero');
    });
});
