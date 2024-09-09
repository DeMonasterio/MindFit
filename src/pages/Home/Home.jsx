
import "./Home.css";
import MindfitLogo from "../../assets/MindfitLogo.svg";
import FormRegIng from "../../components/RegistroIngreso/FormIngreso.jsx";
import ToastNote from "../../components/Toast/ToastNote.jsx";
import { useState } from "react";

function Home({ handlesetUser }) {
    const [toastData, setToastData] = useState(null);

    const handleSetToastData = (value) => {
        setToastData(value);
    };

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
                <FormRegIng handlesetUser={handlesetUser} handlesetToastData={handleSetToastData} />
               
                {toastData && (
                    <ToastNote 
                        dataToast={toastData.message}
                    />
                )}
            </main>
        </>
    );
}

export default Home;
