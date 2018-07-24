import React from 'react'
import AddTodo from '../containers/AddTodo';
import '../styles/App.css'

const App: React.StatelessComponent<{}> = () => (
    <div className="app-container">
        <AddTodo/>
    </div>
);

export default App
