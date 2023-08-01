import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
// import Add from './components/Add'
// import Edit from './components/Edit'
import PostForm from '../../components/PostForm/PostForm'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import PostDetail from '../../components/PostDetail/PostDetail'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'



export default function App() {
  const [posts, setPosts] = useState([])
  const [currentArticle, setCurrentArticle] = useState(null)
  const [page, setPage] = useState(null)
  const [user, setUser] = useState(null);

  // const getPosts = () => {
  //   axios.get('http://localhost:3000/posts')
  //     .then((response) => setPosts(response.data), (err) => console.log(err))
  //     .catch((error) => console.log(error))
  // }


  const getUser = async () => {
    try {
      const url = 'http://localhost:8080/auth/login/success';
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };
  async function getPosts() {
    try {
      const res = await axios.get('http://localhost:8080/api/posts')
      setPosts(res.data)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }


  const handleCreate = (createdPost) => {
    axios.post('http://localhost:8080/api/posts', createdPost)
      .then((response) => {
        setPosts([...posts, response.data])
      })
  }


  const handleEdit = (editedPost) => {
    axios.put('http://localhost:8080/api/posts/' + editedPost._id, editedPost)
      .then((response) => {
        let newPost = posts.map((post) => {
          return post._id !== editedPost._id ? post : editedPost
        })
        setPosts(newPost)
      })
  }

  const handleDelete = (deletedPost) => {
    axios.delete('http://localhost:8080/api/posts/' + deletedPost)
      .then((response) => {
        let newPosts = posts.filter((post) => {
          return post._id !== deletedPost
        })
        setPosts(newPosts)
      })
  }


  useEffect(() => {
    getPosts();
    getUser();
  }, [])



  if (page === null || page === "null") {
    return (
      <>
        <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle} />
        <Login />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setPage={setPage} />
            }>

          </Route>
          {/* Auth Routes */}
          <Route
            exact
            path="/"
            element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />

        </Routes>
      </>
    )
  }

  if (page === "index" || page === "indexUpdate") {
    return (
      <>
        <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle} />
        {/* <h1>All Posts</h1> */}
        <Routes>
          <Route
            path="/"
            element={
              <Post
                posts={posts}
                currentArticle={currentArticle}
                setCurrentArticle={setCurrentArticle}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                setPage={setPage}
              />
            }>

          </Route>




        </Routes>
      </>

    )
  }

  if (page === "postform") {
    return (
      <>
        <NavBar setPage={setPage} setCurrentArticle={setCurrentArticle} />
        {/* <h1>All Posts</h1> */}
        <Routes>
          <Route
            path="/"
            element={
              <PostForm handleCreate={handleCreate} setPage={setPage} />
            }>
          </Route>
        </Routes>


      </>

    )
  }

  // if(page === "detail"){
  //   return (
  //       <>
  //         <NavBar setPage={setPage}/>
  //         {/* <h1>All Posts</h1> */}
  //         <Routes>
  //           <Route 
  //               path="/" 
  //               element={
  //                 <PostDetail id={id}/>
  //               }>

  //           </Route>
  //         </Routes>
  //       </>

  //   )
  // }










}
