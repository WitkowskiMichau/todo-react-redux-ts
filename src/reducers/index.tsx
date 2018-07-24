import { combineReducers, Reducer } from 'redux'
import { todoPayload } from '../actions';
import todos from './todos';
import { SortOptions } from '../actions/sortOptions';

export interface ReduxState {
    todos: Array<todoPayload>,
    todosSorting: SortOptions
}

const rootReducers: Reducer<any> = combineReducers({ todos });

export default rootReducers;