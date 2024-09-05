import Lupa from "./../../assets/lupa.png"
import Home from "./../../assets/home.png"
import "./Navbar.css"
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return(
        <>
        <nav className="navbar">

        <Link to="/Home">
              <img className="nav--home" src={Home} alt="" />
        </Link>
        <button className="nav--publication" >+</button>
        <Link to="/Search">
              <img className="nav--lupa" src={Lupa} alt="" />
        </Link>
        <Link className="nav--user" to="/User"></Link>
        </nav>
        </>
    )
}