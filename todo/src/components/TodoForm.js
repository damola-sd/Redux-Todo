import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/dispatchers';
import { func } from 'prop-types';

export class TodoForm extends React.Component {

    todoItem = React.createRef();

    onAddItem = () => {
        this.props.addItem(
            this.todoItem.current.value
        );
        this.todoItem.current.value = '';
    }

    render() {
        return (
            <div>
                <h2> Add Todo Item</h2>
                <div>
                    <span> TodoItem: </span>
                    <input ref={this.todoItem} type = 'text' />
                    <div>
                        <button onClick = {this.onAddItem}>Add Item</button>
                    </div>
                </div>
            </div>
        );
    }
}

TodoForm.propTypes = {
    addItem: func.isRequired
}

function mapStateToProps(state) {
    return {
      
    };
  }

export default connect(mapStateToProps, { addItem })(TodoForm);