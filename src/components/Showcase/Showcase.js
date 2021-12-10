import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import Image from "./Image"
import { getData } from "../utils/utils"

const Showcase = ({ showShowcase, setShowShowcase }) => {

    const [images, setImages] = useState([])
    const [counter, setCounter] = useState(0)

    const hideShowcase = () => {
        setShowShowcase(!showShowcase)
    }

    useEffect(() => {
        if (!showShowcase) setShowShowcase(true)
        console.log(`in showcase's useEffect: `, showShowcase)
        getData('ShowcaseImages', setImages)
    }, [showShowcase])

    const imagesInactiveNumber = (images.length - 2 >= 1 ? images.length - 2 : 1)
    const initialImgsState = ['showcase-img showcase-img-active', ...Array(imagesInactiveNumber).fill('showcase-img showcase-img-inactive'), 'showcase-img showcase-img-deactivated']
    const [imgsState, setImgsState] = useState(initialImgsState)

    const resetImgsState = () => {
        console.log('Reset imgsState')
        setImgsState(initialImgsState)
        // console.log('aRestet', imgsState)
    }
    const updateImgsState = (state) => {
        let newImgState = state
        // console.log(newImgState)
        newImgState.push(newImgState[0])//these two works when 3pics
        newImgState.splice(0, 1)//these two works when 3pics
        // newImgState.unshift(newImgState.splice(newImgState.length-1,1)[0])
        // console.log(newImgState)
        return newImgState
    }
    const getNextImgsState = useCallback((prev) => {
        // return updateImgsState(prev)
        return [...updateImgsState(prev)]
    }, [counter])

    useEffect(() => {
        console.log(images)
        if (images) {
            resetImgsState()
            const carousel = setInterval(() => {
                console.log(counter)
                setCounter(prev => prev + 1)
                setImgsState(prev => getNextImgsState(prev))
                // setImgsState(prev => [...updateImgsState(prev)] )
            }, 4000)
            return () => clearInterval(carousel)
        }
    }, [images])

    return (
        <>
            <div id="showcase" className={showShowcase ? "showcase" : "showcase h-0"}>
                <div className="showcase-img-container">
                    {images.length > 1 && images.map(
                        image =>
                            <Image
                                key={image.id}
                                image={image}
                                imgState={imgsState[image.id]} />
                    )}
                </div>
                <div className="container" >
                    <div className="flex-column flex-center h-100">
                        <h1 className="showcase-title">#HUG<span className="showcase-title-small">A</span>MUG</h1>
                        <Link to="/about" className="class-link showcase-button" onClick={hideShowcase}><i>learn more</i></Link>
                    </div>
                </div>
            </div>
            {/* {(console.log(getComputedStyle(document.body.getElementbyId('showcase')).width))} */}
        </>
    )
}

export default Showcase