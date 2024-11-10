import { PageHead } from "../Components/PageNav"
import './team.css'
import Graph from '../../public/TeamSports3.png'

function Team() {
    return (
        <>
            <PageHead/>
            <main>
                    <div className="left">
                        <h1 className="title">Team Sports Stats</h1>
                        <span></span>
                        <div className="boxline">
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">744</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">L</h3>
                                <h1 className="BT">433</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">W%</h3>
                                <h1 className="BT">63.2</h1>
                            </div>
                        </div>
                        <h3 className="fun">Fun Facts</h3>
                        <ul>
                            <li>UNC and Duke have only played each other one time in a national championship</li>
                            <li>(WSOC 1992, W9-1)</li>
                            <li>NCAA-record 21 Final Four appearances</li>
                        </ul>
                    </div>
                    <img src={Graph} width='40%' height='40%'></img>
            </main>
        </>
    )
}

export default Team