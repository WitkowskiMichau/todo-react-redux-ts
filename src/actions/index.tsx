import { actionTypes } from '../actionTypes';
import { SortOptions } from '../sortOptions';
import { Action, todoType } from '../Interfaces';

let idNumber = 0;

export const addTodo = (text: string): Action<todoType> => ({
    type: actionTypes.ADD_TODO,
    payload: {
        text,
        id: idNumber++,
        timestamp: Date.now()
    }
});

export const selectTodo = (todo: todoType): Action<todoType> => ({
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
