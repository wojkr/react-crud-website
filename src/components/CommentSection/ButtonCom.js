const ButtonCom = ({ commentsToggler, showComments }) => {
    return (
        <>
            <button className="btn" onClick={commentsToggler}>{showComments ? 'hideComments' : 'showAllComments'}</button>
        </>
    )
}
export default ButtonCom




































































// const ButtonCom = ({ text, onClick }) => {


//     return (
//         <>
//             <button
//                 onClick={onClick}
//             >
//                 {text}
//             </button>
//         </>
//     )
// }

// export default ButtonCom