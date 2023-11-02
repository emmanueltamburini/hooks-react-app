# React hooks resume

In React, hooks are special functions that allow you to use state and other React features in functional components rather than class components. Here's a list of some common React hooks and a brief explanation of what each one does:

1. useState:

    * Purpose: Adds state to your functional component.
    * Explanation: It takes an initial value and returns a pair of values: the current state and a function to update it.
    * Example:

        ```js
            const [count, setCount] = useState(0);
        ```

2. useEffect:

    * Purpose: Performs side effects in your functional component.
    * Explanation: You can use it for tasks like data fetching, DOM updates, or resource cleanup when the component mounts, updates, or unmounts.
    * Example:

        ```js
            useEffect(() => {
                // Do the effects here
            }, [dependencies]);

        ```

3. useContext:

    * Purpose: Accesses the React context, useful for passing data globally in your application.
    * Explanation: It allows you to access the context value provided by a Context.Provider higher in the component tree.
    * Example:

        ```js
            const value = useContext(MyContext);
        ```

4. useReducer:

    * Purpose: Manages more complex state in a functional component.
    * Explanation: Similar to useState, but with a reducer function that takes the current state and an action to compute the new state.
    * Example:

        ```js
            const [state, dispatch] = useReducer(reducer, initialArg, init);
        ```

5. useRef:

    * Purpose: Provides access to the DOM or maintains a mutable reference to a value.
    * Explanation: Useful for accessing DOM elements directly or storing values that do not trigger component re-renders.
    * Example:

        ```js
            const myRef = useRef(initialValue);
        ```

6. useMemo and useCallback:

    * Purpose: Optimize performance by memoizing values or functions.
    * Explanation: They memoize values and functions to prevent unnecessary recalculations or function re-creations during renders.
    * Example:

        ```js
            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
            const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
        ```

7. useLayoutEffect:

    * Purpose: Similar to useEffect, but runs synchronously after all DOM mutations.
    * Explanation: Useful when you need to measure the size or position of an element immediately after an update.
    * Example:

        ```js
            const [count, setCount] = useState(0);
        ```

These are some of the most commonly used React hooks. Hooks make it easier to reuse logic, improve code readability, and handle state and effects in functional components. You can use these hooks as needed in your components to build more efficient and maintainable applications.

## Different between useMemo and useCallback

useMemo and useCallback are two React hooks that have similarities but are used in slightly different scenarios. Both are used to improve performance by memoizing values or functions, but the main difference lies in what they memoize and when to use them:

1. useMemo:

    * Primary Use: Memoizes a calculated value, such as the result of a computationally expensive function.
    * Typical Use Case: Useful when you need to compute and store a value derived from component properties or state and want to avoid unnecessary recomputation.
    * Syntax:

        ```js
            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        ```

    * Example: If you have a costly function that calculates a result based on certain properties or state, you can memoize that result to prevent additional calculations when the dependencies (a and b in this case) do not change.

2. useCallback:

    * Primary Use: Memoizes a function (callback) instead of a calculated value.
    * Typical Use Case: Useful when you want to prevent unnecessary recreation of functions, especially in contexts where functions are passed as props to child components.
    * Syntax:

        ```js
            const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
        ```

    * Example: If you have an event handler function that depends on certain properties or state and is passed as a prop to a child component, you can memoize that function to avoid creating a new function instance on each parent component render.

In summary, useMemo is used to memoize calculated values, whereas useCallback is used to memoize functions. Both can improve performance by avoiding expensive calculations or unnecessary function recreations during renders, but they are applied in different contexts depending on what you need to memoize in your application.
