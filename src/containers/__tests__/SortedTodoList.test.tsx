import { mount } from 'enzyme';
import React from 'react';
import { SortOptions } from '../../actions/sortOptions';
import Root from '../../Root'
import SortedTodoList from '../SortedTodoList';

describe('SortedTodoList container: ', () => {
    let wrapped;
    let initialState = {
        todoSelected: {
            id: 2,
            text: 'zz',
            timestamp: 1533414835789
        },
        todosSorting: SortOptions.SORT_TIMESTAMP,
        todos: [
            {
                id: 1,
                text: 'zz',
                timestamp: 1433334835789
            },
            {
                id: 2,
                text: 'xx',
                timestamp: 1333414835789
            },
            {
                id: 3,
                text: 'bb xx',
                timestamp: 1232414835789
            },
            {
                id: 4,
                text: 'aa aa',
                timestamp: 1132414822989
            }
        ]
    };

    const changeSorting = (sortBy) => {
        initialState.todosSorting = sortBy;
        wrapped = mount(
            <Root initialState={initialState}>
                <SortedTodoList/>
            </Root>
        );
    };

    afterEach(() => {
        wrapped.unmount();
    });

    it('should display todos', () => {
        changeSorting(SortOptions.SORT_TIMESTAMP);

        expect(wrapped.find('.todo-list__item').length).toEqual(4)
    });

    it('should display todo as elected', () => {
        changeSorting(SortOptions.SORT_NAME);

        expect(wrapped.find('.todo-list__item--selected').find('.todo-list-item__details__id').at(0).text()).toEqual('2');
    });

    it('should change selection on click', () => {
        changeSorting(SortOptions.SORT_NAME);

        expect(wrapped.find('.todo-list__item--selected').find('.todo-list-item__details__id').at(0).text()).toEqual('2');

        wrapped.find('.todo-list-item__details__id').at(1).simulate('click');

        expect(wrapped.find('.todo-list__item--selected').find('.todo-list-item__details__id').at(0).text()).toEqual('3');
    });

    it('should delete todo on click', () => {
        changeSorting(SortOptions.SORT_ID);

        expect(wrapped.find('.todo-list__item').length).toEqual(4);

        wrapped.find('.todo-list-item__details').at(0).find('.todo-list-item__delete-button').simulate('click');
        wrapped.update();

        expect(wrapped.find('.todo-list__item').length).toEqual(3);
    });

    describe('should sort via:', () => {
        it('timestamp', () => {
            changeSorting(SortOptions.SORT_TIMESTAMP);

            expect(wrapped.find('.todo-list-item__details__id').at(0).text()).toEqual('4');
            expect(wrapped.find('.todo-list-item__details__id').at(1).text()).toEqual('3');
            expect(wrapped.find('.todo-list-item__details__id').at(2).text()).toEqual('2');
            expect(wrapped.find('.todo-list-item__details__id').at(3).text()).toEqual('1');
        });

        it('id', () => {
            changeSorting(SortOptions.SORT_ID);

            expect(wrapped.find('.todo-list-item__details__id').at(0).text()).toEqual('1');
            expect(wrapped.find('.todo-list-item__details__id').at(1).text()).toEqual('2');
            expect(wrapped.find('.todo-list-item__details__id').at(2).text()).toEqual('3');
            expect(wrapped.find('.todo-list-item__details__id').at(3).text()).toEqual('4');
        });

        it('text', () => {
            changeSorting(SortOptions.SORT_NAME);

            expect(wrapped.find('.todo-list-item__details__id').at(0).text()).toEqual('4');
            expect(wrapped.find('.todo-list-item__details__id').at(1).text()).toEqual('3');
            expect(wrapped.find('.todo-list-item__details__id').at(2).text()).toEqual('2');
            expect(wrapped.find('.todo-list-item__details__id').at(3).text()).toEqual('1');
        });
    });
});
