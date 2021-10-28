import Comments from './Comments'
import HeaderCom from './HeaderCom'

const CommentSection = ({ COMMENTS, comments, commentsNumber }) => {
    return (
        <div className="comment-section" style={{ backgroundColor: '#aaa', overflow: 'hidden' }} >
            <div className="container">
                <h1>CommentSection!</h1>
                <HeaderCom
                    addComment={COMMENTS.add}
                />
                <Comments
                    editComment={COMMENTS.edit}
                    deleteComment={COMMENTS.delete}
                    comments={comments}
                    commentsNumber={commentsNumber}
                />
                {commentsNumber <= comments.length && <button onClick={COMMENTS.showMore}>showMoreComments</button>
                }
                {commentsNumber >= 10 && <button onClick={COMMENTS.showLess}>showLessComments</button>
                }

            </div>
        </div >
    )
}

export default CommentSection