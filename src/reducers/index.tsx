import { combineReducers, Reducer } from 'redux'
import todos from './todos'
import todoSelected from './todoSelected'
import todosSorting from './todosSorting'
import { todoPayload } from '../actions';
import { SortOptions } from '../actions/sortOptions';

export interface ReduxState {
    todos: Array<todoPayload>,
    todoSelected: todoPayload,
    todosSorting: SortOptions
}

const rootReducers: Reducer<any> = combineReducers({
    todos,
    todosSorting
});

export default rootReducers;
