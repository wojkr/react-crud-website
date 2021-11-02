import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'

const Header = ({ onClick, showNavbar }) => {
    return (
        <div className="header" id="header" >
            <div className="header-main">
                <div className="container flex-row">
                    <Branding />
                    <NavToggler onClick={onClick} showNavbar={showNavbar} />
                </div>
            </div>
            {/* {showNavbar && <Nav />} */}
            <Nav showNavbar={showNavbar} />
        </div>
    )
}

export default Header