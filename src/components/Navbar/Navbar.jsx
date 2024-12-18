import Lupa from "./../../assets/lupa.png"
import Home from "./../../assets/home.png"
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useState } from "react";




export const Navbar = ({user}) => {
let userId = user._id;
const [isClickedNewPost, setisClickedNewPost] = useState();

const handleOnClickNewPost = () => {
    setisClickedNewPost(!isClickedNewPost)
}

    return(
        <>
        <nav className="navbar">

        <Link to="/Home">
              <img className="nav--home" src={Home} alt="" />
        </Link>
        <Link to="/NewPost">
        <button className="nav--publication" >+</button>
        </Link>
        <Link to="/Search">
              <img className="nav--lupa" src={Lupa} alt="" />
        </Link>
        <Link className="nav--user" to={`/User/${userId}`}></Link>
        </nav>
        </>
    )
}