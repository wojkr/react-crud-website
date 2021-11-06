import { useState } from "react"
import { FiSend, FiFeather } from "react-icons/fi"
const LogInForm = ({ setIsLoggedIn, setShowLogInForm }) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [wrongPassword, setWrongPassword] = useState(null)

    const checkPassword = (user, password) => {
        if (user === 'cat' && password === '123') {
            setIsLoggedIn(true)
            setShowLogInForm(false)
        } else {
            setWrongPassword(true)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        checkPassword(user, password)
        setUser('')
        setPassword('')
    }

    return (
        <>
            <div className="full-page flex-column flex-center default-background">
                <div className="comment-container">
                    {wrongPassword && <p>Incorrect Username or password</p>}
                    <h2>Log in:</h2>
                    <form onSubmit={onSubmit} className="flex-column">
                        <div className="flex-column flex-a-start flex-grow">
                            <label htmlFor="comment-form-user">Username: </label>
                            <input className="comment-form w-80" id="comment-form-user" type="text" value={user} placeholder="Username" onChange={(e) => setUser(e.target.value)}></input>
                        </div>
                        <div className="flex-column flex-a-start flex-grow">
                            <label htmlFor="comment-form-rating">Password: </label>
                            <input className="comment-form w-80" id="comment-form-rating" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button>
                    </form>
                    <h3>If you dont have account, Sign in here: <button className="button-react-icon"><FiFeather className="react-icon" /></button></h3>
                </div>

            </div>

        </>
    )
}
export default LogInForm