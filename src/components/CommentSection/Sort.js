// import { AiOutlineCaretDown } from 'react-icons/ai'
import { FiArrowUp, FiArrowDown } from "react-icons/fi"

const Sort = ({ sort, commentsRef }) => {
    return (
        <div id="sort" ref={commentsRef} className="default-box-lighter-60" >

            <div className="flex-row" >
                <h3>Sort:</h3>

                <div className="flex-row">
                    <p>byRating</p>
                    <button className="button-react-icon" onClick={sort.ratings.best}><FiArrowDown className="react-icon" /></button>
                    <button className="button-react-icon" onClick={sort.ratings.worst}><FiArrowUp className="react-icon" /></button>
                    <p>byDate</p>
                    <button className="button-react-icon" onClick={sort.date.newest}><FiArrowDown className="react-icon" /></button>
                    <button className="button-react-icon" onClick={sort.date.oldest}><FiArrowUp className="react-icon" /></button>
                    <p>byVotes</p>
                    <button className="button-react-icon" onClick={sort.votes.best}><FiArrowDown className="react-icon" /></button>
                    <button className="button-react-icon" onClick={sort.votes.worst}><FiArrowUp className="react-icon" /></button>
                </div>
            </div>
        </div>
    )
}

export default Sort