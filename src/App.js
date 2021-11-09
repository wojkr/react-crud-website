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

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [offset, setOffset] = useState(0)
  const [userId, setUserId] = useState('')
  const [user, setUser] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useState(() => {
    getData(`Users/${userId}`, setUser)
  }, [userId])
  console.log(userId)
  const [showShowcase, setShowShowcase] = useState(true)
  const [showLogInForm, setShowLogInForm] = useState(true)
  const [showRegisterForm, setShowRegisterForm] = useState(true)

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
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setShowLogInForm={setShowLogInForm}
        setShowRegisterForm={setShowRegisterForm}
        user={user}
      />
      <Routes>
        <Route path="/" element={
          <Showcase
            showShowcase={showShowcase}
            hideShowcase={() => setShowShowcase(!showShowcase)}
          />
        } />
        <Route exact path="/user/:id" element={
          <User user={user} />
        } />
        <Route exact path="/logIn" element={
          <LogInForm
            setIsLoggedIn={setIsLoggedIn}
            setShowLogInForm={setShowLogInForm}
            setShowRegisterForm={setShowRegisterForm}
            setUser={setUserId}
          />
        } />
        <Route exact path="/register" element={
          <RegisterForm
            setShowLogInForm={setShowLogInForm}
            setShowRegisterForm={setShowRegisterForm}
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
          <CommentSection isLoggedIn={isLoggedIn} setShowLogInForm={setShowLogInForm} />
        } />
        <Route exact path="/join" element={
          <Join isLoggedIn={isLoggedIn} setShowRegisterForm={setShowRegisterForm} />
        } />

        <Route exact path="/groups" element={
          <Groups />
        } />
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App