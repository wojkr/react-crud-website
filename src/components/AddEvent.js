import { useState } from "react"
import { FiX, FiPlus, FiSend } from "react-icons/fi"
import GoBack from './GoBack'

//   "id": 4,
//   "title": "Meeting with coffee maker mr John Lee",
//   "group": true,
//   "groupId": 3000,
//   "going": [
//     6
//   ],
//   "onlyMembers": true,
//   "description": "World class plantator, owner of coffee factory will share the secrets of craft. Master brought some gifts for attendance, after lecture we will drink coffee together",
//   "links": [
//     {
//       "text": "dummyLink",
//       "url": "/"
//     }
//   ],
//   "date": "29march2022",
//   "time": "6.30pm",
//   "ticket": true,
//   "cost": 5


// Line 45: 33: 'onSubmit' is not defined       no - undef
//   Line 56: 71: 'GroupId' is not defined        no - undef
//   Line 66: 157: 'setOnlyMemers' is not defined  no - undef
//   Line 85: 111: 'removeHobby' is not defined    no - undef
//   Line 85: 131: 'FiX' is not defined            react / jsx - no - undef
//   Line 90: 90: 'addHobby' is not defined       no - undef
//   Line 90: 101: 'FiPlus' is not defined         react / jsx - no - undef
//   Line 109: 87: 'FiSend' is not defined         react / jsx - no - undef
//   Line 110: 22: 'GoBack' is

const addLink = () => {

    console.log('addLink')
}
const removeLink = () => {

    console.log('removeLink')
}

const onSubmit = () => {
    console.log('onSubmit')
}

const AddEvent = () => {
    const [title, setTitle] = useState('')
    const [group, setGroup] = useState('')
    const [groupId, setGroupId] = useState('')
    const [onlyMembers, setOnlyMembers] = useState('')
    const [description, setDescription] = useState('')
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState([])
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [ticket, setTicket] = useState('')
    const [cost, setCost] = useState('')

    return (<>
        <div className="full-page flex-column flex-center default-background">
            <h1>Add an New Event</h1>
            <div className="default-box-container w-40">
                {//birthday, hobby, favDrink,favCookie,userBioText,
                }
                {/* {wrongPassword && <p className="message-error">{wrongPassword}</p>} */}
                <form onSubmit={onSubmit} className="flex-column">
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text">Title: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}></textarea>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-user">Is Group hosting it?</label>
                        <input className="default-form w-100" id="comment-form-user" type="text" value={group} placeholder="Group" onChange={(e) => setGroup(e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start flex-grow w-100">
                        <label htmlFor="comment-form-rating">Choose group: </label>
                        <select className="default-form w-100" value={groupId} onChange={(e) => setGroupId(e.target.value)}>
                            <option value=''></option>)
                            {
                                // cookies && cookies.map((c) =>
                                //     <option key={c.id} value={c.id}>{c.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-user">Is Only for members of group?</label>
                        <input className="default-form w-100" id="comment-form-user" type="text" value={onlyMembers} placeholder="Bithday" onChange={(e) => setOnlyMembers > (e.target.value)}></input>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text">Description: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={description} placeholder="text" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-rating">Links: </label>
                        <div className="w-100 flex-row flex-start flex-wrap">
                            {links && links.map((link) =>
                                <div key={link} className="default-form flex-row flex-a-center bg-lighter-60 mr-small">
                                    {link} <button type="button" className="button-react-icon" onClick={() => removeLink(link)}><FiX className="react-icon" /></button>
                                </div>)}
                        </div>
                        <div className="w-100 flex-row flex-evenly">
                            <input className="default-form w-100" id="comment-form-rating" type="text" value={newLink} placeholder="Add a new link" onChange={(e) => setNewLink(e.target.value)}></input>
                            <button type="button" className="button-react-icon" onClick={addLink}><FiPlus className="react-icon" /></button>
                        </div>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text">Date: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={date} placeholder="date" onChange={(e) => setDate(e.target.value)}></textarea>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text">Time: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={time} placeholder="time" onChange={(e) => setTime(e.target.value)}></textarea>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text"> Is Ticket required: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={ticket} placeholder="ticket" onChange={(e) => setTicket(e.target.value)}></textarea>
                    </div>
                    <div className="flex-column flex-a-start w-100">
                        <label htmlFor="comment-form-text">Ticket cost: </label>
                        <textarea className="default-form comment-form-text flex-grow w-100" id="comment-form-text" type="text" value={cost} placeholder="cost" onChange={(e) => setCost(e.target.value)}></textarea>
                    </div>
                    <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button>
                    <GoBack />
                </form>
                {/* <LoginForm /> */}
                {/* {/* <h3>If you dont have account, Sign in here: <Link to="/register"> <button className="button-react-icon"><FiFeather className="react-icon" /></button></Link></h3> */}
            </div>
        </div>

    </>
    )
}
export default AddEvent
