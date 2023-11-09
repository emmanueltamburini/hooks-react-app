import { act, renderHook } from "@testing-library/react"
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter test', () => {
    test('should return default value', () => {
        const {result} = renderHook(() => useCounter());

        const {counter, decrease, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrease).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });


    test('should return counter with the value 100 if I send 100 as initial value', () => {
        const {result} = renderHook(() => useCounter(100));

        const {counter} = result.current;

        expect(counter).toBe(100);
    });

    test('should increment function must increment the counter value', () => {
        const {result} = renderHook(() => useCounter());

        const {increment} = result.current;

        act(() => {
            increment(2);
        });

        expect(result.current.counter).toBe(12); 
    });

    test('should decrease function must decrease the counter value', () => {
        const {result} = renderHook(() => useCounter());

        const {decrease} = result.current;

        act(() => {
            decrease(2);
        });

        expect(result.current.counter).toBe(8); 
    });


    test('should reset function must reset the counter value', () => {
        const {result} = renderHook(() => useCounter());

        const {reset, increment, decrease} = result.current;

        act(() => {
            increment(6);
            decrease(3)
            reset();
        });

        expect(result.current.counter).toBe(10); 
    });
})