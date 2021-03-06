import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from "./Product"
import CommentSection from '../CommentSection/CommentSection'

import { getData } from '../utils/utils'
const Products = ({ isLoggedIn }) => {

    const [products, setProducts] = useState([])
    let { id } = useParams()
    if (typeof id === 'undefined' || id === '/') {
        id = ''
    } else {
        id = id
    }

    useEffect(() => {
        getData(`Products`, setProducts, id)
    }, [id])

    return (
        <div id="products-container" className="container-100">
            <div className="container">
                {!id && <h1>Best quality, made of the best coffee from around the world.</h1>}
                <div className="flex-row flex-center flex-a-stretch flex-wrap">
                    {products.length > 1 ?
                        products.map(product => (
                            <Product key={product.id} product={product} details={false} isLoggedIn={isLoggedIn} />))
                        :
                        <Product product={products} details={true} isLoggedIn={isLoggedIn} />
                    }
                </div>
            </div>
            {products && id && <CommentSection isLoggedIn={isLoggedIn} dataName={`CommentsProduct${id}`} />}
        </div>
    )
}
export default Products