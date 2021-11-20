export const fetchData = async (dataName) => {
    const res = await fetch(`http://localhost:5000/${dataName}`)
    const data = await res.json()
    return data
}

// export const getData = async (dataName, setDataFunc, id = false, serverURL = "http://localhost:5000/", isSubscribed = true) => {//wrap it in useCallback Hook with [] Array of dep
//     console.log(id)
//     if (id === null || id === undefined) {
//         console.log('wrong inputs: ', dataName, [id], [setDataFunc])
//     } else {
//         if (id !== false) {
//             dataName += `/${id}`
//         }
//         const fetchData = async (dataName) => {
//             // const res = await fetch(`http://localhost:5000/${dataName}`)
//             const res = await fetch(serverURL + dataName)
//             const data = await res.json()
//             return data
//         }
//         const DataFromServer = await fetchData(dataName)
//         return isSubscribed ? setDataFunc(DataFromServer) : null
//     }
// }
export const getData = (dataName, setDataFunc, id = false, serverURL = "http://localhost:5000/", isSubscribed = true) => {//wrap it in useCallback Hook with [] Array of dep
    console.log(id)
    if (id === null || id === undefined) {
        console.log('wrong inputs: ', dataName, [id], [setDataFunc])
    } else {
        if (id !== false) {
            dataName += `/${id}`
        }
        fetch(serverURL + dataName)
            .then((res) => {
                res.json()
                    .then((res2) => {
                        return isSubscribed ?
                            setDataFunc(res2)
                            :
                            null
                    })
            },
                (e) => { console.log(e.message) })
    }
}

export const ALERT = (setShowAlertFunc, setAlertInfoFunc, message, option1_text, option1_func, option2_text, option2_func) => {
    // optionX_func [function, functionInput, URL to go,navigateFunc]
    setShowAlertFunc(true)
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
            if (option1_func[2] && option1_func[3]) {
                option1_func[2](option1_func[3])
            }
        },
        option2_text,
        () => {
            if (option2_func.length > 1) {
                option2_func[0]()
            } else {
                option2_func()
            }
            setShowAlertFunc(false)
            if (option2_func[2] && option2_func[3]) {
                option2_func[2](option2_func[3])
            }
        }
    ])
}

export const checkUsername = (user, setMessageFunc, showPromptFunc = null) => {
    showPromptFunc && showPromptFunc(false)
    if (!user || user.length < 5) {
        setMessageFunc('username has to be at least 5 characters long')
        return false
    }
    return true
}
export const checkEmail = (email, setMessageFunc, showPromptFunc = null) => {// func returns true if adress is correct, false if not. Optional to add fuct setting showPrompt value true or false(clearing Previous prompts) 
    showPromptFunc && showPromptFunc(false)
    let state = false
    let copy = email.slice()
    let domain = 0
    if (copy.indexOf('@') > 0) domain = copy.slice(copy.indexOf('@') + 1)
    if (!copy) {
        setMessageFunc('email adress is mandatory')
    } else if (!copy.indexOf('@') > 0) {
        setMessageFunc('email adress has to contain symbol @')
    } else if (copy.indexOf('@') < 3) {
        setMessageFunc('email name too short')
    } else if (domain.length < 5) {
        setMessageFunc('email domain too short')
    } else if (domain.indexOf('.') < 2) {
        setMessageFunc('email domain name too short')
    } else if (domain.length - 1 - domain.indexOf('.') < 2) {
        setMessageFunc('email domain too short after a dot')
    } else if (domain.length - 1 - domain.indexOf('.') > 3) {
        setMessageFunc('email domain too long after a dot')
    } else {
        state = true
    }
    return state
}
export const checkPassword = (password, setMessageFunc, showPromptFunc = null) => {
    showPromptFunc && showPromptFunc(false)
    if (!password || password.length < 8) {
        setMessageFunc('password has to be at least 8 characters long')
        return false
    }
    return true
}
