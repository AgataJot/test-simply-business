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

interface IAppState {
    todos: ITodo[];
}
export class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            todos: props.data.todos.filter(todo => todo.list === 1),
        };
    }

    static getDerivedStateFromProps(props: IAppProps): IAppState {
        return {
            todos: props.data.todos.filter(todo => todo.list === 1),
        };
    }

    render() {
        const { data } = this.props;
        const { todos } = this.state;

        if (!data) return null;

        return (
            <AppSt>
                <Sidebar user={data.user} todoLists={data.todoLists} />
                <MainSectionSt>
                    <HeaderSt>
                        <h1>Team To-Do List</h1>
                        <time>{moment().format("ddd D MMMM")}</time>
                    </HeaderSt>
                    <TodoList
                        todos={todos}
                        toggleIsComplete={this.toggleTodoIsComplete}
                    />
                </MainSectionSt>
            </AppSt>
        );
    }

    toggleTodoIsComplete = (index: number) => {
        const { todos } = this.state;
        const isComplete = todos[index].isComplete;
        todos[index].isComplete = !isComplete;
        this.setState({
            todos,
        });
    };
}

export default App;
