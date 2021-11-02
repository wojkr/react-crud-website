import { useLayoutEffect, useRef } from "react"

const Showcase = ({ images }) => {
    let i = useRef(0)
    const showcase = document.getElementById('showcase')
    useLayoutEffect(() => {
        const carousel = setInterval(() => {
            showcase.style.backgroundImage = `linear-gradient(#fff7,#fffa,#fff7),url('${images[i.current].url}')`
            i.current++
            if (i.current >= images.length) {
                i.current = 0
            }
        }, 5000);
        return () => clearInterval(carousel)
    })

    return (
        <div id="showcase" className="showcase">
            <div className="container">
                <div className="flex-column flex-center">
                    <h1 className="showcase-title">#HUG<span className="showcase-title-small">THE</span>MUG</h1>
                    <button className="showcase-button">learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Showcase