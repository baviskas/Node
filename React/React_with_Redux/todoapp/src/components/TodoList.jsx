import React, { Component } from 'react';
import Todo from "./Todo";

class TodoList extends Component{

    render() {
        const { toggleTodo, todos } = this.props;
        return (
            <ul>
                { todos.map(todo => (<Todo {...todo} key={todo.id} onClick={() => toggleTodo(todo.id)}/>))}
                {!todos.length && <p>No todos !!</p>}
            </ul>
        )
    }
}

export default TodoList;
