import { Nav, NavLink } from 'react-router-dom'
import './PageHeader.css'

function PageHeader() {
    return (
        <>
            <Nav className='bottom'>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/current'>
                    Current Season
                </NavLink>
            </Nav>
        </>
    )
}

export default PageHeader