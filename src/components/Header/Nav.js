import { NavLink } from "react-router-dom"
const Nav = ({ showNavbar, setShowShowcase, onClick }) => {
    const hideNav = () => {
        onClick()
    }

    const onClickShowShowcase = () => {
        setShowShowcase(true)
        hideNav()
    }
    const onClickHideShowcase = () => {
        setShowShowcase(false)
        hideNav()
    }
    return (
        <>
            <nav className={showNavbar ? "nav nav-shown" : "nav"}>
                <ul className="nav-ul container flex-row flex-evenly">
                    <li>
                        {/* <button onClick={onClickShowShowcase}>hey</button> */}
                        <NavLink to="/" className="class-link nav-item" onClick={onClickShowShowcase}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="class-link nav-item" onClick={onClickHideShowcase}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/groups" className="class-link nav-item" onClick={onClickHideShowcase}>Groups</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="class-link nav-item" onClick={onClickHideShowcase}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about#contact" className="class-link nav-item" onClick={onClickHideShowcase}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/comments" className="class-link nav-item" onClick={onClickHideShowcase}>Comments</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav