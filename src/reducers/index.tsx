import { combineReducers, Reducer } from 'redux'
import todos from './todos'
import todoSelected from './todoSelected'
import todosSorting from './todosSorting'

const rootReducers: Reducer<any> = combineReducers({
    todos,
    todosSorting,
    todoSelected
});

export default rootReducers;
