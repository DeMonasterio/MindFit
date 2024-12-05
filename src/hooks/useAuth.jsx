import { useNavigate } from 'react-router-dom';

const useAuth = ({ handlesetUser, settoastData }) => {
    const navigate = useNavigate();
    const APIURL = "https://super-space-fortnight-6qprjqjxqg5h46jw-5000.app.github.dev";  
    // const APIURL = "https://11wkqwhb-5000.brs.devtunnels.ms";
    // uaca161 adminies9012 
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
                handlesetUser({ username, email });
                settoastData(data);

                setTimeout(() => {
                    navigate("/Home");
                }, 1000);
            } else {
                console.error(data.message);
                settoastData(data);
            }
        } catch (error) {
            console.error('Error:', error);
            settoastData({ message: 'Error en el registro' });
        }
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            console.log("Ingrese Email y Contraseña");
            return;
        }

        try {
            const response = await fetch(`${APIURL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                settoastData(data.message);

                const responseUserName = await fetch(`${APIURL}/api/users/get/${email}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (responseUserName.ok) {
                    const userData = await responseUserName.json();
                    handlesetUser(userData);
                    
                } else {
                    console.error('Error al obtener la información del usuario:', responseUserName.statusText);
                    settoastData(data.message);
                }

                setTimeout(() => {
                    navigate("/Home");
                }, 1000);
            } else {
                console.error(data.message);
                settoastData(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            settoastData(error);
        }
    };

    return { handleSubmitRegister, handleSubmitLogin };
};

export default useAuth;
