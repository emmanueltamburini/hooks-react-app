import { TodoItem } from "./TodoItem"

interface Props {
    todos: State[],
    handleDelete: (todo: State) => void,
    handleToggle: (todo: State) => void
}

export const TodoList = ({ todos, handleDelete, handleToggle }: Props) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleToggle={handleToggle}/>
                ))
            }
        </ul>
    )
}
