import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { FiSend, FiFeather } from "react-icons/fi"
import Userfront from "@userfront/react"
// import UserfrontKEY from "../Userfront"
require('dotenv').config()

const LogInForm = ({ setIsLoggedIn }) => {

    // Userfront.init(UserfrontKEY.INIT)
    Userfront.init(process.env.REACT_APP_KEY_USERFRONT_INIT)

    // const LoginForm = Userfront.build({
    //     toolId: "armmkl"
    // })

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [wrongPassword, setWrongPassword] = useState(null)

    // const fetchUserDataFromServer =  (username, password) => {
    // // testing UI perpouses
    // if (username === 'cat' && password === '123') {
    //     return {
    //         id: 123
    //     }
    // } else {
    //     return null
    // }
    // }
    const checkPassword = async (username, password) => {
        // return fetchUserDataFromServer(username, password)
        const res = await Userfront.login({
            method: "password",
            emailOrUsername: username,
            password: password,
        }).catch((error) => {
            console.log(error.message)
            console.log(wrongPassword)
            setWrongPassword(error.message)
            console.log(wrongPassword)
        })
        return res
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setWrongPassword(false)

        const userData = await checkPassword(username, password)
        console.log(userData)
        if (typeof userData !== Promise && userData) {
            console.log('userData: ', userData)
            setUsername('')
            setPassword('')
            setIsLoggedIn(true)
            navigate(-1)
        }
    }

    return (
        <div className="full-page flex-column flex-center default-background">
            <div className="default-box-container">
                <h2>Log in:</h2>
                {wrongPassword && <p className="message-error">{wrongPassword}</p>}
                <form onSubmit={onSubmit} className="flex-column">
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-user">Username or Email: </label>
                        <input className="default-form w-80" id="comment-form-user" type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">Password: </label>
                        <input className="default-form w-80" id="comment-form-rating" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button>
                </form>
                {/* <LoginForm /> */}
                <h3>If you dont have account, Sign in here: <Link to="/register"> <button className="button-react-icon"><FiFeather className="react-icon" /></button></Link></h3>
            </div>
        </div>
    )
}
export default LogInForm