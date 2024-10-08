
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import CreateCarpet  from "../../components/CreateCarpet/CreateCarpet.jsx";
import "./Search.css";
import { useEffect, useState } from "react";

function Search(user) {
    const navigate = useNavigate();
    const userEmail = user.user;
    useEffect(() => {
        if (userEmail =="" || userEmail== undefined) {
            navigate("/")
        }
      }, [navigate]);
    const [createCarpet,setcreateCarpet] = useState(false)
    const handlecreateCarpet = () => {
        setcreateCarpet(!createCarpet)
    }

    

    return (
        <>
            <header>
                <h1>Buscador:</h1>
            </header>
            <main className="search--main">
               { createCarpet ? <CreateCarpet user={user} /> :
                <div onClick={handlecreateCarpet} className="search--newbox">
                    <p className="newboxcarpet">Crear carpeta</p>
                    <p className="newboxPlus">+</p>
                </div>
               } 
            </main>
            <Navbar />
        </>
    );
}

export default Search;
