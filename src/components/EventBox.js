import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GroupToggler from "./Groups/GroupToggler"
import UserIcon from "./UserIcon"
import { getData } from "./utils/utils"
const EventBox = ({ event }) => {
    const [group, setGroup] = useState('')

    useEffect(() => {
        getData('Groups', setGroup, event.groupId)
    }, [event.groupId])

    const [showDescription, setShowDescription] = useState(false)
    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }
    return (<>
        <div id={'event-' + event.id} className="group-container w-100 flex-column">
            <div className="w-100 flex-row">
                <div>
                    <p>
                        <Link
                            to={"/Event/" + event.id}
                            className="class-link">
                            {event.title}
                        </Link>
                        <i>
                            {event.group && " hosted by "}
                            <Link
                                to={"/group/" + event.groupId}
                                className="class-link">
                                {event.group && group.name}
                            </Link>
                        </i>
                    </p>
                    <p>{event.date} {event.time}</p>
                </div>
                <GroupToggler showDescription={showDescription} toggleDescription={toggleDescription} />
            </div>
            <div className={!showDescription ? "container-100 flex-row group-details-container" : "container-100 flex-row group-details-container group-details-container-shown "}>
                <div className="w-80">
                    <h3>Event description</h3>
                    <p>{event.description}</p>
                    <div className="flex-row flex-start">
                        <h3>Links</h3>
                        {event.links && <>
                            {event.links.map((link) => <Link to={link.url} key={link.url}>{link.text}</Link>)}
                        </>}
                    </div>
                    <div className="flex-row flex-start">
                        <h3>Going</h3>
                        {event.links && <>
                            {event.going.map((g) => <UserIcon key={g} userId={g} />)}
                        </>}
                    </div>
                </div>
                <div className="w-40">
                    {event.onlyMembers && <>
                        <p>only for members</p>
                    </>}
                    <p>{event.ticket ? ("ticket: £" + event.cost) : "free"} </p>
                    {event.group && <p><Link className="class-link button-react-icon" to={'/Group/' + group.id}>show group</Link></p>}
                </div>
            </div>
        </div >
    </>)
}

export default EventBox