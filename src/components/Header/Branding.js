import { Link } from "react-router-dom"
const Branding = ({ setShowShowcase }) => {

    const onClick = () => {
        setShowShowcase(true)
    }

    return (
        <>
            <Link to="/" className="class-link" onClick={onClick}><h3 className="title"><i> coffee</i>HOUSE </h3></Link>
        </>
    )
}

export default Branding