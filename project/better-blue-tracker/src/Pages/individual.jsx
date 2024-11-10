import { PageHead } from "../Components/PageNav"
import './individual.css'
import Graph from '../../public/IndySports4.png'

function Individual() {
    return (
        <>
            <PageHead/>
            <main>
                    <div className="left">
                        <h1 className="title">Individual Sports Stats</h1>
                        <span></span>
                        <div className="boxline">
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">616</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">L</h3>
                                <h1 className="BT">201</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">W%</h3>
                                <h1 className="BT">75.4</h1>
                            </div>
                        </div>
                        <h3 className="fun">Fun Facts</h3>
                        <ul>
                            <li>58 individual national championships</li>
                            <li>Since 1977, every four-year student has witnessed at least one national championship during their attendance</li>
                        </ul>
                    </div>
                    <img src={Graph} width='40%' height='40%'></img>
            </main>
        </>
    )
}

export default Individual