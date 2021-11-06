import LogInLink from './LogInLink'
import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'
import ScrollToNav from '../utils/ScrollToNav'

const Header = ({ onClick, showNavbar, setShowShowcase, offset, isLoggedIn, setIsLoggedIn, showLogInForm, setShowLogInForm }) => {

    const logInLinkClicked = () => {
        if (!isLoggedIn && !showLogInForm) setShowLogInForm(true)
        if (isLoggedIn) {
            console.log('logOff Func here')
            setIsLoggedIn(false)
        }
    }
    return (
        <div className="header" id="header" >
            <div className="header-main">
                <div className="container flex-row">
                    <Branding />
                    <div>
                        <LogInLink isLoggedIn={isLoggedIn} logInLinkClicked={logInLinkClicked} />
                        <NavToggler onClick={onClick} showNavbar={showNavbar} />
                    </div>
                </div>
            </div>
            <Nav showNavbar={showNavbar} offset={offset} setShowShowcase={setShowShowcase} setShowLogInForm={setShowLogInForm} onClick={onClick} />
            {offset > 500 && <ScrollToNav />}
        </div>
    )
}

export default Header