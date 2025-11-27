package com.example;

public class DivideExample {
    public static void main(String[] args) {
        Result<Integer> result = divide(10, 2);
        System.out.println(result.unwrap());

        result = divide(-10, 2);
        System.out.println(result.unwrap());
    }

    public static Result<Integer> divide(int dividend, int divisor) {
        if (dividend < 0) {
            return new Result.Err<>("Dividend is negative");
        }

        return new Result.Ok<>(dividend / divisor);
    }
}
