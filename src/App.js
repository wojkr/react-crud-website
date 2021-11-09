import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import LogInForm from './components/LogInForm'
import RegisterForm from './components/RegisterForm'
import User from './components/User'
import Groups from './components/Groups/Groups'
import Join from './components/Join'
import Showcase from './components/Showcase/Showcase'
import About from './components/About/About'
import Products from './components/Products/Products'
import Projects from './components/About/Projects'
import Contact from './components/About/Contact'
import CommentSection from './components/CommentSection/CommentSection'
import Footer from './components/Footer'
import { getData } from './components/utils/utils'
import Events from './components/Events'

const App = () => {
  const getUserId = () => {
    let sessionUserId = window.sessionStorage.getItem('userId')
    console.log('render: ', sessionUserId)
    return sessionUserId ? sessionUserId : null
  }
  const [offset, setOffset] = useState(0)
  const [userId, setUserId] = useState(getUserId())
  const [isLoggedIn, setIsLoggedIn] = useState(userId === null ? false : true)

  const [showNavbar, setShowNavbar] = useState(false)
  const [showShowcase, setShowShowcase] = useState(true)


  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  const navClicked = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <Router>
      <Header
        onClick={navClicked}
        setShowShowcase={setShowShowcase}
        showNavbar={showNavbar}
        offset={offset}
      />
      <Routes>
        <Route path="/" element={
          <Showcase
            showShowcase={showShowcase}
            hideShowcase={() => setShowShowcase(!showShowcase)}
          />
        } />
        <Route exact path="/user/:id" element={
          <User />
        } />
        <Route exact path="/logIn" element={
          <LogInForm
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        } />
        <Route exact path="/register" element={
          <RegisterForm
          />
        } />
        <Route exact path="/about" element={
          <>
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        <Route exact path="/comments" element={
          <CommentSection isLoggedIn={isLoggedIn} />
        } />
        <Route exact path="/join" element={
          <Join isLoggedIn={isLoggedIn} />
        } />

        <Route exact path="/groups" element={
          <Groups />
        } />
        <Route exact path="/Events" element={<Events />}>
          <Route path=":id" element={<Events />} />
        </Route>
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App