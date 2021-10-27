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
            <form onSubmit={onSubmit}>
                <input type="text" value={user} placeholder="username" onChange={(e) => setUser(e.target.value)}></input>
                <input type="text" value={text} placeholder="text" onChange={(e) => setText(e.target.value)}></input>
                <input type="number" value={rating} placeholder="rating" onChange={(e) => setRating(e.target.value)}></input>
                <input type="submit" value="post Comment"></input>
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