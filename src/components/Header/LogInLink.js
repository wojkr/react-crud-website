import { FiLogIn, FiLogOut } from "react-icons/fi"

const LogInLink = ({ isLoggedIn, logInLinkClicked, user, setShowShowcase }) => {
    const hideShowcase = () => {
        setShowShowcase(false)
    }

    return (
        <div className="flex-row">
            {isLoggedIn ? <>
                <a className="flex-row" href="#user" onClick={hideShowcase}>{user.name}</a>
                <div className="user-avatar-container">
                    <img className="user-avatar" src={user.avatar} alt={(user.name) + "'s avatar"}></img>
                </div>
            </> :
                <p>Log in:</p>
            }
            <button id="header-login-button" className="button-react-icon" onClick={logInLinkClicked}>
                {isLoggedIn ? <FiLogOut className="react-icon" /> : <FiLogIn className="react-icon" />}
            </button>
        </div>
    )
}
export default LogInLink