import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getData } from "./utils/utils"

const ProductSmall = ({ id }) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        getData(`Products`, setProduct, id)
    }, [id])

    return (
        <div className="product-small-container container-100 flex-column flex-center">
            <Link to={"/products/" + id} className="class-link">
                <h4>{product.name}</h4>
                <img className="product-small-img" src={product.img} alt={product.name}></img>
            </Link>
        </div>
    )
}
export default ProductSmall