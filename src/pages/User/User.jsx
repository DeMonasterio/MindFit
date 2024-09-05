
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import "./User.css";
import { useEffect } from "react";

function User(user) {
    const navigate = useNavigate();

    const userEmail = user.user;
    
    useEffect(() => {
        if (userEmail =="" || userEmail== undefined) {
            navigate("/")
        }
      }, [navigate]);

    return (
        <>
            <header>
                <h1>Perfil de usuario:</h1>
            </header>
            <main className="User--main">
                <h1>{userEmail}</h1>
    
            </main>
            <Navbar />
        </>
    );
}

export default User;
