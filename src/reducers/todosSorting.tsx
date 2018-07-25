import { SortOptions } from '../sortOptions'
import { ActionTypes } from '../actionTypes';
import { Action } from '../Interfaces';

const todosSorting = (state: SortOptions = SortOptions.SORT_TIMESTAMP, action: Action<SortOptions>) => {
    switch (action.type) {
        case ActionTypes.SET_TODO_SORTING:
            return action.payload;
        default:
            return state;
    }
};

export default todosSorting
