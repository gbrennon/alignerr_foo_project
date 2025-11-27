export interface Result<T, E> {
    unwrap(): T;
    map<U>(f: (value: T) => U): Result<U, E>;
    mapErr<E2>(f: (err: E) => E2): Result<T, E2>;
}

export class Ok<T> implements Result<T, never> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    unwrap(): T {
        return this.value;
    }

    map<U>(f: (value: T) => U): Result<U, never> {
        const result = f(this.value);
        if (result instanceof Err) {
            return result as Result<U, never>;
        }
        return new Ok(result);
    }

    mapErr<E2>(f: (err: never) => E2): Result<T, E2> {
        return new Ok(this.value);
    }
}

export class Err<E> implements Result<never, E> {
    private error: E;

    constructor(error: E) {
        this.error = error;
    }

    unwrap(): never {
        throw new Error(String(this.error));
    }

    map<U>(f: (value: never) => U): Result<U, E> {
        return new Err(this.error);
    }

    mapErr<E2>(f: (err: E) => E2): Result<never, E2> {
        return new Err(f(this.error));
    }
}
