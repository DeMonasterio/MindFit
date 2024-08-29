import { Link } from 'react-router-dom';
import "./Home.css";
import MindfitLogo from "../../assets/MindfitLogo.svg";
import { useState } from 'react';

function Home() {
    const [createAccount, setcreateAccount] = useState(false)
    const handlecreateAccount = () => {
        setcreateAccount(!createAccount);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        //Continuar con el submit
    }
    return (
        <div className='background'>
            <header className="hero--header">
                <div className="hero--logo">
                    <h1>MindFit</h1>
                    <img src={MindfitLogo}></img>
                </div>
                <h2>Equilibra tu vida digital y personal</h2>
            </header>
            <body>




                <div className="cardsContainer">

                    <section className="firstCard" >
                        {createAccount ? <>
                        
                            <p>Unete ahora</p>
                            <form className='formCreateAcc' onSubmit={handleSubmit}>
                            <label htmlFor="username">Nombre de Usuario:</label>
                            <input type="text" name="username" id="username" />
                            <label htmlFor="birthday">Fecha de Nacimiento:</label>
                            <input type="date" name="birthday" id="birthday" />
                            <label htmlFor="email">Correo Electronico:</label>
                            <input className='inputsLogin' type="email" id="email" />
                            <label htmlFor="password">Contraseña:</label>
                            <input className='inputsLogin' type="password" name="password" id="password" />

                            <button type="submit">Crear cuenta</button>
                            </form>
                        </> :<>
                        <section className='alternativefirstCard'>
                        <p>Unete ahora</p>
                        <button onClick={handlecreateAccount}>Crear cuenta</button>
                        </section>
                        </>
                        }
                    </section>
                    <article className='secondCard'>

                        {createAccount ? <>
                        <section className='secondCardPadding'>
                            <p>Ya tienes una cuenta?</p>
                            <button onClick={handlecreateAccount}>Iniciar sesion</button>
                        </section>
                        </> : <>
                        <form className='formLogIn' onSubmit={handleSubmit}>
                            <label htmlFor="email">Correo Electronico:</label>
                            <input className='inputsLogin' type="email" id="email" />
                            <label htmlFor="password">Contraseña:</label>
                            <input className='inputsLogin' type="password" name="password" id="password" />

                            <Link to="/about">Recuperar contraseña?</Link>

                            <button type="submit">Iniciar Sesion</button>
                        </form>
                        </> 
                        }
                    </article>
                </div>


            </body>

        </div>
    );
}

export default Home;
