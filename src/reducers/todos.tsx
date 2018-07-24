import { actionTypes } from '../actionTypes';
import { Action, todoPayload } from '../actions';

const todos = (state: Array<todoPayload> = [], action: Action<todoPayload>) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default todos;
