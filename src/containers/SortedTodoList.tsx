import { connect } from 'react-redux'
import { deleteTodo, selectTodo } from '../actions'
import { SortOptions } from '../sortOptions'
import TodoList from '../components/TodoList'
import React from 'react';
import { todoType, ReduxState } from '../Interfaces';

interface StateProps {
    todos: Array<todoType>,
    selectedTodo: todoType
}

interface DispatchProps {
    selectTodo: (todo: todoType) => todoType,
    deleteTodo: (id: number) => any
}

const getSortedTodos = (todos: Array<todoType>, sortBy: SortOptions) => {
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
    selectedTodo: state.todoSelected
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
    selectTodo: todo => dispatch(selectTodo(todo)),
    deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
