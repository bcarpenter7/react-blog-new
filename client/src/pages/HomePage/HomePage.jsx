import { useState } from 'react'
import './HomePage.css'
import '../../index.css'


export default function HomePage({ setPage }){
    const [nav, setNav] = useState({})

    function handleClick(e){
        setPage(e.target.name)
    }

    return (
        <>
        <div className="homeDiv">
            <h1>Home Page</h1>
            <h3>Welcome to the main page</h3>
            <button name="index" onClick={handleClick}>Click here to see all articles</button>
            <button name="postForm" onClick={handleClick}>Click here to add an article</button>
        </div>
        </>
   
    )

}