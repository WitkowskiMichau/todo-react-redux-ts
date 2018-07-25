import { ActionTypes } from '../actionTypes';
import { SortOptions } from '../sortOptions';
import { Action, TodoType } from '../Interfaces';

let idNumber = 0;

export const addTodo = (text: string): Action<TodoType> => ({
    type: ActionTypes.ADD_TODO,
    payload: {
        text,
        id: idNumber++,
        timestamp: Date.now()
    }
});

export const selectTodo = (todo: TodoType): Action<TodoType> => ({
    type: ActionTypes.SELECT_TODO,
    payload: {...todo}
});

export const deleteTodo = (id: number): Action<number> => ({
    type: ActionTypes.DELETE_TODO,
    payload: id
});

export const setTodoSorting = (sortBy: SortOptions): Action<SortOptions> => ({
    type: ActionTypes.SET_TODO_SORTING,
    payload: sortBy
});
