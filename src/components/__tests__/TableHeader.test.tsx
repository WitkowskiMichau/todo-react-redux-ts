import { shallow } from 'enzyme';
import React from 'react';
import TableHeader from '../../components/TableHeader'
import SortLink from '../../containers/SortLink'

describe('TableHeader: ', () => {
    it('shows 3 SortLinks', () => {
        const wrapped = shallow(<TableHeader/>);

        expect(wrapped.find(SortLink).length).toEqual(3);
    });
});
