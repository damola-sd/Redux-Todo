import { ADD_ITEM, SET_COMPLETED } from ".";
import uuid from 'uuid';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: {
            id: uuid(),
            item: item,
            completed: false,
        },
    };
}

export function setCompleted(id) {
    return {
        type: SET_COMPLETED,
        payload: id,
    }
}