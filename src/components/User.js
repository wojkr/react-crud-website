import { FiEdit } from "react-icons/fi"
// import {  FiUser } from "react-icons/fi"
import LinkToGroup from "./LinkToGroup"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Userfront from "@userfront/react"

import { getData } from "./utils/utils"
import GoBack from "./GoBack"
import ProductSmall from "./ProductSmall"

const User = ({ me }) => {
    console.log(me)
    // const [isItMe]
    const [isMe, setIsMe] = useState(me || false)
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const { id } = useParams()
    const [userLogged, setUserLogged] = useState(Userfront.user || false)

    useEffect(() => {
        alert("go there to sort the routing problem with user: https://reacttraining.com/blog/react-router-v6-pre/#nested-routes-and-layouts")
        console.log(userLogged)
        if (userLogged.userId) {
            console.log(isMe)
            if (isMe) {
                navigate("/user/" + userLogged.userId)
            }
        } else {
            navigate("/Login")
        }
    }, [isMe, userLogged])


    useEffect(() => {
        // getData(`Users`, setUser, id)
        // const axios = require('axios')
        // const options = {
        //     headers: {
        //         Accept: "*/*",
        //         Authorization: "Bearer uf_test_admin_rbvqr4nd_9140bfa19f3e9af9bd1baef9d65d1935"
        //     }
        // }
        // axios.get(`https://api.userfront.com/v0/users/` + id, options)
        //     .then((response) => console.log(response.data))
        //     .catch((err) => console.error(err))
    }, [id])


    // const editUserData = () => {
    //     const axios = require('axios')
    //     const payload = {
    //         userId: 5,
    //         email: "user@example.com",
    //         username: "janedoe",
    //         name: "Jane Doe",
    //         image: "https://res.cloudinary.com/component/image/upload/avatars/avatar-16.png",
    //         locked: false,
    //         data: {
    //             custom: "data"
    //         }
    //     }
    //     axios.put("https://api.userfront.com/v0/users/" + 1, payload, options)
    //         .then((response) => console.log(response.data))
    //         .catch((err) => console.error(err));
    // }

    return (
        <div id="user" className="full-page default-background pt-10vh box-sizing-border-box">
            {user.name ?
                <div className="container flex-row flex-center">
                    <div className="w-40 container-100 flex-column flex-center flex-a-start" style={{ borderRight: 'solid 1px #fff' }}>
                        <div className="user-avatar-big-container">
                            <img className="user-avatar-big" src={user.avatar || "https://res.cloudinary.com/b789b130931413a/image/upload/v1636730380/react-crud-website/avatar-default_gxvuj8.jpg"} alt={user.name}></img>
                        </div>
                        <div className="flex-row border-light">
                            <h1>{user.name}</h1>
                            <button className="button-react-icon"><FiEdit className="react-icon" /></button>
                        </div>
                        <p className="border-light" >Membership from {user.joined}</p>
                        <h4 className="border-light" >Birthday: {user.birthday}</h4>
                        {user.groups ?
                            <div className="border-light">
                                <p>Group Member of </p>
                                <ul className="list-circle">
                                    {user.groups.map((id) => (
                                        <li key={id} ><LinkToGroup id={id} /></li>
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
                        <p className="border-light" >Favorite Drink: <Link to={("/products/" + user.favoriteDrinkId)}>{user.favoriteDrink}</Link></p>
                        <p>Favorite Cookies: <Link to={("/products/" + user.favoriteCookieId)}>{user.favoriteCookie}</Link></p>
                    </div>
                    <div className="container-100 flex-column">
                        {user.img ?
                            <div className="user-image-container flex-grow">
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
                            <p>invite for favortie</p>
                        </div>
                    </div>
                </div>
                :
                <div className="text-center pt-10vh">
                    <h2 >User does not exist</h2>
                    <GoBack />
                </div>
            }

        </div >
    )
}
export default User