import { FormEvent } from "react";
import { useForm } from "../hooks";

interface Props {
    handleAdd: (todo: State) => void
}
export const TodoAdd = ({handleAdd} : Props) => {

    const {todo, onInputChange, onReset} = useForm({todo: ''});

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (todo.length <= 1) {
            return;
        }

        const newTodo: State = {
            id: new Date().getTime(),
            done: false,
            todo: todo,
        }

        handleAdd(newTodo);

        onReset();
    }

    return (
        <>
            <h4>Add TODO</h4>
            <hr />
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="What to do?"
                    className="form-control"
                    name="todo"
                    value={todo}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Add
                </button>
            </form>
        </>
    )
}
