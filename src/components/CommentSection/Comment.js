import { useState } from "react"
import { FiEdit } from "react-icons/fi"
import DateComment from "./DateComment"
import DeleteComment from "./DeleteComment"
import EditComment from "./EditComment"
import Votes from './Votes'
import Userfront from "@userfront/react"

const Comment = ({ editComment, deleteComment, comment, isLoggedIn }) => {
    const [showEdit, setShowEdit] = useState(false)
    const editToggler = () => setShowEdit(!showEdit)
    const [userLogged] = useState(Userfront.user || false)

    const content = () => {
        if (showEdit) {
            return (<>
                <EditComment
                    comment={comment}
                    onClick={editToggler}
                    editComment={editComment}
                />
            </>)
        } else {
            return (
                <div className="default-box-container flex-column flex-a-start">
                    <div className="container-100 flex-row comment-row-1">
                        <div className="container-100">
                            <h3 className="comment-user">{comment.user}</h3>
                            <p className="comment-rating">Rated: <strong>{comment.rating}/5</strong></p>
                            <DateComment comment={comment} />
                        </div>
                        <span className="flex-row">
                            {userLogged.userId.toString() === comment.userId && <>
                                <button
                                    className="button-react-icon"
                                    onClick={editToggler}>
                                    <FiEdit
                                        className="react-icon"
                                    />
                                </button>
                                <DeleteComment
                                    id={comment.id}
                                    deleteComment={deleteComment}
                                />
                            </>}
                        </span>
                    </div>
                    <div className="comment-row-2 container-100 ">
                        <p className="default-box-container-inner">{comment.text}</p>
                    </div>
                    <Votes comment={comment} editComment={editComment} isLoggedIn={isLoggedIn} />
                </div >)
        }
    }
    return (
        <>
            {content()}
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