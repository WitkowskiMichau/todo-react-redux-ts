import { actionTypes } from './actionTypes';
import { SortOptions } from './sortOptions';

export type todoType = {
    text: string,
    id: number,
    timestamp: number
};
export type Action<T> = {
    type: actionTypes;
    payload: T;
};
export interface ReduxState {
    todos: Array<todoType>,
    todoSelected: todoType,
    todosSorting: SortOptions
};