import Image from "./Image"
import { useState, useEffect } from "react"
import { getData } from "../utils/utils"

const Showcase = ({ showShowcase, hideShowcase }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getData('ShowcaseImages', setImages)
    }, [])

    const imagesInactiveNumber = (images.length - 2 >= 1 ? images.length - 2 : 1)
    const initialImgsState = ['showcase-img showcase-img-active', ...Array(imagesInactiveNumber).fill('showcase-img showcase-img-inactive'), 'showcase-img showcase-img-deactivated']
    const [imgsState, setImgsState] = useState(initialImgsState)

    const resetImgsState = () => {
        console.log('bReset', imgsState)
        setImgsState(initialImgsState)
        console.log('aRestet', imgsState)
    }

    const updateImgsState = (state) => {
        console.log('inState')
        let newImgState = state
        newImgState.push(newImgState[0])
        newImgState.splice(0, 1)
        return newImgState
    }

    useEffect(() => {
        if (images[1]) {
            resetImgsState()
            const carousel = setInterval(() => {
                setImgsState(prev => [...updateImgsState(prev)])
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
                        <a href="#header" className="showcase-button" onClick={hideShowcase}><i>learn more</i></a>
                    </div>
                </div>
            </div>
            {/* {(console.log(getComputedStyle(document.body.getElementbyId('showcase')).width))} */}
        </>
    )
}

export default Showcase