import { useEffect, useState } from "react"
import { getData } from "./utils/utils"

const LinkToGroup = ({ id }) => {
    const [group, setGroup] = useState({})

    useEffect(() => {
        getData(`Groups/${id}`, setGroup)
    }, [])
    return (
        <a href={'#group-' + id}>{group.name}</a>
    )
}
export default LinkToGroup