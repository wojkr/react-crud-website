import { useEffect, useState } from "react"
import { getData } from "./utils/utils"

const ProductSmall = ({ id }) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        getData(`Products`, setProduct, id)
    }, [id])

    return (
        <div className="product-small-container container-100 flex-column flex-center">
            <h4>{product.name}</h4>
            <img className="product-small-img" src={product.img} alt={product.name}></img>
        </div>
    )
}
export default ProductSmall