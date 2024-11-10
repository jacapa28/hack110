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
                <a href="https://goheels.com/">
                    <img src={Photo} alt='UNC Athletics' width='100%' height='100%'></img>
                </a>
            </div>
        </>
    )
}

export default Home