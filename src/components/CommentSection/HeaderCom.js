import ButtonCom from './ButtonCom'
import AddComment from './AddComment'

const HeaderCom = ({ commentsToggler, addComment, showComments }) => {

    return (
        <>
            <AddComment addComment={addComment} />
            <ButtonCom commentsToggler={commentsToggler} showComments={showComments} />
        </>
    )
}
export default HeaderCom
























































// import ButtonCom from './ButtonCom'
// import AddComment from './AddComment'

// const HeaderCom = ({ comments, onClick, onAddComment }) => {
//     return (
//         <>
//             <h2>Comments</h2>
//             <AddComment onAddComment={onAddComment} />
//             <ButtonCom text='Show comments' onClick={onClick} />
//         </>
//     )
// }
// export default HeaderCom