import Product from "./Product"

const Products = ({ products }) => {
    return (
        <div className="products-container container-100">
            <div className="container flex-row flex-evenly flex-a-stretch">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                )
                )}
            </div>
        </div>
    )
}
export default Products