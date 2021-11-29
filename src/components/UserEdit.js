import { useState, useEffect } from "react"
import { FiSend, FiPlus, FiX } from "react-icons/fi"
import { useParams, useNavigate } from "react-router-dom"
import Userfront from "@userfront/react"
import { getData } from "./utils/utils"
import GoBack from "./GoBack"

const UserEdit = () => {

    const { id } = useParams()
    const [bio, setBio] = useState('')
    const [birthday, setBirthday] = useState('')
    const [hobby, setHobby] = useState('')
    const [newHobby, setNewHobby] = useState('')
    const [favDrink, setFavDrink] = useState('')
    const [favCookie, setFavCookie] = useState('')

    const [products, setProducts] = useState([])
    const [drinks, setDrinks] = useState([])
    const [cookies, setCookies] = useState([])

    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [userLogged] = useState(Userfront.user || false)

    const [userFlag, setUserFlag] = useState(false)

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

    useEffect(() => {

        if (userFlag === false) {
            getData('Users', setUser, id)
            if (user.id) {
                setBio(user.bio)
                setBirthday(user.birthday)
                setHobby(user.hobby)
                setFavDrink(user.favoriteDrinkId)
                setFavCookie(user.favoriteCookieId)
                setUserFlag(true)
            }
        }
        if (products.length < 2) getData('Products', setProducts)
        setDrinks(products.filter((p) => p.type === 1))
        setCookies(products.filter((p) => p.type === 2))
        // eslint-disable-next-line 
    }, [products, user])


    // if (products.length > 1 && drinks.length < 2) {
    // }    
    const addHobby = () => {
        if (newHobby.trim() !== '' && hobby.indexOf(newHobby.trim()) === -1)
            setHobby([...hobby, newHobby.trim()])
        setNewHobby('')
    }
    const removeHobby = (toRemove) => {
        setHobby(hobby.filter((h) => h !== toRemove))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (<>
        <div className="full-page flex-column flex-center default-background">
            <h1>userEdit page</h1>
            <div className="default-box-container w-40">
                {//birthday, hobby, favDrink,favCookie,userBioText,
                }
                {/* {wrongPassword && <p className="message-error">{wrongPassword}</p>} */}
                <form onSubmit={onSubmit} className="flex-column">
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text">Bio: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={bio} placeholder="text" onChange={(e) => setBio(e.target.value)}></textarea>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-user">birthday</label>
                        <input className="default-form w-100" id="comment-form-user" type="text" value={birthday} placeholder="Bithday" onChange={(e) => setBirthday(e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-rating">Hobby: </label>
                        <div className="w-100 flex-row flex-start flex-wrap">
                            {hobby && hobby.map((h) =>
                                <div key={h} className="default-form flex-row flex-a-center bg-lighter-60 mr-small">
                                    {h} <button type="button" className="button-react-icon" onClick={() => removeHobby(h)}><FiX className="react-icon" /></button>
                                </div>)}
                        </div>
                        <div className="w-100 flex-row flex-evenly">
                            <input className="default-form w-100" id="comment-form-rating" type="text" value={newHobby} placeholder="Add new hobby" onChange={(e) => setNewHobby(e.target.value)}></input>
                            <button type="button" className="button-react-icon" onClick={addHobby}><FiPlus className="react-icon" /></button>
                        </div>
                    </div>
                    <div className="flex-column flex-a-start flex-grow w-100">
                        <label htmlFor="comment-form-rating">FavDrink: </label>
                        <select className="default-form w-100" value={favDrink} onChange={(e) => setFavDrink(e.target.value)}>
                            <option value=''></option>)
                            {
                                drinks && drinks.map((d) =>
                                    <option key={d.id} value={d.id}>{d.name}</option>)
                            }
                        </select>
                        {/* <input className="default-form w-80" id="comment-form-rating" type="text" value={favDrink} placeholder="favDrink" onChange={(e) => setFavDrink(e.target.value)}></input> */}
                    </div>
                    <div className="flex-column flex-a-start flex-grow w-100">
                        <label htmlFor="comment-form-rating">FavCookie: </label>
                        <select className="default-form w-100" value={favCookie} onChange={(e) => setFavCookie(e.target.value)}>
                            <option value=''></option>)
                            {
                                cookies && cookies.map((c) =>
                                    <option key={c.id} value={c.id}>{c.name}</option>)
                            }
                        </select>
                    </div>
                    <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button>
                    <GoBack />
                </form>
                {/* <LoginForm /> */}
                {/* {/* <h3>If you dont have account, Sign in here: <Link to="/register"> <button className="button-react-icon"><FiFeather className="react-icon" /></button></Link></h3> */}
            </div>
        </div>
    </>
    )
}

export default UserEdit