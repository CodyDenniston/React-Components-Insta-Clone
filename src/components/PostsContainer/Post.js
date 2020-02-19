// You will add code in this file
import React, { useState } from "react";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes);
  const [comments] = useState(props.post.comments)
  console.log("IM PROPS!!", props);
  const incrementLikes = () => {
    setLikes(likes => likes + 1);
  };
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection incrementLikes={incrementLikes} likes={likes}/>
      <CommentSectionContainer comments={comments}/>
     
    </div>
  );
};

export default Post;


