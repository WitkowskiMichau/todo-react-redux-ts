import { ActionTypes } from '../actionTypes';
import { Action, TodoType  } from '../Interfaces';

const todos = (state: Array<TodoType> = [], action: Action<number | TodoType>) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [...state, action.payload];
        case ActionTypes.DELETE_TODO:
            return [...state.filter(({id}) => id !== action.payload)];
        default:
            return state;
    }
};

export default todos;
