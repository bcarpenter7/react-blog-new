



export default function PostDetail({article }){



    return(
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