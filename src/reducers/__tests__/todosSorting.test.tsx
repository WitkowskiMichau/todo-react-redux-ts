import { SortOptions } from '../../sortOptions';
import todosSortingReducer from '../todosSorting';
import { ActionTypes } from '../../actionTypes';

describe('Todo Selected Reducer:', () => {

    it('handles actions of type ADD_TODO', () => {
        const action = {
            type: ActionTypes.SET_TODO_SORTING,
            payload: SortOptions.SORT_NAME
        };

        const newState = todosSortingReducer(null, action);

        expect(newState).toEqual(SortOptions.SORT_NAME)
    });
});