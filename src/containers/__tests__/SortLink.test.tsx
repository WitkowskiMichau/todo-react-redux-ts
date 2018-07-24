import { mount } from 'enzyme';
import React from 'react';
import { SortOptions } from '../../sortOptions';
import Root from '../../Root'
import SortLink from '../SortLink';

describe('SortLink container: ', () => {
    let wrapped;
    let initialState = {
        todoSelected: null,
        todosSorting: SortOptions.SORT_TIMESTAMP,
        todos: []
    };

    beforeEach(() => {
        wrapped = mount(
            <Root initialState={initialState}>
                <SortLink sortBy={SortOptions.SORT_ID}>
                    Id
                </SortLink>
            </Root>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('should change sorting on click', () => {
        expect(wrapped.find('.table-header__item--active').length).toEqual(0);

        wrapped.find('.table-header__item').simulate('click');

        expect(wrapped.find('.table-header__item--active').length).toEqual(1);
    })
});