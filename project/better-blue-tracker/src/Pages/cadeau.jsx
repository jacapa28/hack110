import { PageHead } from "../Components/PageNav"
import './cadeau.css'
import Photo from '../../public/elliotcadeau.jpg'

function Cadeau() {
    return (
        <>
            <PageHead/>
            <main>
                    <div className="left">
                        <h1 className="title">WE LOVE ELLIOT CADEAU</h1>
                        <span></span>
                        <div className="boxline">
                            <div className="Box">
                                <h3 className="TT">PPG</h3>
                                <h1 className="BT">14.5</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">RPG</h3>
                                <h1 className="BT">3</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">APG</h3>
                                <h1 className="BT">7.5</h1>
                            </div>
                        </div>
                        <h3 className="fun">Fun Facts</h3>
                        <ul>
                            <li>The GOAT</li>
                            <li>Swedish</li>
                        </ul>
                    </div>
                    <img src={Photo} width='32%' height='32%'></img>
            </main>
        </>
    )
}

export default Cadeau