import { useNavigate } from 'react-router-dom';

const useAuth = ( handlesetUser ) => {
    const navigate = useNavigate();
    const APIURL = "https://ubiquitous-space-orbit-x749j7jg7vw26rrj-5000.app.github.dev";

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const birthday = formData.get('birthday');
        
        if (username === "" || email === "" || password === "" || birthday === "") {
            console.log("Por favor completa todos los campos");
            return;
        }

        try {
            const response = await fetch(`${APIURL}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password, birthday }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                console.log(data.message);
                handlesetUser.handlesetUser.handlesetUser({username, email})
                navigate("/Home"); // Redirige a la página de inicio o a otra página
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.log(data.message);
            console.error('Error:', error);
        }
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        
        if (email === "" || password === "") {
            console.log("Ingrese Email y Contraseña");
            return;
        }
        
        try {
            const response = await fetch(`${APIURL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();
            
            if (response.ok) {
                console.log(data.message);
                handlesetUser.handlesetUser.handlesetUser(email)
                
                navigate("/Home"); // Redirige a la página de inicio o a otra página
            } else {const handleSubmitRegister = async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const username = formData.get('username');
                const email = formData.get('email');
                const password = formData.get('password');
                const birthday = formData.get('birthday');
            
                if (username === "" || email === "" || password === "" || birthday === "") {
                    console.log("Por favor completa todos los campos");
                    return;
                }
            
                try {
                    const response = await fetch('http://localhost:5000/api/users/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, email, password, birthday }),
                    });
            
                    const data = await response.json();
            
                    if (response.ok) {
                        console.log(data.message);
                        navigate("/Home"); // Redirige a la página de inicio o a otra página
                    } else {
                        console.error(data.message);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            };
            
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return { handleSubmitRegister, handleSubmitLogin };
};

export default useAuth;
