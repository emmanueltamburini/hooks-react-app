import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
    const {todos, handleAdd, handleDelete, handleToggle, pendentValue} = useTodo();

    return (
        <>
            <h1>TodoApp: {todos.length}, <small>pendent: {pendentValue}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAdd={handleAdd}/>
                </div>
            </div>
        </>
    )
}
