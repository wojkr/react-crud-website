import { useState } from "react"
import Nutritions from "./Nutritions"
import { useParams } from 'react-router-dom'
const Product = ({ product, details }) => {
    const [showDetails, setShowDetails] = useState(details)
    const [fullPageMode, setFullPageMode] = useState(false)
    const { id } = useParams()
    console.log(id === product.id)
    if (id === `${product.id}`) {
        if (fullPageMode !== true) {
            setShowDetails(true)
            setFullPageMode(true)
        }
    } else {
        if (fullPageMode !== false) {
            setFullPageMode(false)
        }
    }

    return (
        <div id={"product-" + product.id} className={!fullPageMode ? "product-container" : "product-container w-80"} >
            <div className={fullPageMode ? " flex-row flex-a-start" : " flex-column container-100"}>
                <div className={"flex-column flex-center" + (fullPageMode ? " w-40" : "w-100")}>
                    <a href={'/products/' + product.id}>
                        <img className="product-img" src={product.img} alt={'foto of ' + product.name}></img>
                    </a>
                    <div className="w-100">
                        <div className="flex-row flex-space-between flex-a-baseline">
                            <h2>{product.name}</h2>
                            <h3>£{product.price}</h3>
                        </div>
                        <p>{product.description}</p>
                        {product.info &&
                            <ul className="border-light list-circle">
                                {product.info && product.info.map((info) => (
                                    <li key={info}>{info}</li>
                                ))}
                            </ul>}
                        <div className="w-100 text-center">
                            {!fullPageMode && <button
                                className="button-react-icon button-block react-icon"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                {showDetails ? 'Show less' : 'Show more'}
                            </button>}
                        </div>
                    </div>
                </div>
                <div className={fullPageMode ? " w-50" : "w-100"}>
                    {showDetails && <>
                        <p className={!fullPageMode && "border-light"}>Alergens: </p>
                        <ul className="list-circle">
                            {product.alergens && product.alergens.map((alergen) => (
                                <li key={alergen}>{alergen}</li>
                            ))}
                        </ul>
                        {!fullPageMode && <p>for more info click on image</p>}
                        {fullPageMode && <>
                            <h3 className="border-light">Nutrition: </h3>
                            <p>serving size: {product.serving}g</p>
                            {product.nutritions && product.serving && <Nutritions nutritions={product.nutritions} serving={product.serving} />}
                            <div className="w-100 text-center">
                                <a
                                    className="class-link button-react-icon button-block react-icon mt-05rem"
                                    href="/products"
                                >
                                    Go Back to All
                                </a>
                            </div>
                        </>}
                    </>}
                </div>
            </div>
        </div >
    )
}
export default Product