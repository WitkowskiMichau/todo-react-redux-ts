import { connect } from 'react-redux'
import { deleteTodo, selectTodo } from '../actions'
import TodoList from '../components/TodoList'
import React from 'react';
import { todoType, ReduxState } from '../Interfaces';
import { getSortedTodos } from '../selectors/index'

interface StateProps {
    todos: Array<todoType>,
    selectedTodo: todoType
}

interface DispatchProps {
    selectTodo: (todo: todoType) => todoType,
    deleteTodo: (id: number) => any
}

const mapStateToProps = (state: ReduxState): StateProps => ({
    todos: getSortedTodos(state),
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
