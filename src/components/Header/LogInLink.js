import { Link } from "react-router-dom"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import UserIcon from "../UserIcon"

const LogInLink = ({ user, userId, logInLinkClicked, setShowShowcase }) => {
    const hideShowcase = () => {
        setShowShowcase(false)
    }
    console.log(userId, user)
    return (
        <div className="flex-row">
            {userId !== null && user !== null ?
                <>
                    <Link className="flex-row class-link" to={"/user/" + user.id} onClick={hideShowcase}>{user.name}</Link>
                    <UserIcon userId={userId} />
                </>
                :
                <p>Log in:</p>
            }
            <button id="header-login-button" className="button-react-icon" onClick={logInLinkClicked}>
                {userId !== null && user !== null ? <FiLogOut className="react-icon" /> : <FiLogIn className="react-icon" />}
            </button>
        </div>
    )
}
export default LogInLink