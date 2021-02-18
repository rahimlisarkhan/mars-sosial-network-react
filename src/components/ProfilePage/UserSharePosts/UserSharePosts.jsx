import React from "react";
import Loader from "../../common/Loader";
import UserPostList from "./UserPostList";

const UserSharePosts = (props) => {
  return (
    !props.isLoadingPost ?
    <>
          {props.userdata.posts?
            props.userdata.posts.slice(0)
            .reverse()
            .map((el, i) => (
              <UserPostList key={i} profileData={props.userdata.user} data={el} />
            )) : <div className='userNotPost'>The user is not sharing </div>}
    </> : <Loader/>
  );
};

export default UserSharePosts;
