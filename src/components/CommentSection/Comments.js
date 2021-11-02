import Comment from "./Comment"

const Comments = ({ editComment, deleteComment, comments, commentsNumber }) => {
    let shownComments = comments.slice()
    if (commentsNumber === 0) {
        let minCommentsNumber = 3;
        if (shownComments.length > minCommentsNumber) {
            shownComments.splice(minCommentsNumber)
        }
    } else {
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
                />))
            }
        </>
    )
}
export default Comments
















































// import Comment from './Comment'

// const Comments = ({ comments }) => {

//     return (
//         <>
//             {comments.map((comment) => (
//                 <Comment key={comment.id} comment={comment} />
//             ))}
//         </>
//     )

// }

// export default Comments