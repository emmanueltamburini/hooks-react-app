import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { User, UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('LoginPage test', () => {
    const user: User = {
        id: 1,
        name: 'test',
        email: 'test@test.com'
    }
    test('should show the component without the user', () => {
        render(
            <UserContext.Provider value={{
                user: undefined,
                setUser: jest.fn()
            }}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('');
    });

    test('should show the component with the user', () => {
        render(
            <UserContext.Provider value={{
                user,
                setUser: jest.fn()
            }}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
    });

    test('should call setUser when I click in the button', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{
                user,
                setUser: setUserMock
            }}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button', {name: 'Set user'});
        fireEvent.click(buttonElement)
        expect(setUserMock).toBeCalledWith({
            id: 1,
            email: 'test@test.com',
            name: 'name'
        });
    });
})