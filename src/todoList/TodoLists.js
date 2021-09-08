import React, {Component, useState} from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import {Button} from "antd";

const TodoLists = () => {
    const [todos, setTodos] = useState([]);
    return (
        <React.StrictMode>
            <Header todos={todos} setTodos={setTodos}/>
            <br/>
            <TodoList todos={todos}/>
        </React.StrictMode>
    )

}
export default TodoLists;