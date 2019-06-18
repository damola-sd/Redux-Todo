import React from 'react';
import styled from 'styled-components';
import { shape, string, func, bool } from 'prop-types';

const StyledTodo = styled.div`
    background-color: ${pr => (pr.completed ? 'red': 'cyan')};
    padding: 10px;
    width: 500px;
    margin: 0 auto;
    color: blue;
    margin-bottom: 5px;
    

`;
export default class Todo extends React.Component {
   
    render() {

        const {
            setAsCompleted,
            todo, 
            deleteItem
        } = this.props;
        
        return(
            <StyledTodo
              completed = {todo.completed}>
                <div 
                  className = 'text'>{todo.item}</div>
                  <button
                    onClick ={() => setAsCompleted(todo.id)}>Mark as Completed</button>
                    <button
                    onClick ={() => deleteItem(todo.id)}>Delete Task</button>
            </StyledTodo>
        );
    }
}

Todo.propTypes = {
    todo: shape({
        id: string.isRequired,
        item: string.isRequired,
        completed: bool.isRequired,
    }).isRequired,
    setAsCompleted: func.isRequired,
};