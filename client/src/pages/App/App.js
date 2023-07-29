import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
// import Add from './components/Add'
// import Edit from './components/Edit'
import PostForm from '../../components/PostForm'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'




export default function App() {
  const [posts, setPosts] = useState([])

  const [page, setPage] = useState(null)

  // const getPosts = () => {
  //   axios.get('http://localhost:3000/posts')
  //     .then((response) => setPosts(response.data), (err) => console.log(err))
  //     .catch((error) => console.log(error))
  // }

  async function getPosts(){
    try {
      const res = await axios.get('http://localhost:3000/api/posts')
      setPosts(res.data)
      console.log(res.data)
    } catch (err){
      console.error(err)
    }
  }

  const handleCreate = (createdPost) => {
    axios.post('http://localhost:3000/api/posts', createdPost)
      .then((response) => {
        setPosts([...posts, response.data])
      })
  }

  // const handleEdit = (editedPerson) => {
  //   axios.put('http://localhost:3000/people/' + editedPerson._id, editedPerson)
  //     .then((response) => {
  //       let newPost = post.map((person) => {
  //         return person._id !== editedPerson._id ? person : editedPerson
  //       })
  //       setPost(newPost)
  //     })
  // }
  // const handleDelete = (deletedPerson) => {
  //   axios.delete('http://localhost:3000/people/' + deletedPerson._id)
  //     .then((response) => {
  //       let newPeople = people.filter((person) => {
  //         return person._id !== deletedPerson._id
  //       })
  //       setPeople(newPeople)
  //     })
  // }


  useEffect(() => {
    getPosts()
  }, [])


 
      if(page === null || page === "null"){
        return (
          <>
          <NavBar setPage={setPage}/>
         
              <Routes>
                <Route 
                    path="/" 
                    element={
                      <HomePage setPage={setPage}/>
                    }>

                </Route>
              </Routes>
          </>
        )
      }

      if(page === "index"){
        return (
            <>
              <NavBar setPage={setPage}/>
              <h1>All Posts</h1>
              <Routes>
                <Route 
                    path="/" 
                    element={
                      <Post posts={posts}/>
                    }>

                </Route>
              </Routes>
            </>

        )
      }
    
      

         
         


      
      

}
