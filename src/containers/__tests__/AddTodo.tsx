import {mount} from 'enzyme';
import React from 'react';
import Root from '../../Root'
import AddTodo from '../AddTodo'

describe('AddTodo container: ', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<AddTodo/>);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('has one empty input at start', () => {
        expect(wrapped.find('input').length).toEqual(1)
        expect(wrapped.find('input').prop('value')).toEqual('')
    });

    it('when form is submitted, input gets emptied', () => {
        wrapped.find('input').simulate('change', {target: {value: 'foo'}});
        wrapped.find('form').simulate('submit');
        expect(wrapped.find('input').prop('value')).toEqual('')
    });

});
