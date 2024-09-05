import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dataContext from '../../dataContext.jsx'; 
import "./Main.css";
import MindfitLogo from "../../assets/MindfitLogo.svg";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { MakePublication } from "../../components/MakePublication/MakePublication.jsx";

export default function Main(user) {
    const { data, loading, error } = useContext(dataContext);
    const navigate = useNavigate();
    const userEmail = user.user;
    useEffect(() => {
        if (userEmail =="" || userEmail== undefined) {
            navigate("/")
        }
      }, [navigate]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <header className="home--header">
                <div className="home--header--logo">
                    <h1>MindFit</h1>
                    <img className="home--header--image" src={MindfitLogo} alt="MindFit Logo" />
                </div>
            </header>
            <main className="home--main">
                {data.map(publication => MakePublication(publication))}
            </main>
            <Navbar />
        </>
    );
}
