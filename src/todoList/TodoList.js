import React, {Component} from "react";

const TodoList = ({todos}) => {
    return (
        todos.map((todo) => {
            return <li
                key={todo.id}
            >
                {todo.name}
            </li>
        })
    )
}

export default TodoList;