import React from 'react'

interface Props {
    onClick: () => any;
    text: string,
    id: number,
    timestamp: number,
    deleteTodo: (id: number) => any
}

const Todo: React.StatelessComponent<Props> = ({onClick, text, id, timestamp, deleteTodo}) => (
    <div
        onClick={onClick}
        className="todo-list-item__details"
    >
        <span className="todo-list-item__details__id">{id}</span>
        <span className="todo-list-item__details__text">{text}</span>
        <span className="todo-list-item__details__timestamp">{`${new Date(timestamp).toLocaleString()}`}</span>
        <div onClick={() => deleteTodo(id)} className="todo-list-item__delete-button">&#10005;</div>
    </div>

);

export default Todo;
