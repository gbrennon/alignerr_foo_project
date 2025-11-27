import { Ok, Err } from '../src/Result';

describe('Result', () => {
    test('Ok.unwrap() returns the value', () => {
        const value = new Ok(42);
        expect(value.unwrap()).toBe(42);
    });

    test('Err.unwrap() throws the error', () => {
        const err = new Err('Test error');
        expect(() => err.unwrap()).toThrow('Test error');
    });
});
