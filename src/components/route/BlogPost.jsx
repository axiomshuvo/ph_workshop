import { NavLink, useLoaderData, useNavigate } from "react-router";

export default function BlogPost() {
  const blogPosts = useLoaderData();
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <h1>Total Blog Post - {blogPosts.length}</h1>
      <br />
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>
            <NavLink
              style={{
                marginBottom: "10px",
                textDecoration: "none",
                color: "lightblue",
              }}
              to={`/blog/${post.id}`}
            >
              {post.title}
            </NavLink>
          </h2>
          <button onClick={() => handleNavigate(post.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
}
