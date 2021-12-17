import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import UserIcon from "./UserIcon"
import { getData } from "./utils/utils"

const Event = () => {
    const { id } = useParams()
    const [event, setEvent] = useState('')
    const [group, setGroup] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getData('Events', setEvent, id)
    }, [id])

    useEffect(() => {
        if (event.groupId) {
            fetch(`http://localhost:5000/Groups/${event.groupId}`).then(
                (res) => {
                    res.json().then(
                        (res2) => {
                            setGroup(res2.name)
                        }
                    )
                }, (e) => { console.log(e.message) }
            )
        }
    }, [event.groupId])

    if (!id) {
        navigate('/Events')
    }

    const fetchData = (inResFunc) => {
        fetch(`http://localhost:5000/Events`).then(
            (res) => {
                res.json().then(
                    (res2) => {
                        inResFunc(res2)
                    }
                )
            }, (e) => { console.log(e.message) }
        )
    }

    const goToPreviousEvent = () => {
        const prevEvent = (res) => {
            let newId = id
            res = res.map(e => e.id)
            if (res.indexOf(event.id) === 0) {
                newId = res[res.length - 1]
            } else {
                newId = res.indexOf(event.id)
            }
            navigate(`/Event/${newId}`)
        }
        fetchData(prevEvent)
    }

    const goToNextEvent = () => {
        const nextEvent = (res) => {
            let newId = id
            res = res.map(e => e.id)
            if (res.indexOf(event.id) + 1 < res.length) {
                newId = res[res.indexOf(event.id) + 1]
            } else {
                newId = res[0]
            }
            navigate(`/Event/${newId}`)
        }
        fetchData(nextEvent)
    }

    return (<>
        {event.id && <div id={'event-' + event.id} className="full-page w-100 bg-radial-tr">
            <div className="container">
                <div className="my-1">
                    <h1>{event.title}</h1>
                    <p>
                        <i>{event.group && " hosted by "}
                            <Link
                                to={"/group/" + event.groupId}
                                className="class-link">
                                {event.group && group}
                            </Link></i>
                    </p>
                </div>
                <div className="my-1">
                    <h3>Event description</h3>
                    <p>{event.description}</p>
                    {/* <Link to={("/Events/" + event.id)} className="class-link button-react-icon">Show Events</Link> */}
                </div>
                <div className="flex-row flex-start my-1">
                    {event.going.length > 0 && <>
                        <h3>Going: </h3>
                        {event.going.map((g) => <UserIcon key={g} userId={g} />)}
                    </>}
                </div>
                <div className="group-container flex-row flex-a-start">
                    <div>
                        <p>
                            {event.date} {event.time}
                        </p>
                        <div className="flex-row">
                            {event.ticket ?
                                <p>Ticket: £{event.cost} </p>
                                :
                                <p>Free entry </p>
                            }
                            {event.onlyMembers && <>
                                <p> only for members</p>
                            </>}
                        </div>
                    </div>
                    <div className="flex-column flex-a-end">
                        {event.group && <Link className="class-link button-react-icon" to={'/Group/' + event.id}>Show Group</Link>}
                        <Link to="#" className="class-link button-react-icon" >Book The Ticket</Link>
                        <Link to="/Events" className="class-link button-react-icon" >Show All Events</Link>
                    </div>
                </div>
                <div className="flex-row flex-start">
                    {event.links.length > 0 && <>
                        <h3>Links</h3>
                        {event.links.map((link) => <Link to={link.url} key={link.url}>{link.text}</Link>)}
                    </>}
                </div>
                <div className="flex-row ">
                    <button className="react-icon button-react-icon" onClick={goToPreviousEvent}>previous event</button>
                    <button className="react-icon button-react-icon" onClick={goToNextEvent}>next event</button>
                </div>
            </div>
            {/* <CommentSection isLoggedIn={isLoggedIn} dataName={`CommentsGroup${group.id}`} /> */}
        </div>
        }
    </>)
}

export default Event