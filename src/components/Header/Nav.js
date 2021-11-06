const Nav = ({ showNavbar, offset, setShowShowcase, setShowLogInForm, onClick }) => {
    const onClickShowShowcase = () => {
        onClick()
        setShowLogInForm(false)
        setShowShowcase(true)
    }
    const onClickHideShowcase = () => {
        onClick()
        setShowLogInForm(false)
        setShowShowcase(false)
    }
    return (
        <>
            <nav className={showNavbar ? "nav nav-shown" : "nav"}>
                <ul className="nav-ul container flex-row flex-evenly">
                    <li>
                        <a href="#Home" className="nav-item" onClick={onClickShowShowcase}>Home</a>
                    </li>
                    <li>
                        <a href={offset > 100 ? '#about' : '#Home'} className="nav-item" onClick={onClickHideShowcase} >About</a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-item" onClick={onClickHideShowcase}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-item" onClick={onClickHideShowcase}>Contact</a>
                    </li>
                    <li>
                        <a href="#comment-section" className="nav-item" onClick={onClickHideShowcase}>Reviews</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav