
import { useState } from 'react'
import EditPage from '../EditPage/EditPage'
import './PostDetail.css'


export default function PostDetail({article, handleEdit, setPage, deletePost, handleDelete, setCurrentArticle}){
    const [editMode, setEditMode] = useState(false)

    function editPost(e){
        setEditMode(true)
    }
    function deletePost(e){
        if (window.confirm("Are you sure you want to delete this post?")) {
            handleDelete(e.target.name);
            // Later setPage to index and 
            setCurrentArticle(null)
            setEditMode(false)
            setPage("index")
          }
    }

    if(editMode === true){
    return (
        <EditPage article={article} handleEdit={handleEdit} setPage={setPage} setEditMode={setEditMode} setCurrentArticle={setCurrentArticle}/>
    )
    } else {
        return (
            <>
            
                
                <div className="container">
                <h1> {article.title}</h1>
                <div>
                    <img className="img" src={article.img} /> 
                </div>
                <div>
                    <h3>Name: {article.author}</h3>
                    <h3>Title: {article.title}</h3>
                    <h3>Content: {article.content}</h3>
                    <h3>{article._id}</h3>
                    <button name={article._id} onClick={editPost}> Click to edit</button>
                    <button name={article._id} onClick={deletePost}>Click to delete</button>
                </div>
                </div>
    
            </>
    
        )
    }
}