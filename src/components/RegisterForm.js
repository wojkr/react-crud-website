import { useState } from "react"
import { FiSend, FiLogIn } from "react-icons/fi"
import { checkUsername, checkEmail, checkPassword } from "./utils/utils"
const RegisterForm = ({ setShowRegisterForm, setShowLogInForm }) => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [wrongData, setWrongData] = useState(false)

    const saveUser = (user, email, password) => {
        console.log('here: Func send data to serv, send email to comfirm users email', { user: user, email: email, passwordToHash: password })
    }

    const isInputOk = () => {
        if (checkUsername(user, setMessage, setWrongData) &&
            checkEmail(email, setMessage, setWrongData) &&
            checkPassword(password, setMessage, setWrongData)) {
            return true
        }
    }
    const checkForm = (user, email, password) => {
        setWrongData(false)
        const correctData = isInputOk();
        if (correctData) {
            saveUser(user, email, password)
            setShowRegisterForm(false)
            setShowLogInForm(true)
            alert('register successfully, pls check your email')
            setUser('')
            setPassword('')
            setEmail('')
        } else {
            setWrongData(true)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        checkForm(user, email, password)
    }

    const goToLogInForm = () => {
        setShowRegisterForm(false)
        setShowLogInForm(true)
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
                    <h3>If you have account already, log in here: <button className="button-react-icon" onClick={goToLogInForm}><FiLogIn className="react-icon" /></button></h3>
                </div>

            </div>

        </>
    )
}

export default RegisterForm