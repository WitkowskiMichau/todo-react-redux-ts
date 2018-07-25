import { addTodo, selectTodo, deleteTodo, setTodoSorting } from '../index';
import { ActionTypes } from '../../actionTypes';
import { SortOptions } from '../../sortOptions';

describe('Actions: addTodo ', () => {
    it('has the correct type', () => {
        const action = addTodo('');

        expect(action.type).toEqual(ActionTypes.ADD_TODO);
    });

    it('has the correct payload', () => {
        const action = addTodo('text');

        expect(action.payload.id).toEqual(1);
        expect(action.payload.text).toEqual('text');
    });
});

describe('Actions: selectTodo ', () => {
    it('has the correct type', () => {
        const action = selectTodo({id: 123, text: 'abc', timestamp: 123});

        expect(action.type).toEqual(ActionTypes.SELECT_TODO);
    });

    it('has the correct payload', () => {
        const todo = {id: 123, text: 'abc', timestamp: 123};
        const action = selectTodo(todo);

        expect(action.payload).toEqual(todo);
    });
});

describe('Actions: deleteTodo ', () => {
    it('has the correct type', () => {
        const action = deleteTodo(1);

        expect(action.type).toEqual(ActionTypes.DELETE_TODO);
    });

    it('has the correct payload', () => {
        const id = 123;
        const action = deleteTodo(id);

        expect(action.payload).toEqual(id);
    });
});

describe('Actions: setTodoSorting ', () => {
    it('has the correct type', () => {
        const action = setTodoSorting(SortOptions.SORT_ID);

        expect(action.type).toEqual(ActionTypes.SET_TODO_SORTING);
    });

    it('has the correct payload', () => {
        const sortBy = SortOptions.SORT_ID;
        const action = setTodoSorting(sortBy);

        expect(action.payload).toEqual(sortBy);
    });
});
