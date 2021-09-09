import React, {Component, useState} from "react";

const TodoList = ({todos, setTodos}) => {
    const [input, setInput] = useState('');
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

    const cancelEdit = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, editing: false}
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const saveEdit = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, name: input, checked: false, editing: false}
            }
            return todo;
        })
        setTodos(newTodos);
    }
    const editTemplate = (todo) => {

        return <div>
            <li key={todo.id}>
                <input
                    type="text"
                    placeholder={todo.name}
                    onChange={event => setInput(event.target.value)}
                    value={input}
                />
                <button onClick={()=> cancelEdit(todo.id)}>cancel</button>
                <button onClick={() => saveEdit(todo.id)}>save</button>
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