const Image = ({ imgState, image }) => {
    return (
        <>
            <img className={imgState} src={image.url} alt="showcase-img"></img>
        </>
    )

}
export default Image