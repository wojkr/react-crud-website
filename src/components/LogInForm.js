import { useState } from "react"
import { FiSend, FiFeather } from "react-icons/fi"
const LogInForm = ({ setIsLoggedIn, setShowLogInForm, setShowRegisterForm, setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [wrongPassword, setWrongPassword] = useState(null)

    const fetchUserDataFromServer = (username, password) => {
        //testing UI perpouses
        if (username === 'cat' && password === '123') {
            return {
                id: '123',
                name: 'cat',
                birthday: '15feb',
                bio: 'Im a fan of soft materials, warm milk. In spare time i sleep and puur...',
                joined: 'today',
                groups: [
                    'The Wool Circle',
                    'The Beverage Academy'
                ],
                img: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1501&q=80',
                avatar: '',
                hobby: ['milk', 'lush wool ball', 'mice'],
                favoriteDrink: 'milk',
                favoriteDrinkId: 1,
                favoriteCookie: 'milk buttons',
                favoriteCookieId: 2,
            }
        } else {
            return null
        }
    }
    const checkPassword = (username, password) => {
        return fetchUserDataFromServer(username, password)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = checkPassword(username, password)
        console.log(userData)
        if (userData) {
            setIsLoggedIn(true)
            setShowLogInForm(false)

            setUser(userData)
            setUsername('')
            setPassword('')
            window.location.href = `/user/${userData.id}`
        } else {
            setWrongPassword(true)
        }
    }

    const goToRegisterForm = () => {
        setShowRegisterForm(true)
        setShowLogInForm(false)
    }

    return (
        <div className="full-page flex-column flex-center default-background">
            <div className="default-box-container">
                <h2>Log in:</h2>
                {wrongPassword && <p className="message-error">Incorrect Username or password</p>}
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
                <h3>If you dont have account, Sign in here: <button className="button-react-icon" onClick={goToRegisterForm}><FiFeather className="react-icon" /></button></h3>
            </div>
        </div>
    )
}
export default LogInForm