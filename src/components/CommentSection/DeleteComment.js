import { FiTrash2 } from "react-icons/fi"

const DeleteComment = ({ id, deleteComment }) => {
    const onClick = () => {
        deleteComment(id)
    }

    return (
        <>
            <button
                className="button-react-icon"
                onClick={onClick}>
                <FiTrash2
                    className="react-icon"
                />
            </button>
        </>
    )
}

export default DeleteComment