import LogInLink from './LogInLink'
import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'
import ScrollToNav from '../utils/ScrollToNav'
import Alert from '../utils/Alert'
import { ALERT } from '../utils/utils'
import { useState } from 'react'

const Header = ({ onClick, showNavbar, setShowShowcase, offset, isLoggedIn, setIsLoggedIn, showLogInForm, setShowLogInForm, setShowRegisterForm, user
}) => {
    const [showAlert, setShowAlert] = useState(false)
    const [alertInfo, setAlertInfo] = useState('')

    const logOutFunc = () => {
        setIsLoggedIn(false)
        console.log('logOff Func here')
    }
    const logInLinkClicked = () => {
        if (!isLoggedIn && !showLogInForm) {
            setShowLogInForm(true)
            setShowRegisterForm(false)
        }
        if (isLoggedIn) {
            ALERT(
                setShowAlert,
                setAlertInfo,
                "are you sure you want to log out?",
                'Yes',
                [logOutFunc],
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
                            <LogInLink user={user} isLoggedIn={isLoggedIn} logInLinkClicked={logInLinkClicked} />
                            <NavToggler onClick={onClick} showNavbar={showNavbar} />
                        </div>
                    </div>
                </div>
                <Nav showNavbar={showNavbar} offset={offset} setShowShowcase={setShowShowcase} setShowLogInForm={setShowLogInForm} setShowRegisterForm={setShowRegisterForm} onClick={onClick} />
                {offset > 500 && <ScrollToNav />}
            </div>
            {showAlert && <Alert alertInfo={alertInfo} />}
        </>)
}

export default Header