const DateComment = ({ date, text }) => {
    const dateToString = (dateNum) => {
        const newDate = new Date(dateNum)
        return newDate.toGMTString()
    }
    let time = Date.now() - date;
    const timeCalc = () => {
        changeTimeUnits(1000, 60, 'second')
        changeTimeUnits(60, 60, 'minute')
        changeTimeUnits(60, 24, 'hour')
        changeTimeUnits(24, 7, 'day')
        changeTimeUnits(7, 53, 'week')
        if (time > 52 && typeof (time) === 'number') {
            time = ('on ' + dateToString(date))
        }
        return time
    }
    const changeTimeUnits = (toUnit, units, unitsName) => {
        if (typeof (time) === 'number') {
            time /= toUnit
        }
        if (time < units) {
            if (Math.floor(time) !== 1) {
                unitsName += 's'
            }
            time = `${text} ${Math.floor(time)} ${unitsName} ago`
        }
    }

    return (
        <>
            {date && <p className="comment-date"> <i>{timeCalc()}</i></p>}
        </>
    )
}
export default DateComment