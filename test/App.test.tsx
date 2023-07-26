import React from 'react';
import App from '../src/App'
import { render, screen } from '@testing-library/react';

describe('Test in GifApp', () => {
    test('should be equal to snapshot', () => {
        const {container} = render(<App />);
        expect(container).toMatchSnapshot();
    });

    test('should have boilerplate word', () => {
        render(<App />);
        expect(screen.getByText('BoilerPlate'));
    });
})