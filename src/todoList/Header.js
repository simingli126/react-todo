import React, {useState} from "react";
import {Button, Input} from "antd";
import {nanoid} from "nanoid";

const Header = ({todos, setTodos}) => {
    const [input, setInput] = useState('');

    const addTodo = () => {
        const todoObj = {id: nanoid(), name: input, checked: false, editing: false};
        const newTodos = [...todos, todoObj];
        setTodos(newTodos);
        setInput('')
    }

    return (
        <div>
            <span>Todo List</span><br/>
            <Input
                onChange={event => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Please enter your todo item."
            />
            <Button onClick={addTodo}>ADD</Button>
        </div>
    )
}
export default Header;