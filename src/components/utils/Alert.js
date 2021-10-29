const Alert = (message, option1, option1func, option2, option2func) => {

    return (
        <>
            <h1>{message}</h1>
            <div>
                <button onClick={option1func}>{option1}</button>
                <button onClick={option2func}>{option2}</button>
            </div>
        </>
    )
}
export default Alert