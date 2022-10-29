import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/auth";
import { posts } from "@/data/posts";


export const BlogPost = () => {
    const navigate = useNavigate();
    const { slug } = useParams();

    const auth = useAuth();

    const post = posts.find(post => post.slug === slug);

    if(!post){
        return undefined;
    }

    const canDelete = auth.user?.role==="admin" || auth.user.username === post.author;

    return(
        <div style={{margin: "2rem 0"}}>
            <h3>{post.title}</h3>
            <button onClick={() => navigate('/blog')}>Volver</button>
            <p>{post.author}</p>
            <div style={{margin: "2rem 0"}}>
                {post.content}
            </div>

            {canDelete &&
                <button>Editar</button>
            }
        </div>
    )
}