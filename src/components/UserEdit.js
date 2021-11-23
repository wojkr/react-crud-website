import { useState, useEffect } from "react"
import { FiSend } from "react-icons/fi"
import { useParams, useNavigate } from "react-router-dom"
import Userfront from "@userfront/react"

const UserEdit = () => {


    const { id } = useParams()
    const [bio, setBio] = useState('')
    const [birthday, setBirthday] = useState('')
    const [hobby, setHobby] = useState('')
    const [favDrink, setFavDrink] = useState('')
    const [favCookie, setFavCookie] = useState('')


    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [userLogged] = useState(Userfront.user || false)

    useEffect(() => {
        if (!userLogged.userId) {
            if (id) {
                navigate("/user/" + id)
            } else {
                navigate("/Login")
            }
        } else {
            if (id !== userLogged.userId.toString()) {
                if (id) {
                    navigate("/user/" + id)
                } else {
                    navigate("/user/edit/" + userLogged.userId)
                }
            }
        }
    }, [navigate, id, userLogged])



    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (<>
        <div className="full-page flex-column flex-center default-background">
            <h1>userEdit page</h1>
            <div className="default-box-container">
                {//birthday, hobby, favDrink,favCookie,userBioText,
                }
                {/* {wrongPassword && <p className="message-error">{wrongPassword}</p>} */}
                <form onSubmit={onSubmit} className="flex-column">
                    <div className="conatainer-100 flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text">Bio: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={bio} placeholder="text" onChange={(e) => setBio(e.target.value)}></textarea>
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-user">birthday</label>
                        <input className="default-form w-80" id="comment-form-user" type="text" value={birthday} placeholder="Bithday" onChange={(e) => setBirthday(e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">Hobby: </label>
                        <input className="default-form w-80" id="comment-form-rating" type="text" value={hobby} placeholder="Hobby" onChange={(e) => setHobby(e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">FavDrink: </label>
                        <select onChange={(e) => setFavDrink(e.target.value)}>
                            <option value="DrinkId1">Drink1</option>
                            <option value="DrinkId2">Drink2</option>
                            <option value="DrinkId3">Drink3</option>
                        </select>
                        {/* <input className="default-form w-80" id="comment-form-rating" type="text" value={favDrink} placeholder="favDrink" onChange={(e) => setFavDrink(e.target.value)}></input> */}
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">FavCookie: </label>
                        <input className="default-form w-80" id="comment-form-rating" type="text" value={favCookie} placeholder="favCookie" onChange={(e) => setFavCookie(e.target.value)}></input>
                    </div>
                    <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button>
                </form>
                {/* <LoginForm /> */}
                {/* {/* <h3>If you dont have account, Sign in here: <Link to="/register"> <button className="button-react-icon"><FiFeather className="react-icon" /></button></Link></h3> */}
            </div>
        </div>
    </>
    )
}
export default UserEdit