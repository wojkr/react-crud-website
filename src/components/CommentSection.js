import Comments from './Comments'
import HeaderCom from './HeaderCom'

const CommentSection = ({ showComments, commentsToggler, onAddComment, comments }) => {
    return (
        <div style={{ height: '700px', backgroundColor: '#aaa' }} >
            <h1>CommentSection!</h1>
            <HeaderCom onAddComment={onAddComment} commentsToggler={commentsToggler} />
            {showComments && <Comments comments={comments} />}
        </div >
    )
}

export default CommentSection