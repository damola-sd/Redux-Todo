import React from 'react';
import { connect } from "react-redux";
import { setCompleted, deleteItem } from "../actions/dispatchers";
import Todo from './Todo';

export class Todos extends React.Component {
    render() {
        const todos = this.props.todos || [];
        return (
            <div>
                <h2>Todo List</h2>
                <div>
                    {
                        todos.map(todo => (
                            <Todo
                              key={todo.id}
                              todo = {todo}
                              completed = {todo.completed}
                              setAsCompleted={this.props.setCompleted}
                              deleteItem = {this.props.deleteItem}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}


function mapStatetoProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(
    mapStatetoProps, { setCompleted, deleteItem },
)(Todos);