import { useState } from 'react'
const App = () => {

    [showNavbar, setShowNavbar] = useState(false)

    const onClick = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <>
            <Header onClick={onClick} />
        </>
    )
}

export default App