import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './customHooks/App1';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import TodoLists from "./todoList/TodoLists";
ReactDOM.render(
  <React.StrictMode>
    <TodoLists />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
