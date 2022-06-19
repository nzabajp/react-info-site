import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [dark, setDark] = React.useState(false)
    
    function toggle() {
        setDark(prevDark => !prevDark)
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode={dark}
                toggleDarkMode={toggle} />
            <Main
                darkMode={dark} />
        </div>
    )
}