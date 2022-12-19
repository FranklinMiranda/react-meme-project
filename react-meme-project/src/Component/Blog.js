function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
  const content = props.posts.map((post) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  });
  return (
    <div className="Blog-Div">
      <h1>Blog</h1>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export default Blog;
