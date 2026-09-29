import React, { useState, useEffect } from 'react';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [userId]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '10px', borderBottom: '1px dashed #eee' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default UserPosts;