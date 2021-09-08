import React, {Component} from "react";

const TodoList = ({todos, setTodos}) => {
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => id !== todo.id);
        setTodos(newTodos);
    }
    return (
        todos.map((todo) => {
            return <li
                key={todo.id}
            >
                {todo.name}
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
        })
    )
}

export default TodoList;