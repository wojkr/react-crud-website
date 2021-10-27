import { useState } from "react"

const NavToggler = ({ onClick, showNavbar }) => {
    return (
        <>
            <button
                onClick={onClick}
                className="nav-toggler"
            >{showNavbar ? 'closeNav' : 'showNav'}</button>
        </>
    )
}

export default NavToggler