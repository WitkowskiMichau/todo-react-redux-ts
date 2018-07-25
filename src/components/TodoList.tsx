import React from 'react'
import Todo from '../components/Todo'
import { TodoType } from '../Interfaces';

interface Props {
    todos: Array<TodoType>
    selectedTodo: TodoType,
    selectTodo: (todo: TodoType) => any,
    deleteTodo: (id: number) => any
}

const TodoList: React.StatelessComponent<Props> = ({todos, selectedTodo, selectTodo, deleteTodo}) => (
    <div className="todo-list">
        {todos.map((todo: TodoType) =>
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
