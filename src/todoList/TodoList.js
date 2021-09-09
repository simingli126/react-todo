import React, {Component, useState} from "react";

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
    const editTodo = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, editing: !todo.editing}
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const addTemplate = (todo) => {
        return <li key={todo.id}
            style={todo.checked === true ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
            <input type="checkbox" onChange={() => changeTodoStatus(todo.id)}/>
            {todo.name}
            <button onClick={() => editTodo(todo.id)}>edit</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>

    }
    const editTemplate = (todo) => {

        return <div>
            <li key={todo.id}>
                <input
                    type="text"
                    placeholder={todo.name}
                />
                <button>cancel</button>
                <button>save</button>
            </li>
        </div>
    }
    return (
        todos.map((todo) => {
            return <div>
                {todo.editing === false ? addTemplate(todo) : editTemplate(todo)}
            </div>
        })
    )
}

export default TodoList;