import { useState } from 'react'



export default function HomePage({ setPage }){
    const [nav, setNav] = useState({})

    function handleClick(e){
        setPage(e.target.name)
    }

    return (
        <>
        <h3>Welcome to the main page</h3>
        <button name="index" onClick={handleClick}>Click here to see all articles</button>
        </>
   
    )

}