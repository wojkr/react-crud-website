import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import Userfront from "@userfront/react"
import UserfrontCore from "@userfront/core"
// import UserfrontKEY from "../../Userfront"
import UserIcon from "../UserIcon"
require('dotenv').config()


const LogInLink = ({ logInLinkClicked, setShowShowcase }) => {

    Userfront.init(process.env.REACT_APP_KEY_USERFRONT_INIT)

    const [userData, setUserData] = useState((Userfront.accessToken() && Userfront.user) || null)
    const [user, setUser] = useState(Userfront.accessToken() && Userfront.user.name)
    const [userId, setUserId] = useState(Userfront.accessToken() && Userfront.user.userId)
    console.log(userData)
    const hideShowcase = () => {
        setShowShowcase(false)
    }

    // Userfront.init(UserfrontKEY.INIT)
    // const LogoutButton = Userfront.build({//https://userfront.com/guide/toolkit/build-logout-button-react.html  BUILD OWN ONE!
    //     toolId: "rorrdb"
    // })
    console.log('stopped here, get the data from userfront to display, and customise the button')

    const customBtnClicked = () => {
        if (Userfront.accessToken()) {
            UserfrontCore.logout()
            setUserData()
        }
        logInLinkClicked()
    }
    console.log(userData)
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
            <button id="header-login-button" className="button-react-icon" onClick={customBtnClicked}>
                {userData ? <FiLogOut className="react-icon" /> : <FiLogIn className="react-icon" />}
            </button>
            {/* <LogoutButton /> */}
        </div>
    )
}
export default LogInLink