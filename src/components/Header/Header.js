import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'
import ScrollToNav from '../utils/ScrollToNav'

const Header = ({ onClick, showNavbar, offset }) => {
    return (
        <div className="header" id="header" >
            <div className="header-main">
                <div className="container flex-row">
                    <Branding />
                    <NavToggler onClick={onClick} showNavbar={showNavbar} />
                </div>
            </div>
            {/* {showNavbar && <Nav />} */}
            <Nav showNavbar={showNavbar} onClick={onClick} />
            {offset > 500 && <ScrollToNav />}
        </div>
    )
}

export default Header