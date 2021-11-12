import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getData } from "./utils/utils"

const LinkToGroup = ({ id }) => {
    const [group, setGroup] = useState({})

    useEffect(() => {
        getData(`Groups`, setGroup, id)
    }, [id])
    return (
        <Link to={'/groups/' + id}>{group.name}</Link>
    )
}
export default LinkToGroup