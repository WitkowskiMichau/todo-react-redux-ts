import { render } from 'react-dom';
import App from './components/App';
import Root from './Root';
import React from 'react'
import './styles/index.css'
import { SortOptions } from './sortOptions';

const initialState = {
    todoSelected: null,
    todosSorting: SortOptions.SORT_TIMESTAMP,
    todos: [
        {
            id: 99,
            text: 'Read a book.',
            timestamp: Date.now()
        },
        {
            id: 88,
            text: 'Swimming.',
            timestamp: Date.now()
        },
        {
            id: 77,
            text: 'Programming.',
            timestamp: Date.now()
        },
        {
            id: 66,
            text: 'Ride a bike',
            timestamp: 1532414822989
        }
    ]
};

render(
    <Root initialState={initialState}>
        <App/>
    </Root>,
    document.getElementById('root')
);
