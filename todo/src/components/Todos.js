import React from 'react';
import { connect } from "react-redux";


export class Todos extends React.Component {
    render() {

        const todos = this.props.quotes || [];
        return (
            <div>
                <h2>Todo List</h2>
                <div>
                    {
                        todos.map(todo => {
                            <Todo
                              key={todo.id}
                              todo = {todo}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}