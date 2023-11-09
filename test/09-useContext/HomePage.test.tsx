import React from "react";

import { render, screen } from "@testing-library/react";
import { HomePage } from '../../src/09-useContext/HomePage';
import { User, UserContext } from "../../src/09-useContext/context/UserContext";

describe('HomePage tets', () => {
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
                <HomePage/>
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
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
    });
})