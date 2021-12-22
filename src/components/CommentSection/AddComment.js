import { useEffect, useState } from "react"
import { FiSend, FiPlus, FiMinus } from "react-icons/fi"
import { Link } from "react-router-dom"
import UserIcon from "../UserIcon"
import { getData } from "../utils/utils"
import Userfront from "@userfront/react";


const AddComment = ({ addComment }) => {
    const [showCommentForm, setShowCommentForm] = useState(false)
    const [user, setUser] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(3)
    // const userId = window.sessionStorage.getItem('userId')
    const [userId] = useState(Userfront.user.userId || false)

    // console.log(user)
    useEffect(() => {
        getData('Users', setUser, userId)
    }, [userId])

    const ratingPlus = () => {
        if (rating < 5) {
            setRating(rating + 1)
        }
    }
    const ratingMinus = () => {
        if (rating > 0) {
            setRating(rating - 1)
        }
    }
    const onSubmit = (e) => {

        e.preventDefault()
        const date = Date.now()
        let userName = user.name
        // const date = new Date(Date.now()).toDateString()

        if (!user) {
            alert('please add username')

        } else {
            addComment({
                userId, "user": userName, text, rating, date, votes: 0,
                "downVoteIds": [],
                "upVoteIds": []
            })
            setUser('')
            setText('')
            setRating(3)
        }
    }

    return (
        <div className=" default-box-container">
            <div className="flex-row">
                <h3>Add a comment...</h3>
                <button
                    className="button-react-icon"
                    onClick={() => setShowCommentForm(!showCommentForm)}
                >
                    {showCommentForm ?
                        <FiMinus className="react-icon" />
                        :
                        <FiPlus className="react-icon" />
                    }
                </button>
            </div>

            {showCommentForm && <form onSubmit={onSubmit} className="flex-column">
                <div className="container-100 flex-row flex-evenly">
                    <div className="flex-row flex-start flex-grow">
                        <Link to={"/User/" + userId} className="class-link">{user.name}</Link>
                        <UserIcon userId={userId} />
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">Rating: </label>
                        <div className="flex-row">
                            <button type="button" className="button-react-icon" onClick={ratingMinus}><FiMinus className="react-icon" /></button>
                            <h3>{rating}</h3>
                            <button type="button" className="button-react-icon" onClick={ratingPlus}><FiPlus className="react-icon" /></button>
                            <input className="default-form w-80" id="comment-form-rating" type="hidden" value={rating} placeholder="rating" onChange={(e) => setRating(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className="conatainer-100 flex-column flex-a-start w-100">
                    <label htmlFor="comment-form-text">Comment: </label>
                    <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={text} placeholder="text" onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button>
            </form>}
        </div>
    )
}

export default AddComment


























// import { useState } from 'react'

// const AddComment = ({ onAddComment }) => {

//     const [user, setUser] = useState('')
//     const [text, setComment] = useState('')
//     const [rating, setRating] = useState(3)

//     const onSubmit = (e) => {

//         e.preventDefault()

//         onAddComment({ user, text, rating })

//         setUser('')
//         setComment('')
//         setRating(3)

//     }

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <input type="text" value={user} placeholder="username" onChange={(e) => setUser(e.target.value)}></input>
//                 <input type="text" value={text} placeholder="comment" onChange={(e) => setComment(e.target.value)}></input>
//                 <input type="number" value={rating} placeholder="rating" onChange={(e) => setRating(e.target.value)}></input>
//                 <input type="submit" value="Comment!"></input>
//             </form >
//         </>
//     )
// }

// export default AddComment