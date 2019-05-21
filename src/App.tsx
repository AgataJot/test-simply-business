import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";
import moment from "moment";
import IUser from "./models/User";
import ITodoList from "./models/TodoList";
import ITodo from "./models/Todo";

const AppSt = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const MainSectionSt = styled.section`
    flex: 1 1 calc(100% - 300px);
`;

const HeaderSt = styled.header`
    background-color: #581de8;
    min-height: 200px;
    width: 100%;
    padding: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & > h1 {
        font-size: 2rem;
        font-weight: 200;
        margin-bottom: 10px;
    }
`;

interface IAppProps {
    data: {
        user: IUser;
        todoLists: ITodoList[];
        todos: ITodo[];
    };
}

const App = (props: IAppProps) => {
    if (!props.data) return null;
    const hasTodos = Boolean(props.data.todos.length);
    const todosForActiveList = props.data.todos.filter(todo => todo.list === 1);
    return (
        <AppSt>
            <Sidebar user={props.data.user} todoLists={props.data.todoLists} />
            <MainSectionSt>
                <HeaderSt>
                    <h1>Team To-Do List</h1>
                    <time>{moment().format("ddd D MMMM")}</time>
                </HeaderSt>
                <TodoList todos={todosForActiveList} />
            </MainSectionSt>
        </AppSt>
    );
};

export default App;
