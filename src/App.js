import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Userfront from "@userfront/react";

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
// import { getData } from './components/utils/utils'
import Events from './components/Events'
// import UserfrontKEY from "./Userfront"
require('dotenv').config()

const App = () => {
  console.log(process.env)
  // console.log(process.env.REACT_APP_KEY_USERFRONT_INIT)


  Userfront.init(process.env.REACT_APP_KEY_USERFRONT_INIT)
  // Userfront.init(UserfrontKEY.INIT) toCleanItUp18nov! i mean TODAY!
  // const getUserId = () => {
  //   let sessionUserId = window.sessionStorage.getItem('userId')
  //   console.log('render: ', sessionUserId)
  //   return sessionUserId ? sessionUserId : null
  // }
  const [offset, setOffset] = useState(0)
  // const [userId, setUserId] = useState(getUserId())
  // const [isLoggedIn, setIsLoggedIn] = useState(userId === null ? false : true)
  const [isLoggedIn, setIsLoggedIn] = useState(Userfront.accessToken() && true)

  const [showNavbar, setShowNavbar] = useState(false)
  const [showShowcase, setShowShowcase] = useState(true)



  const PasswordResetForm = Userfront.build({
    toolId: "brnnkk"
  })


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
      />
      <Routes>
        <Route path="/" element={
          <Showcase
            showShowcase={showShowcase}
            hideShowcase={() => setShowShowcase(!showShowcase)}
          />
        } />
        <Route exact path="/User/:id" element={
          <User />
        } />
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
            <Footer />
          </>
        } />
        <Route exact path="/Comments" element={
          <CommentSection isLoggedIn={isLoggedIn} />
        } />
        <Route exact path="/Join" element={
          <Join isLoggedIn={isLoggedIn} />
        } />

        {/* <Route exact path="/groups" element={
          <Groups />
        } /> */}
        <Route exact path="/Groups" element={<Groups />}>
          <Route path=":id" element={<Groups />} />
        </Route>
        <Route exact path="/Events" element={<Events />}>
          <Route path=":id" element={<Events />} />
        </Route>
        <Route path="/Products" element={<Products />}>
          <Route path=":id" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App