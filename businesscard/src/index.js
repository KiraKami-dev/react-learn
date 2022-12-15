import React from "react"
import "./style.css"
import reactDOM from "react-dom"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App(){
    return (
        <div className="maincont">
        <Header />
        <Content />
        <Footer />
        </div>
    )
}

reactDOM.render(
    <App />,document.getElementById('root')
)