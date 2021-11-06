import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Showcase from './components/Showcase/Showcase'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CommentSection from './components/CommentSection/CommentSection'
import Footer from './components/Footer'
import Products from './components/Products/Products'
import LogInForm from './components/LogInForm'
import { getData } from './components/utils/utils'

const App = () => {
  //Projects to change name to comments is JSON as well
  const [showNavbar, setShowNavbar] = useState(false)
  const [products, setProducts] = useState([])
  const [offset, setOffset] = useState(0)
  const [showShowcase, setShowShowcase] = useState(true)

  const [showLogInForm, setShowLogInForm] = useState(false)
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

      />
      {showLogInForm && <LogInForm setIsLoggedIn={setIsLoggedIn} setShowLogInForm={setShowLogInForm} />}
      {!showLogInForm && <Showcase showShowcase={showShowcase} hideShowcase={() => setShowShowcase(!showShowcase)} />}
      {!showShowcase && !showLogInForm && <>
        <About />
        <Products products={products} />
        <Projects />
        <Contact />
        <CommentSection isLoggedIn={isLoggedIn} setShowLogInForm={setShowLogInForm} />
        <Footer />
      </>
      }
    </div>
  )
}

export default App