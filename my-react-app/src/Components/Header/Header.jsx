import { NavLink } from "react-router-dom"

function Header (){
    return(
        <header>
            <h1>Nolwenn <span>Bohelay</span></h1>
            <nav className="header-nav">
                <NavLink to="/"  className={({ isActive }) => isActive ? "active-link" : undefined}>À propos</NavLink>
                <NavLink to="/footer"  className={({ isActive }) => isActive ? "active-link" : undefined}>contact</NavLink>
            </nav>
        </header>
    )
}
export default Header