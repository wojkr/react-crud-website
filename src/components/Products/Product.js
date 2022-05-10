import { useState } from "react"
import { useParams, Link } from 'react-router-dom'
import Nutritions from "./Nutritions"
import GoBack from "../GoBack"

const Product = ({ product, details, isLoggedIn }) => {
    const [showDetails, setShowDetails] = useState(details)
    const [fullPageMode, setFullPageMode] = useState(false)
    const { id } = useParams()
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

    return (<>
        {product.name ?
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
                            {isLoggedIn &&
                                <div className="flex-row flex-center">
                                    <button className="button-react-icon">
                                        <h1>
                                            add to favorites
                                        </h1>
                                    </button>
                                </div>
                            }
                            {product.info &&
                                <ul className="border-light list-circle">
                                    {product.info && product.info.map((info) => (
                                        <li key={info}>{info}</li>
                                    ))}
                                </ul>}
                            <div className="w-100 text-center">
                                {!fullPageMode && <div>
                                    <button
                                        className="button-react-icon button-block"
                                        onClick={() => setShowDetails(!showDetails)}
                                    >
                                        {showDetails ? 'Hide Alergens' : 'Show Alergens'}
                                    </button>
                                    <Link to={"/Products/" + product.id} className="class-link">
                                        <button className="button-react-icon button-block">
                                            Show Full Info
                                        </button>
                                    </Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className={fullPageMode ? " w-50" : "w-100"}>
                        {showDetails && <>
                            <p className={!fullPageMode ? "border-light" : undefined}>Alergens: </p>
                            <ul className="list-circle">
                                {product.alergens && product.alergens.map((alergen) => (
                                    <li key={alergen}>{alergen}</li>
                                ))}
                            </ul>
                            {fullPageMode && <>
                                <h3 className="border-light">Nutrition: </h3>
                                <p>serving size: {product.serving}g</p>
                                {product.nutritions && product.serving && <Nutritions nutritions={product.nutritions} serving={product.serving} />}
                                <div className="w-100 text-center">
                                    <a
                                        className="class-link button-react-icon button-block mt-05rem"
                                        href="/products"
                                    >
                                        Go Back to All
                                    </a>
                                </div>
                            </>}
                        </>}
                    </div>
                </div>
            </div>
            :
            <div className="text-center pt-10vh">
                <h2>Product does not exist</h2>
                <GoBack />
            </div>
        }
    </>)
}
export default Product