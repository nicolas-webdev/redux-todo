import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import TodoBoard from "./components/TodoBoard";

// import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="app">
      <Header />
      <Body>
        <TodoBoard />
      </Body>
    </div>
  );
}

export default App;
