import React from 'react';
import "./UserFeed.css";

export const UserFeed = ({ publication }) => {
    const imageBase64 = publication.image 
        ? `data:image/jpeg;base64,${publication.image}` 
        : null;

    return (
        <article className="publication" key={publication._id}>
            <p className="publication--username">{publication.author.username}</p>
            {imageBase64 && (
                <img 
                    src={imageBase64} 
                    alt="Publication" 
                    className="publication--image" 
                />
            )}
            <p>{publication.content}</p>
            <em>Likes: {publication.likes}</em>
            <div className="publications--comments">
                {(publication.comments || []).map(comment => (
                    <div className="comment" key={comment._id}>
                        <p className="publication--comments--username">{comment.user.username}</p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </article>
    );
};
