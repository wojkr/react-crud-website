import { useState } from "react"
import DeleteComment from "./DeleteComment"
import EditComment from "./EditComment"

const Comment = ({ editComment, deleteComment, comment }) => {
    const [showEdit, setShowEdit] = useState(false)
    const onClick = () => setShowEdit(!showEdit)
    const dateToString = (date) => {
        const newDate = new Date(date)
        return newDate.toGMTString()
    }

    const content = () => {
        if (showEdit) {
            return (<>
                <EditComment comment={comment} onClick={onClick} editComment={editComment} />
                <button onClick={onClick}>goBack</button>
            </>)
        } else {
            return (<div className="comment-container flex-column flex-a-start">
                <div className="container-100 flex-row">
                    <span><h3>{comment.user}</h3></span><span>
                        <button onClick={onClick}>edit</button>
                        <DeleteComment
                            id={comment.id}
                            deleteComment={deleteComment}
                        />
                    </span>
                </div>
                <p>{comment.text}</p>
                <p>Rated: <strong>{comment.rating}</strong> on {dateToString(comment.date)}</p>
            </div>)
        }
    }
    return (
        <>
            {content()}
            <hr></hr>
        </>
    )
}

export default Comment














































// const Comment = ({ comment }) => {
//     return (
//         <div className='task'>
//             <h3>User: {comment.user}</h3>
//             <p>Comment: {comment.text}</p>
//             <p>Rating: {comment.rating}</p>
//         </div>
//     )
// }

// export default Comment