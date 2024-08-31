import MindfitLogo from "../../assets/MindfitLogo.svg";
import { Navbar } from "../../components/Navbar/Navbar.jsx";
import { MakePublication } from "../../components/MakePublication/MakePublication.jsx";
import { useContext } from "react";
import "./Main.css";
import dataContext from '../../dataContext.jsx'; 

export default function Main() {
    const { data, loading, error } = useContext(dataContext);

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
