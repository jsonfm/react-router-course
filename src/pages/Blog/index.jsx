import { Link, Outlet } from "react-router-dom";
import { posts } from "@/data/posts";

export const Blog = () => {
    return(
        <div>
            <Outlet/>
            <ul>
                {posts.map(post => (
                    <li key={post.slug}><Link to={`/blog/${post.slug}`}>{post.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}