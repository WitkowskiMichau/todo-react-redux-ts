import React from 'react'
import Todo from '../components/Todo'
import { todoPayload }  from '../actions';

interface Props {
    todos: Array<todoPayload>
    selectedTodo: todoPayload,
    selectTodo: (todo: todoPayload) => any,
    deleteTodo: (id: number) => any
}

const TodoList: React.StatelessComponent<Props> = ({todos, selectedTodo, selectTodo, deleteTodo}) => (
    <div className="todo-list">
        {todos.map(todo =>
            <div className={`todo-list__item ${selectedTodo !== null && selectedTodo.id === todo.id ? 'todo-list__item--selected' : ''}`} key={todo.id}>
                <Todo
                    {...todo}
                    onClick={() => selectTodo(todo)}
                    deleteTodo={deleteTodo}
                />
            </div>
        )}
    </div>
);

export default TodoList
