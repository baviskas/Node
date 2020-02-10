import React from 'react';
import VisibleTodoList from './../containers/VisibleTodoList';
import AddTodo from "../containers/AddTodo";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
        <AddTodo/>
        <VisibleTodoList />
        <Footer/>
    </React.Fragment>
  );
}

export default App;
