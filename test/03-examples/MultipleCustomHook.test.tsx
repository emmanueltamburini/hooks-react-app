import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHook } from '../../src/03-example/MultipleCustomHook';
import { useFetch } from "../../src/hooks/useFetch";
import { BreakingBadResponse } from "../../src/interfaces/breakingBadResponse.interface";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('MultipleCustomHook test', () => {
    const mockIncrement = jest.fn();

    (useCounter as jest.Mock).mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
       jest.clearAllMocks(); 
    });

    test('should show the default component', () => {
        (useFetch as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHook />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole<HTMLButtonElement>('button', {name: 'Next quote'});

        expect(nextButton.disabled).toBeTruthy();   
    });

    test('should show a Quote', () => {
        const data: BreakingBadResponse[] = [
            {author: 'Test', quote: 'Testing'}
        ];

        (useFetch as jest.Mock).mockReturnValue({
            data,
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHook />);

        expect(screen.getByText(data[0].author)).toBeTruthy();
        expect(screen.getByText(data[0].quote)).toBeTruthy();

        const nextButton = screen.getByRole<HTMLButtonElement>('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();   
    });

    test('should call increment function', () => {
        const data: BreakingBadResponse[] = [
            {author: 'Test', quote: 'Testing'}
        ];

        (useFetch as jest.Mock).mockReturnValue({
            data,
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHook />);

        const nextButton = screen.getByRole<HTMLButtonElement>('button', {name: 'Next quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
})