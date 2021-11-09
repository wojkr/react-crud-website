import { FiPlus, FiMinus } from "react-icons/fi"
const GroupToggler = ({ showDescription, toggleDescription }) => {

    return (
        <>
            <button className="button-react-icon" onClick={toggleDescription}>
                {
                    showDescription ?
                        <FiMinus className="react-icon" />
                        : <FiPlus className="react-icon" />
                }
            </button>
        </>
    )
}
export default GroupToggler