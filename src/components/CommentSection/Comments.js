import Comment from "./Comment"

const Comments = ({ editComment, deleteComment, comments, commentsNumber, isLoggedIn }) => {
    let shownComments = comments.slice()
    if (commentsNumber === false) {
        let minCommentsNumber = 3;
        if (shownComments.length > minCommentsNumber) {
            shownComments.splice(minCommentsNumber)
        }
    } else if (commentsNumber === true) {
        shownComments = shownComments.slice(0, 10)
    } else if (commentsNumber !== 0) {
        shownComments = shownComments.slice(commentsNumber, commentsNumber + 10)
    }
    return (
        <>
            {shownComments.map((comment) => (
                <Comment
                    key={comment.id}
                    editComment={editComment}
                    deleteComment={deleteComment}
                    comment={comment}
                    isLoggedIn={isLoggedIn}
                />))
            }
        </>
    )
}
export default Comments