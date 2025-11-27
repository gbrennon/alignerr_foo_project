import { Ok, Err } from '../src/Result';

describe('Result', () => {
    test('Ok.unwrap() returns the value', () => {
        const value = new Ok(42);
        expect(value.unwrap()).toBe(42);
    });

    test('Err.unwrap() returns the error', () => {
        const error = new Err('Test error');
        expect(error.unwrap()).toBe('Test error');
    });
});
