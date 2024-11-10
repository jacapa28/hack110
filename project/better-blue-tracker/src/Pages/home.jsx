import { PageHead } from "../Components/PageNav"
import './home.css'
import Photo from '../../public/deandome.jpg'

function Home() {
    return (
        <>
            <PageHead/>
            <main>
                <p>PLAYING AT CAROLINA IS AN HONOR. WINNING AT CAROLINA IS A TRADITION.</p>
            </main>
            <div>
                <img src={Photo} width='50%' height='50%'></img>
            </div>
        </>
    )
}

export default Home