import React from "react"
import ReactDOM from "react-dom"
// Component File
import TodoContainer from "./TodoContainer"

// stylesheet
import "./App.css"


// React.StrictMode activate checks and logs warning message at runtime
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
