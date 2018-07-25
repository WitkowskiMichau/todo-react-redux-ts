import { ActionTypes } from './actionTypes';
import { SortOptions } from './sortOptions';

export type TodoType = {
    text: string,
    id: number,
    timestamp: number
}
export type Action<T> = {
    type: ActionTypes;
    payload: T;
}
export interface ReduxState {
    todos: Array<TodoType>,
    todoSelected: TodoType,
    todosSorting: SortOptions
}