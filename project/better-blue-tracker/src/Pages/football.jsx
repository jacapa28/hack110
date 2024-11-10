import { PageHead } from "../Components/PageNav"
import './football.css'
import Graph from '../../public/Football2.png'

function Football() {
    return (
        <>
            <PageHead/>
            <main>
                    <div className="left">
                        <h1 className="title">Football Stats</h1>
                        <span></span>
                        <div className="boxline">
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">65</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">L</h3>
                                <h1 className="BT">41</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">W%</h3>
                                <h1 className="BT">60.91</h1>
                            </div>
                        </div>
                        <h3 className="fun">Fun Facts</h3>
                        <ul>
                            <li>Invented the forward pass</li>
                        </ul>
                    </div>
                    <img src={Graph} width='40%' height='40%'></img>
            </main>
        </>
    )
}

export default Football