import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('TodoApp test', () => {
    (useTodo as jest.Mock).mockReturnValue({
        todos: [
            {id: 1, todo: 'Test 1', done: false},
            {id: 2, todo: 'Test 2', done: true}
        ],
        handleAdd: jest.fn(),
        handleDelete: jest.fn(),
        handleToggle: jest.fn(),
        pendentValue: 2
    });

    test('should show correctly the component', () => {
        render(<TodoApp/>);

        expect(screen.getByText('Test 1')).toBeTruthy();
        expect(screen.getByText('Test 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })
})