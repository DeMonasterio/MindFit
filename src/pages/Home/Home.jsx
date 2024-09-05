import "./Home.css";
import MindfitLogo from "../../assets/MindfitLogo.svg";
import FormRegIng from "../../components/RegistroIngreso/FormIngreso.jsx"

function Home(handlesetUser) {
    return (
        <>
            <header className="hero--header background">
                <div className="hero--logo">
                    <h1 className='hero--logo--font'>MindFit</h1>
                    <img src={MindfitLogo} alt="Mindfit Logo" />
                </div>
                <h2 className='hero--logo--subtitle'>"Equilibra tu vida digital y personal"</h2>
            </header>
            <main className='main--body background'>
                <FormRegIng  handlesetUser={handlesetUser} />
               
            </main>
        </>
    );
}

export default Home;
