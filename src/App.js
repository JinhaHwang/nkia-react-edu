import React from 'react'
import { Link, Router } from '@reach/router'
import './App.css'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'

// react-router-dom
// https://reacttraining.com/react-router/

// todo : 새로운 @reach/router
// https://reach.tech/router
function App() {
    return (
        <div className={`App`}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Router>
                    <Home path="/" />
                    <Dashboard path="/dashboard" />
                </Router>
            </nav>
        </div>
    )
}

export default App
