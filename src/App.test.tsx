import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import Sidebar from "./Sidebar";
import appData from "./mocks/data";

describe("Todo List App", () => {
    let app;

    beforeEach(() => {
        app = shallow(<App data={appData()} />);
    });

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App data={appData()} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    describe("sidebar", () => {
        it("shows profile pic and username", () => {
            const sidebar = app.find(Sidebar).dive();

            expect(sidebar.contains(<span>Agata Jewko</span>)).toEqual(true);
            expect(
                sidebar.contains(
                    <img
                        src="http://placekitten.com/g/50/50"
                        alt="Agata Jewko"
                    />,
                ),
            ).toEqual(true);
        });

        it("shows an area containing a list of todo lists. This area has 1 fixed list, which is titled: 'Team To-Do List'", () => {
            const sidebar = app.find(Sidebar).dive();
            const todoListUl = sidebar.find("ul");
            const todoListLi = todoListUl.find("li");

            expect(todoListUl).toHaveLength(1);
            expect(todoListLi).toHaveLength(1);
            expect(todoListLi.contains("Team To-Do List")).toEqual(true);
        });
    });

    describe("todos list", () => {
        it('shows all of user\'s current todo list items in my "Team To-Do List​" list', () => {
            const todos = app.find(TodoList).dive();

            expect(app.contains(<h1>Team To-Do List</h1>)).toEqual(true);
            expect(todos.find("li")).toHaveLength(4);
        });

        it('shows empty list in my "Team To-Do List​" list, if none exist', () => {
            const data = { ...appData(), todos: [] };
            app = shallow(<App data={data} />);
            const todos = app.find(TodoList).dive();

            expect(app.contains(<h1>Team To-Do List</h1>)).toEqual(true);
            expect(todos.find("li")).toHaveLength(0);
        });

        it("displays items' title", () => {
            const todos = app.find(TodoList).dive();

            const firstTitle = todos
                .find("li")
                .first()
                .children();

            expect(firstTitle.contains(appData().todos[0].title)).toEqual(true);
        });

        it("allows adding new todo items to my Team To-Do List​ list", () => {});
        it("allows delete todo items from my Team To-Do List list", () => {});
        it("can mark todo items on my “​Team To-Do List​” as complete, and they should visually delineate themselves as being different from non-completed items.", () => {});
    });
});
