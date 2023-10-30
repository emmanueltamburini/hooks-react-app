interface Props {
    todo: State,
    handleDelete: (todo: State) => void,
    handleToggle: (todo: State) => void
}

export const TodoItem = ({ todo, handleDelete, handleToggle }: Props) => {
    const onToggleTodo = () => {
        handleToggle(todo)
    }

    const onDelete = () => {
        handleDelete(todo);
    }

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span onClick={() => onToggleTodo()} className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}>{todo.todo}</span>
            <button className="btn btn-danger" onClick={() => onDelete()}>Delete</button>
        </li>
    )
}