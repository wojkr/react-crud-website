import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'

const Header = ({ onClick, showNavbar }) => {
    return (
        <div className="header" id="header" >
            <div className="container">
                <div className="flex-row">
                    <Branding />
                    <NavToggler onClick={onClick} showNavbar={showNavbar} />
                </div>
            </div>
            {showNavbar && <Nav />}
        </div>
    )
}

export default Header