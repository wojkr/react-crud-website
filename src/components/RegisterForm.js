import { useState } from "react"
import { Link } from "react-router-dom"
import { FiSend, FiLogIn } from "react-icons/fi"
import { checkUsername, checkEmail, checkPassword } from "./utils/utils"
import Userfront from "@userfront/react"
// import UserfrontKEY from "../Userfront"
require('dotenv').config()

const RegisterForm = () => {

    Userfront.init(process.env.REACT_APP_KEY_USERFRONT_INIT)
    // Userfront.init(UserfrontKEY.INIT)

    const SignupForm = Userfront.build({
        toolId: "odkkol"
    })


    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [wrongData, setWrongData] = useState(false)

    const saveUser = (user, email, password) => {
        console.log('here: Func send data to serv, send email to comfirm users email', { user: user, email: email, passwordToHash: password })
    }


    const register = async (user, email, password) => {
        const res = await Userfront.signup({
            method: "password",
            email: email,
            name: "Jane Doe",
            username: user,
            data: {
                custom: "information",
            },
            password: password,
        }).catch((error) => {
            console.log(error.message)
            console.log(wrongData)
            setWrongData(error.message)
            setMessage(error.message)
            console.log(wrongData)
        })
        return res
    }

    const isInputOk = () => {
        if (checkUsername(user, setMessage, setWrongData) &&
            checkEmail(email, setMessage, setWrongData) &&
            checkPassword(password, setMessage, setWrongData)) {
            return true
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setWrongData(false)
        if (isInputOk()) {
            saveUser(user, email, password)
            const newUserData = await register(user, email, password)
            if (typeof newUserData !== Promise && newUserData) {
                // alert('register successfully, pls check your email')
                console.log('register successfully, pls check your email')
                setUser('')
                setPassword('')
                setEmail('')
            }
        } else {
            setWrongData(true)
        }
    }

    return (
        <>
            <div className="full-page flex-column flex-center default-background">
                <div className="default-box-container">
                    <h2>Register:</h2>
                    {wrongData && <p className="message-error">{message}</p>}
                    <form onSubmit={onSubmit} className="flex-column">
                        <div className="flex-column flex-a-start flex-grow">
                            <label htmlFor="comment-form-user">Username: </label>
                            <input className="default-form w-80" id="comment-form-user" type="text" value={user} placeholder="Username" onChange={(e) => setUser(e.target.value)}></input>
                        </div>
                        <div className="flex-column flex-a-start flex-grow">
                            <label htmlFor="comment-form-rating">Email: </label>
                            <input className="default-form w-80" id="comment-form-rating" type="email" value={email} placeholder="Email Adress" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="flex-column flex-a-start flex-grow">
                            <label htmlFor="comment-form-password">Password: </label>
                            <input className="default-form w-80" id="comment-form-password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button>
                    </form>
                    {/* <SignupForm /> */}
                    <h3>If you have account already, log in here: <Link to="/login" className="button-react-icon"><FiLogIn className="react-icon" /></Link></h3>
                </div>

            </div>

        </>
    )
}

export default RegisterForm