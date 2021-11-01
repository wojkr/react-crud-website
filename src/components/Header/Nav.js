const Nav = () => {
    return (
        <>
            <nav className="nav">
                <ul className="container flex-row flex-evenly">
                    <li>
                        <a href="#showcase" className="nav-item">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="nav-item">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-item">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-item">Contact</a>
                    </li>
                    <li>
                        <a href="#comments" className="nav-item">Comments</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav