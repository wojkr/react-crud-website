import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import Userfront from "@userfront/react"
import UserfrontKEY from "../../Userfront"
import UserIcon from "../UserIcon"
require('dotenv').config()


const LogInLink = ({ user, userId, logInLinkClicked, setShowShowcase }) => {

    const [userData, setUserData] = useState(Userfront.user)

    const hideShowcase = () => {
        setShowShowcase(false)
    }

    // Userfront.init(UserfrontKEY.INIT)
    Userfront.init(process.env.KEY_USERFRONT_INIT)
    const LogoutButton = Userfront.build({//https://userfront.com/guide/toolkit/build-logout-button-react.html  BUILD OWN ONE!
        toolId: "rorrdb"
    })
    console.log('stopped here, get the data from userfront to display, and customise the button')
    user = userData.name
    userId = userData.userId

    return (
        <div className="flex-row">
            {/* {userData || (userId !== null && user !== null ? */}
            {userData ?
                <>
                    {/* <Link className="flex-row class-link" to={"/user/" + user.id} onClick={hideShowcase}>{user.name}</Link> */}
                    <Link className="flex-row class-link" to={"/user/" + userId} onClick={hideShowcase}>{userData.name}</Link>
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