import { useNavigate } from "react-router-dom";

const usePost = () => {
    const APIURL = "https://super-space-fortnight-6qprjqjxqg5h46jw-5000.app.github.dev";
    const navigate = useNavigate();

    const useDelete = async (postId, idUser) => {
        if (!postId) {
            console.log("El ID del post es requerido.");
            navigate(`/User/${idUser}`); // Redirige si no hay ID del post
            return { success: false, message: "El ID del post es requerido" };
        }

        try {
            const response = await fetch(`${APIURL}/api/post/delete/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Post eliminado exitosamente:", data.message);
                navigate(`/User/${idUser}`); // Redirige al usuario
                return { success: true, message: data.message };
            } else {
                console.error("Error al eliminar el post:", data.message);
                navigate(`/User/${idUser}`); // Redirige incluso si hay un error
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error("Error:", error);
            navigate(`/User/${idUser}`); // Redirige en caso de excepción
            return { success: false, message: "Error al intentar eliminar el post" };
        }
    };

    return { useDelete };
};

export default usePost;
