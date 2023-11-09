import React from "react";

import { render, screen } from "@testing-library/react"
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from "react-router-dom";


describe('NavBar test', () => {
    test('should show the component', () => {
        render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
        );

        expect(screen.getByText('MainApp')).toBeTruthy();
    });
})