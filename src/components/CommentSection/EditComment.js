import { useState } from "react"

const EditComment = ({ comment, onClick, editComment }) => {

    const [user, setUser] = useState(comment.user)
    const [text, setText] = useState(comment.text)
    const [rating, setRating] = useState(comment.rating)
    const id = comment.id;
    const onSubmit = (e) => {

        e.preventDefault()
        console.log([user, text, rating])

        if (!(user && text)) {
            alert('please add username/text')
        } else {
            editComment({ user, text, rating, id })
            onClick();
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" value={user} placeholder="username" onChange={(e) => setUser(e.target.value)}></input>
                <input type="text" value={text} placeholder="text" onChange={(e) => setText(e.target.value)}></input>
                <input type="number" value={rating} placeholder="rating" onChange={(e) => setRating(e.target.value)}></input>
                <input type="submit" value="Save Comment"></input>
            </form>

        </>
    )
}

export default EditComment