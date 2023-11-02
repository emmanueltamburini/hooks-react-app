# React hooks resúmen

Los "hooks" son funciones especiales que te permiten usar el estado y otras características de React en componentes funcionales, en lugar de componentes de clase. A continuación, te proporciono una lista de algunos de los hooks más comunes y una breve explicación de lo que hace cada uno:

1. useState: Este hook te permite añadir estado a tu componente funcional. Toma un valor inicial y devuelve un par de valores: el estado actual y una función para actualizarlo.

    ```js
        const [count, setCount] = useState(0);
    ```

2. useEffect: Se utiliza para realizar efectos secundarios en tu componente funcional. Puedes realizar tareas como la suscripción a datos, actualizaciones del DOM o limpieza de recursos cuando el componente se monta, actualiza o desmonta.

    ```js
        useEffect(() => {
            // Do the effects here
            }, [dependencies]);

        ```

3. useContext: Este hook te permite acceder al contexto de React, que es útil para pasar datos globalmente en tu aplicación.

    ```js
        const value = useContext(MyContext);
    ```

4. useReducer: Proporciona una forma de manejar estados más complejos, similar a useState, pero en lugar de pasar un nuevo valor de estado, se especifica un reducer que toma el estado actual y una acción para calcular el nuevo estado.

    ```js
        const [state, dispatch] = useReducer(reducer, initialArg, init);
    ```

5. useRef: Te permite acceder al DOM directamente o mantener una referencia mutable a algún valor. Puede ser útil para acceder a elementos DOM o almacenar valores que no desencadenan una actualización del componente.

    ```js
        const myRef = useRef(initialValue);
    ```

6. useMemo and useCallback: Estos hooks te permiten optimizar el rendimiento evitando cálculos costosos o evitando la recreación innecesaria de funciones en cada renderizado.

    ```js
        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
        ```

7. useLayoutEffect: Similar a useEffect, pero se ejecuta de forma síncrona después de todas las mutaciones del DOM. Puede ser útil en situaciones donde necesitas medir el tamaño o la posición de un elemento inmediatamente después de una actualización.

    ```js
        const [count, setCount] = useState(0);
    ```

Estos son algunos de los hooks más utilizados en React. Los hooks permiten una mayor reutilización de la lógica, mejoran la legibilidad y facilitan la gestión del estado y los efectos en componentes funcionales. Puedes utilizarlos según tus necesidades en tus componentes para construir aplicaciones más eficientes y mantenibles.

## Diferencias entre useMemo y useCallback

useMemo y useCallback son dos hooks en React que tienen similitudes, pero se utilizan en situaciones ligeramente diferentes. Ambos se utilizan para mejorar el rendimiento al memoizar valores calculados, pero la principal diferencia radica en lo que memoizan y cuándo se deben usar:

1. useMemo:

    * Uso Principal: Se utiliza para memoizar un valor calculado, como el resultado de una función costosa.
    * Situación Típica: Útil cuando necesitas calcular y almacenar un valor derivado de las propiedades o el estado de tu componente, y quieres evitar recálculos innecesarios.
    * Syntax:

        ```js
            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        ```

    * Ejemplo: Si tienes una función costosa que calcula un resultado en función de ciertas propiedades o estado, puedes memoizar ese resultado para evitar cálculos adicionales cuando las dependencias (en este caso, a y b) no cambian.

2. useCallback:

    * Uso Principal: Se utiliza para memoizar una función (callback) en lugar de un valor calculado.
    * Situación Típica: Útil cuando deseas evitar la recreación innecesaria de funciones, especialmente en contextos donde las funciones se pasan como propiedades a componentes hijos.
    * Syntax:

        ```js
            const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
        ```

    * Ejemplo: Si tienes una función de manejador de eventos que depende de ciertas propiedades o estado y se pasa como prop a un componente hijo, puedes memoizar esa función para evitar que se cree una nueva instancia de función en cada renderizado del componente padre.

En resumen, useMemo se utiliza para memoizar valores calculados, mientras que useCallback se utiliza para memoizar funciones. Ambos pueden mejorar el rendimiento al evitar cálculos costosos o la recreación de funciones en renderizaciones innecesarias, pero se aplican en diferentes contextos según lo que necesites memoizar en tu aplicación.
