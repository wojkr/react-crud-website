import Image from "./Image"
import { useState, useEffect } from "react"

const Showcase = ({ images }) => {
    const imagesInactiveNumber = (images.length - 2 >= 1 ? images.length - 2 : 1)
    const initialImgsState = ['showcase-img showcase-img-active', ...Array(imagesInactiveNumber).fill('showcase-img showcase-img-inactive'), 'showcase-img showcase-img-deactivated']
    const [imgsState, setImgsState] = useState(initialImgsState)

    const resetImgsState = () => {
        setImgsState(initialImgsState)
    }

    const updateImgsState = (state) => {
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
        <div id="showcase" className="showcase">
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
                <div className="flex-column flex-center">
                    <h1 className="showcase-title">#HUG<span className="showcase-title-small">A</span>MUG</h1>
                    <a href="#about" className="showcase-button"><i>learn more</i></a>
                </div>
            </div>
        </div >
    )
}

export default Showcase