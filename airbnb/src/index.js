import "./style.css"
import React from 'react'
import ReactDOM  from 'react-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from "./components/Card"

function App(){
    return(
        <>
        <Navbar />
        <Hero />
        <Card />
        </>
    )
}
const root = document.getElementById('root')

ReactDOM.render(<App />,root)
