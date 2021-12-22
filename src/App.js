import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useParams } from "react-router-dom"

import Userfront from "@userfront/react"

import Header from './components/Header/Header'
import LogInForm from './components/LogInForm'
import RegisterForm from './components/RegisterForm'
import User from './components/User'
import UserEdit from './components/UserEdit'
import Groups from './components/Groups/Groups'
import Group from './components/Groups/Group'
import Join from './components/Join'
import Showcase from './components/Showcase/Showcase'
import About from './components/About/About'
import Products from './components/Products/Products'
import Projects from './components/About/Projects'
import Contact from './components/About/Contact'
import CommentSection from './components/CommentSection/CommentSection'
import Footer from './components/Footer'
import Events from './components/Events/Events'
import Event from './components/Events/Event'
import AddEvent from './components/AddEvent'
import PageNotFound from './components/PageNotFound'

require('dotenv').config()

const App = () => {
  // console.log(process.env.REACT_APP_KEY_USERFRONT_INIT)

  const { id } = useParams()
  Userfront.init(process.env.REACT_APP_KEY_USERFRONT_INIT)
  const [offset, setOffset] = useState(0)
  // const [isLoggedIn, setIsLoggedIn] = useState(Userfront.accessToken() && true)
  // const [isLoggedIn, setIsLoggedIn] = useState(Userfront.accessToken() ? true : false)
  const [isLoggedIn, setIsLoggedIn] = useState(Userfront.user ? Userfront.user.userId : false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [showShowcase, setShowShowcase] = useState(false)

  const PasswordResetForm = Userfront.build({
    toolId: "brnnkk"
  })
  useEffect(() => {
    console.log(process.env)
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
      />
      <Routes>
        <Route path="/" element={
          <Showcase
            showShowcase={showShowcase}
            setShowShowcase={setShowShowcase}
          />
        } />
        {/* <Route exact path="/User/:id" element={
          <User />
        } /> */}
        <Route path="/user/:id" element={<User />} />
        <Route path="/user" element={< User />} />
        <Route path="/user/edit/:id" element={<UserEdit />} />
        <Route path="/user/edit" element={<UserEdit />} />

        <Route exact path="/Login" element={
          <LogInForm
            // isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          // <LoginForm />
        } />
        <Route exact path="/Register" element={
          <RegisterForm
          />
        } />
        {/* <Route exact path="/signup" element={
          <SignupForm
          />
        } /> */}
        <Route exact path="/reset" element={
          <PasswordResetForm
          />
        } />
        <Route exact path="/About" element={
          <>
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/Comments" element={
          <CommentSection isLoggedIn={isLoggedIn} dataName="Comments" />
        } />
        <Route path="/Join" element={
          <Join isLoggedIn={isLoggedIn} />
        } />
        {/* <Route exact path="/groups" element={
          <Groups />
        } /> */}
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Group/:id" element={<Group isLoggedIn={isLoggedIn} />} />
        <Route path="/Events" element={<Events />}>
          <Route path=":id" element={<Events />} />
        </Route>
        <Route path="/Event" element={<Event />}>
          <Route path=":id" element={<Event />} />
        </Route>
        <Route path="/AddEvent" element={<AddEvent />} />
        <Route path="/Products" element={<Products />}>
          <Route path=":id" element={<Products isLoggedIn={isLoggedIn} />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {!showShowcase && <Footer />}
    </Router>
  )
}
export default App