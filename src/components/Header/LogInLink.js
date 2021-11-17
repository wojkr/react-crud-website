import { Link } from "react-router-dom"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import UserIcon from "../UserIcon"

import Userfront from "@userfront/react"
import UserfrontKEY from "./Userfront"


const LogInLink = ({ user, userId, logInLinkClicked, setShowShowcase }) => {
    const hideShowcase = () => {
        setShowShowcase(false)
    }
    console.log(userId, user)

    Userfront.init(UserfrontKEY.INIT)
    const LogoutButton = Userfront.build({//https://userfront.com/guide/toolkit/build-logout-button-react.html  BUILD OWN ONE!
        toolId: "rorrdb"
    })
    const userData = JSON.stringify(Userfront.user, null, 2)

    console.log(userData || 'userNotLoggedIn')
    console.log('stopped here, get the data from userfront to display, and customise the button')
    // user = userData.name
    // userId = userData.userId

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
            <LogoutButton />
        </div>
    )
}
export default LogInLink