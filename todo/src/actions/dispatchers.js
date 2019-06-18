import { ADD_ITEM, SET_COMPLETED, DELETE_ITEM } from ".";
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
export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: id,
    }
}