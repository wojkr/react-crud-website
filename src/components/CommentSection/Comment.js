import { useState } from "react"
import { FiEdit } from "react-icons/fi"
import DateComment from "./DateComment"
import DeleteComment from "./DeleteComment"
import EditComment from "./EditComment"
import Votes from './Votes'
import Userfront from "@userfront/react"
import UserIcon from "../UserIcon"
import { Link } from "react-router-dom"

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
                        <div className="flex-row">
                            <Link to={"/User/" + comment.userId} className="class-link title">{comment.user}</Link>
                            <UserIcon userId={comment.userId} />
                            <p className="comment-rating">Rated: <strong>{comment.rating}/5</strong></p>
                        </div>
                        <span className="flex-row">
                            {isLoggedIn && userLogged.userId && userLogged.userId.toString() === comment.userId.toString() && <>
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

                        <DateComment comment={comment} />
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