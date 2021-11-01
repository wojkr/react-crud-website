import { useState } from "react"
import { FiSave, FiX } from "react-icons/fi"

const EditComment = ({ comment, onClick, editComment }) => {

    const [user, setUser] = useState(comment.user)
    const [text, setText] = useState(comment.text)
    const [rating, setRating] = useState(comment.rating)
    const id = comment.id
    let votes = 0
    let date = Date.now()
    comment.votes ? votes = comment.votes : votes = 0
    comment.date ? date = comment.date : date = Date.now()


    const onSubmit = (e) => {

        e.preventDefault()
        console.log([user, text, rating])

        if (!(user && text)) {
            alert('please add username/text')
        } else {
            editComment({ user, text, rating, id, date, votes })
            onClick()
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="flex-column">
                <div className="container-100 flex-row flex-evenly flex-a-start">
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-user">Username: </label>
                        <input className="comment-form-user w-80" id="comment-form-user" type="text" value={user} placeholder="username" onChange={(e) => setUser(e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">Rating: </label>
                        <input className="comment-form w-80" id="comment-form-rating" type="number" value={rating} placeholder="rating" onChange={(e) => setRating(e.target.value)}></input>
                    </div>
                    <button className="button-react-icon" onClick={onClick}><FiX className="react-icon" /></button>
                </div>
                <div className="conatainer-100 flex-column flex-a-start w-100">
                    <label htmlFor="comment-form-text">Comment: </label>
                    <textarea className="comment-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={text} placeholder="text" onChange={(e) => setText(e.target.value)}></textarea>
                    <button className="button-react-icon" type="submit"><FiSave className="react-icon" /></button>
                </div>
            </form>
        </>
    )
}

export default EditComment