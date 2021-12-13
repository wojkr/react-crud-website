import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getData } from "../utils/utils"
import GroupBox from './GroupBox'
// import Group from './Group'
// import CommentSection from "../CommentSection/CommentSection"

const Groups = ({ isLoggedIn = false }) => {
    const { id } = useParams()
    const [allGroups, setAllGroups] = useState([])
    let groups = []

    useEffect(() => {
        getData('Groups', setAllGroups)
        console.log(allGroups)
    }, [allGroups.length])

    if (id && allGroups) {
        groups = allGroups.filter((g) => g.id.toString() === id)
    } else {
        groups = allGroups
    }
    console.log(groups)

    return (
        <div id="groups" className="container-100 full-page box-sizing-border-box">
            <div className="container">
                {groups.length > 0 && !id ?
                    <>
                        <h1>Groups</h1>
                        <h3>That is ours biggest pride - Groups. Bunch of people sharing same passions and same dreams. Every meeting is an opportunity to spend some time with such amazing humans beings. Feel free to check the group and be sure to come and feel that magic atmosphere yourself! </h3>
                        {groups.map((group) => <GroupBox key={group.id} group={group} />)}
                    </>
                    :
                    <h1>This group does not exist</h1>
                }
                {/* {id &&
                    <Link to="/Groups" className="class-link button-react-icon" >Show All Groups</Link>
                } */}
            </div>
            {/* {id && <CommentSection isLoggedIn={isLoggedIn} dataName={`CommentsGroup${id}`} />} */}
        </div>
    )
}
export default Groups