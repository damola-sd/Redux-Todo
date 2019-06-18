import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/dispatchers';
import { func } from 'prop-types';
import styled from 'styled-components';


const StyledForm = styled.div`
    div {
        padding: 10px;
        margin: 0 auto:
    }
    button {
        margin-left: 100px;
    }
`;
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
            <StyledForm>
                <h2> Add Todo Item</h2>
                <div>
                    <span> TodoItem: </span>
                    <input ref={this.todoItem} type = 'text' />
                    <div>
                        <button onClick = {this.onAddItem}>Add Item</button>
                    </div>
                </div>
            </StyledForm>
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