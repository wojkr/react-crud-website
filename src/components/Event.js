import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GroupToggler from "./Groups/GroupToggler"
import { getData } from "./utils/utils"
const Event = ({ event }) => {
    const [group, setGroupName] = useState('')

    useEffect(() => {
        getData('Groups', setGroupName, event.groupId)
    }, [event.groupId])
    // console.log(groupName)
    const [showDescription, setShowDescription] = useState(false)
    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }
    return (<>
        <div id={'event-' + event.id} className="group-container w-100 flex-column">
            <div className="w-100 flex-row">
                <div>
                    <p>{event.title} <i>{event.group && (" hosted by " + group.name)}</i></p>
                    <p>{event.date} {event.time}</p>
                </div>
                <GroupToggler showDescription={showDescription} toggleDescription={toggleDescription} />
            </div>
            <div className={!showDescription ? "container-100 flex-row group-details-container" : "container-100 flex-row group-details-container group-details-container-shown "}>
                <div className="w-80">
                    <p>{event.description}</p>
                    {event.links && <>
                        {event.links.map((link) => <Link to={link.url}>{link.text}</Link>)}
                    </>}
                    <p>{event.going}</p>
                </div>
                <div className="w-40">
                    {event.onlyMembers && <>
                        <p>only for members</p>
                    </>}
                    <p>{event.ticket ? ("ticket: £" + event.cost) : "free"} </p>
                    {event.group && <p><Link className="class-link button-react-icon" to={'/Groups#' + group.id}>show group</Link></p>}
                </div>
            </div>
        </div >
    </>)
}

export default Event