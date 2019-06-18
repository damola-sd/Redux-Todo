import React from 'react';
import styled from 'styled-components';
import { shape, string, func, bool } from 'prop-types';

const StyledTodo = styled.div`
    background-color: pink;
    padding: 10px;
    width: 200px;
    margin: 0 auto;
    margin: 1px inset red;

`;
export default class Todo extends React.Component {
   
    render() {

        const {
            setAsCompleted,
            todo
        } = this.props;
        
        return(
            <StyledTodo>
                <div 
                  className = 'text'>{todo.item}</div>
                  <button
                    onClick ={() => setAsCompleted(todo.id)}>Mark as Completed</button>
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