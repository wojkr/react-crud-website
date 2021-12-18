import { Link, useNavigate } from "react-router-dom"
import GoBack from "./GoBack"

const PageNotFound = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="default-background container full-page flex-column flex-center flex-a-center">
                {/* <div className="flex-column flex-center flex-a-center h-100"> */}
                {/* <GoBack /> */}
                <h3>Ups... Page not found</h3>
                <button className="class-link showcase-button" onClick={() => navigate(-1)} ><i>GO BACK</i></button>
                {/* </div> */}
            </div>

            {/* <button className="button-react-icon"><Link to="/" className="react-icon">Home</Link></button> */}
        </>
    )
}

export default PageNotFound