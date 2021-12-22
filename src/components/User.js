import { FiEdit } from "react-icons/fi"
import LinkToGroup from "./LinkToGroup"
import { useEffect, useLayoutEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Userfront from "@userfront/react"

import { getData } from "./utils/utils"
import GoBack from "./GoBack"
import ProductSmall from "./ProductSmall"

const User = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const { id } = useParams()
    const [userLogged] = useState(Userfront.user || false)

    useEffect(() => {
        if (!id) {
            if (userLogged.userId) {
                navigate("/user/" + userLogged.userId)
            } else {
                navigate("/Login")
            }
        }
    }, [navigate, id, userLogged])


    useLayoutEffect(() => {
        let isSubscribed = true
        getData(`Users`, setUser, id, undefined, isSubscribed)
        return () => isSubscribed = false
    }, [id])

    return (
        <div id="user" className="full-page default-background box-sizing-border-box">
            {user.name ?
                <div className="container flex-row flex-center flex-a-start">
                    <div style={{ borderRight: 'solid 1px #fff' }}>
                        <div>
                            <div className="user-avatar-big-container">
                                <img className="user-avatar-big" src={user.avatar || "https://res.cloudinary.com/b789b130931413a/image/upload/v1636730380/react-crud-website/avatar-default_gxvuj8.jpg"} alt={user.name}></img>
                            </div>
                        </div>
                        <div className="flex-row border-light">
                            <h1>{user.name}</h1>
                            {userLogged.userId === parseInt(id) && <Link to={"/user/edit/" + id} className="class-link button-react-icon"><FiEdit className="react-icon" /></Link>}
                        </div>
                        <p className="border-light" >Membership from {user.joined}</p>
                        <h4 className="border-light" >Birthday: {user.birthday}</h4>
                        {user.groups ?
                            <div className="border-light">
                                <p>Group Member of </p>
                                <ul className="list-circle">
                                    {user.groups.map((id) => (
                                        <li key={id} className="no-wrap"><LinkToGroup id={id} /></li>
                                    ))}
                                </ul>
                            </div>
                            :
                            <ul className="border-light list-circle">
                                <li>Did not join any Group yet</li>
                            </ul>
                        }
                        <p className="border-light" >Hobby: </p>
                        {user.hobby ?
                            <>
                                <ul className="list-circle">
                                    {user.hobby.map((hobby) => (
                                        <li key={hobby}>{hobby}</li>
                                    ))}
                                </ul>
                            </>
                            :
                            <ul className="list-circle">
                                <li>Not Added Yet</li>
                            </ul>
                        }
                        <p className="border-light" >Favorite Drink: <Link to={("/products/" + user.favoriteDrinkId)} className="class-link-text">{user.favoriteDrink}</Link></p>
                        <p>Favorite Cookies: <Link to={("/products/" + user.favoriteCookieId)} className="class-link-text">{user.favoriteCookie}</Link></p>
                    </div>
                    <div className="flex-column">
                        {user.img ?
                            <div className="user-image-container">
                                <img className="user-image" src={user.img} alt={user.name}></img>
                            </div>
                            :
                            <h3>Image not added yet</h3>
                        }
                        <p>Bio: {user.bio}</p>
                        <div className="text-center">
                            <div className="flex-row flex-center flex-a-baseline">
                                <h1>favorite</h1>
                                <h3>Drink +Cookie</h3>
                            </div>
                            <div className="flex-row flex-center">
                                <ProductSmall id={user.favoriteDrinkId} />
                                <h3>+</h3>
                                <ProductSmall id={user.favoriteCookieId} />
                            </div>
                            {userLogged.userId && (userLogged.userId !== parseInt(id)) && <p>invite for favortie</p>}
                        </div>
                    </div>
                </div>
                :
                <div className="text-center pt-10vh">
                    <h2 >User does not exist</h2>
                    <GoBack />
                </div>
            }
        </div>
    )
}
export default User