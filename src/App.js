import { useState, useEffect, useCallback } from 'react'

import Header from './components/Header/Header'
import Showcase from './components/Showcase/Showcase'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CommentSection from './components/CommentSection/CommentSection'
import Footer from './components/Footer'
import Products from './components/Products/Products'
import { getData } from './components/utils/utils'

const App = () => {
  //Projects to change name to comments is JSON as well
  const [showNavbar, setShowNavbar] = useState(false)
  const [products, setProducts] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  useEffect(() => {
    getData('Products', setProducts)
  }, [])


  return (
    <>
      <Header
        onClick={() => { setShowNavbar(!showNavbar) }}
        showNavbar={showNavbar}
        offset={offset}
      />
      <Showcase />
      <About />
      <Products products={products} />
      <Projects />
      <Contact />
      <CommentSection />
      <Footer />
    </>
  )
}

export default App