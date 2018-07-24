import React from 'react'
import { connect } from 'react-redux'
import { setTodoSorting } from '../actions'
import { ReduxState } from '../reducers';
import { SortOptions } from '../actions/sortOptions';

interface Props {
    active: boolean,
    children: any,
    onClick: () => any
};

export interface OwnProps {
    sortBy: SortOptions
};

interface StateProps {
    active: boolean
}

interface DispatchProps {
    onClick: () => any
}

const Link: React.StatelessComponent<Props> = ({active, children, onClick}) => (
    <div
        onClick={onClick}
        className={`table-header__item ${active ? 'table-header__item--active' : ''}`}
    >
        {children}
    </div>
);

const mapStateToProps = (state: ReduxState, ownProps: OwnProps): StateProps => ({
    active: ownProps.sortBy === state.todosSorting
});

const mapDispatchToProps = (dispatch, ownProps: OwnProps): DispatchProps => ({
    onClick: () => dispatch(setTodoSorting(ownProps.sortBy))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
