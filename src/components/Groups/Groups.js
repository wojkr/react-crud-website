import { useState, useEffect } from "react"
import { getData } from "../utils/utils"
import Group from './Group'

const Groups = () => {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        getData('Groups', setGroups)
    }, [groups.length])

    return (
        <div id="groups" className="container-100 full-page pt-10vh box-sizing-border-box">
            <div className="container">
                <h1>Groups</h1>
                <h3>That is ours biggest pride - Groups. Bunch of people sharing same passions and same dreams. Every meeting is an opportunity to spend some time with such amazing humans beings. Feel free to check the group and be sure to come and feel that magic atmosphere yourself! </h3>
                {groups.map((group) => <Group key={group.id} group={group} />)}
            </div>
        </div>
    )
}
export default Groups