import React, {Component, useState} from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import {Button} from "antd";

const TodoLists = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div align="center">
            <Header todos={todos} setTodos={setTodos}/>
            <br/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    )

}
export default TodoLists;