import { FiLogIn, FiLogOut } from "react-icons/fi"

const LogInLink = ({ isLoggedIn, logInLinkClicked }) => {

    return (
        <button id="header-login-button" className="button-react-icon" onClick={logInLinkClicked}>
            {isLoggedIn ? <FiLogOut className="react-icon" /> : <FiLogIn className="react-icon" />}
        </button>
    )
}
export default LogInLink