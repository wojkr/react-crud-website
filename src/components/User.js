import { FiEdit } from "react-icons/fi"

const User = ({ user }) => {
    return (
        <div id="user" className="full-page default-background">
            <div className="container flex-row flex-center">
                <div className="w-40 container-100 flex-column flex-center flex-a-start" style={{ borderRight: 'solid 1px #fff' }}>
                    <div className="user-avatar-big-container">
                        <img className="user-avatar-big" src={user.avatar} alt={user.name}></img>
                    </div>
                    <div className="flex-row user-border-light">
                        <h1>{user.name}</h1>
                        <button className="button-react-icon"><FiEdit className="react-icon" /></button>
                    </div>
                    <p>Bio: {user.bio}</p>
                    <p className="user-border-light" >Membership from {user.joined}</p>
                    <h4 className="user-border-light" >Birthday: {user.birthday}</h4>
                    {user.groups ?
                        <div className="user-border-light">
                            <p>Group Member of </p>
                            <ul>
                                {user.groups.map((group) => (
                                    <li key={group}>{group}</li>
                                ))}
                            </ul>
                        </div>
                        :
                        <p className="user-border-light" >Did not join any Group yet</p>
                    }
                    <p className="user-border-light" >Hobby: </p>
                    {user.hobby ?
                        <>
                            <ul>
                                {user.hobby.map((hobby) => (
                                    <li key={hobby}>{hobby}</li>
                                ))}
                            </ul>
                        </>
                        :
                        <li>Not Added Yet</li>
                    }
                    <p className="user-border-light" >Favorite Drink: <a href={user.favoriteDrinkId}>{user.favoriteDrink}</a></p>
                    <p>Favorite Cookies: <a href={user.favoriteCookieId}>{user.favoriteCookie}</a></p>
                </div>
                <div className="container grid-center">
                    <div className="user-image-container ">
                        <img className="user-image" src={user.img} alt={user.name}></img>
                    </div>
                    <h1>favorite</h1>
                    <div className="flex-row">
                        <div>
                            <h3>drink</h3>
                        </div>
                        <div>
                            <h3>+</h3>
                        </div>
                        <div>
                            <h3>Cookie</h3>
                        </div>

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