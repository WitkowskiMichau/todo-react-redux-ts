import { mount } from 'enzyme';
import React from 'react';
import TodoList from '../TodoList';
import Todo from '../Todo';

describe('Todo: ', () => {
    let wrapped, todos;
    beforeEach(() => {
        todos = [{
            text: 'text111',
            id: '111',
            timestamp: '1532352625083'
        }, {
            text: 'text222',
            id: '222',
            timestamp: '1532352425083'
        }];
        wrapped = mount(<TodoList todos={todos} />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('render todoList', () => {
        expect(wrapped.find(Todo).length).toEqual(2);
    });
});
