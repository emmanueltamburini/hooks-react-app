import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from '../../src/08-useReducer/TodoItem';
import { State } from "../../src/08-useReducer/todoReducer";

describe('TodoItem Test', () => {
    const todo: State =
        {
            id: 1,
            todo: 'Testing todo 1',
            done: false,
        };

    const handleDeleteMock: (todo: State) => void = jest.fn();
    const handleToggleMock: (todo: State) => void = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show a pendent TODO', () => {
        render(
            <TodoItem
                todo={todo}
                handleDelete={handleDeleteMock}
                handleToggle={handleToggleMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });


    test('should show a completed TODO', () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                handleDelete={handleDeleteMock}
                handleToggle={handleToggleMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('should call on toggle todo when span will press', () => {
        todo.done = false;

        render(
            <TodoItem
                todo={todo}
                handleDelete={handleDeleteMock}
                handleToggle={handleToggleMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(handleToggleMock).toHaveBeenCalledWith(todo);
    });

    test('should call on toggle todo when span will press', () => {
        todo.done = false;

        render(
            <TodoItem
                todo={todo}
                handleDelete={handleDeleteMock}
                handleToggle={handleToggleMock}
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(handleDeleteMock).toHaveBeenCalledWith(todo);
    });
})