import { useState, useEffect, useRef } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { getData, ALERT } from '../utils/utils'
import { Link } from 'react-router-dom'
import Comments from './Comments'
// import HeaderCom from './HeaderCom'
import AddComment from './AddComment'
import Sort from './Sort'
import NavComments from './NavComments'
import Alert from '../utils/Alert'

const CommentSection = ({ isLoggedIn, dataName }) => {
    const commentsRef = useRef(null)
    const scrollToComments = () => commentsRef.current.scrollIntoView()

    const [showAlert, setShowAlert] = useState(false)
    const [alertInfo, setAlertInfo] = useState(['', '', () => { }, '', () => { }])


    const [commentsNumber, setCommentsNumber] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getData(`${dataName}`, setComments)
    }, [])

    const COMMENTS = {
        add: async (comment) => {
            const res = await fetch(`http://localhost:5000/${dataName}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
            const data = await res.json()
            setComments([data, ...comments])
        },
        edit: async (comment) => {
            await fetch(`http://localhost:5000/${dataName}/${comment.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
            const newComments = comments.map((c) => {
                if (c.id === comment.id) {
                    c = comment
                }
                return c
            })
            setComments(newComments)
        },
        delete: async (id) => {
            const deleteFunc = async (id) => {
                await fetch(`http://localhost:5000/${dataName}/${id}`, { method: 'DELETE' })
                setComments(comments.filter((comment) => comment.id !== id))
            }
            ALERT(
                setShowAlert,
                setAlertInfo,
                "are you sure you want to delete comment?",
                'Yes',
                [deleteFunc, id],
                'no',
                () => { }
            )
        },
        showMore: () => {
            setCommentsNumber(true)
        },
        showLess: () => {
            setCommentsNumber(false)
        },
        showNext: () => {
            if (typeof (commentsNumber) !== 'number') {
                setCommentsNumber(0)
            }
            setCommentsNumber(commentsNumber + 10)
        },
        showPrevious: () => {
            if (typeof (commentsNumber) !== 'number') {
                setCommentsNumber(10)
            }
            setCommentsNumber(commentsNumber - 10)
        },
        sort: {
            ratings: {
                best: () => {
                    const sorted = comments.slice()
                    setComments('')
                    setComments(sorted.sort((a, b) => b.rating - a.rating))
                },
                worst: () => {
                    const sorted = comments.slice()
                    setComments('')
                    setComments(sorted.sort((a, b) => a.rating - b.rating))
                }
            },
            votes: {
                best: () => {
                    const sorted = comments.slice()
                    setComments('')
                    setComments(sorted.sort((a, b) => b.votes - a.votes))
                },
                worst: () => {
                    const sorted = comments.slice()
                    setComments('')
                    setComments(sorted.sort((a, b) => a.votes - b.votes))
                }
            },
            date: {
                newest: () => {
                    const sorted = comments.slice()
                    setComments('')
                    setComments(sorted.sort((a, b) => b.date - a.date))
                },
                oldest: () => {
                    const sorted = comments.slice()
                    setComments('')
                    setComments(sorted.sort((a, b) => a.date - b.date))
                }
            }
        }
    }

    return (
        <>
            <div className="comment-section" id="comment-section" >
                <div className="container">
                    <h1 className="title">CommentSection!</h1>
                    {isLoggedIn ?
                        <AddComment addComment={COMMENTS.add} />
                        // <HeaderCom
                        //     addComment={COMMENTS.add}
                        // />
                        :
                        <h3>
                            <Link to="/login" className="button-react-icon">
                                <FiLogIn className="react-icon" />
                            </Link>
                            Log in if you want to add review.
                        </h3>
                    }
                    <p>{comments.length} comments...</p>
                    <Sort
                        commentsRef={commentsRef}
                        sort={COMMENTS.sort}
                    />
                    <Comments
                        editComment={COMMENTS.edit}
                        deleteComment={COMMENTS.delete}
                        comments={comments}
                        commentsNumber={commentsNumber}
                        isLoggedIn={isLoggedIn}
                    />
                    <NavComments
                        COMMENTS={COMMENTS}
                        comments={comments}
                        commentsNumber={commentsNumber}
                        scrollToComments={scrollToComments}
                    />
                </div >
            </div >
            {showAlert && <Alert alertInfo={alertInfo} />}
        </>
    )
}

export default CommentSection