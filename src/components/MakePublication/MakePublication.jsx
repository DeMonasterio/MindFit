
import "./MakePublication.css"

export const MakePublication = (publication) => {
    return (
        <article className="publication" key={publication.id}>
            <p className="publication--username" >{publication.user.username}</p>
            <img src="image path" alt="This is an image" />
                <p>{publication.post.caption}</p>
                <em>Likes: {publication.post.likes}</em>
                <div className="publications--comments" >
                    {publication.post.comments.map(comment => (
                        <div className="comment" key={comment.id}>
                            <p className="publication--comments--username">{comment.user.username}</p>
                            <p >{comment.text}</p>
                        </div>)
                    )}
                </div>
        </article>
    );
};