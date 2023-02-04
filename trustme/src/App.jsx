import React from 'react'
import Login from './pages/login'
import Signup from  './pages/signup'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'


export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
        </Router>
        </>
    )
}