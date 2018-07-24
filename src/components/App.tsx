import React from 'react'
import AddTodo from '../containers/AddTodo';
import SortedTodoList from '../containers/SortedTodoList'
import TableHeader from './TableHeader';
import '../styles/App.css'

const App: React.StatelessComponent<{}> = () => (
    <div className="app-container">
        <TableHeader/>
        <AddTodo/>
        <SortedTodoList/>
    </div>
);

export default App
