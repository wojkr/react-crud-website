import { useState } from "react"
import { Link } from "react-router-dom"
import GroupToggler from "./GroupToggler"

const Group = ({ group }) => {

    const [showDescription, setShowDescription] = useState(false)
    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }
    return (
        <div id={'group-' + group.id} className="group-container w-100 flex-column">
            <div className="w-100 flex-row">
                <div>
                    <p>{group.name}</p>
                    <p>{group.shortDescription}</p>
                </div>
                <GroupToggler showDescription={showDescription} toggleDescription={toggleDescription} />
            </div>
            <div className={!showDescription ? "container-100 flex-row group-details-container" : "container-100 flex-row group-details-container group-details-container-shown "}>
                <div className="w-80">
                    <p>{group.description}</p>
                    <Link to={("/Events/" + group.id)}>show events</Link>
                    <p>{group.membersId}</p>
                    <p>Membership monthly cost: £{group.cost}</p>
                </div>
                <div className="w-40">
                    <p>meetings {group.date}</p>
                    <p>{group.time}</p>
                    <p>sign to the group</p>
                </div>
            </div>
        </div>
    )
}
export default Group