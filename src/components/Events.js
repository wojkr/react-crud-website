import { useEffect, useState } from "react"
import { getData } from "./utils/utils"
import Event from "./Event"
import { useParams } from "react-router"

const Events = () => {
    const { id } = useParams()
    const [allEvents, setAllEvents] = useState('')
    // const [events, setEvents] = useState('')

    useEffect(() => {
        getData('Events', setAllEvents)
    }, [])
    let events = 0
    // console.log(id, allEvents)
    // events = allEvents
    if (id) {
        if (allEvents.length > 1) events = allEvents.filter((e) => e.groupId === id)
    } else {
        events = allEvents
    }

    return (<>
        <div id="events" className="container-100 full-page pt-10vh box-sizing-border-box ">
            <div className="container">

                <h1>List of Events</h1>
                {events && events.map((event) => <Event key={event.id} event={event} />)}
            </div>
        </div>
    </>)
}
export default Events