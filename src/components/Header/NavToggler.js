import { FiX, FiMenu } from 'react-icons/fi'

const NavToggler = ({ onClick, showNavbar }) => {
    return (
        <>
            <button
                onClick={onClick}
                className="flex-center button-react-icon"
            >{showNavbar ? <FiX className="react-icon" /> : <FiMenu className="react-icon" />}</button>
        </>
    )
}

export default NavToggler