import React from 'react'

interface Props {
    text: string,
    id: number,
    timestamp: number,
}

const Todo: React.StatelessComponent<Props> = ({text, id, timestamp}) => (
    <div className="todo-item-details">
        <span className="todo-item-details-id">{id}</span>
        <span className="todo-item-details-text">{text}</span>
        <span className="todo-item-details-small todo-item-details-date">{`${new Date(timestamp).toLocaleString()}`}</span>
    </div>

);

export default Todo;
