
import { useState } from 'react'
import EditPage from '../EditPage/EditPage'

export default function PostDetail({article, handleEdit, setPage}){
    const [editMode, setEditMode] = useState(false)
    function editPost(e){
        setEditMode(true)
    }

    if(editMode === true){
    return (
        <EditPage article={article} handleEdit={handleEdit} setPage={setPage} setEditMode={setEditMode} />
    )
    } else {
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
                    <button name={article._id} onClick={editPost}> Click to edit</button>
                </div>
                </div>
    
            </>
    
        )
    }
}