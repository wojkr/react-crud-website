import { FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import Userfront from "@userfront/react"
import { useState } from "react"

const Votes = ({ comment, editComment, isLoggedIn }) => {
    const [userLogged, setUserLogged] = useState(Userfront.user || false)

    const upVote = () => {
        if (comment.upVoteIds.indexOf(userLogged.userId.toString()) === -1) {//if user didnt upvote 
            comment.votes++
            comment.upVoteIds = [...comment.upVoteIds, userLogged.userId.toString()]
            if (comment.downVoteIds.indexOf(userLogged.userId.toString()) !== -1) {//if user did downvote 
                comment.downVoteIds = comment.downVoteIds.filter((c) => c !== userLogged.userId.toString())
                comment.votes++
            }
        } else {
            comment.votes--
            comment.upVoteIds = comment.upVoteIds.filter((c) => c !== userLogged.userId.toString())
        }
        editComment(comment)
    }
    const downVote = () => {
        if (comment.downVoteIds.indexOf(userLogged.userId.toString()) === -1) {//if user didnt downvote 
            comment.votes--
            comment.downVoteIds = [...comment.downVoteIds, userLogged.userId.toString()]
            if (comment.upVoteIds.indexOf(userLogged.userId.toString()) !== -1) {//if user did upvote 
                comment.upVoteIds = comment.upVoteIds.filter((c) => c !== userLogged.userId.toString())
                comment.votes--
            }
        } else {
            comment.votes++
            comment.downVoteIds = comment.downVoteIds.filter((c) => c !== userLogged.userId.toString())
        }
        editComment(comment)
    }
    return (
        <div className="container-100 flex-row comment-votes" >
            <p> Was that comment helpfull ?</p >
            <div className="flex-row flex-a-center">
                {
                    userLogged.userId &&
                    <button
                        className={comment.upVoteIds && comment.upVoteIds.indexOf(userLogged.userId.toString()) === -1 ?
                            "button-react-icon"
                            :
                            "button-react-icon upVoted"
                        }
                        onClick={upVote}>
                        <FiThumbsUp className="react-icon" />
                    </button>
                }
                <h3>{comment.votes > 0 ? '+' : ''}{comment.votes}</h3>
                {
                    userLogged.userId &&
                    <button
                        className={comment.downVoteIds && comment.downVoteIds.indexOf(userLogged.userId.toString()) === -1 ?
                            "button-react-icon"
                            :
                            "button-react-icon downVoted"
                        }
                        onClick={downVote}>
                        <FiThumbsDown className="react-icon" />
                    </button>
                }
            </div>
        </div >
    )
}
export default Votes