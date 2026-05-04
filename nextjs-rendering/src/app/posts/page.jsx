const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (error) {
//     throw new Error("Failed to fetch posts");
//   }
// };

export default async function PostPage() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4">
      <h1>this is post</h1>
      <p> {posts.length} </p>
    </div>
  );
}
