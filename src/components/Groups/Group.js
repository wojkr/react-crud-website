import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import UserIcon from "../UserIcon"
import { getData } from "../utils/utils"
import CommentSection from "../CommentSection/CommentSection"

const Group = (isLoggedIn) => {
    const { id } = useParams()
    const [group, setGroup] = useState({})
    // console.log(id)

    useEffect(() => {
        getData('Groups', setGroup, id)
    }, [id])

    return (<>
        {
            group.id && <div id={'group-' + group.id} className="full-page w-100">
                <div className="container">

                    <div className="my-1">
                        <h1>{group.name}</h1>
                        <i>{group.shortDescription}</i>
                    </div>
                    <div className="flex-row my-1">
                        <p>{group.description}</p>
                        <Link to={("/Events/" + group.id)} className="class-link button-react-icon">Show Events</Link>
                    </div>
                    <div className="flex-row flex-start my-1">
                        <h3>Members: </h3>
                        {group.membersId && <>
                            {group.membersId.map((g) => <UserIcon key={g} userId={g} />)}
                        </>}
                    </div>
                    <div className="group-container flex-row">
                        <div>
                            <p>Membership monthly cost: £{group.cost}</p>
                            <p>meetings {group.date}</p>
                            <p>{group.time}</p>
                        </div>
                        <div className="flex-column flex-a-end">
                            <Link to="#" className="class-link button-react-icon" >Sign to the Group</Link>
                            <Link to="/Groups" className="class-link button-react-icon" >Show All Groups</Link>
                        </div>
                    </div>
                </div>
                {/* <CommentSection isLoggedIn={isLoggedIn} dataName={`CommentsGroup${group.id}`} /> */}
            </div>
        }
    </>
    )
}
export default Group