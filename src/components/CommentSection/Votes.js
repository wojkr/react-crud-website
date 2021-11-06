import { FiThumbsUp, FiThumbsDown } from "react-icons/fi"

const Votes = ({ comment, editComment, isLoggedIn }) => {
    const upVote = () => {
        comment.votes++
        editComment(comment)
    }
    const downVote = () => {
        comment.votes--
        editComment(comment)
    }

    return (
        <div className="container-100 flex-row comment-votes" >
            <p> Was that comment helpfull ?</p >
            <div className="flex-row flex-a-center">
                {isLoggedIn && <button className="button-react-icon" onClick={upVote}><FiThumbsUp className="react-icon" /></button>}
                <h3>{comment.votes > 0 ? '+' : ''}{comment.votes}</h3>
                {isLoggedIn && <button className="button-react-icon" onClick={downVote}><FiThumbsDown className="react-icon" /></button>}
            </div>
        </div >
    )
}
export default Votes