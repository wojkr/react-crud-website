import { useState, useEffect } from 'react'

import Header from './components/Header'
import Showcase from './components/Showcase'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CommentSection from './components/CommentSection'
import Footer from './components/Footer'

const App = () => {
  //Projects to change name to comments is JSON as well
  const [showNavbar, setShowNavbar] = useState(false)
  const [projects, setProjects] = useState([])
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Gabe',
      text: 'Good stuff!',
      rating: 5,
    },
    {
      id: 2,
      user: 'Andrew',
      text: 'Could be better',
      rating: 3,
    },
    {
      id: 3,
      user: 'TheFussyLady01',
      text: 'Disgracefull',
      rating: 0,
    },
  ])


  useEffect(() => {
    const getProjects = async () => {
      const ProjectsFromServer = await fetchProjects();
      setProjects(ProjectsFromServer)
    }

    getProjects()
  }, [])

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:5000/Projects')
    const data = await res.json()
    console.log(data)
    return data
  }
  const addProject = async (project) => {
    const res = await fetch(`http://localhost:5000/Projects/projects`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    const data = await res.json()

    setProjects([...projects, data])
  }
  const deleteProject = async (id) => {
    await fetch(`http://localhost:5000/Projects/${id}`, { method: 'DELETE', })
  }

  const onClick = () => {
    setShowNavbar(!showNavbar)
  }


  const commentsToggler = () => {
    setShowComments(!showComments)
  }
  function onAddComment(comment) {
    const id = Math.floor(Math.random() * 10000) + 1
    comment.id = id
    setComments([...comments, comment])
  }

  return (
    <>
      <Header onClick={onClick} showNavbar={showNavbar} />
      <Showcase />
      <AboutMe />
      <Projects />
      <Contact />
      <CommentSection showComments={showComments} onAddComment={onAddComment} commentsToggler={commentsToggler} comments={comments} />
      <Footer />
    </>
  )
}

export default App