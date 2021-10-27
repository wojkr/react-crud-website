
const DeleteComment = ({ id, deleteComment }) => {

    const onClick = () => {
        deleteComment(id)
    }

    return (
        <>
            <button onClick={onClick}>deleteComment</button>
        </>
    )
}

export default DeleteComment