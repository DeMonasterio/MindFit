import { useNavigate } from 'react-router-dom';

const useAuth = ( handlesetUser, handletoastData ) => {
    const navigate = useNavigate();
    // const APIURL = "https://ubiquitous-space-orbit-x749j7jg7vw26rrj-5000.app.github.dev";
    const APIURL = "https://11wkqwhb-5000.brs.devtunnels.ms";

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
                handletoastData.handletoastData(data)
                navigate("/Home"); // Redirige a la página de inicio o a otra página
            } else {
                console.error(data.message);
                handletoastData.handletoastData(data)
            }
        } catch (error) {
            console.log(data.message);
            console.error('Error:', error);
            handletoastData.handletoastData(data)
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
                handletoastData.handletoastData(data)
                
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
                        handletoastData.handletoastData(data)
                        navigate("/Home"); // Redirige a la página de inicio o a otra página
                    } else {
                        console.error(data.message);
                        handletoastData.handletoastData(data)
                    }
                } catch (error) {
                    console.error('Error:', error);
                    handletoastData.handletoastData(data)
                }
            };
            
                console.error(data.message);
                handletoastData.handletoastData(data)
            }
        } catch (error) {
            console.error('Error:', error);
            handletoastData.handletoastData(data)
        }
    };

    return { handleSubmitRegister, handleSubmitLogin };
};

export default useAuth;
