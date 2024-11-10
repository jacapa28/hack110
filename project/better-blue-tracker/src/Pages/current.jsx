import { PageHead } from "../Components/PageNav"
import './current.css'
import Graph from '../../public/CurrentSzn2.png'

function Current() {
    return (
        <>
            <PageHead/>
            <main>
                    <div className="left">
                        <h1 className="title">Current Season Stats</h1>
                        <span></span>
                        <div className="boxline">
                            <div className="Box">
                                <h3 className="TT">W</h3>
                                <h1 className="BT">5</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">L</h3>
                                <h1 className="BT">3</h1>
                            </div>
                            <div className="Box">
                                <h3 className="TT">W%</h3>
                                <h1 className="BT">62.5</h1>
                            </div>
                        </div>
                        <div className="boxline2">
                            <div className="Box">
                                <h3 className="TT2">Games Left</h3>
                                <h1 className="BT">15</h1>
                            </div>
                            <div className="Box2">
                                <h3 className="TT2">Last Game Played: WSOC</h3>
                                <h1 className="BT">W 2-1</h1>
                            </div>
                        </div>
                    </div>
                    <img src={Graph} width='40%' height='40%'></img>
            </main>
        </>
    )
}

export default Current