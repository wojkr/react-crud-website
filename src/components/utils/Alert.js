const Alert = ({ alertInfo }) => {
    const [message, option1, option1func, option2, option2func] = alertInfo
    return (
        <div
            className="alert flex-column flex-center flex-a-center"  >
            <h1>{message}</h1>
            <div>
                <button onClick={option1func}>{option1}</button>
                <button onClick={option2func}>{option2}</button>
            </div>
        </div >
    )
}
export default Alert