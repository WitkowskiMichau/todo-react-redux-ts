import { render } from 'react-dom';
import App from './components/App';
import Root from './Root';
import React from 'react'
import './styles/index.css'

const initialState = {};

render(
    <Root initialState={initialState}>
        <App/>
    </Root>,
    document.getElementById('root')
);
