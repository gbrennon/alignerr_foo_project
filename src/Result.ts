export interface Result<T> {
    unwrap(): T;
}

export class Ok<T> implements Result<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    unwrap(): T {
        return this.value;
    }
}

export class Err<E> implements Result<E> {
    private error: E;

    constructor(error: E) {
        this.error = error;
    }

    unwrap(): E {
        throw new Error(String(this.error));
    }
}
