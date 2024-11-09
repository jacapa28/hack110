import { PageHead } from "../Components/PageNav"
import './basketball.css'
import Graph from "../../public/Bball2.png"

function Basketball() {
    return (
        <>
            <PageHead/>
            <main>
                    <div className="left">
                        <h1 className="title">Basketball Stats</h1>
                        <span></span>
                        <div className="boxline">
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">145</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">L</h3>
                                <h1 className="BT">117</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">W%</h3>
                                <h1 className="BT">55.3</h1>
                            </div>
                        </div>
                        <h3 className="fun">Fun Facts</h3>
                        <ul>
                            <li>Went to triple overtime in 1968</li>
                            <li>Beat Coach K in his final game</li>
                        </ul>
                    </div>
                    <img src={Graph} width='40%' height='40%'></img>
            </main>
        </>
    )
}

export default Basketball