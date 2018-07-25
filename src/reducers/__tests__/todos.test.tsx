import todosReducer from '../todos';
import { ActionTypes } from '../../actionTypes';

describe('Todos Reducer:', () => {

    it('handles actions of type ADD_TODO', () => {
        const action = {
            type: ActionTypes.ADD_TODO,
            payload: {
                id: 0,
                text: 'text',
                timestamp: 123
            }
        };

        const newState = todosReducer([], action);

        expect(newState).toEqual([{
            id: 0,
            text: 'text',
            timestamp: 123
        }])
    });

    it('handles actions of type DELETE_TODO', () => {
        const previousState = [
            {
                id: 0,
                text: 'text',
                timestamp: 123
            },
            {
                id: 1,
                text: 'text',
                timestamp: 123
            }
        ];
        const action = {
            type: ActionTypes.DELETE_TODO,
            payload: 0
        };

        const newState = todosReducer(previousState, action);

        expect(newState).toEqual([{
            id: 1,
            text: 'text',
            timestamp: 123
        }])
    });
});