import { useNavigate } from "react-router"

const GoBack = () => {
    const navigate = useNavigate()

    return (
        <button type="button" className="button-react-icon" onClick={() => navigate(-1)}>Go Back</button>
    )
}
export default GoBack