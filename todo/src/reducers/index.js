import { createStore, combineReducers } from 'redux';
import { ADD_ITEM, SET_COMPLETED } from '../actions/index';

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
        default: 
            return state;
    }
}

const combineReducer = combineReducers({
    todo: todosReducer
});