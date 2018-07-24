import React from 'react'
import Todo from '../components/Todo'
import { todoPayload }  from '../actions';

interface Props {
    todos: Array<todoPayload>
}

const TodoList: React.StatelessComponent<Props> = ({todos}) => (
    <div className="todo-list">
        {todos.map(todo =>
            <div className="todo-item" key={todo.id}>
                <Todo
                    {...todo}
                />
            </div>
        )}
    </div>
);

export default TodoList
