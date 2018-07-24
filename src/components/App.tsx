import React from 'react'
import AddTodo from '../containers/AddTodo';
import SortedTodoList from '../containers/SortedTodoList'
import '../styles/App.css'

const App: React.StatelessComponent<{}> = () => (
    <div className="app-container">
        <AddTodo/>
        <SortedTodoList/>
    </div>
);

export default App
