import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";
import moment from "moment";

const AppSt = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const MainSectionSt = styled.section`
    flex: 1 1 calc(100% - 200px);
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
    }
`;

function App() {
    return (
        <AppSt>
            <Sidebar />
            <MainSectionSt>
                <HeaderSt>
                    <h1>Team To-Do List</h1>
                    <time>{moment().format()}</time>
                </HeaderSt>
                <TodoList />
            </MainSectionSt>
        </AppSt>
    );
}

export default App;
