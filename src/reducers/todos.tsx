import { actionTypes } from '../actionTypes';
import { Action, todoType  } from '../Interfaces';

const todos = (state: Array<todoType> = [], action: Action<number | todoType>) => {
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
