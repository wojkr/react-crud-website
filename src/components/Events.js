import { useEffect, useState } from "react"
import { getData } from "./utils/utils"
import Event from "./Event"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const Events = () => {
    const { id } = useParams()
    const [allEvents, setAllEvents] = useState([])
    let events = []
    useEffect(() => {
        getData('Events', setAllEvents)
    }, [])
    if (id && allEvents) {
        events = allEvents.filter((e) => e.groupId && e.groupId.toString() === id)
    } else {
        events = allEvents
    }

    return (<>
        <div id="events" className="container-100 full-page pt-10vh box-sizing-border-box ">
            <div className="container">
                {events ? <h1>List of Events</h1> : <h1>No upcoming events</h1>}
                {events && events.map((event) => <Event key={event.id} event={event} />)}
                {id && <Link to="/Events" className="class-link button-react-icon" >Show All Events</Link>}
            </div>
        </div>
    </>)
}
export default Events