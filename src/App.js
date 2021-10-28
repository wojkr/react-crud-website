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
  const [commentsNumber, setCommentsNumber] = useState(0)
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
    return data
  }
  const COMMENTS = {
    add: async (comment) => {
      const res = await fetch(`http://localhost:5000/Comments`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(comment)
      })
      const data = await res.json()

      setComments([...comments, data])
    },
    edit: async (comment) => {
      // const res =
      await fetch(`http://localhost:5000/Comments/${comment.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(comment)
      })
      const newComments = comments.map((c) => {
        if (c.id === comment.id) {
          c = comment
        }
        return c
      })
      setComments(newComments)
    },
    delete: async (id) => {
      await fetch(`http://localhost:5000/Comments/${id}`, { method: 'DELETE' })
      setComments(comments.filter((comment) => comment.id !== id))
    },
    showMore: () => {
      setCommentsNumber(commentsNumber + 10)
    },
    showLess: () => {
      setCommentsNumber(commentsNumber - 10)
    }
  }

  return (
    <>
      <Header
        onClick={() => { setShowNavbar(!showNavbar) }}
        showNavbar={showNavbar}
      />
      <Showcase />
      <About />
      <Projects />
      <Contact />
      <CommentSection
        COMMENTS={COMMENTS}
        comments={comments}
        commentsNumber={commentsNumber}
      />
      <Footer />
    </>
  )
}

export default App