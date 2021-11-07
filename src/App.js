import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import LogInForm from './components/LogInForm'
import RegisterForm from './components/RegisterForm'
import User from './components/User'
import Groups from './components/Groups'
import Showcase from './components/Showcase/Showcase'
import About from './components/About'
import Products from './components/Products/Products'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CommentSection from './components/CommentSection/CommentSection'
import Footer from './components/Footer'
import { getData } from './components/utils/utils'

const App = () => {
  //Projects to change name to comments is JSON as well

  const [showNavbar, setShowNavbar] = useState(false)
  const [products, setProducts] = useState([])
  const [offset, setOffset] = useState(0)
  const [showShowcase, setShowShowcase] = useState(true)
  const [user, setUser] = useState('')

  useState(() => {
    getData('Users/123', setUser)
  }, [])

  const [showLogInForm, setShowLogInForm] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  useEffect(() => {
    getData('Products', setProducts)
  }, [])

  const navClicked = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className={showShowcase ? "hidden" : ""}>
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
      {showRegisterForm && !showLogInForm &&
        <RegisterForm
          setShowLogInForm={setShowLogInForm}
          setShowRegisterForm={setShowRegisterForm}
        />}
      {showLogInForm && !showRegisterForm &&
        <LogInForm
          setIsLoggedIn={setIsLoggedIn}
          setShowLogInForm={setShowLogInForm}
          setShowRegisterForm={setShowRegisterForm}
          setUser={setUser}
        />}
      {!showLogInForm && !showRegisterForm &&
        <Showcase
          showShowcase={showShowcase}
          hideShowcase={() => setShowShowcase(!showShowcase)}
        />}
      {!showShowcase && !showLogInForm && !showRegisterForm && <>
        <About />
        <User user={user} />
        <Products products={products} />
        <Projects />
        <Groups />
        <Contact />
        <CommentSection isLoggedIn={isLoggedIn} setShowLogInForm={setShowLogInForm} />
        <Footer />
      </>
      }
    </div>
  )
}

export default App