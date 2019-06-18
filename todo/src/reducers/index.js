import { combineReducers } from 'redux';
import { ADD_ITEM, SET_COMPLETED, DELETE_ITEM } from '../actions/index';

function todosReducer(state = [], action) {
    switch(action.type) {
        case(ADD_ITEM):
            return [...state, action.payload];
        case(SET_COMPLETED):
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: true };
                }
                return todo;
            });
    case(DELETE_ITEM):
            return state.filter(task => task.id !== action.payload);
        default: 
            return state;
    }
}

export const combineTodoReducer = combineReducers({
    todos: todosReducer
});