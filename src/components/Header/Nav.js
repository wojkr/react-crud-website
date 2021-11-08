const Nav = ({ showNavbar, offset, setShowShowcase, setShowLogInForm, setShowRegisterForm, onClick }) => {
    const hideForms = () => {
        onClick()
        setShowLogInForm(false)
        setShowRegisterForm(false)
    }

    const onClickShowShowcase = () => {
        hideForms()
        setShowShowcase(true)
    }
    const onClickHideShowcase = () => {
        hideForms()
        setShowShowcase(false)
    }
    return (
        <>
            <nav className={showNavbar ? "nav nav-shown" : "nav"}>
                <ul className="nav-ul container flex-row flex-evenly">
                    <li>
                        <a href="/" className="class-link nav-item" onClick={onClickShowShowcase}>Home</a>
                    </li>
                    <li>
                        <a href="/#about" className="class-link nav-item" onClick={onClickHideShowcase}>About</a>
                    </li>
                    <li>
                        <a href="/groups" className="class-link nav-item" onClick={onClickHideShowcase}>Groups</a>
                    </li>
                    <li>
                        <a href="/#contact" className="class-link nav-item" onClick={onClickHideShowcase}>Contact</a>
                    </li>
                    <li>
                        <a href="/#comment-section" className="class-link nav-item" onClick={onClickHideShowcase}>Reviews</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav