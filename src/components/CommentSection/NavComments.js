import { FiChevronLeft, FiChevronRight, FiEye, FiEyeOff } from 'react-icons/fi'

const NavComments = ({ comments, commentsNumber, COMMENTS, scrollToComments }) => {

    return (
        <div className="container-100 flex-row flex-evenly">
            <div>
                {commentsNumber !== true && comments.length !== 0 && commentsNumber > 10 && <button
                    className="button-react-icon"
                    onClick={() => {
                        COMMENTS.showPrevious()
                        scrollToComments()
                    }}>
                    <FiChevronLeft className="react-icon" />
                </button>}
            </div>
            <div>
                {comments.length === 0 && <h3>No comments</h3>}
                {(commentsNumber >= 10 || commentsNumber === true) && <button
                    className="button-react-icon"
                    onClick={() => {
                        COMMENTS.showLess()
                        scrollToComments()
                    }}>
                    <FiEyeOff className="react-icon" />
                </button>}
                {commentsNumber !== true && comments.length !== 0 && commentsNumber < 10 && commentsNumber <= comments.length && <button
                    className="button-react-icon"
                    onClick={() => {
                        COMMENTS.showMore()
                        scrollToComments()
                    }}>
                    <FiEye className="react-icon" />
                </button>}
            </div>
            <div>
                {(commentsNumber === true || typeof (commentsNumber) === 'number') && comments.length !== 0 && commentsNumber <= comments.length - 10 && <button
                    className="button-react-icon"
                    onClick={() => {
                        COMMENTS.showNext()
                        scrollToComments()
                    }}>
                    <FiChevronRight className="react-icon" />
                </button>}
            </div>
        </div >
    )
}

export default NavComments