
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import "./User.css";
import { useEffect } from "react";

function User(user) {
    const navigate = useNavigate();

    const userEmail = user.user.email;
    const username= user.user.username;
    
    useEffect(() => {
        if (userEmail =="" || userEmail== undefined) {
            navigate("/")
        }
      }, [navigate]);

    return (
        <>
            <header>
                <h1 className="user--header--username">{username}</h1>
            </header>
            <main className="User--main">
            </main>
            <Navbar />
        </>
    );
}

export default User;
