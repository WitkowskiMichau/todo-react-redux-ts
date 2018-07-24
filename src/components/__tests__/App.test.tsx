import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import AddTodo from '../../containers/AddTodo'

let wrapped;

describe('App: ', () => {

    beforeEach(() => {
        wrapped = shallow(<App/>);
    });

    it('shows a AddTodo', () => {
        expect(wrapped.find(AddTodo).length).toEqual(1);
    });

});
