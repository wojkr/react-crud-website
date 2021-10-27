import Comments from './Comments'
import HeaderCom from './HeaderCom'

const CommentSection = ({ showComments, commentsToggler, addComment, editComment, deleteComment, comments }) => {
    return (
        <div className="comment-section" style={{ height: '700px', backgroundColor: '#aaa', overflow: 'hidden' }} >
            <div className="container">
                <h1>CommentSection!</h1>
                <HeaderCom addComment={addComment} commentsToggler={commentsToggler} showComments={showComments} />
                {showComments && <Comments editComment={editComment} deleteComment={deleteComment} comments={comments} />}

            </div>
        </div >
    )
}

export default CommentSection