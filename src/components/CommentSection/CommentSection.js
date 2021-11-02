import Comments from './Comments'
import HeaderCom from './HeaderCom'
import Sort from './Sort'
import NavComments from './NavComments'
import { useRef } from 'react'

const CommentSection = ({ COMMENTS, comments, commentsNumber }) => {

    const commentsRef = useRef(null)
    const scrollToComments = () => commentsRef.current.scrollIntoView()

    return (
        <div className="comment-section" id="comment-section" >
            <div className="container">
                <h1>CommentSection!</h1>
                <HeaderCom
                    addComment={COMMENTS.add}
                />
                <Sort
                    commentsRef={commentsRef}
                    sort={COMMENTS.sort}
                />

                <Comments
                    editComment={COMMENTS.edit}
                    deleteComment={COMMENTS.delete}
                    comments={comments}
                    commentsNumber={commentsNumber}
                />
                <NavComments
                    COMMENTS={COMMENTS}
                    comments={comments}
                    commentsNumber={commentsNumber}
                    scrollToComments={scrollToComments}
                />
            </div >
        </div >
    )
}

export default CommentSection