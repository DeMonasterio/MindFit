
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import "./User.css";
import { useEffect } from "react";

function User({user}) {
    const navigate = useNavigate();

    const userEmail = user.email;
    const username= user.username;
    
    console.log(user);
    useEffect(() => {
        if (userEmail =="" || userEmail== undefined) {
            navigate("/")
            
        }
      }, [navigate]);

    return (
        <>
            <header>
            </header>
            <main className="User--main">
                <div className="user--main--info" >
                <img className="user--main--image" src="" alt="" />
                <h1 className="user--main--username">{username}</h1>
                </div>
                <div className="user--main--posts" >
                    <h2>Publicaciones:</h2>
                </div>
            </main>
            <Navbar />
        </>
    );
}

export default User;
