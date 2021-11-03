import Nutritions from "./Nutritions"
const Product = ({ product }) => {
    return (
        <div className="product-container flex-column ">
            <img className="product-img" src={product.img} alt={'foto of ' + product.name}></img>
            <div>

                <h2>{product.name}</h2>
                <h3>Cost: £{product.price}</h3>
                <p>{product.description}</p>
                <p>Infos: </p>
                <ul>
                    {product.info && product.info.map((info) => (
                        <li key={info}>{info}</li>
                    ))}
                </ul>
                <p>Alergens: </p>
                <ul>
                    {product.alergens && product.alergens.map((alergen) => (
                        <li key={alergen}>{alergen}</li>
                    ))}
                </ul>
                <p>serving size: {product.serving}</p>
                <h3>Nutrition:</h3>
                <Nutritions nutritions={product.nutritions} serving={product.serving} />
            </div>
        </div>
    )
}
export default Product