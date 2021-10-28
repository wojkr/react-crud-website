import { useState } from "react"

const AddComment = ({ addComment }) => {
    const [user, setUser] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(3)

    const onSubmit = (e) => {

        e.preventDefault()
        console.log([user, text, rating])

        if (!user) {
            alert('please add username')

        } else {
            addComment({ user, text, rating })

            setUser('')
            setText('')
            setRating(3)
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="flex-column">
                <div className="container-100 flex-row flex-evenly">
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-user">Username: </label>
                        <input className="comment-form-user w-80" id="comment-form-user" type="text" value={user} placeholder="username" onChange={(e) => setUser(e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">Rating: </label>
                        <input className="comment-form w-80" id="comment-form-rating" type="number" value={rating} placeholder="rating" onChange={(e) => setRating(e.target.value)}></input>
                    </div>
                    {/* <input type="text" value={text} placeholder="text" onChange={(e) => setText(e.target.value)}></input> */}
                </div>
                <div className="conatainer-100 flex-column flex-a-start w-100">
                    <label htmlFor="comment-form-text">Comment: </label>
                    <textarea className="comment-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={text} placeholder="text" onChange={(e) => setText(e.target.value)}></textarea>
                    <input type="submit" value="post Comment"></input>
                </div>
            </form>

        </>
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