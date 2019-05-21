import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const mockedData = {
    todoLists: [{ title: "Team To-Do List" }],
    user: {
        name: "Agata Jewko",
        img: "http://placekitten.com/g/50/50",
    },
};
ReactDOM.render(<App data={mockedData} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
