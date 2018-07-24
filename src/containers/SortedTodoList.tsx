import { connect } from 'react-redux'
import { todoPayload } from '../actions'
import { SortOptions } from '../actions/sortOptions'
import TodoList from '../components/TodoList'
import React from 'react';
import { ReduxState } from '../reducers';

interface StateProps {
    todos: Array<todoPayload>
}

interface DispatchProps {}

const getSortedTodos = (todos: Array<todoPayload>, sortBy: SortOptions) => {
    console.log(this.props, this.state)
    switch (sortBy) {
        case SortOptions.SORT_NAME:
            return todos.slice(0).sort((a, b) => a.text.localeCompare(b.text));
        case SortOptions.SORT_ID:
            return todos.slice(0).sort((a, b) => a.id - b.id);
        case SortOptions.SORT_TIMESTAMP:
            return todos.slice(0).sort((a, b) => a.timestamp - b.timestamp);
        default:
            throw new Error('Unknown filter: ' + sortBy)
    }
};

const mapStateToProps = (state: ReduxState): StateProps => ({
    todos: getSortedTodos(state.todos, state.todosSorting),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)