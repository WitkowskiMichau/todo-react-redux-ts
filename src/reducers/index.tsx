import { combineReducers, Reducer } from 'redux'
import { todoPayload } from '../actions';
import todos from './todos';
import { SortOptions } from '../actions/sortOptions';
import todosSorting from './todosSorting';

export interface ReduxState {
    todos: Array<todoPayload>,
    todosSorting: SortOptions
}

const rootReducers: Reducer<any> = combineReducers({
    todos,
    todosSorting
});

export default rootReducers;