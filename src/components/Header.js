import Branding from './Branding'
import NavToggler from './NavToggler'
import Nav from './Nav'

const Header = ({ onClick, showNavbar }) => {
    return (
        <div className="header-main" >
            <Branding />
            <NavToggler onClick={onClick} showNavbar={showNavbar} />
            {!showNavbar && <Nav />}
        </div>
    )
}

export default Header