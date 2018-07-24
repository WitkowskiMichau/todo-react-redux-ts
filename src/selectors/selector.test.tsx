import React from 'react';
import {mount} from 'enzyme';
import App from '../components/App';
import { SortOptions } from "../sortOptions";
import Root from "../Root";

describe('Selector: ', () => {
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
                text: 'aaaa',
                timestamp: 1333414835789
            },
            {
                id: 3,
                text: 'gggaaa',
                timestamp: 1032414835789
            },
            {
                id: 4,
                text: 'cccccc',
                timestamp: 1132414822989
            }
        ]
    };

    beforeEach(() => {
        wrapped = mount(
            <Root initialState={initialState}>
                <App/>
            </Root>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('should sort via id: ', () => {
        expect(wrapped.find('.table-header__item').at(0).text()).toEqual('Id')
        expect(wrapped.find('.todo-list__item').find('.todo-list-item__details__id').at(0).text()).toEqual('3');
        wrapped.find('.table-header__item').at(0).simulate('click');
        expect(wrapped.find('.todo-list__item').find('.todo-list-item__details__id').at(0).text()).toEqual('1');
    });

    it('should sort via name: ', () => {
        expect(wrapped.find('.table-header__item').at(1).text()).toEqual('Name');
        expect(wrapped.find('.todo-list__item').find('.todo-list-item__details__id').at(0).text()).toEqual('3');
        wrapped.find('.table-header__item').at(1).simulate('click');
        expect(wrapped.find('.todo-list__item').find('.todo-list-item__details__id').at(0).text()).toEqual('2');
    });

    it('should sort via timestamp | remain the same: ', () => {
        expect(wrapped.find('.table-header__item').at(2).text()).toEqual('Timestamp');
        expect(wrapped.find('.todo-list__item').find('.todo-list-item__details__id').at(0).text()).toEqual('3');
        wrapped.find('.table-header__item').at(2).simulate('click');
        expect(wrapped.find('.todo-list__item').find('.todo-list-item__details__id').at(0).text()).toEqual('3');
    });

});
