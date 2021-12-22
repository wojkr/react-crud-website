import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getData } from "./utils/utils"

const UserIcon = ({ userId }) => {

    const [user, setUser] = useState(false)
    useEffect(() => {
        getData('Users', setUser, userId)
    }, [userId])

    return (
        <Link className="flex-row class-link" to={"/user/" + userId}>
            <div className="user-avatar-container">
                <img className="user-avatar" src={user.avatar || "https://res.cloudinary.com/b789b130931413a/image/upload/v1636730380/react-crud-website/avatar-icon-default_pg8hy1.jpg"} alt={user.name}></img>
            </div>
        </Link>
    )
}
export default UserIcon