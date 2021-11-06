const Alert = ({ alertInfo }) => {
    const [message, option1, option1func, option2, option2func] = alertInfo
    return (
        <div id="alert" className="flex-column flex-center flex-a-center">
            {/* <div className="container flex-column flex-center flex-a-center"> */}
            <div id="alert-title">
                <h1>{message}</h1>
                <div className="text-a-center">
                    <button className="button-react-icon" onClick={option1func}><h2>{option1}</h2></button>
                    <button className="button-react-icon" onClick={option2func}><h2>{option2}</h2></button>
                </div>
            </div>
            {/* </div> */}
        </div >
    )
}
export default Alert