
import './Post.css'
import '../../index.css'
import { useState } from 'react'

export default function Post({ posts, currentArticle, setCurrentArticle}) {
    // const [currentArticle, setCurrentArticle] = useState("64c3e10928aa2fe7e8476947")


    function handleChange(e){
        setCurrentArticle(e.target.name)
    }


    if(currentArticle === null){
    return (
        <>
        <div className="homeDiv">
        <h1>All Posts</h1>
        { posts.map((p, idx) => (

            <>
            <div className="blogCard">
                <div>
                    <img className="img" src={p.img} /> 
                </div>
                <div>
                    <h3>Name: {p.author}</h3>
                    <h3>Title: {p.title}</h3>
                    <h3>Content: {p.content}</h3>
                    <h3>{p._id}</h3>
                    <button name={p._id} onClick={handleChange}>Click to Read More</button>
                </div>
               
                
            </div>

            </>
    ))}
    </div>
       </>
    )
        } else {
            const article = posts.find(p => p._id == currentArticle)

            return (
            <>
                <h1> Article</h1>
                <div className="blogCard">
                <div>
                    <img className="img" src={article.img} /> 
                </div>
                <div>
                    <h3>Name: {article.author}</h3>
                    <h3>Title: {article.title}</h3>
                    <h3>Content: {article.content}</h3>
                    <h3>{article._id}</h3>
                </div>
               
                
            </div>




            </>
            )
        }
}

