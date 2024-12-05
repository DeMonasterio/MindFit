import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import UserPosts from "../../components/UserPosts/UserPosts.jsx";
import "./User.css";
import { useEffect } from "react";

function User( user ) {
    const navigate = useNavigate();
    
    const userEmail = user.user.email;
    const username = user.user.username;
    const userId = user.user._id;
    useEffect(() => {
        if (userEmail === "" || userEmail === undefined) {
            navigate("/");
        }
    }, [navigate, userEmail]);

    return (
        <>
            <header>
                {/* Aquí puedes agregar un título o cualquier otra cosa */}
            </header>
            <main className="User--main">
                <div className="user--main--info">
                    <img className="user--main--image" src="" alt="" />
                    <h1 className="user--main--username">{username}</h1>
                </div>
                <div className="user--main--posts">
                    <h2>Publicaciones:</h2>
                    <UserPosts userId={userId} />
                </div>
            </main>
            <Navbar user={user} />
        </>
    );
}

export default User;
