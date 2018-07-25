import { ActionTypes } from '../actionTypes';
import { Action } from '../Interfaces';

const todoSelected = (state: null | ActionTypes  = null , action: Action<any>) => {
    switch (action.type) {
        case ActionTypes.SELECT_TODO:
            return action.payload;
        default:
            return state
    }
};

export default todoSelected
