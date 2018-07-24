import React from 'react'
import '../styles/App.css';
import AddTodo from '../containers/AddTodo'
import SortedTodoList from '../containers/SortedTodoList'
import TableHeader from './TableHeader'

const App: React.StatelessComponent<{}> = () => (
    <div className="app-container">
        <TableHeader/>
        <AddTodo/>
        <SortedTodoList/>
    </div>
);

export default App
