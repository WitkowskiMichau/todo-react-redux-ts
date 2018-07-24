import { mount } from 'enzyme';
import React from 'react';
import TodoList from '../TodoList';
import Todo from '../Todo';

describe('Todo: ', () => {
    let wrapped, todos, selectedTodo, selectTodo, deleteTodo;
    beforeEach(() => {
        selectTodo = jest.fn();
        deleteTodo = jest.fn();

        todos = [{
            text: 'text111',
            id: '111',
            timestamp: '1532352625083'
        }, {
            text: 'text222',
            id: '222',
            timestamp: '1532352425083'
        }];
        wrapped = mount(<TodoList todos={todos} selectedTodo={todos[0]} selectTodo={selectTodo} deleteTodo={deleteTodo}/>);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('render todoList', () => {
        expect(wrapped.find(Todo).length).toEqual(2);
    });

    it('render one selected todo', () => {
        expect(wrapped.find('.active').length).toEqual(1);
    });
});
