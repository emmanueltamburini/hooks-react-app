import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}  
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}  
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
