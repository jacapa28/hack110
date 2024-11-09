import { Link } from 'react-router-dom'
import './PageNav.css'
import Logo from '../../public/logo.jpg'

export function PageHead() {
    return (
        <>
            <div className='top'>
                <img src={Logo} width='80' height='80'></img>
                <span></span>
                <h1>Better Blue Tracker</h1>
            </div>
            <div className='bottom'>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/currentseason'>
                    <button>Current Season</button>
                </Link>
                <Link to='/basketball'>
                    <button>Basketball</button>
                </Link>
                <Link to='/football'>
                    <button>Football</button>
                </Link>
                <Link to='/individual'>
                    <button>Individual Sports</button>
                </Link>
                <Link to='/team'>
                    <button>Team Sports</button>
                </Link>
                <Link to='/cadeau'>
                    <button>Eliiot Cadeau Fan Page</button>
                </Link>
            </div>
        </>
    )
}