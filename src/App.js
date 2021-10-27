import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Showcase from './components/Showcase'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CommentSection from './components/CommentSection/CommentSection'
import Footer from './components/Footer'

const App = () => {
  //Projects to change name to comments is JSON as well
  const [showNavbar, setShowNavbar] = useState(false)
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getComments = async () => {
      const CommentsFromServer = await fetchComments();
      setComments(CommentsFromServer)
    }

    getComments()
  }, [])

  const fetchComments = async () => {
    const res = await fetch('http://localhost:5000/Comments')
    const data = await res.json()
    console.log(data)
    return data
  }
  const addComment = async (comment) => {
    const res = await fetch(`http://localhost:5000/Comments`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    const data = await res.json()

    setComments([...comments, data])
  }

  const editComment = async (comment) => {
    const res = await fetch(`http://localhost:5000/Comments/${comment.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    const data = await res.json()
    const newComments = comments.map((c) => {
      if (c.id === comment.id) {
        c = comment
      }
      return c
    })
    setComments(newComments)
  }

  const deleteComment = async (id) => {
    await fetch(`http://localhost:5000/Comments/${id}`, { method: 'DELETE' })
    console.log('hey id: ', id)
    setComments(comments.filter((comment) => comment.id !== id))
  }

  return (
    <>
      <Header onClick={() => setShowNavbar(!showNavbar)} showNavbar={showNavbar} />
      <Showcase />
      <About />
      <Projects />
      <Contact />
      <CommentSection showComments={showComments} addComment={addComment} editComment={editComment} deleteComment={deleteComment} commentsToggler={() => setShowComments(!showComments)} comments={comments} />
      <Footer />
    </>
  )
}

export default App

// const [projects, setProjects] = useState([])

// useEffect(() => {
//   const getProjects = async () => {
//     const ProjectsFromServer = await fetchProjects();
//     setProjects(ProjectsFromServer)
//   }

//   getProjects()
// }, [])

// const fetchProjects = async () => {
//   const res = await fetch('http://localhost:5000/Projects')
//   const data = await res.json()
//   console.log(data)
//   return data
// }
// const addProject = async (project) => {
//   const res = await fetch(`http://localhost:5000/Projects/projects`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(project)
//   })
//   const data = await res.json()

//   setProjects([...projects, data])
// }
// const deleteProject = async (id) => {
//   await fetch(`http://localhost:5000/Projects/${id}`, { method: 'DELETE', })
// }