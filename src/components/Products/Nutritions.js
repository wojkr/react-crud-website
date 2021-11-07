const Nutritions = ({ nutritions, serving }) => {
    const perServing = serving / 100

    const toServing = (num) => {
        num *= 10 * perServing
        return Math.floor(num) / 10 + 'g'
    }
    const calckcal = (fat, carb, protein) => {
        return Math.floor((9 * fat + 4 * carb + 4 * protein) + 0.5)
    }
    const kcal100g = calckcal(nutritions.fat, nutritions.carbohydrate, nutritions.protein)

    return (
        <>
            <div className="flex-row">
                <div className="flex-column flex-a-start">
                    <strong>Typical Values</strong>
                    <br />
                    <p>Energy</p>
                    <br />
                    <p>Fat</p>
                    <p>of which saturated</p>
                    <p>Carbohydrate</p>
                    <p>of which sugars</p>
                    <p>Protein</p>
                    <p>Salt</p>
                </div>
                <div className="flex-column flex-a-end">
                    <strong>per 100g</strong>
                    <br />
                    <p>{Math.floor((kcal100g * 4.15) + 0.5)}kJ</p>
                    <p>{kcal100g}kcal</p>
                    <p>{nutritions.fat}g</p>
                    <p>{nutritions.saturated}g</p>
                    <p>{nutritions.carbohydrate}g</p>
                    <p>{nutritions.sugar}g</p>
                    <p>{nutritions.protein}g</p>
                    <p>{nutritions.salt}g</p>
                </div>
                <div className="flex-column flex-a-end">
                    <strong>per {serving}g</strong>
                    <strong>serving</strong>
                    <p>{Math.floor(kcal100g * 4.15 * perServing)}kJ</p>
                    <p>{Math.floor((kcal100g * perServing) + 0.5)}kcal</p>
                    <p>{toServing(nutritions.fat)}</p>
                    <p>{toServing(nutritions.saturated)}</p>
                    <p>{toServing(nutritions.carbohydrate)}</p>
                    <p>{toServing(nutritions.sugar)}</p>
                    <p>{toServing(nutritions.protein)}</p>
                    <p>{toServing(nutritions.salt)}</p>
                </div>
            </div>

            {/* 
            <div className="flex-row">
                <strong>Typical Values</strong>
                <strong>per 100g</strong>
                <strong>per {serving}g  </strong>
            </div>

            <div className="flex-row">
                <p>Energy</p>
                <div>
                    <p>{Math.floor(nutritions.energykcal * 4.15)}kJ</p>
                    <p>{nutritions.energykcal}kcal</p>
                </div>
                <div>
                    <p>{Math.floor(nutritions.energykcal * 4.15 * perServing)}kJ</p>
                    <p>{nutritions.energykcal * perServing}kcal</p>
                </div>

            </div>
            <div className="flex-row">
            </div>
            <div className="flex-row">
            </div> */}

        </>
    )
}
export default Nutritions
