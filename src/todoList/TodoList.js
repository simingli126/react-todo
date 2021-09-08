import React, {Component} from "react";

const TodoList = ({todos, setTodos}) => {

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => id !== todo.id);
        setTodos(newTodos);
    }

    const changeTodoStatus = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, checked: !todo.checked}
            }
            return todo;
        })
        setTodos(newTodos);
    }

    return (

        todos.map((todo) => {
            return <div>
                <li key={todo.id}
                style={todo.checked === true ? {textDecoration: "line-through"} : {textDecoration: "none"} }>
                    <input type="checkbox" onChange={() => changeTodoStatus(todo.id)}/>
                    {todo.name}
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                </li>
            </div>
        })
    )
}

export default TodoList;