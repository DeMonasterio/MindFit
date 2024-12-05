import "./NewPost.css";
import useNewPost from "../../hooks/useNewPost.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar.jsx";

function NewPost({user}) {
    const navigate = useNavigate();
    const { handleUpload } = useNewPost();
    const userEmail = user.email;
    
    useEffect(() => {
        if (!userEmail) {
            navigate("/");
        }
    }, [userEmail, navigate]);

    return (
        <>

        <form onSubmit={handleUpload}>
            <input type="text" name="title" placeholder="Title" required />
            <input type="text" name="content" placeholder="Content" required />
            <input type="text" name="author" placeholder="Author" value={userEmail} readOnly />
            <input type="text" name="theme" placeholder="Theme" required />
            <input type="file" name="image" accept="image/*" required />
            <button type="submit">Upload Post</button>
        </form>
        <Navbar user={user}/>
        </>
    );
}

export default NewPost;
