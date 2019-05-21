import React from "react";
import styled from "styled-components";
import ITodo from "./models/Todo";

const ToDoUlSt = styled.ul``;

interface ITodoListProps {
    todos: ITodo[];
}

const TodoList = (props: ITodoListProps) => {
    return (
        <ToDoUlSt>
            {props.todos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ToDoUlSt>
    );
};

export default TodoList;
