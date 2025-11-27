package com.example;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Unit test for Result class.
 */
public class AppTest 
{
    @Test
    public void testResultOk() {
        Result<Integer> result = new Result.Ok<>(42);
        assertEquals(42, (int) result.unwrap());
    }

    @Test
    public void testResultErr() {
        Result<Integer> result = new Result.Err<>("Error message");
        Exception exception = assertThrows(RuntimeException.class, () -> result.unwrap());
        assertEquals("Error message", exception.getMessage());
    }

    @Test
    public void testDivide() {
        Result<Integer> result = DivideExample.divide(10, 2);
        assertEquals(5, (int) result.unwrap());

        result = DivideExample.divide(-10, 2);
        Exception exception = assertThrows(RuntimeException.class, () -> result.unwrap());
        assertEquals("Dividend is negative", exception.getMessage());
    }
}
