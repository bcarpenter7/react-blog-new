import './NavBar.css'

export default function NavBar({ setPage }){

   function handleChange(e){
        setPage(e.target.name)
    }

    return (
        <div className="navDiv">
            <div className="homeBtnDiv">
                <button name="null" onClick={handleChange}>Home</button>
            </div>
            <div className="buttonDiv">
                <button name="index" onClick={handleChange}>See All Articles</button>
                &nbsp; | &nbsp;
                <a onClick={handleChange}>Home</a>
            </div>
        </div>
    )
}