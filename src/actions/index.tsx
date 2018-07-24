import { actionTypes } from '../actionTypes';
import { SortOptions } from './SortOptions';

let idNumber = 0;

export type todoPayload = {
    text: string,
    id: number,
    timestamp: number
}
export type Action<T> = {
    type: actionTypes;
    payload: T;
};

export const addTodo = (text: string): Action<todoPayload> => ({
    type: actionTypes.ADD_TODO,
    payload: {
        text,
        id: idNumber++,
        timestamp: Date.now()
    }
});

export const selectTodo = (todo: todoPayload): Action<todoPayload> => ({
    type: actionTypes.SELECT_TODO,
    payload: {...todo}
});

export const deleteTodo = (id: number): Action<number> => ({
    type: actionTypes.DELETE_TODO,
    payload: id
});

export const setTodoSorting = (sortBy: SortOptions): Action<SortOptions> => ({
    type: actionTypes.SET_TODO_SORTING,
    payload: sortBy
});
