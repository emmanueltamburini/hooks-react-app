import { Action, State, todoReducer } from '../../src/08-useReducer/todoReducer';

describe('todoReducer test', () => {
    const initialState: State[] = [
        {
            id: 1,
            todo: 'Testing todo 1',
            done: false,
        },
        {
            id: 2,
            todo: 'Testing todo 2',
            done: false,
        },
    ];

    test('should return initial values', () => {
        const newState = todoReducer(initialState, {type: 'no_valid_type'});

        expect(newState).toBe(newState);
    });

    test('should add a TODO', () => {
        const addTodo: Action = {
            type: 'add',
            payload: {
                id: 3,
                todo: 'Testing todo 3',
                done: false,
            },
        };

        const newState = todoReducer(initialState, addTodo);

        expect(newState.length).toBe(3);
        expect(newState).toContain(addTodo.payload);
    });


    test('should delete a TODO', () => {
        const addTodo: Action = {
            type: 'delete',
            payload: {
                id: 2,
                todo: 'Testing todo 2',
                done: false,
            },
        };

        const newState = todoReducer(initialState, addTodo);

        expect(newState.length).toBe(1);
        expect(newState).not.toContain(addTodo.payload);
    });


    test('should toggle a TODO', () => {
        const addTodo: Action = {
            type: 'toggle',
            payload: {
                id: 2,
                todo: 'Testing todo 2',
                done: true,
            },
        };

        const newState = todoReducer(initialState, addTodo);

        expect(newState.length).toBe(2);
        expect(newState[1].done).toBeTruthy();
    });

});