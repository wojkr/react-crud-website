import Comment from "./Comment"

const Comments = ({ editComment, deleteComment, comments }) => {
    return (
        <>
            {
                comments.map((comment) => (<Comment key={comment.id} editComment={editComment} deleteComment={deleteComment} comment={comment} />))
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