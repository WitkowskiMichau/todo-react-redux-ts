import { connect } from 'react-redux'
import { deleteTodo, selectTodo } from '../actions'
import TodoList from '../components/TodoList'
import React from 'react';
import { TodoType, ReduxState } from '../Interfaces';
import { getSortedTodos } from '../selectors/index'

interface StateProps {
    todos: Array<TodoType>,
    selectedTodo: TodoType
}

interface DispatchProps {
    selectTodo: (todo: TodoType) => TodoType,
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
