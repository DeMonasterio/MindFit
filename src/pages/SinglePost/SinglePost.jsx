import React, { useEffect, useState } from 'react';
import { Navbar } from "../../components/Navbar/Navbar";
import usePost from "../../hooks/UsePost.jsx";

export const SinglePost = ({ user }) => {
    const [post, setPost] = useState(null); // Estado para almacenar los datos de la publicación
    const [loading, setLoading] = useState(true); // Estado para controlar el spinner de carga
    const [error, setError] = useState(null); // Estado para manejar errores
    const { useDelete } = usePost(); // Hook para la funcionalidad de eliminar post
    const id = window.location.pathname.split('/').pop(); // Extrae el ID manualmente de la URL

    console.log(user); // Para verificar que estás obteniendo el ID correctamente

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://super-space-fortnight-6qprjqjxqg5h46jw-5000.app.github.dev/api/post/get/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch the post');
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        if (post && post.author && post.author._id) {
            const result = await useDelete(post._id, post.author._id);
            console.log(result.message); // Muestra el mensaje en la consola
        }
    };

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!post) {
        return <p>Post not found</p>;
    }

    const imageBase64 = post.image
        ? `data:image/jpeg;base64,${post.image}`
        : null;

    return (
        <>
            <section className="single-post">
                <h1>{post.title || 'Untitled Post'}</h1>
                <p><strong>Author:</strong> {post.author.username}</p>
                {imageBase64 && (
                    <img
                        src={imageBase64}
                        alt="Post"
                        className="single-post--image"
                    />
                )}
                <p>{post.content}</p>
                <em>Likes: {post.likes}</em>
                <div className="single-post--comments">
                    <h2>Comments</h2>
                    {(post.comments || []).map(comment => (
                        <div className="comment" key={comment._id}>
                            <p><strong>{comment.user.username}</strong>: {comment.text}</p>
                        </div>
                    ))}
                </div>
                <button onClick={handleDelete}>Eliminar</button>
            </section>
            <Navbar user={user} />
        </>
    );
};
