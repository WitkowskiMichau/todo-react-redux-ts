import { createSelector } from 'reselect';
import { ReduxState, TodoType } from '../Interfaces';
import { SortOptions } from '../sortOptions';

const getSorting = (state: ReduxState): SortOptions => state.todosSorting;
const getTodos = (state: ReduxState): Array<TodoType> => state.todos;

export const getSortedTodos = createSelector([ getSorting, getTodos ], (todosSorting: SortOptions, todos: Array<TodoType>) => {
        switch (todosSorting) {
            case SortOptions.SORT_NAME:
                return todos.slice(0).sort((a, b) => a.text.localeCompare(b.text));
            case SortOptions.SORT_ID:
                return todos.slice(0).sort((a, b) => a.id - b.id);
            case SortOptions.SORT_TIMESTAMP:
                return todos.slice(0).sort((a, b) => a.timestamp - b.timestamp);
            default:
                throw new Error('Unknown filter');
        }
    }
);
