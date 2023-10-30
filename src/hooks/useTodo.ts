import { useEffect, useMemo, useReducer } from "react";
import { initialState, todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos') ?? '') || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleAdd = (todo: State) =>  {
        dispatch({type: 'add', payload: todo});
    }

    const handleDelete = (todo: State) =>  {
        dispatch({type: 'delete', payload: todo});
    }

    const handleToggle = (todo: State) =>  {
        dispatch({type: 'toggle', payload: todo});
    }

    const pendentValue = useMemo(() => todos.filter(value => value.done).length, [todos]);


  return {todos, handleAdd, handleDelete, handleToggle, pendentValue};
}
