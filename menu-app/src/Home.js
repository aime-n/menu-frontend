// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import Post from './components/Post';
import { posts, users, followedUserIds } from './components/data';

function Home() {
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    // Filter posts from followed users
    const followedPosts = posts.filter((post) =>
      followedUserIds.includes(post.userId)
    );

    // Sort posts by timestamp (most recent first)
    followedPosts.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    setFeedPosts(followedPosts);
  }, []);

  return (
    <div className="home-feed">
      {feedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;