import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import Userfront from "@userfront/react"
import UserfrontCore from "@userfront/core"
// import UserfrontKEY from "../../Userfront"

import { ALERT } from '../utils/utils'
import Alert from '../utils/Alert'
import UserIcon from "../UserIcon"
require('dotenv').config()


const LogInLink = ({ setShowShowcase, isLoggedIn, setIsLoggedIn }) => {

    Userfront.init(process.env.REACT_APP_KEY_USERFRONT_INIT)
    const navigate = useNavigate()

    const [showAlert, setShowAlert] = useState(false)
    const [alertInfo, setAlertInfo] = useState('')

    const [userData, setUserData] = useState((Userfront.accessToken() && Userfront.user) || null)
    // const [user, setUser] = useState(Userfront.accessToken() && Userfront.user.name)
    // const [userId, setUserId] = useState(Userfront.accessToken() && Userfront.user.userId)
    // console.log(userData)
    const hideShowcase = () => {
        setShowShowcase(false)
    }
    useEffect(() => {
        setUserData((Userfront.accessToken() && Userfront.user) || false)
    }, [isLoggedIn])
    // Userfront.init(UserfrontKEY.INIT)
    // const LogoutButton = Userfront.build({//https://userfront.com/guide/toolkit/build-logout-button-react.html  BUILD OWN ONE!
    //     toolId: "rorrdb"
    // })
    // console.log('stopped here, get the data from userfront to display, and customise the button')

    const logout = () => {
        UserfrontCore.logout({ redirect: false })
        setIsLoggedIn(false)
        setShowShowcase(true)
    }

    const customBtnClicked = () => {
        if (Userfront.accessToken()) {
            ALERT(
                setShowAlert,
                setAlertInfo,
                "are you sure you want to log out?",
                'Yes',
                [logout, null, navigate, '/'],
                'no',
                () => { }
            )
        } else {
            hideShowcase()
            navigate("/login")
        }
    }


    // }
    // console.log(userData)
    return (
        <div className="flex-row">
            {/* {userData || (userId !== null && user !== null ? */}
            {isLoggedIn ?
                <>
                    {/* <Link className="flex-row class-link" to={"/user/" + user.id} onClick={hideShowcase}>{user.name}</Link> */}
                    <Link className="flex-row class-link title" to={"/user/" + userData.userId} onClick={hideShowcase}>{userData.name}</Link>
                    <UserIcon userId={userData.userId} onClick={hideShowcase} />
                </>
                :
                <p>Log in:</p>
            }
            <button id="header-login-button" className="button-react-icon" onClick={customBtnClicked}>
                {isLoggedIn ?
                    <FiLogOut className="react-icon" />
                    :
                    <FiLogIn className="react-icon" />
                }
            </button>
            {/* <LogoutButton /> */}
            {showAlert && <Alert alertInfo={alertInfo} />}
        </div>
    )
}
export default LogInLink