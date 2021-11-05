export const fetchData = async (dataName) => {
    const res = await fetch(`http://localhost:5000/${dataName}`)
    const data = await res.json()
    return data
}

export const getData = async (dataName, setDataFunc) => {//wrap it in useCallback Hook with [] Array of dep
    const fetchData = async (dataName) => {
        const res = await fetch(`http://localhost:5000/${dataName}`)
        const data = await res.json()
        return data
    }
    const DataFromServer = await fetchData(dataName)
    setDataFunc(DataFromServer)
}

export const ALERT = (setShowAlertFunc, setAlertInfoFunc, message, option1_text, option1_func, option2_text, option2_func) => {
    setShowAlertFunc(true);
    setAlertInfoFunc([
        message,
        option1_text,
        () => {
            if (option1_func[1]) {
                option1_func[0](option1_func[1])
            } else {
                option1_func[0]()
            }
            setShowAlertFunc(false)
        },
        option2_text,
        () => {
            if (option2_func.length > 1) {
                option2_func[0]()
            } else {
                option2_func()
            }
            setShowAlertFunc(false)
        }
    ])
}