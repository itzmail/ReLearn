import {Link, NavLink} from 'react-router-dom'
import useAuth from './auth'

const Navbar = () => {

    // Ketika pakai navlink kita bisa membuat kondisi dimana saat link tersebut aktif kita mau ngapain
    const navlinkStyle = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    const auth = useAuth();

    return(
        <nav className="primaryNav">
            {/* Link kondisi biasa */}
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}

            {/* Link saat kondisi aktif */}
            <NavLink style={navlinkStyle} to="/">Home</NavLink>
            <NavLink style={navlinkStyle} to="/products">Products</NavLink>
            <NavLink style={navlinkStyle} to="/about">About</NavLink>
            <NavLink style={navlinkStyle} to="/user">Users</NavLink>
            <NavLink style={navlinkStyle} to="/profile">Profile</NavLink>
            
            {!auth.user && (<NavLink style={navlinkStyle} to="/login">Login</NavLink>) }
        </nav>
    )
}

export default Navbar;