import { actionTypes } from '../actionTypes';
import { Action, todoPayload } from '../actions';

const todos = (state: Array<todoPayload> = [], action: Action<number | todoPayload>) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, action.payload];
        case actionTypes.DELETE_TODO:
            return [...state.filter(({id}) => id !== action.payload)];
        default:
            return state;
    }
};

export default todos;
