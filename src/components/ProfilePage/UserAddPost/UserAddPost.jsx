import React, { useState } from "react";

let UserAddPost = (props) => {
  const [post_content,setPostContent] = useState('')

    return (
      <div className="user-add-post">

        <h1>My Post</h1>
        
        <textarea
          name="userPost"
          onChange={(e) => setPostContent(e.target.value )}
          value={post_content}
          placeholder="What do you think?"
        ></textarea>

        <button
          onClick={() => (
            props.handleClick(post_content),
            setPostContent("")
          )}
          disabled={props.disableInput}
        >
          Share
        </button>
      </div>
    );
}

export default UserAddPost;
