import React from "react";

import { render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from '../../src/routesConfig';


describe('MainPage test', () => {
    test('should show the component', () => {
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/'],
        });

        render(
            <RouterProvider router={router} />
        );

        expect(screen.getByText('MainApp')).toBeTruthy();
    });

    test('should show LoginPage', () => {
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/login'],
        });

        render(
            <RouterProvider router={router} />
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
        
        const anchorTagListElement = screen.getAllByRole('link');
        
        expect(anchorTagListElement[anchorTagListElement.length - 1].className).toContain('active');
    });
})