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
        className="todo-item-details"
    >
        <span className="todo-item-details-id">{id}</span>
        <span className="todo-item-details-text">{text}</span>
        <span className="todo-item-details-small todo-item-details-date">{`${new Date(timestamp).toLocaleString()}`}</span>
        <div onClick={() => deleteTodo(id)} className="todo-delete-button">&#10005;</div>
    </div>

);

export default Todo;
