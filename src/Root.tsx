import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index';

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
}

declare var window: Window;

export default (props) => {
    if (!props.initialState) {
        props.initialState = {}
    }
    return (
        /* eslint-disable no-underscore-dangle */
        <Provider store={createStore(rootReducer, props.initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            {props.children}
        </Provider>
        /* eslint-enable */
    )
}