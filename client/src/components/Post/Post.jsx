
import './Post.css'
import '../../index.css'

export default function Post({ posts }) {
    if (!Array.isArray(posts)) {
        // Handle the case when 'posts' is not an array
        return (<h1>Not an Array</h1>); // or display an error message, or a loading indicator, etc.
      }

    return (
        <>
        <div className="homeDiv">
        <h1>Index Page</h1>
        { posts.map((p, idx) => (

            <>
            <div className="blogCard">
                <h3>Name: {p.author}</h3>
                <h3>Title: {p.title}</h3>
                <h3>Content: {p.content}</h3>
                <img className="img" src={p.img} /> 
            </div>

            </>
    ))}
    </div>
       </>
    )
}

