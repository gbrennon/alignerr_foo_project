package com.example;

public abstract class Result<T> {
    
    public abstract T unwrap();
    
    public static class Ok<T> extends Result<T> {
        private T value;

        public Ok(T value) {
            this.value = value;
        }

        @Override
        public T unwrap() {
            return value;
        }
    }

    public static class Err<E> extends Result<E> {
        private E error;

        public Err(E error) {
            this.error = error;
        }

        @Override
        public E unwrap() {
            throw new RuntimeException(error.toString());
        }
    }
}
