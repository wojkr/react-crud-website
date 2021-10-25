const Comment = ({ comment }) => {
    return (
        <div className="task">
            <h3>{comment.user}</h3>
            <p>{comment.text}</p>
            <p><strong>{comment.rating}</strong></p>
        </div>
    )
}

export default Comment














































// const Comment = ({ comment }) => {
//     return (
//         <div className='task'>
//             <h3>User: {comment.user}</h3>
//             <p>Comment: {comment.text}</p>
//             <p>Rating: {comment.rating}</p>
//         </div>
//     )
// }

// export default Comment