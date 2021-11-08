import { useState } from "react"
import { FiSend, FiPlus, FiMinus } from "react-icons/fi"

const AddComment = ({ addComment }) => {
    const [user, setUser] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(3)

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
        // const date = new Date(Date.now()).toDateString()

        if (!user) {
            alert('please add username')

        } else {
            addComment({ user, text, rating, date, votes: 0 })
            setUser('')
            setText('')
            setRating(3)
        }
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="flex-column">
                <div className="container-100 flex-row flex-evenly">
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-user">Username: </label>
                        <input className="default-form w-80" id="comment-form-user" type="text" value={user} placeholder="username" onChange={(e) => setUser(e.target.value)}></input>
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
            </form>

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