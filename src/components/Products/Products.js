import Product from "./Product"

const Products = ({ products }) => {
    return (
        <div id="products-container" className="container-100">
            <div className="container">
                <h1>Best quality, made of the best coffee from around the world. </h1>
                <div className="flex-row flex-evenly flex-a-stretch">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}
export default Products