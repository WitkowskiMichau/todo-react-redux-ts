import React from 'react'
import { SortOptions } from '../actions/sortOptions'
import SortLink from '../containers/SortLink'

const TableHeader: React.StatelessComponent<{}> = () => (
    <div className="table-header">
        <span className="table-header__sort-by">Sorty by:</span>
        <SortLink sortBy={SortOptions.SORT_ID}>
            Id
        </SortLink>
        <SortLink sortBy={SortOptions.SORT_NAME}>
            Name
        </SortLink>
        <SortLink sortBy={SortOptions.SORT_TIMESTAMP}>
            Timestamp
        </SortLink>
    </div>
);

export default TableHeader
