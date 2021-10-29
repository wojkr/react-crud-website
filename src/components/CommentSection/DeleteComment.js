import Alert from "../utils/Alert"

const DeleteComment = ({ id, deleteComment }) => {
    let showAlert = false
    const onClick = () => {
        console.log('b')
        showAlert = true
        console.log('a')
        // deleteComment(id)
        // window.pageYOffset
    }

    const deleteFunc = () => {
        console.log('deleteCom')
    }
    const hideAlertFunc = () => {
        console.log('hide')
    }


    return (
        <>
            {showAlert && <Alert className="alert"
                message="delete?"
                option1="Yes" option1func={deleteFunc}
                option2="No" option2func={hideAlertFunc}
            />}
            <button onClick={onClick}>delete</button>
        </>
    )
}

export default DeleteComment