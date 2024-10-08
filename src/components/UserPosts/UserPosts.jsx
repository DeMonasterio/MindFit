// UserPosts.jsx
import { useEffect, useState } from 'react';
import {UserFeed} from '../UserFeed/UserFeed.jsx';

const UserPosts = ({ userId }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(userId);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://ubiquitous-space-orbit-x749j7jg7vw26rrj-5000.app.github.dev/api/post/get/user/${userId}`)
                if (!response.ok) {
                    throw new Error('Error fetching posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [userId]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="user-posts">
            {posts.map(post => (
                <UserFeed key={post._id} publication={post} />
            ))}
        </div>
    );
};

export default UserPosts;
