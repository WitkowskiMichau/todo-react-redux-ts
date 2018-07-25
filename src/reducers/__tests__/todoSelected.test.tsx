import todoSelectedReducer from '../todoSelected';
import { ActionTypes } from '../../actionTypes';

describe('Todo Selected Reducer:', () => {

    it('handles actions of type ADD_TODO', () => {
        const action = {
            type: ActionTypes.SELECT_TODO,
            payload: {
                id: 0,
                text: 'text',
                timestamp: 123
            }
        };

        const newState = todoSelectedReducer(null, action);

        expect(newState).toEqual({
            id: 0,
            text: 'text',
            timestamp: 123
        })
    });
});