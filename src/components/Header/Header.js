import LogInLink from './LogInLink'
import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'
import ScrollToNav from '../utils/ScrollToNav'

// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { getData } from "../utils/utils"
// import { ALERT } from '../utils/utils'
// import Alert from '../utils/Alert'
// import Userfront from '../../Userfront'

const Header = ({ setShowShowcase, onClick, showNavbar, offset, setIsLoggedIn, isLoggedIn }) => {

    // const navigate = useNavigate()

    // const userId = window.sessionStorage.getItem('userId')
    // const [user, setUser] = useState(null)
    // const [user, setUser] = useState(null)
    // const [userId, setUserId] = useState(Userfront.user.userId || null)


    // useEffect(() => {
    //     getData(`Users`, setUser, userId)
    // }, [userId])
    // useEffect(() => {
    //     getData(`Users`, setUser, userId)
    // }, [userId])

    return (
        <>
            <div className="header" id="header" >
                <div className="header-main">
                    <div className="container flex-row">
                        <Branding />
                        <div className="flex-row">
                            <LogInLink setShowShowcase={setShowShowcase} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                            {/* <LogInLink user={user} userId={userId} setShowShowcase={setShowShowcase} logInLinkClicked={logInLinkClicked} /> */}
                            <NavToggler onClick={onClick} showNavbar={showNavbar} />
                        </div>
                    </div>
                </div>
                <Nav showNavbar={showNavbar} offset={offset} onClick={onClick} />
                {offset > 500 && <ScrollToNav />}
            </div>
        </>)
}

export default Header