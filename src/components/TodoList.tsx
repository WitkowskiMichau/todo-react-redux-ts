import React from 'react'
import Todo from '../components/Todo'
import { todoPayload }  from '../actions';

interface Props {
    todos: Array<todoPayload>,
    deleteTodo: (id: number) => any
}

const TodoList: React.StatelessComponent<Props> = ({todos, deleteTodo}) => (
    <div className="todo-list">
        {todos.map(todo =>
            <div className="todo-item" key={todo.id}>
                <Todo
                    {...todo}
                    deleteTodo={deleteTodo}
                />
            </div>
        )}
    </div>
);

export default TodoList
