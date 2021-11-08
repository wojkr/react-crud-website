import Nutritions from "./Nutritions"
const Product = ({ product }) => {
    return (
        <div id={"product-" + product.id} className="product-container" >
            <div className="container-100 flex-column">
                <img className="product-img" src={product.img} alt={'foto of ' + product.name}></img>
                <div className="w-100">
                    <div className="flex-row flex-space-between flex-a-baseline">
                        <h2>{product.name}</h2>
                        <h3>£{product.price}</h3>
                    </div>
                    <p>{product.description}</p>
                    {product.info &&
                        <ul className="border-light list-circle">
                            {product.info && product.info.map((info) => (
                                <li key={info} >{info}</li>
                            ))}
                        </ul>}
                    <p className="border-light">Alergens: </p>
                    <ul className="list-circle">
                        {product.alergens && product.alergens.map((alergen) => (
                            <li key={alergen}>{alergen}</li>
                        ))}
                    </ul>
                    <h3 className="border-light">Nutrition:</h3>
                    <p>serving size: {product.serving}g</p>
                    <Nutritions nutritions={product.nutritions} serving={product.serving} />
                </div>
            </div>
        </div>
    )
}
export default Product