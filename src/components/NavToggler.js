import { useState } from "react"

const NavToggler = ({ onClick, showNavbar }) => {
    return (
        <>
            <button
                onClick={onClick}
                className="nav-toggler"
            >{showNavbar ? 'showNav' : 'closeNav'}</button>
        </>
    )
}

export default NavToggler