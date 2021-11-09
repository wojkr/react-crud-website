import { FiEdit } from "react-icons/fi"
import LinkToGroup from "./LinkToGroup"
import ProductSmall from "./ProductSmall"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getData } from "./utils/utils"
import { Link } from "react-router-dom"

const User = () => {
    const [user, setUser] = useState('')
    const { id } = useParams()

    useEffect(() => {
        getData(`Users`, setUser, id)
    }, [id])

    return (
        <div id="user" className="full-page default-background pt-10vh box-sizing-border-box">
            <div className="container flex-row flex-center">
                <div className="w-40 container-100 flex-column flex-center flex-a-start" style={{ borderRight: 'solid 1px #fff' }}>
                    <div className="user-avatar-big-container">
                        <img className="user-avatar-big" src={user.avatar} alt={user.name}></img>
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
                                    <li ><LinkToGroup id={id} /></li>
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
                    <div className="user-image-container flex-grow">
                        <img className="user-image" src={user.img} alt={user.name}></img>
                    </div>
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
                    {/* name: 'cat',
                isMember: false,
                groups: [
                    'The Wool Circle',
                    'The Beverage Academy'
                ],
                img: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1501&q=80',
                avatar: '',
                hobby: ['milk', 'lush wool ball', 'mice'],
                favoriteDrink: 'milk',
                favoriteCookie: 'milk buttons' */}
                </div>
            </div>

        </div >
    )
}
export default User