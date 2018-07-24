import { actionTypes } from '../actionTypes';
import { Action } from '../actions';

const todoSelected = (state: null | actionTypes  = null , action: Action<any>) => {
    switch (action.type) {
        case actionTypes.SELECT_TODO:
            return action.payload;
        default:
            return state
    }
};

export default todoSelected
