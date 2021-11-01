import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Showcase from './components/Showcase'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CommentSection from './components/CommentSection/CommentSection'
import Footer from './components/Footer'
import Alert from './components/utils/Alert'

const App = () => {
  //Projects to change name to comments is JSON as well
  const [showNavbar, setShowNavbar] = useState(false)
  const [commentsNumber, setCommentsNumber] = useState(0)
  const [comments, setComments] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState(['', '', () => { }, '', () => { }])

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

      setComments([data, ...comments])
    },
    edit: async (comment) => {
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
      const deleteFunc = async (id) => {
        await fetch(`http://localhost:5000/Comments/${id}`, { method: 'DELETE' })
        setComments(comments.filter((comment) => comment.id !== id))
      }
      ALERT(
        "are you sure you want to delete comment?",
        'Yes',
        [deleteFunc, id],
        'no',
        () => { }
      )
    },
    showMore: () => {
      setCommentsNumber(commentsNumber + 10)
    },
    showLess: () => {
      setCommentsNumber(commentsNumber - 10)
    },
    sort: {
      ratings: {
        best: () => {
          const sorted = comments.slice()
          setComments('')
          setComments(sorted.sort((a, b) => b.rating - a.rating))
        },
        worst: () => {
          const sorted = comments.slice()
          setComments('')
          setComments(sorted.sort((a, b) => a.rating - b.rating))
        }
      },
      votes: {
        best: () => {
          const sorted = comments.slice()
          setComments('')
          setComments(sorted.sort((a, b) => b.votes - a.votes))
        },
        worst: () => {
          const sorted = comments.slice()
          setComments('')
          setComments(sorted.sort((a, b) => a.votes - b.votes))
        }
      },
      date: {
        newest: () => {
          const sorted = comments.slice()
          setComments('')
          setComments(sorted.sort((a, b) => b.date - a.date))
        },
        oldest: () => {
          const sorted = comments.slice()
          setComments('')
          setComments(sorted.sort((a, b) => a.date - b.date))
        }
      }
    }
  }
  const ALERT = (message, option1, option1func, option2, option2func) => {
    setShowAlert(true);
    setAlertInfo([
      message,
      option1,
      () => {
        if (option1func[1]) {
          option1func[0](option1func[1])
        } else {
          option1func[0]()
        }
        setShowAlert(false)
      },
      option2,
      () => {
        if (option2func.length > 1) {
          option2func[0]()
        } else {
          option2func()
        }
        setShowAlert(false)
      }
    ])
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
      {showAlert && <Alert alertInfo={alertInfo} />}
      <Footer />
    </>
  )
}

export default App