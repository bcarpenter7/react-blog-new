import { useState } from 'react'
import '../../index.css'
import './PostForm.css'


export default function PostForm({ handleCreate, setPage }){
    const [tempPost, setTempPost] = useState({
        author: '',
        title: '',
        content: '',
        img: ''
    })

    function handleChange(e){
        setTempPost({...tempPost, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setPage('index')
        handleCreate(tempPost)
    }

    return(
        <>
            <div className="homeDiv">
            <h1>Add Article</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Enter Author</label>
                    <input 
                    value={tempPost.author} 
                    name="author"
                    onChange={handleChange}
                    />
                </div>
                
                <div>
                    <label>Enter Title</label>
                    <input 
                    value={tempPost.title} 
                    name="title"
                    onChange={e => handleChange(e)}
                    />
                </div>
               
                <div>
                    <label>Enter Content</label>
                    <input 
                    value={tempPost.content} 
                    name="content"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <div>
                    <label>Enter Img Url</label>
                    <input 
                    value={tempPost.img} 
                    name="img"
                    onChange={e => handleChange(e)}
                    />

                </div>
               
                <button type="submit">Enter</button>
            </form>

            </div>
            
        </>


    )
}