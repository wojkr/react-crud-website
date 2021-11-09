import { Link } from "react-router-dom"
const Projects = () => {
    return (
        <div id="projects" className="projects flex-column flex-center" >
            <div className="container flex-column projects-container">
                <div className="container">
                    <h2>COFFEEHOUSE it is host for many cyclical meetings, curses, artistic performances. </h2>
                    <div className="flex-row flex-space-between">
                        <div className="w-50">
                            <p>Our Coffee Shop provides some events every week. We cooperate with positive people and sharing fantastic <Link to="/groups">groups</Link> you can join! The #HUGAMUG comunity has special meetings including favorite <i>month of the author</i>. </p>
                        </div>
                        <div className="w-40">
                            <p>You can quickly check <Link to="/Events">the list of upcomnig events</Link>, be sure to find out benefits provided by our's shop membership. To become part of our comunity check the <Link to="/join">join</Link> section. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects