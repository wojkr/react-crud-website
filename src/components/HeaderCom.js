import ButtonCom from './ButtonCom'
import AddComment from './AddComment'

const HeaderCom = ({ commentsToggler, onAddComment }) => {
    return (
        <>
            <h1>Hello</h1>
            <AddComment onAddComment={onAddComment} />
            <ButtonCom commentsToggler={commentsToggler} />
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