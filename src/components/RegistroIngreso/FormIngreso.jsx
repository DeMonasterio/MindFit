import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';

function FormRegIng( handlesetUser, handletoastData) {
    const [createAccount, setCreateAccount] = useState(false);
    const secondCardRef = useRef(null);
    const containerRef = useRef(null);
    const { handleSubmitRegister, handleSubmitLogin } = useAuth(handlesetUser, handletoastData);

    const handleCreateAccount = () => {
        setCreateAccount(!createAccount);
    };

    useEffect(() => {
        if (secondCardRef.current && containerRef.current) {
            const secondCardHeight = secondCardRef.current.offsetHeight;
            containerRef.current.style.height = `${Math.abs(secondCardHeight)}px`;
        }
    }, [createAccount]);

    return (
        <div className="cardsContainer" ref={containerRef}>
            <section className="firstCard">
                {createAccount ? (
                    <>
                        <p>Únete ahora</p>
                        <form className='formCreateAcc' onSubmit={handleSubmitRegister}>
                            <label htmlFor="username">Nombre de Usuario:</label>
                            <input className='inputsLogin' type="text" name="username" id="username" />
                            <label htmlFor="birthday">Fecha de Nacimiento:</label>
                            <input className='inputsLogin' type="date" name="birthday" id="birthday" />
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input className='inputsLogin' type="email" id="email" name="email" />
                            <label htmlFor="password">Contraseña:</label>
                            <input className='inputsLogin' type="password" name="password" id="password" />

                            <button className='buttonSignUp' type="submit">Crear cuenta</button>
                        </form>
                    </>
                ) : (
                    <section className='alternativefirstCard'>
                        <p>Únete ahora</p>
                        <button className='buttonAltSignUp' onClick={handleCreateAccount}>Crear cuenta</button>
                    </section>
                )}
            </section>
            <article className='secondCard' ref={secondCardRef}>
                {createAccount ? (
                    <section className='secondCardPadding'>
                        <p>¿Ya tienes una cuenta?</p>
                        <button className='buttonLogIn' onClick={handleCreateAccount}>Iniciar sesión</button>
                    </section>
                ) : (
                    <form className='formLogIn' onSubmit={handleSubmitLogin}>
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input className='inputsLogin' type="email" id="email" name='email' placeholder='example@mail.com' />
                        <label htmlFor="password">Contraseña:</label>
                        <input className='inputsLogin' type="password" name="password" id="password" placeholder='***********' />

                        <Link to="/recoverPassword">¿Recuperar contraseña?</Link>

                        <button className='buttonAltSignUp' type="submit">Iniciar Sesión</button>
                    </form>
                )}
            </article>
        </div>
    );
}

export default FormRegIng;
