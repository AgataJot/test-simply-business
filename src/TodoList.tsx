import React from "react";
import styled from "styled-components";
import ITodo from "./models/Todo";

const ToDoUlSt = styled.ul`
    padding: 0;
    li {
        list-style: none;
        padding: 12px 15px;
        font-weight: 600;
        &:hover {
            cursor: pointer;
            background-color: #f4eeff;
        }

        &.completed {
            color: grey;
            text-decoration: line-through;
        }
    }
`;

const InputWrapperSt = styled.div`
    float: left;
    margin-right: 10px;
`;

interface ITodoListProps {
    todos: ITodo[];
    toggleIsComplete: (i: number) => any;
}

const TodoList = (props: ITodoListProps) => {
    return (
        <ToDoUlSt>
            {props.todos.map((todo, i) => (
                <li
                    key={todo.id}
                    className={todo.isComplete ? "completed" : ""}
                >
                    <InputWrapperSt>
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={todo.isComplete}
                            onChange={() => props.toggleIsComplete(i)}
                        />
                    </InputWrapperSt>
                    <span>{todo.title}</span>
                </li>
            ))}
        </ToDoUlSt>
    );
};

export default TodoList;
