import Comments from './Comments'
import HeaderCom from './HeaderCom'
import Sort from './Sort'
import NavComments from './NavComments'
import Alert from '../utils/Alert'
import { FiLogIn } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import { getData, ALERT } from '../utils/utils'

const CommentSection = ({ isLoggedIn, setShowLogInForm }) => {

    const commentsRef = useRef(null)
    const scrollToComments = () => commentsRef.current.scrollIntoView()

    const [showAlert, setShowAlert] = useState(false)
    const [alertInfo, setAlertInfo] = useState(['', '', () => { }, '', () => { }])


    const [commentsNumber, setCommentsNumber] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getData('Comments', setComments)
    }, [])

    const COMMENTS = {
        add: async (comment) => {
            const res = await fetch(`http://localhost:5000/Comments`, {
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
            await fetch(`http://localhost:5000/Comments/${comment.id}`, {
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
                await fetch(`http://localhost:5000/Comments/${id}`, { method: 'DELETE' })
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

    const goToLogInForm = () => {
        setShowLogInForm(true)
    }

    return (
        <>
            <div className="comment-section" id="comment-section" >
                <div className="container">
                    <h1>CommentSection!</h1>

                    {isLoggedIn ? <HeaderCom
                        addComment={COMMENTS.add}
                    />
                        : <h3><button className="button-react-icon" onClick={goToLogInForm}><FiLogIn className="react-icon" /></button>Log in if you want to add review.</h3>}
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