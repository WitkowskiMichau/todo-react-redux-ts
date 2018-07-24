import { mount } from 'enzyme';
import React from 'react';
import Todo from '..//Todo'

describe('Todo: ', () => {
    let wrapped, todo, selectTodo, deleteTodo;
    beforeEach(() => {
        selectTodo = jest.fn();
        deleteTodo = jest.fn();
        todo = {
            text: 'Text123',
            id: '111',
            timestamp: '1532352625083'
        };
        wrapped = mount(<Todo {...todo} onClick={() => selectTodo(todo)} deleteTodo={deleteTodo}/>);
    });

    it('render Todo text', () => {
        expect(wrapped.find('.todo-item-details-text').render().text()).toEqual(todo.text);
    });

    it('render Todo id', () => {
        expect(wrapped.find('.todo-item-details-id').render().text()).toEqual(todo.id);
    });

    it('render Todo date in proper format', () => {
        expect(wrapped.find('.todo-item-details-date').render().text()).toEqual(`${new Date(todo.timestamp).toLocaleString()}`);
    });

    it('call delete function on click', () => {
        wrapped.find('.todo-delete-button').simulate('click');
        expect(deleteTodo).toHaveBeenCalledWith(todo.id);
    });

    it('call select function on click', () => {
        wrapped.find('.todo-item-details').simulate('click');
        expect(selectTodo).toHaveBeenCalledWith(todo);
    });

    afterEach(() => {
        wrapped.unmount();
    });
});
