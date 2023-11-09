import { act, renderHook } from "@testing-library/react"
import { useForm } from '../../src/hooks/useForm';
import { ChangeEvent } from "react";

describe('useForm test', () => {
    test('should return default value', () => {
        const initialForm = {
            name: 'test',
            email: 'test@test.com'
        }

        const {result} = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onReset: expect.any(Function),
        });
    });


    test('should return name value with inputChange', () => {
        const initialForm = {
            name: 'test',
            email: 'test@test.com'
        }

        const newName = 'test2';

        const {result} = renderHook(() => useForm(initialForm));

        act(() => {
            const mockChangeEvent: ChangeEvent<HTMLInputElement> = {
                target: {
                  name: 'name',
                  value: newName,
                },
              } as ChangeEvent<HTMLInputElement>;

            result.current.onInputChange(mockChangeEvent); 
        });

        expect(result.current.name).toEqual(newName);
        expect(result.current.formState.name).toEqual(newName);
    });

    test('should return reset function works', () => {
        const initialForm = {
            name: 'test',
            email: 'test@test.com'
        }

        const newName = 'test2';

        const {result} = renderHook(() => useForm(initialForm));

        act(() => {
            const mockChangeEvent: ChangeEvent<HTMLInputElement> = {
                target: {
                  name: 'name',
                  value: newName,
                },
              } as ChangeEvent<HTMLInputElement>;

            result.current.onInputChange(mockChangeEvent);
            result.current.onReset();
        });

        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState.name).toEqual(initialForm.name);

    });
})