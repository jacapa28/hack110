import { PageHead } from "../Components/PageNav"
import './basketball.css'
import Graph from "../../public/BballGraph.png"

function Basketball() {
    return (
        <>
            <PageHead/>
            <main>
                <h1 className="title">Basketball</h1>
                <div className="largebottom">
                    <div className="left">
                        <div className="boxline">
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">145</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">145</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">145</h1>
                            </div>
                        </div>
                        <h3>Fun Facts</h3>
                        <ul>
                            <li>Went to triple overtime in 1968</li>
                            <li>Beat Coach K in his final game</li>
                        </ul>
                    </div>
                    <img src={Graph} width='30%' height='30%'></img>
                </div>
            </main>
        </>
    )
}

export default Basketball