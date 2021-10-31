// import { AiOutlineCaretDown } from 'react-icons/ai'


const Sort = ({ sort }) => {
    return (
        <div className="container-100 flex-row" >
            <p>Filter:</p>

            <div className="flex-row p-3">
                <p>byRating</p>
                <button onClick={sort.ratings.worst}>^</button>
                <button onClick={sort.ratings.best}>v</button>
                <p>byDate</p>
                <button onClick={sort.date.oldest}>^</button>
                <button onClick={sort.date.newest}>v</button>
            </div>
        </div>
    )
}

export default Sort