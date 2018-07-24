import { actionTypes } from '../actionTypes';

let idNumber = 0;

export type todoPayload = {
    text: string,
    id: number,
    timestamp: number
}
export type Action<T> = {
    type: actionTypes;
    payload: T;
};

export const addTodo = (text: string): Action<todoPayload> => ({
    type: actionTypes.ADD_TODO,
    payload: {
        text,
        id: idNumber++,
        timestamp: Date.now()
    }
});
