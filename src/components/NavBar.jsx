import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <div className='bg-dark px-4'> 
                <p className='m-0 mb-5'>""</p> 
                <ul className="navbar-nav flex-row justify-content-end gap-2">
                    <li className="nav-item">
                        <NavLink className='nav-link text-white px-3' to='/' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link text-white px-3' to='/favorites' >Favorites</NavLink>
                    </li>                    
                </ul>
        </div>
    )
}