const DeleteComment = ({ id, deleteComment }) => {
    const onClick = () => {
        console.log('clicked delete comment id: ', id)
        deleteComment(id)
        // window.pageYOffset
    }

    return (
        <>
            <button onClick={onClick}>delete</button>
        </>
    )
}

export default DeleteComment