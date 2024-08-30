import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function FormRegIng() {

    const [createAccount, setCreateAccount] = useState(false);
    const secondCardRef = useRef(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const handleCreateAccount = () => {
    setCreateAccount(!createAccount);
}

useEffect(() => {
    if (secondCardRef.current && containerRef.current) {
        const secondCardHeight = secondCardRef.current.offsetHeight;
        containerRef.current.style.height = `${Math.abs(secondCardHeight)}px`;
    }
}, [createAccount]);

const handleSubmit = (e) => {
    e.preventDefault();
    // useForm(e);
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    (email == "") ? console.log("True") :
    (password == "") ? console.log("Ta vacio") :
     navigate("/Home");
    
}

return(

    <div className="cardsContainer" ref={containerRef}>
<section className="firstCard">
    {createAccount ? (
        <>
            <p>Unete ahora</p>
            <form className='formCreateAcc' onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre de Usuario:</label>
                <input className='inputsLogin' type="text" name="username" id="username" />
                <label htmlFor="birthday">Fecha de Nacimiento:</label>
                <input className='inputsLogin' type="date" name="birthday" id="birthday" />
                <label htmlFor="email">Correo Electronico:</label>
                <input className='inputsLogin' type="email" id="email" />
                <label htmlFor="password">Contraseña:</label>
                <input className='inputsLogin' type="password" name="password" id="password" />

                <button className='buttonSignUp' type="submit">Crear cuenta</button>
            </form>
        </>
    ) : (
        <section className='alternativefirstCard'>
            <p>Unete ahora</p>
            <button className='buttonAltSignUp' onClick={handleCreateAccount}>Crear cuenta</button>
        </section>
    )}
</section>
<article className='secondCard' ref={secondCardRef}>
    {createAccount ? (
        <section className='secondCardPadding'>
            <p>Ya tienes una cuenta?</p>
            <button className='buttonLogIn'  onClick={handleCreateAccount}>Iniciar sesion</button>
        </section>
    ) : (
        <form className='formLogIn' onSubmit={handleSubmit}>
            <label htmlFor="email">Correo Electronico:</label>
            <input className='inputsLogin' type="email" id="email" name='email' placeholder='example@mail.com' />
            <label htmlFor="password">Contraseña:</label>
            <input className='inputsLogin' type="password" name="password" id="password" placeholder='***********' />

            <Link to="/recoverPassword">Recuperar contraseña?</Link>

            <button className='buttonAltSignUp' type="submit">Iniciar Sesion</button>
        </form>
    )}
</article>
</div>
)
}

export default FormRegIng;