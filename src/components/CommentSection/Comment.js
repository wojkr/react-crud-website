import { useState } from "react"
import DeleteComment from "./DeleteComment"
import EditComment from "./EditComment"

const Comment = ({ editComment, deleteComment, comment }) => {
    const [showEdit, setShowEdit] = useState(false)
    const onClick = () => setShowEdit(!showEdit)
    // no ID in comment Object...
    const content = () => {
        if (showEdit) {
            return (<>
                <EditComment comment={comment} onClick={onClick} editComment={editComment} />
                <button onClick={onClick}>goBack</button>
            </>)
        } else {
            return (<>
                <h3>{comment.user}<span>
                    <button onClick={onClick}>edit</button>
                </span></h3>
                <p>{comment.text}</p>
                <p><strong>{comment.rating}</strong><span>
                    <DeleteComment id={comment.id} deleteComment={deleteComment} />
                </span></p>
            </>)
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