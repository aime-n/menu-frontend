import React, { useState } from 'react';
import './Post.css';
import { users, loggedInUser } from './data';
import { FaRegComment, FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { IoArrowUpCircle } from 'react-icons/io5';
import { LuSend } from 'react-icons/lu';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";


function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 0);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');

  const user = users.find((u) => u.id === post.userId);

  const handleAvatarError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://i.pravatar.cc/150?img=default';
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      'https://via.placeholder.com/800x600?text=Image+Not+Available';
  };

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  const handleSave = () => {
    setSaved(!saved); // Toggle the saved state
  };

  const handleComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: loggedInUser.username, text: newComment }]);
      setNewComment('');
    }
  };

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleShare = () => {
    console.log('Share button clicked');
  };

  return (
    <div className="post">
      {/* Post Header */}
      <div className="post-header">
        <img
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          className="avatar"
          onError={handleAvatarError}
        />
        <span className="username">{user.username}</span>
      </div>

      {/* Post Image */}
      <img
        src={post.imageUrl}
        alt="Post"
        className="post-image"
        onError={handleImageError}
      />

      {/* Action Buttons */}
      <div className="post-actions">
        <div className="left-actions">
          <button className="action-button" onClick={handleLike}>
            {liked ? (
              <IoMdHeart className="icon liked" />
            ) : (
              <IoMdHeartEmpty className="icon" />
            )}
          </button>
          <span className="action-button">
            <FaRegComment className="icon" />
          </span>
          <button className="action-button" onClick={handleShare}>
            <LuSend className="icon" />
          </button>
        </div>
        <div className="right-actions">
          <button className="action-button" onClick={handleSave}>
            {saved ? (
              <FaBookmark className="icon bookmark-icon filled" />
            ) : (
              <FaRegBookmark className="icon bookmark-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Likes Count */}
      <div className="likes-count">
        {likesCount} {likesCount === 1 ? 'like' : 'likes'}
      </div>

      {/* Post Caption */}
      <div className="post-caption">
        <span className="username">{user.username}</span>
        <span className="caption-text">{post.caption}</span>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.user}:</strong> {comment.text}
          </div>
        ))}
        <div className="comment-input">
          <img src={loggedInUser.avatar} alt="User Avatar" className="avatar" />
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <button onClick={handleComment}>
            <IoArrowUpCircle className="icon" /> {/* Updated icon for posting comment */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;