import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import TableHeader from '../../components/TableHeader'
import AddTodo from '../../containers/AddTodo'
import SortedTodoList from '../../containers/SortedTodoList'

let wrapped;

describe('App: ', () => {

    beforeEach(() => {
        wrapped = shallow(<App/>);
    });

    it('shows a TabletHeader', () => {
        expect(wrapped.find(TableHeader).length).toEqual(1);
    });

    it('shows a AddTodo', () => {
        expect(wrapped.find(AddTodo).length).toEqual(1);
    });

    it('shows a SortedTodoList', () => {
        expect(wrapped.find(SortedTodoList).length).toEqual(1);
    });

});
