import { useEffect, useState } from "react"
import { getData } from "./utils/utils"

const LinkToGroup = ({ id }) => {
    const [group, setGroup] = useState({})

    useEffect(() => {
        getData(`Groups`, setGroup, id)
    }, [id])
    return (
        <a href={'/groups#group-' + id}>{group.name}</a>
    )
}
export default LinkToGroup