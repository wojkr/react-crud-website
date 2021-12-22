import { useState } from "react"
import { Link } from "react-router-dom"
import GroupToggler from "./GroupToggler"
import UserIcon from "../UserIcon"

const GroupBox = ({ group }) => {

    const [showDescription, setShowDescription] = useState(false)
    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }
    return (
        <div id={'group-' + group.id} className="group-container w-100 flex-column">
            <div className="w-100 flex-row">
                <div>
                    <Link className="class-link title" to={`/group/${group.id}`}>{group.name}</Link>
                    <p>{group.shortDescription}</p>
                </div>
                <GroupToggler showDescription={showDescription} toggleDescription={toggleDescription} />
            </div>
            <div className={!showDescription ? "container-100 flex-column flex-a-start group-details-container" : "container-100 flex-column flex-a-start group-details-container group-details-container-shown "}>
                <div className="flex-row">
                    <div className="w-80">
                        <p>{group.description}</p>
                        <Link to={("/Events/" + group.id)} className="class-link-text">show events</Link>
                    </div>
                    <div className="w-40">
                        <p>meetings {group.date}</p>
                        <p>{group.time}</p>
                        <p>sign to the group</p>
                    </div>
                </div>
                <div className="flex-row flex-start">
                    <h3>Members: </h3>
                    {group.membersId && <>
                        {group.membersId.map((g) => <UserIcon key={g} userId={g} />)}
                    </>}
                </div>
                <div>
                    <p>Membership monthly cost: £{group.cost}</p>
                </div>
            </div>
        </div>
    )
}
export default GroupBox