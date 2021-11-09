import LogInLink from './LogInLink'
import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'
import ScrollToNav from '../utils/ScrollToNav'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getData } from "../utils/utils"
import { ALERT } from '../utils/utils'
import Alert from '../utils/Alert'

const Header = ({ setShowShowcase, onClick, showNavbar, offset }) => {

    const navigate = useNavigate()
    const userId = window.sessionStorage.getItem('userId')

    const [showAlert, setShowAlert] = useState(false)
    const [alertInfo, setAlertInfo] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        getData(`Users`, setUser, userId)
    }, [userId])

    const logOutFunc = () => {
        window.sessionStorage.clear()
        // setIsLoggedIn(false)
    }
    const logInLinkClicked = () => {
        if (!userId) {
            navigate("/login")
        } else {
            ALERT(
                setShowAlert,
                setAlertInfo,
                "are you sure you want to log out?",
                'Yes',
                [logOutFunc, null, navigate, '/'],
                'no',
                () => { }
            )
        }
    }
    return (
        <>
            <div className="header" id="header" >
                <div className="header-main">
                    <div className="container flex-row">
                        <Branding />
                        <div className="flex-row">
                            <LogInLink user={user} userId={userId} setShowShowcase={setShowShowcase} logInLinkClicked={logInLinkClicked} />
                            <NavToggler onClick={onClick} showNavbar={showNavbar} />
                        </div>
                    </div>
                </div>
                <Nav showNavbar={showNavbar} offset={offset} onClick={onClick} />
                {offset > 500 && <ScrollToNav />}
            </div>
            {showAlert && <Alert alertInfo={alertInfo} />}
        </>)
}

export default Header