import { combineReducers, Reducer } from 'redux'
import { todoPayload } from '../actions';
import todos from './todos';

export interface ReduxState {
    todos: Array<todoPayload>,
}

const rootReducers: Reducer<any> = combineReducers({ todos });

export default rootReducers;