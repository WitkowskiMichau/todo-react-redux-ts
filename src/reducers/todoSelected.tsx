import { SortOptions } from '../actions/sortOptions'
import { actionTypes } from '../actionTypes';
import { Action } from '../actions';

const todosSorting = (state: SortOptions = SortOptions.SORT_TIMESTAMP, action: Action<SortOptions>) => {
    switch (action.type) {
        case actionTypes.SET_TODO_SORTING:
            return action.payload;
        default:
            return state;
    }
};

export default todosSorting
